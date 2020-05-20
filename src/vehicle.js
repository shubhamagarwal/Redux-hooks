import React from 'react';

const initialState = { vehicle : 'Default'}
function reducer(state, action) {
    switch(action.type) {
        case 'Car':
            return {
                ...state, vehicle: 'It is a car'
            }
        case 'Bike':
            return {
                ...state, vehicle: 'It is bike'
            }
        default: 
            return initialState
    }
}

export default reducer;