import React, { useEffect, useState } from "react";

const Intro = ({ data }) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    setDatas(data);
    console.log(datas);
  }, []);

  return (
    <div className=" px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-black font-weight-bold">
          Hello, I'm {datas.fullName}
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">{datas.introductions}</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className=" dark  btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            >
              Custom button
            </button>
            <button
              onClick={() => {
                console.log(data);
              }}
              type="button"
              className="btn btn-outline-light btn-lg px-4"
            >
              Secondary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
