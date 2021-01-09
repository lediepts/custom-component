import React, { useState } from "react";
import BoxContainer from "../../components/digital/boxContainer";

export default function index() {
  const [status, setStatus] = useState(0);
  const [clicked, setClicked] = useState(0);
  return (
    <div className="flex row-space-around">
      {status === 0 ? (
        <>
          <div className="box">
            <BoxContainer
              className="box bg_red wrap"
              clicked={clicked === 1}
              handleSelect={() => {
                setStatus(1);
              }}
              unMount={() => setClicked(1)}
            />
          </div>
          <div className="box">
            <BoxContainer
              className="box bg_blue wrap"
              clicked={clicked === 2}
              handleSelect={() => {
                setStatus(2);
              }}
              unMount={() => setClicked(2)}
            />
          </div>
          <div className="box">
            <BoxContainer
              className="box bg_green wrap"
              clicked={clicked === 3}
              handleSelect={() => {
                setStatus(3);
              }}
              unMount={() => setClicked(3)}
            />
          </div>
        </>
      ) : (
        <div
          className="full bg_red wrap"
          onClick={() => {
            setClicked(0);
            setStatus(0);
          }}
        ></div>
      )}
    </div>
  );
}
