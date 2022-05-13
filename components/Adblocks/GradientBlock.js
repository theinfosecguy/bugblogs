import React from "react";
import "./ads.module.css";

const grad = {
  background: "linear-gradient(135deg, #FFCC33 0%, #E233FF 100%)",
};

function GradientBlock() {
  return (
    <div
      className="my-12 h-[25vh] grad text-white rounded-xl grad flex flex-col items-center justify-center"
      style={grad}
    >
      <h5 className="text-center text-xl font-bold">
        You can be here too!👋
        <br />
        Shoot us a{" "}
        <a href="mailto:hello@bugblogs.tech" style={{ color: "white" }}>
          message
        </a>{" "}
        to post your Ad here.
      </h5>
    </div>
  );
}

export default GradientBlock;
