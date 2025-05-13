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



        </div>
    )
}

export default ThirdStep
