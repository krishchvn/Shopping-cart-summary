const promoCodeReducer = (state =0 , action) => {
    switch (action.type) {
        case 'PROMOCODE':
            return state -= (state % 10);
        default: 
            return state;
    }
}
export default promoCodeReducer