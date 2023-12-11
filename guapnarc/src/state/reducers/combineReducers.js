import initialState from "../initialState";

const combineReducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_ITEM':
            return {
                ...state, 
                itemList: [...state.itemList, payload]
            };
        case 'DELETE_ITEM':
            return {
                ...state,
                itemList: state.itemList.filter(item => item.itemId !== payload)
            };
        case 'ADD_INCOME':
            return {
                ...state,
                budget: state.budget + parseInt(payload)
            };
        case 'ADD_EXPENSE':
            return {
                ...state,
                budget: state.budget - payload
            };
        default:
            return state;
    }
}


export default combineReducers;