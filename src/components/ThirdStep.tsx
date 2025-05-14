import { RootState } from '@/app/store';
import { ArrowLeft } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import { setAnonymouslyReporting, setCanOfficialContactYou, setCurrentStep, setEmailInfo, setPhoneInfo, setReceiveStatusUpdate, setUsernameInfo } from '../../features/app_slices';

const ThirdStep = () => {

    const isAnonymousReporting = useSelector((state: RootState) => state.appStore.thirdStep.isAnonymouslyReporting);
    const username = useSelector((state: RootState) => state.appStore.thirdStep.contactInfo.name);
    const contactEmail = useSelector((state: RootState) => state.appStore.thirdStep.contactInfo.email);
    const phone = useSelector((state: RootState) => state.appStore.thirdStep.contactInfo.phone);
    const receiveStatusUpdate = useSelector((state: RootState) => state.appStore.thirdStep.receiveStatusUpdate);
    const canOfficialContactYou = useSelector((state: RootState) => state.appStore.thirdStep.canOfficialContactYou);
    const dispatch = useDispatch();

    // validate forms
    const isFormValid = isAnonymousReporting || contactEmail.length > 0 && contactEmail.includes('@') && contactEmail.includes('.'); 

    return (
        <div className='w-full flex flex-col mb-6'>
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="isAnonymous"
                    name="isAnonymous"
                    checked={isAnonymousReporting}
                    onChange={(e) => {
                        // e.preventDefault();
                        dispatch(setAnonymouslyReporting(e.target.checked));
                    }}
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
                    value={username}
                    onChange={(e) => {
                        e.preventDefault();
                        dispatch(setUsernameInfo(e.target.value));
                    }}
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
                    value={contactEmail}
                    onChange={(e) => {
                        e.preventDefault();
                        dispatch(setEmailInfo(e.target.value));
                    }}
                    placeholder="Your email address"
                    className={`w-full p-3 border rounded-lg ${false ? 'border-red-500' : 'border-gray-300'
                        }`}
                />

            </div>

            <div className="mb-6 flex flex-col w-full">
                <label className="block text-sm text-gray-600 mb-1">
                    Phone (Optional)
                </label>
                <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                        e.preventDefault();
                        dispatch(setPhoneInfo(e.target.value));
                    }}
                    placeholder="Your phone number"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
            </div>

            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="reportStatus"
                    name="reportStatus"
                    checked={receiveStatusUpdate}
                    onChange={(e) => {
                        dispatch(setReceiveStatusUpdate(e.target.checked));
                    }}
                    className="mr-2 rounded-md border-gray-300 focus:ring-blue-500"
                />
                <label className='text-gray-600' >Receive Status updates about this report  </label>
            </div>
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="contactOfficial"
                    name="contactOfficial"
                    checked={canOfficialContactYou}
                    onChange={(e) => {
                        dispatch(setCanOfficialContactYou(e.target.checked));
                    }}
                    className="mr-2 rounded-md border-gray-300 focus:ring-blue-500"
                />
                <label className='text-gray-600'>Officials may contact me about this report</label>
            </div>

            <div className="w-full mt-6 flex gap-3">
                <button
                    onClick={() => {
                        dispatch(setCurrentStep(2));
                     }}
                    
                    className={`px-4 md:px-8 py-3 bg-gray-200 w-full  hover:bg-gray-300 transition-colors rounded-lg flex items-center justify-center text-gray-600 cursor-pointer font-semibold`}
                    type="button"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back
                </button>
                <button
                    onClick={() => {
                        if (!isFormValid) return;
                        dispatch(setCurrentStep(4));
                     }}
                    
                    className={`px-4 md:px-8 py-3 rounded-lg w-full flex font-semibold items-center justify-center ${isFormValid ? 'cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition-colors' : 'cursor-not-allowed bg-gray-300 text-gray-600'}`}
                    type="button">
                    Submit Report
                </button>
            </div>

        </div>
    )
}

export default ThirdStep
