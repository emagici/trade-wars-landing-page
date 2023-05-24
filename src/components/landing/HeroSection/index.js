import React, { useEffect, useState } from "react";

import GMXLogoIcon from "../../../assets/gmx_logo.png";
import Back1 from "../../../assets/hero11.png";
import Back2 from "../../../assets/hero12.png";
import Back3 from "../../../assets/hero13.png";
import { Socials } from "../../common";

import "./index.css";

export function HeroSection() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // Update the document title using the browser API
    var count = 0;
    var back1 = new Image();
    back1.src = "../../../assets/hero11.png";
    console.log(back1);
    back1.onload = () => {
      count++;
    };
    var back2 = new Image();
    back2.src = "../../../assets/hero12.png";
    back2.onload = () => {
      count++;
    };
    var back3 = new Image();
    back3.src = "../../../assets/hero13.png";
    back3.onload = () => {
      count++;
    };
    if (count === 3) {
      setLoading(true);
    }
    // console.log(data);
  }, []);

  return (
    <div className="h-[calc(100vh-144px)]" onLoad={() => setLoading(true)}>
      {isLoading ? (
        <div className="animate-wiggle delay-[2000ms] grow bg-no-repeat bg-cover relative w-full h-full flex justify-center">
          <div className="flex flex-col mix-blend-multiply w-[673px] h-[354px] items-center bg-[#222C2E] shadow-sm bg-opacity-90 absolute bottom-0 shadow-[#076A80] border border-[#778A8F] py-7 px-[107px]"></div>
          <div className="flex flex-col items-center absolute bottom-4 gap-4">
            <h1 className="text-[32px] text-center text-shadow shadow-[#BD3A02] w-[450px]">
              a PvP,
              <p className="glitch">
                <span aria-hidden="true">risk-to-earn</span>
                risk-to-earn
                <span aria-hidden="true">risk-to-earn</span>
              </p>
              <br /> trading game{" "}
            </h1>
            <h6 className="text-base font-bold">built on top of</h6>
            <img src={GMXLogoIcon} alt="GMX Logo" />
            <Socials />
            <h1 className="text-shadow shadow-[#BD3A02] ">coming soon!</h1>
          </div>
        </div>
      ) : (
        <div
          role="status"
          className="w-full h-full flex justify-center items-center"
        >
          <svg
            aria-hidden="true"
            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
}
