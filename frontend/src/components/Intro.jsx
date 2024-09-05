import React, { useEffect, useState } from "react";

const Intro = ({ data }) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    setDatas(data);
  }, []);

  return (
    <div className=" px-4  text-center">
      <div className="">
        <img
          className="img-fluide mb-3"
          src={datas.imageUrl}
          alt="Profile Image"
          style={{ width: "15vh" }}
        />
        <h1 className="display-5 fw-bold text-black font-weight-bold">
          Hello, I'm {datas.fullName}
        </h1>
        <div className="col-lg-6 mx-auto">
          <p
            style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
            className="fs-5 mb-4"
          >
            {datas.introductions}
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              onClick={() => {
                window.location.href = "#contactme";
              }}
              className="btn btn-black"
            >
              contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
