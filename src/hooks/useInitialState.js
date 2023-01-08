import { useState } from "react"


const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMobile, setToggleMobile] = useState(false);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter((_,index) => index !== payload),
        })
    }

    const handleToggleOrder = () => {
        toggleMobile === true ? setToggleMobile(!toggleMobile) : "";
        setToggleOrders(!toggleOrders);
    }

    const handleToggleMobile = () => {
        toggleOrders === true ? handleToggleOrder(!toggleOrders) : "";
        setToggleMobile(!toggleMobile);
    }

    return {
        state,
        addToCart,
        removeFromCart,
        toggleOrders,
        handleToggleOrder,
        toggleMobile,
        handleToggleMobile
    }
}

export default useInitialState;