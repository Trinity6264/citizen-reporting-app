import { IncidentInterface } from "@/interfaces/incidentInterface";
import { createSlice } from "@reduxjs/toolkit";

export type FileType = 'image' | 'video' | 'audio';
interface FirstStepInterface {
    incident: IncidentInterface;
    description: string;
}

export interface FileMeta {
    name: string;
    size: number;
    type: string;
    url: string; // created via URL.createObjectURL(file)
    fileType: FileType | null;
}


interface SecondStepInterface {
    date: string;
    time: string;
    location: string;
    files: FileMeta[];
}

export interface AppState {
    firstStep: FirstStepInterface;
    secondStep: SecondStepInterface;
    currentStep: number;
}

const initialState: AppState = {
    firstStep: {
        incident: {
            icon: '',
            label: '',
            id: ''
        },
        description: '',
    },
    secondStep: {
        date: '',
        time: '',
        location: '',
        files: [],
    },
    currentStep: 1,

}

const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        // First step reducers
        setIncident: (state, action) => {
            state.firstStep.incident = action.payload;
        },
        setDescription: (state, action) => {
            state.firstStep.description = action.payload;
        },
        resetFirstStep: (state) => {
            state.firstStep = initialState.firstStep;
        },
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload;
        },

        // Second step reducers
        setDate: (state, action) => {
            state.secondStep.date = action.payload;
        },
        setTime: (state, action) => {
            state.secondStep.time = action.payload;
        },
        setLocation: (state, action) => {
            state.secondStep.location = action.payload;
        },
        setFiles: (state, action) => {
            state.secondStep.files = action.payload;
        },
        // remove file
        removeFiles: (state, action) => {
            const fileNameToRemove: string = action.payload;
            state.secondStep.files = state.secondStep.files.filter(
                file => file.name !== fileNameToRemove
            );
            
        },

        // Reset the entire state
        resetState: () => initialState
    }
});

export const { setIncident, setDescription, resetFirstStep, setCurrentStep, setDate, setFiles, setLocation, setTime, resetState } = appSlice.actions;

export default appSlice.reducer;