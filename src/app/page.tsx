'use client';
import Incident from "@/components/Incident";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-12 lg:p-16">
      <div className="max-w-2xl mx-auto p-4 sm:p-6 md:p-8  bg-white text-black px-4 rounded-xl shadow-md overflow-hidden transition-shadow">
        
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center mb-4">
            <h2 className="text-2xl font-bold mb-2 text-black">Report an Incident</h2>
            <p className="text-gray-700 font-medium">Help Improve Your Community</p>
          </div>

          {/* First step */}
          <div className="w-full flex flex-col " >
            <h3 className="text-lg font-medium mb-3">Type of Incident</h3>
            <div className="grid grid-cols-3 gap-2 mb-6">

            <Incident/>
            <Incident/>
            <Incident/>
            <Incident/>
            <Incident/>
            <Incident/>
            <Incident/>
            <Incident/>
            <Incident/>

            </div>

            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium">Description</h3>
              <span className="text-xs text-gray-500">
                {0}/500
              </span>
            </div>

            <textarea
              name="description"
              // value={''}
              // onChange={  () => {}}
              placeholder="Please describe the incident in detail..."
              className={`w-full p-3 border rounded-lg resize-none ${false ? 'border-red-500' : 'border-gray-300'
                }`}
              rows={5}
              maxLength={500}
            />

            <div className="w-full mt-6">
              <button
                onClick={()=>{}}
                // disabled={!!errors.incidentType || !formData.incidentType}
                className={`px-8 py-3 rounded-lg w-full flex items-center justify-center bg-gray-300 text-gray-600 cursor-not-allowed`} 
                  // ${!errors.incidentType && formData.incidentType
                  //   ? 'bg-blue-500 text-white hover:bg-blue-600 transition-colors'
                  //   : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  // }`
                // }
                type="button"
              >
                Next
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>


          </div>

        </div>
      </div>

    </div>
  );
}
