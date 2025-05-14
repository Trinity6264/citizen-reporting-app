import { Calendar, Camera, Clock, MapPin, Video, Mic, ArrowRight, ArrowLeft, X } from 'lucide-react'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FileType, setCurrentStep, setDate, setFiles, setLocation, setTime } from '../../features/app_slices';
import { RootState } from '@/app/store';
import Image from 'next/image';
import { toast } from 'react-toastify';

const SecondStep = () => {
    const dispatch = useDispatch();
    const date = useSelector((state: RootState) => state.appStore.secondStep.date);
    const time = useSelector((state: RootState) => state.appStore.secondStep.time);
    const location = useSelector((state: RootState) => state.appStore.secondStep.location);
    const files = useSelector((state: RootState) => state.appStore.secondStep.files);

    // refer to the file input
    const photoInputRef = useRef<HTMLInputElement>(null);
    const videoInputRef = useRef<HTMLInputElement>(null);
    const audioInputRef = useRef<HTMLInputElement>(null);
    const maximumFilesLength = files.length === 3;

    const triggerFileInput = (ref: React.RefObject<HTMLInputElement | null>) => {
        if (maximumFilesLength) {
            // user react toast package
            toast.error("You can only upload up to 3 files", {
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }
        ref.current?.click();
    };

    function filesChanged(e: React.ChangeEvent<HTMLInputElement>, fileType: FileType) {
        const pickedFiles = e.target.files;
        if (pickedFiles) {
            const fileArray = Array.from(pickedFiles);

            // Check if the number of files exceeds the limit
            if (files.length + fileArray.length > 3) {
                toast.error("You can only upload up to 3 files", {
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                });
                return;
            }

            const serializedFiles = fileArray.map((file) => ({
                name: file.name,
                size: file.size,
                type: file.type,
                url: URL.createObjectURL(file), // for preview
                fileType: fileType,    // assuming you have this helper
            }));

            // Append to existing files
            dispatch(setFiles([...files, ...serializedFiles]));
        }
    }


    const isFormValid = date.length > 0 && time.length > 0 && location.length > 0 && files.length > 0;

    return (
        <div className='w-full flex flex-col mb-6'>
            {/* Time stamp */}
            <div className='flex  justify-between items-center mb-4 gap-3'>
                <div className='flex flex-col gap-2 w-full flex-1'>
                    <label className="flex items-center text-sm text-gray-600 mb-1">
                        <Calendar className="w-4 h-4 mr-1" /> Date
                    </label>
                    <input
                        type="date"
                        name="date"
                        value={date}
                        onChange={(e) => dispatch(setDate(e.target.value))}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className='flex flex-col gap-2 w-full flex-1'>
                    <label className="flex items-center text-sm text-gray-600 mb-1">
                        <Clock className="w-4 h-4 mr-1" /> Time
                    </label>
                    <input
                        type="time"
                        name="time"
                        value={time}
                        onChange={(e) => dispatch(setTime(e.target.value))}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                </div>
            </div>


            {/* Location */}
            <div className='mt-3 mb-6'>
                <div className="flex flex-col  gap-2 justify-stretch mb-1">
                    <label className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" /> Location
                    </label>

                    <input
                        type="text"
                        name="location"
                        value={location}
                        onChange={(e) => dispatch(setLocation(e.target.value))}
                        placeholder="Street address or description of location in Georgia"
                        className={`w-full p-3 border rounded-lg ${false ? 'border-red-500' : 'border-gray-300'
                            }`}
                    />
                </div>
            </div>

            <div className='mb-6'>
                <div className='flex flex-col gap-2'>
                    <h3 className="flex items-center text-sm text-gray-600 mb-1">Add Media (Optional)</h3>

                    <div className='flex gap-3 items-center w-full overflow-hidden'>
                        <div className="flex-1 min-w-[80px] border-2 border-gray-300 rounded-lg py-2 px-2 sm:py-3 sm:px-3 md:py-4 md:px-4 text-center cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => {
                            triggerFileInput(photoInputRef);
                        }}>
                            <Camera className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                            <input type="file" className="hidden" accept="image" multiple ref={photoInputRef} onChange={
                                (e) => {
                                    filesChanged(e, "image");
                                }
                            } />
                            <span className="text-xs text-gray-500">Photo</span>
                        </div>

                        <div className="flex-1 min-w-[80px] border-2 border-gray-300 rounded-lg py-2 px-2 sm:py-3 sm:px-3 md:py-4 md:px-4 text-center cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => {
                            triggerFileInput(videoInputRef);
                        }}>
                            <Video className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                            <input type="file" className="hidden" accept="video" multiple ref={videoInputRef} onChange={
                                (e) => {
                                    filesChanged(e, "video")
                                }
                            } />
                            <span className="text-xs text-gray-500">Video</span>
                        </div>

                        <div className="flex-1 min-w-[80px] border-2 border-gray-300 rounded-lg py-2 px-2 sm:py-3 sm:px-3 md:py-4 md:px-4 text-center cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => {
                            triggerFileInput(audioInputRef);
                        }}>
                            <Mic className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                            <input type="file" className="hidden" accept="audio" multiple ref={audioInputRef} onChange={
                                (e) => {
                                    filesChanged(e, "audio")
                                }
                            } />
                            <span className="text-xs text-gray-500">Voice</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        {files.map((file, idx) => (
                            <div key={idx} className="relative border rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition group bg-white">

                                <button
                                    onClick={() => {
                                        const newFiles = files.filter((_, index) => index !== idx);
                                        dispatch(setFiles(newFiles));
                                    }}
                                    className="absolute top-2 right-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition md:opacity-0 group-hover:opacity-100 cursor-pointer"
                                    aria-label="Remove file"
                                >
                                    <X className="w-4 h-4" />
                                </button>

                                {/* Media Container */}
                                <div className="aspect-w-16 aspect-h-9 w-full bg-gray-100 flex items-center justify-center">
                                    {file.fileType === 'image' && (
                                        <Image src={file.url} alt={file.name} width={100} height={100} className="object-cover w-full h-[200px]" />
                                    )}

                                    {file.fileType === 'video' && (
                                        <video src={file.url} controls className="w-full h-[200px] object-cover rounded-none" />
                                    )}

                                    {file.fileType === 'audio' && (
                                        <div className="flex flex-col items-center justify-center gap-3 p-4 w-full">
                                            <Mic className="w-10 h-10 text-gray-400" />
                                            <audio src={file.url} controls className="w-full" />
                                        </div>
                                    )}
                                </div>

                                {/* File Info */}
                                <div className="p-2 text-center">
                                    <p className="text-sm font-medium truncate">{file.name}</p>
                                    <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
                                    <span className="mt-2 inline-block text-xs text-gray-400 capitalize">{file.fileType}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Buttons */}
            <div className="w-full mt-6 flex gap-3">
                <button
                    onClick={() => {
                        dispatch(setCurrentStep(1));
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
                        dispatch(setCurrentStep(3));
                    }}
                    className={`px-4 md:px-8 py-3  rounded-lg w-full flex font-semibold items-center justify-center ${isFormValid ? 'cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition-colors' : 'cursor-not-allowed bg-gray-300 text-gray-600'}`}
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
