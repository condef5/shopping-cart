const initialState = {
    list: [],
    loading: false,
};

export default (state = initialState, action ) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_REQUEST':
        case 'FETCH_PRODUCTS_FAILURE':
            return {...state, loading: true}
        case 'FETCH_PRODUCTS_SUCCESS':
            return {...state, list: action.payload.products, loading: false}
        default:
            return state;
    }
}
