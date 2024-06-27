import React, { act } from "react";

export const ProductContext = React.createContext();

export const initialState = {
    basket: [],
    products: [
        {
            "id": 101,
            "title": "Psychology",
            "price": 200,
            "photo": "https://res.cloudinary.com/dk-hub/images/q_70,c_limit,h_580,w_440,f_auto/dk-core-nonprod//9781465491008/9781465491008_cover.jpg/dk_Movie_Book"
        },
        {
            "id": 102,
            "title": "The Crime Book",
            "price": 2000,
            "photo": "https://res.cloudinary.com/dk-hub/images/q_70,c_limit,h_580,w_440,f_auto/dk-core-nonprod//9781465462862/9781465462862_cover.jpg/dk_Crime_Book"
        },
        {
            "id": 103,
            "title": "The Star Trek Book",
            "price": 464620,
            "photo": "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465450982/9781465450982_cover.jpg"
        },
        {
            "id": 104,
            "title": "The Big Ideas Box",
            "price": 2343650,
            "photo": "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465478184/9781465478184_cover.jpg"
        },
        {
            "id": 105,
            "title": "The Literature Book",
            "price": 56520,
            "photo": "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465429889/9781465429889_cover.jpg"
        },
        {
            "id": 106,
            "title": "psychology",
            "price": 20,
            "photo": "https://res.cloudinary.com/dk-hub/images/q_70,c_limit,h_580,w_440,f_auto/dk-core-nonprod//9781465491008/9781465491008_cover.jpg/dk_Movie_Book"
        },
        {
            "id": 107,
            "title": "The Crime Book",
            "price": 2000,
            "photo": "https://res.cloudinary.com/dk-hub/images/q_70,c_limit,h_580,w_440,f_auto/dk-core-nonprod//9781465462862/9781465462862_cover.jpg/dk_Crime_Book"
        },
        {
            "id": 108,
            "title": "The Star Trek Book",
            "price": 464620,
            "photo": "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465450982/9781465450982_cover.jpg"
        }


    ],
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const found = state.products.find(prod => prod.id === action.payload);
            const inBasket = state.basket.find(item => item.id === action.payload);
            return {
                ...state,
                basket: inBasket ? state.basket.map(item =>
                    item.id === action.payload ? { ...item, count: item.count + 1 } : item
                ) : [...state.basket, { ...found, count: 1 }]
            };
        case "COUNT_UP":
            return {
                ...state,
                basket: state.basket.map(item =>
                    item.id === action.payload ? { ...item, count: item.count + 1 } : item
                )
            };
        case "COUNT_DOWN":
            return {
                ...state,
                basket: state.basket.map(item =>
                    item.id === action.payload && item.count > 1 ? { ...item, count: item.count - 1 } : item
                )
            };
        case "DELETE":
            return {
                ...state,
                basket: state.basket.filter(x => x.id !== action.payload),
            };
        default:
            return state;
    }
}