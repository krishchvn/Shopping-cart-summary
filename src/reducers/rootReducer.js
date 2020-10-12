import { combineReducers } from 'redux';
import promoCodeReducer from './promoCodeReducer';

const rootReducer = combineReducers ({
    promoCodeReducer,
})

export default rootReducer;