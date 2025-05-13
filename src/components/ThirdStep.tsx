import { ArrowLeft } from 'lucide-react'
import React from 'react'

const ThirdStep = () => {
    return (
        <div className='w-full flex flex-col mb-6'>
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="isAnonymous"
                    name="isAnonymous"
                    // checked={formData.isAnonymous}
                    // onChange={handleChange}
                    className="mr-2 rounded-md border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="isAnonymous" className='text-gray-600'>Report anonymously</label>
            </div>

            <div className="mb-4 flex flex-col w-full">
                <label className="block text-sm text-gray-600 mb-1">
                    Name (Optional)
                </label>
                <input
                    type="text"
                    name="name"
                    // value={formData.name}
                    // onChange={handleChange}
                    placeholder="Your name"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
            </div>

            <div className="mb-4 flex flex-col w-full">
                <label className="block text-sm text-gray-600 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    placeholder="Your email address"
                    className={`w-full p-3 border rounded-lg ${false ? 'border-red-500' : 'border-gray-300'
                        }`}
                    // required={!formData.isAnonymous}
                />
                {/* {errors.email && (
                    <p className="error-message mt-1 text-red-500 text-sm">{errors.email}</p>
                )} */}
            </div>

            <div className="mb-6 flex flex-col w-full">
                <label className="block text-sm text-gray-600 mb-1">
                    Phone (Optional)
                </label>
                <input
                    type="tel"
                    name="phone"
                    // value={formData.phone}
                    // onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
            </div>

            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="isAnonymous"
                    name="isAnonymous"
                    // checked={formData.isAnonymous}
                    // onChange={handleChange}
                    className="mr-2 rounded-md border-gray-300 focus:ring-blue-500"
                />
                <label className='text-gray-600'>Receive Status updates about this report  </label>
            </div>
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="isAnonymous"
                    name="isAnonymous"
                    // checked={formData.isAnonymous}
                    // onChange={handleChange}
                    className="mr-2 rounded-md border-gray-300 focus:ring-blue-500"
                />
                <label className='text-gray-600'>Officials may contact me about this report</label>
            </div>

            <div className="w-full mt-6 flex gap-3">
                <button
                    onClick={() => { }}
                    // disabled={!!errors.incidentType || !formData.incidentType}
                    className={`px-4 md:px-8 py-3 bg-gray-200 w-full  hover:bg-gray-300 transition-colors rounded-lg flex items-center justify-center text-gray-600 cursor-pointer font-semibold`}
                    // ${!errors.incidentType && formData.incidentType
                    //   ? 'bg-blue-500 text-white hover:bg-blue-600 transition-colors'
                    //   : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    // }`
                    // }
                    type="button"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back
                </button>
                <button
                    onClick={() => { }}
                    // disabled={!!errors.incidentType || !formData.incidentType}
                    className={`px-4 md:px-8 py-3 rounded-lg w-full flex font-semibold items-center justify-center bg-gray-300 text-gray-600 cursor-not-allowed`}
                    // ${!errors.incidentType && formData.incidentType
                    //   ? 'bg-blue-500 text-white hover:bg-blue-600 transition-colors'
                    //   : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    // }`
                    // }
                    type="button"
                >
                    Submit Report
                </button>
            </div>

        </div>
    )
}

export default ThirdStep
