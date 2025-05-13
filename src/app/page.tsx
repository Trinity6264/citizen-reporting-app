'use client';
import FirstStep from "@/components/first_step";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-12 lg:p-16">
      <div className="max-w-2xl mx-auto  sm:p-8 md:p-12  bg-white text-black px-4 rounded-xl shadow-md overflow-hidden transition-shadow">
        
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center mb-4">
            <h2 className="text-2xl font-bold mb-2 text-black">Report an Incident</h2>
            <p className="text-gray-700 font-medium">Help Improve Your Community</p>
          </div>

          {/* First step */}
          <FirstStep/>

        </div>
      </div>

    </div>
  );
}
