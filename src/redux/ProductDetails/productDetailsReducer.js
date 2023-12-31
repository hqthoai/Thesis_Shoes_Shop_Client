// wishlistReducer.js (or any relevant reducer)
import { STORE_PRODUCT_DETAILS } from '../actionsContant';

const initialState = {
    // chỉnh lại chỗ này. Tập hợp lại các state chung

    productDetails: { _id: null, name: null, images: null, price: null },
};

const productDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        // ... existing cases before

        case STORE_PRODUCT_DETAILS:
            return {
                ...state,
                productDetails: action.payload,
            };
        case 'SET_PRODUCT_DETAILS':
            return {
                ...state,
                productDetails: action.payload,
            };
        default:
            return state;
    }
};

export default productDetailsReducer;
