// cartReducer.js
import {
    DECREMENT_QUANTITY,
    INCREMENT_QUANTITY,
    ADD_TO_CART,
    REMOVE_PRODUCT,
} from '../actionsContant';

const initialState = {
    cartItems: [],
};

export const findProductIndex = (cartItems, productId) => {
    return cartItems.findIndex((item) => item.productId === productId);
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Check if the product is already in the cart
            const existingProduct = state.cartItems.find(
                (item) => item.productId === action.payload.productId,
            );

            if (existingProduct) {
                // If the product is already in the cart, update the quantity
                const updatedCartItems = state.cartItems.map((item) =>
                    item.productId === action.payload.productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );

                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            } else {
                // If the product is not in the cart, add it with quantity 1
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload }],
                };
            }

        case DECREMENT_QUANTITY:
            const { productId: decProductId } = action.payload; // Use a different variable name here
            const decExistingIndex = findProductIndex(state.cartItems, decProductId);

            if (decExistingIndex !== -1) {
                // Product exists in the cart
                return {
                    ...state,
                    cartItems: state.cartItems.map((item, index) =>
                        index === decExistingIndex
                            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                            : item,
                    ),
                };
            }
            return state;

        case INCREMENT_QUANTITY:
            const { productId: incProductId, amount: incAmount } = action.payload;
            const incExistingIndex = findProductIndex(state.cartItems, incProductId);

            if (incExistingIndex !== -1) {
                // Product exists in the cart, increment quantity
                return {
                    ...state,
                    cartItems: state.cartItems.map((item, index) =>
                        index === incExistingIndex
                            ? { ...item, quantity: item.quantity + incAmount }
                            : item,
                    ),
                };
            }
            return state;

        case REMOVE_PRODUCT:
            const { productId: removeProductId } = action.payload;
            const updatedCartItems = state.cartItems.filter(
                (item) => item.productId !== removeProductId,
            );

            return {
                ...state,
                cartItems: updatedCartItems,
            };

        default:
            return state;
    }
};

export default cartReducer;
