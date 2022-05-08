import React, { useEffect } from "react";
import AOS from "aos";
const Partner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <img
        className="img-fluid"
        src="https://i.ibb.co/vwYbNQw/Top-Brands-Electronics-02-removebg-preview.png"
        alt=""
      />
    </div>
  );
};

export default Partner;
