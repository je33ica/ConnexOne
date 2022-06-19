import { useEffect, useState } from "react";
import axios from "axios";
import Epoch from "../Epoch";
import Metrics from "../Metrics";
import "./Page.css";
import logo from "../images/logo.png";

const Page = () => {
  const [getPromtime, setPromTime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [getMetrics, setMetrics] = useState([]);

  const config = {
    headers: { Value: "mysecrettoken" },
  };

  //async func called every 30 seconds after intial call
  const getPrometheusTime = async () => {
    try {
      setIsLoading(true);
      const promTime = await axios.get("/time", config);
      const metrics = await axios.get("/metrics", config);

      setPromTime(promTime.data);
      setMetrics(metrics.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPrometheusTime();
    const interval = setInterval(() => {
      getPrometheusTime();
    }, 30000);

    return () => clearInterval(interval,
      //  differnce
       );
  }, []);

  const promEpoch = getPromtime.epoch;

  //calls difference every second
  let differnce = setInterval(() => {
    //when console logging return int time in seconds
  let current = Math.round(new Date().getTime() / 1000);
    // console.log("current", current)
    return current
  }, 1000);

  return (
    <>
      <div className="content-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="row">
          <div className="left box">
            <Epoch
              isLoading={isLoading}
              promEpoch={promEpoch}
              differnce={differnce}
            />
          </div>
          <div className="right box">
            <div>
              <Metrics isLoading={isLoading} getMetrics={getMetrics} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
