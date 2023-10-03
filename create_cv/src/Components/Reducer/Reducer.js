import { combineReducers } from 'redux';
import { ADD_RESUME, REMOVE_RESUME, UPDATE_RESUME } from './Action';
export function FormResume(data) {
    return {
        type: ADD_RESUME,
        payload: data,
    }
}
export function deleteResume(data) {
    return {
        type: REMOVE_RESUME,
        payload: data,
    }
}

export function updateResume(index, data) {
    return {
        type: UPDATE_RESUME,
        payload: {
            index,
            data
        }
    }
}
const initialState = {
    ResumeDetails: [],
};
function Forms(state = initialState, action) {
    switch (action.type) {
        case ADD_RESUME:
            return {
                ...state,
                ResumeDetails: [...state.ResumeDetails, action.payload]
            };
        case REMOVE_RESUME:
            const filterList = state.ResumeDetails.filter((item, index) => index !== action.payload);
            return {
                ...state,
                ResumeDetails: filterList
            }
        case UPDATE_RESUME: {
            const newData = state?.ResumeDetails;
            newData[action.payload.index] = action.payload.data;
            return {
                ...state,
                ResumeDetails: newData,
            }
        }
        default:
            return state;
    }
}
const ResumeApp = combineReducers({
    Forms,
});
export default ResumeApp;
