import React, { useEffect, useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const [totalCount, setTotalCoutn] = useState(0);

  const inCrement1 = () => {
    setCount1((prev) => (prev < 33 ? prev + 1 : prev));
  };
  const inCrement2 = () => {
    setCount2((prev) => (prev < 33 ? prev + 1 : prev));
  };
  const inCrement3 = () => {
    setCount3((prev) => (prev < 34 ? prev + 1 : prev));
  };
  const reset = () => {
    setCount1(0);
    setCount2(0);
    setCount3(0);
  };

  useEffect(() => {
    setTotalCoutn(count1 + count2 + count3);
  }, [count1, count2, count3]);

  return (
    <div className="counter_app_section">
      <div className="section_title">
        <h1>Counter Component</h1>
      </div>
      <div className="counter_area">
        <div className="counting">
          <h1>Total Count</h1>
          <span className="total">{totalCount}</span>
        </div>
        <div className="conter_container">
          <div className="singleCounter">
            <h1>{count1}</h1>
            <button onClick={inCrement1} className="btn btn_1">
              Subhanallah
            </button>
          </div>
          <div className="singleCounter">
            <h1>{count2}</h1>
            <button onClick={inCrement2} className="btn btn_1">
              Alhamdulillah
            </button>
          </div>

          <div className="singleCounter">
            <h1>{count3}</h1>
            <button onClick={inCrement3} className="btn btn_1">
              Allahu Akbar
            </button>
          </div>
        </div>
        <div className="reset">
          <button onClick={reset} className="reset">
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
