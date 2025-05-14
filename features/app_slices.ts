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
interface ThirdStepInterface {
    isAnonymouslyReporting: boolean;
    contactInfo: {
        name: string;
        email: string;
        phone: string;
    };
    receiveStatusUpdate: boolean;
    canOfficialContactYou: boolean;
}

export interface AppState {
    firstStep: FirstStepInterface;
    secondStep: SecondStepInterface;
    thirdStep: ThirdStepInterface;
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
    thirdStep: {
        isAnonymouslyReporting: false,
        contactInfo: {
            name: '',
            email: '',
            phone: ''
        },
        receiveStatusUpdate: false,
        canOfficialContactYou: false
    },
    currentStep: 1,

}

const appSlice = createSlice({
    name: "appSlice",
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

        // Third step reducers
        setAnonymouslyReporting: (state, action) => {
            state.thirdStep.isAnonymouslyReporting = action.payload;
        },
        setUsernameInfo: (state, action) => {
            state.thirdStep.contactInfo.name = action.payload;
        },
        setEmailInfo: (state, action) => {
            state.thirdStep.contactInfo.email = action.payload;
        },
        setPhoneInfo: (state, action) => {
            state.thirdStep.contactInfo.phone = action.payload;
        },
        setReceiveStatusUpdate: (state, action) => {
            state.thirdStep.receiveStatusUpdate = action.payload;
        },
        setCanOfficialContactYou: (state, action) => {
            state.thirdStep.canOfficialContactYou = action.payload;
        },
        // Reset the entire state
        resetState: () => initialState
    }
});

export const { setIncident, setDescription, resetFirstStep, setCurrentStep, setDate, setFiles, setLocation, setTime, setAnonymouslyReporting, setCanOfficialContactYou, setEmailInfo, setPhoneInfo, setReceiveStatusUpdate, setUsernameInfo, resetState } = appSlice.actions;

export default appSlice.reducer;