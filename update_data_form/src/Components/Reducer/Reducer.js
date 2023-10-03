import { combineReducers } from 'redux';
import { ADD_FORM, REMOVE_FORM, UPDATE_FORM } from './Action';
export function FormAdd(form) {
// console.log('Form',form);
    return {
        type: 'ADD_FORM',
        payload: form,
    }
}

export function deleteform(form) {
    return {
        type: REMOVE_FORM,
        payload: form,
    }
}

export function updateForm(index, data) {
    return {
        type: UPDATE_FORM,
        payload: {
            index,
            data
        }
    }
}
const initialState = {
    FormDetails: [],
};
function Forms(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FORM': {
            console.log('action.payload', action.payload);
            return {
                ...state,
                FormDetails: [...state.FormDetails, action.payload]
            };
        }
           
        case REMOVE_FORM:
            const filterList = state.FormDetails.filter((item, index) => index !== action.payload);
            console.log('filterList', filterList);
            return {
                ...state,
                FormDetails: filterList
            }
        case UPDATE_FORM: {
            const newData = state?.FormDetails;
            console.warn('newData', newData);
            newData[action.payload.index] = action.payload.data;
            return {
                ...state,
                FormDetails: newData,
            }
        }

        default:
            return state;
    }
}
const FormApp = combineReducers({
    Forms,
});
export default FormApp;
