'use client';

import FirstStep from "@/components/FirstStep";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import SecondStep from "@/components/SecondStep";
import ThirdStep from "@/components/ThirdStep";
import ThankYou from "@/components/ThankYou";
import ProgressBar from "@/components/ProgressIndicator";
// import ThankYou from "@/components/ThankYou";
// import SecondStep from "@/components/SecondStep";
// import ThirdStep from "@/components/ThirdStep";

// import FirstStep from "@/components/FirstStep";
// import ThirdStep from "@/components/ThirdStep";

export default function Home() {
  const currentStep = useSelector((state: RootState) => state.appStore.currentStep);

  return (
    <div className="flex min-h-screen flex-col mx-4 md:mx-8 items-center justify-center sm:p-6 md:p-8 lg:p-12">
      <div className="w-full max-w-3xl mx-auto  sm:p-4 md:p-12 bg-white text-black px-4 rounded-xl shadow-md overflow-hidden transition-shadow">

        <div className="flex flex-col items-center">
        { currentStep < 4 && <div className="flex flex-col items-center justify-center mb-4">
            <h2 className="text-2xl font-bold mb-2 text-black">Report an Incident</h2>
            <p className="text-gray-700 text-[1.2em] font-medium">Help Improve Your Community</p>
          </div>}
            <ProgressBar current={currentStep} total={3}/>


          {/* First step */}
          {currentStep == 1 && <FirstStep />}

          {/* Second incident step */}
          {currentStep == 2 && <SecondStep />}

          {/* Third incident step */}
          {currentStep == 3 && <ThirdStep />}
          {/* Final steps */}
          {currentStep == 4 && <ThankYou />}
        </div>
      </div>

    </div>
  );
}
