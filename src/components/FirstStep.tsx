import { IncidentInterface } from "@/interfaces/incidentInterface";
import { ArrowRight } from "lucide-react";
import Incident from "./Incident";



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
                        onClick={() => { }}
                        isSelected={false}
                    />
                ))}
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
                    onClick={() => { }}
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
