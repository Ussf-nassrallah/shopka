import React, { useState, createContext } from "react";

// initial State
const initialState = {
    products: [
        {
            id: 1,
            img: "https://m.media-amazon.com/images/I/81RUEbLko9L._AC_UL320_.jpg",
            title: "Fusion Motion Portable Gym with 8 Accessories Including Heavy Resistance Bands, Tricep Bar, Ab Roller Wheel, Pulleys and More...",
            price: 89.99,
            rating: 4,
            category: "fitness",
        },
        {
            id: 2,
            img: "https://m.media-amazon.com/images/I/71+hji+OIlL._AC_UL320_.jpg",
            title: "Resistance Band 11PC Fitness Exercise Workout from Home Set",
            price: 6.99,
            rating: 4,
            category: "fitness",
        },
        {
            id: 3,
            img: "https://m.media-amazon.com/images/I/71m+r4FbysL._AC_UL320_.jpg",
            title: "Odoland 4-in-1 AB Wheel Roller Kit AB Roller Pro with Push-Up Bar, Jump Rope and Knee Pad - Perfect Abdominal Core Carver...",
            price: 11.99,
            rating: 5,
            category: "fitness",
        },
        {
            id: 4,
            img: "https://m.media-amazon.com/images/I/71k1Uve-a6L._AC_UL320_.jpg",
            title: "Baby Wipes, Pampers Sensitive Water Based Baby Diaper Wipes, Hypoallergenic and Unscented, 8 Pop-Top Packs with 4 Refill...",
            price: 24.99,
            rating: 5,
            category: "babies",
        },
        {
            id: 5,
            img: "https://m.media-amazon.com/images/I/81rB8iiIsTL._AC_UL320_.jpg",
            title: "Amazon Elements Baby Wipes, Unscented, 720 Count, Flip-Top",
            price: 18.99,
            rating: 4,
            category: "babies",
        },
        {
            id: 6,
            img: "https://m.media-amazon.com/images/I/81TmCc291sL._AC_UL320_.jpg",
            title: "Amazon Elements Baby Wipes, Sensitive, 720 Count Flip-Top Packs",
            price: 11.99,
            rating: 5,
            category: "babies",
        },
    ],
    categories: [
        {
            id: 1,
            iconSrc: "../images/icons/clothing.svg",
            name: "Clothing & Shoes",
        },
        {
            id: 2,
            iconSrc: "../images/icons/entertainment.svg",
            name: "Entertainment",
            subCategory: [
                {
                    id: "subc1",
                    name: "Action Figures & Statues",
                },
                {
                    id: "subc2",
                    name: "Arts & Crafts",
                },
                {
                    id: "subc3",
                    name: "Baby & Toddler Toys",
                },
                {
                    id: "subc4",
                    name: "Building Toys",
                },
                {
                    id: "subc5",
                    name: "Dolls & Accessories",
                },
            ],
        },
        {
            id: 3,
            iconSrc: "../images/icons/music.svg",
            name: "Music",
        },
        {
            id: 4,
            iconSrc: "../images/icons/sport.svg",
            name: "Sport & Lifestyle",
        },
        {
            id: 5,
            iconSrc: "../images/icons/pets.svg",
            name: "Pets",
        },
        {
            id: 6,
            iconSrc: "../images/icons/kitchen.svg",
            name: "Kitchen Accessories",
        },
        {
            id: 7,
            iconSrc: "../images/icons/trevel.svg",
            name: "Travel Equipment",
        },
        {
            id: 8,
            iconSrc: "../images/icons/growing.svg",
            name: "Growing & Garden",
        },
        {
            id: 9,
            iconSrc: "../images/icons/electrical.svg",
            name: "Electrical Tools",
        },
        {
            id: 10,
            iconSrc: "../images/icons/mother-care.svg",
            name: "Mother Care",
        },
        {
            id: 11,
            iconSrc: "../images/icons/vintage.svg",
            name: "Vintage",
        },
        {
            id: 12,
            iconSrc: "../images/icons/toys.svg",
            name: "Toys & Entertainment",
            subCategory: [
                {
                    id: "subc1",
                    name: "Action Figures & Statues",
                },
                {
                    id: "subc2",
                    name: "Arts & Crafts",
                },
                {
                    id: "subc3",
                    name: "Baby & Toddler Toys",
                },
                {
                    id: "subc4",
                    name: "Building Toys",
                },
                {
                    id: "subc5",
                    name: "Dolls & Accessories",
                },
            ],
        },
    ],
};

// create context
export const GlobalContext = createContext(initialState);

// provider Component
export const GlobalProvider = ({ children }) => {
    return (
        <GlobalContext.Provider
            value={{
                products: initialState.products,
                categories: initialState.categories,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
