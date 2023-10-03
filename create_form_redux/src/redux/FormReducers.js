import { combineReducers } from 'redux';
import { ADD_FORM, REMOVE_FORM, UPDATE_FORM } from './FormActions';

// Actions => rturn Object type compulsory + data pass => reducers
export function addform(form) {
    return {
        type: ADD_FORM,
        payload: form,
    }
}
export function deleteform(form) {
    console.log('inside deleteform action', form);
    return {
        type: REMOVE_FORM,
        payload: form,
    }
}
export function updateform(form) {
    return {
        type: UPDATE_FORM,
        payload: form,
    }
}

const initialState = {
    travelDetails: [],
};

function Forms(state = initialState, action) {
    switch (action.type) {
        case ADD_FORM:
            return {
                ...state,
                travelDetails: [...state.travelDetails, action.payload]
            };
        // case REMOVE_FORM: {
        //     const filterList = state.travelDetails.filter(id => id === action.payload);
        //     console.log('filterList', filterList);
        //     return {
        //         ...state,
        //         initialState: {
        //             ...state,
        //             travelDetails: filterList,
        //         },
        //     };
        // }
        case REMOVE_FORM:
            const filterList = state.travelDetails.filter((item, index) => index !== action.payload);
            console.log('filterList', filterList);
            return {
                ...state,
                travelDetails: filterList
            }
        // case UPDATE_FORM: {
        //     const newList = [...state.travelDetails];
        //     newList[action.index] = action.data;
        //     console.log('newList', newList);
        //     return {
        //         ...state,
        //         initialState: {
        //             ...state.initialState,
        //             travelDetails: newList,
        //         },
        //     };
        // }
        case UPDATE_FORM:
            var temp = state.travelDetails.map(function (item, index) { return (index.id === action.payload.id) ? action.payload : index })
            console.log('temp',temp);
            return {
                ...state,
                travelDetails: temp
            }
        default:
            return state;
    }
}
const birdApp = combineReducers({
    Forms,
});

export default birdApp;
