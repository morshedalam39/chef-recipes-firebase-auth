import React from "react";
import banner from "../../../../assets/banner.jpg"



const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("${banner}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-slate-300">Healthy Food. <br />Healthy Life</h1>
            <p className="mb-5 text-slate-300">
            Delight your taste buds with our mouthwatering recipes! Our website offers a wide variety of easy-to-follow recipes for breakfast, lunch, dinner, and everything in between. Whether you're looking for healthy meal options, quick and easy recipes, or indulgent desserts, we've got you covered. From classic dishes to exotic flavors, our recipes will satisfy every craving. Try our delicious homemade pasta, succulent grilled steak,. Start cooking with us now!"
            </p>
            <button className="btn bg-slate-600">Take Food!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
