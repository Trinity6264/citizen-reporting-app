import { IncidentInterface } from "@/interfaces/incidentInterface";
import { createSlice } from "@reduxjs/toolkit";

interface FirstStepInterface {
    incident: IncidentInterface;
    description: string;
}

export interface AppState {
    firstStep: FirstStepInterface;
    currentStep: number;
}

const initialState: AppState = {
    firstStep: {
        incident: {
            icon: '',
            label: '',
            id: ''
        },
        description: ''
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

        // Reset the entire state
        resetState: () => initialState
    }
});

export const { setIncident, setDescription, resetFirstStep, setCurrentStep, resetState } = appSlice.actions;

export default appSlice.reducer;