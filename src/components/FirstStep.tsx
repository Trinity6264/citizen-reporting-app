import { IncidentInterface } from "@/interfaces/incidentInterface";
import { ArrowRight } from "lucide-react";
import Incident from "./Incident";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { setCurrentStep, setDescription, setIncident } from "../../features/app_slices";



// Incident types with icons
const incidentTypes: Array<IncidentInterface> = [
    { id: 'road', label: 'Road Repair', icon: '🚧' },
    { id: 'garbage', label: 'Garbage/Litter', icon: '🗑️' },
    { id: 'streetlight', label: 'Broken Streetlight', icon: '💡' },
    { id: 'water', label: 'Water Issue', icon: '💧' },
    { id: 'noise', label: 'Noise Complaint', icon: '🔊' },
    { id: 'safety', label: 'Safety Concern', icon: '⚠️' },
    { id: 'graffiti', label: 'Graffiti', icon: '🖌️' },
    { id: 'sidewalk', label: 'Sidewalk Issue', icon: '🚶' },
    { id: 'other', label: 'Other', icon: '📝' }
];

const FirstStep = () => {
    const selectedIncident = useSelector((state: RootState) => state.appStore.firstStep.incident);
    const description = useSelector((state: RootState) => state.appStore.firstStep.description);
    const dispatch = useDispatch();
    

    return (
        <div className="w-full flex flex-col mb-6" >
            <h3 className="text-lg font-medium mb-3">Type of Incident</h3>
            <div className="grid grid-cols-3 gap-2 mb-6">

                {incidentTypes.map((incident) => (
                    <Incident
                        key={incident.id}
                        icon={incident.icon}
                        label={incident.label}
                        id={incident.id}
                        onClick={() => { 
                            dispatch(setIncident(incident));
                            
                        }}
                        isSelected={selectedIncident.id === incident.id}
                    />
                ))}
            </div>

            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">Description</h3>
                <span className="text-xs text-gray-500">
                    {description.length}/500
                </span>
            </div>

            <textarea
                name="description"
                value={description}
                onChange={  (value) => {
                    dispatch(setDescription(value.target.value));
                }}
                placeholder="Please describe the incident in detail..."
                className={`w-full p-3 border rounded-lg resize-none ${false ? 'border-red-500' : 'border-gray-300'
                    }`}
                rows={5}
                maxLength={500}
            />

            <div className="w-full mt-6">
                <button
                    onClick={() => {
                        dispatch(setCurrentStep(2));
                     }}
                    // disabled={!!errors.incidentType || !formData.incidentType}
                    className={`px-4 md:px-8 py-3 rounded-lg w-full flex items-center justify-center bg-gray-300 text-gray-600 cursor-not-allowed`}
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

export default FirstStep
