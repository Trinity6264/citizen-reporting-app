import { Calendar, Camera, Clock, MapPin, Video, Mic, ArrowRight, ArrowLeft } from 'lucide-react'
import React from 'react'

const SecondStep = () => {
    return (
        <div className='w-full flex flex-col mb-6'>
            {/* Time stamp */}
            <div className='flex  justify-between items-center mb-4 gap-3'>
                <div className='flex flex-col gap-2'>
                    <label className="flex items-center text-sm text-gray-600 mb-1">
                        <Calendar className="w-4 h-4 mr-1" /> Date
                    </label>
                    <input
                        type="date"
                        name="date"
                        //   value={formData.date}
                        //   onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className="flex items-center text-sm text-gray-600 mb-1">
                        <Clock className="w-4 h-4 mr-1" /> Time
                    </label>
                    <input
                        type="time"
                        name="time"
                        //   value={formData.time}
                        //   onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>

            </div>

            {/* Location */}
            <div className='mt-3 mb-6'>
                <div className="flex flex-col gap-2 justify-stretch mb-1">
                    <label className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" /> Location
                    </label>
                    {/* {!showMap && (
                        <button
                            onClick={() => setShowMap(true)}
                            className="text-blue-500 text-sm flex items-center"
                            type="button"
                        >
                            <Map className="w-4 h-4 mr-1" />
                            Show Map
                        </button>
                    )} */}
                    <input
                        type="text"
                        name="location"
                        // value={formData.location}
                        // onChange={handleLocationChange}
                        // disabled={formData.useCurrentLocation}
                        placeholder="Street address or description of location in Georgia"
                        className={`w-full p-3 border rounded-lg ${false ? 'border-red-500' : 'border-gray-300'
                            }`}
                    />
                </div>
            </div>

            <div className='mb-6'>
                <div className='flex flex-col gap-2'>
                    <h3 className="flex items-center text-sm text-gray-600 mb-1">Add Media (Optional)</h3>
                    
                    <div className='flex gap-3 justify-between items-center '>
                        
                        <div className="block border-2 border-gray-300 rounded-lg py-4 px-8 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                            <Camera className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                            <input
                                type="file"
                                className="hidden"
                                accept="image"
                                multiple
                            // onChange={handleFileChange}
                            />
                            <span className="text-xs text-gray-500">
                                Photo
                            </span>
                        </div>

                        <div className="block border-2 border-gray-300 rounded-lg py-4 px-8 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                            <Video className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                            <input
                                type="file"
                                className="hidden"
                                accept="video"
                                multiple
                            // onChange={handleFileChange}
                            />
                            <span className="text-xs text-gray-500">
                                Video
                            </span>
                        </div>
                        
                        <div className="block border-2  border-gray-300 rounded-lg py-4 px-8 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                            <Mic className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                            <input
                                type="file"
                                className="hidden"
                                accept="audio"
                                multiple
                            // onChange={handleFileChange}
                            />
                            <span className="text-xs text-gray-500">
                                Voice
                            </span>
                        </div>

                    </div>

                </div>
            </div>

            {/* Buttons */}
            <div className="w-full mt-6 flex gap-3">
                <button
                    onClick={() => { }}
                    // disabled={!!errors.incidentType || !formData.incidentType}
                    className={`px-6 py-3 bg-gray-200 w-full  hover:bg-gray-300 transition-colors rounded-lg flex items-center justify-center text-gray-600 cursor-pointer font-semibold`}
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
                    className={`px-8 py-3 rounded-lg w-full flex font-semibold items-center justify-center bg-gray-300 text-gray-600 cursor-not-allowed`}
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
    )
}

export default SecondStep
