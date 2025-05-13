import { Check } from "lucide-react";

const ThankYou = () => {
  return (
      <div className='w-full flex flex-col mb-6 justify-center items-center'>
        <div className='p-6 bg-green-600 rounded-full mb-4'>
              <Check className="text-white w-10 h-10"/>
        </div>
          <h2 className="text-2xl font-bold mb-2 text-black">Thank You!</h2>
          <p className="text-gray-700 font-medium text-center py-3">Your incident report has been submitted successfully</p>
          <p className="text-gray-700 font-medium text-center">Reference Number: <span className='font-semibold'>INC-6242</span></p>
          <div className="w-full mt-6">
              <button
                  onClick={() => { }}
                  // disabled={!!errors.incidentType || !formData.incidentType}
                  className={`px-4 md:px-8 py-3 rounded-lg w-full flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 transition-colors cursor-pointer`}
                  type="button"
              >
                  Report Another Incident
              </button>
          </div>
    </div>
  )
}

export default ThankYou
