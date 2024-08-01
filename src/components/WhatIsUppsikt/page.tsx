import React from "react";
import ICText from "../ICText/page";

const WhatIsUppsikt: React.FC = () => {
  return (
    <div className="py-[64px] flex flex-col justify-center items-center gap-[32px] ">
      <div className="text-center">
        <ICText color="main" size="xl" fontWeight="bold">
          Vad är uppsikt.se?
        </ICText>
      </div>
      <div className="text-center w-[70%]">
        <ICText size="large" color="main">
          Uppsikt.se är en samlingsplats för uppsiktstjänster över hela Sverige.
          Varje företag som vill vara med i konceptet får en möjlighet att synas
          och tillsammans med egna samarbetspartners erbjuda tjänster så som
          hustillsyn, städning och gräsklippning för personer som exempelvis bor
          på annan ort, är bortresta eller hyr ut sitt hem.
        </ICText>
      </div>
    </div>
  );
};

export default WhatIsUppsikt;
