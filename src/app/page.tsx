'use client';

// import SecondStep from "@/components/SecondStep";
import ThirdStep from "@/components/ThirdStep";

// import FirstStep from "@/components/first_step";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col mx-4 md:mx-8 items-center justify-center sm:p-6 md:p-8 lg:p-12">
      <div className="w-full max-w-3xl mx-auto  sm:p-4 md:p-12 bg-white text-black px-4 rounded-xl shadow-md overflow-hidden transition-shadow">
        
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center mb-4">
            <h2 className="text-2xl font-bold mb-2 text-black">Report an Incident</h2>
            <p className="text-gray-700 font-medium">Help Improve Your Community</p>
          </div>

          {/* First step */}
          {/* <FirstStep/> */}

          {/* Second incident step */}
          {/* <SecondStep/> */}
          
          {/* Third incident step */}
          <ThirdStep />
        </div>
      </div>

    </div>
  );
}
