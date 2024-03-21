import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false)
    // console.log(searchQuery);

    const searchCache = useSelector((store) => store.search)

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    useEffect(() => {
        // api call
        // setTimeout(searchQuery)
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            }
            else {
                getSearchSuggestions()
            }
        }, 200);
        // make an api call after evey key press
        // if the difference bwteen two api calls <200ms decline the api call

        return () => { // clearing the timer. declines the api call if less than 200ms
            clearTimeout(timer);
        };
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        // console.log("search api call - " + searchQuery)
        const searchResult = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const result = await searchResult.json();
        // console.log(result[1]);
        setSuggestions(result[1])
        //
        dispatch(cacheResults({
            [searchQuery]: result[1]
            // "iphone": [1, 2, 4]
        }))
    };

    return (
        <div className="grid grid-flow-col p-4 m-0 shadow-lg">
            <div className="flex col-span-1 gap-2">
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-8 cursor-pointer"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
                    alt="menu"
                />
                <img
                    className="h-8"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
                    alt="Applogo"
                />
            </div>
            <div className="col-span-10 text-center relative">
                <div>
                    <input
                        className="border border-gray-400 w-1/2 rounded-l-full p-1 px-3"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button className="border border-gray-400 p-1 bg-gray-100 rounded-r-full">
                        Search
                    </button>
                </div>
                {showSuggestions &&
                    <div className="absolute w-[28rem]  left-52 text-left rounded-md shadow-md bg-blue-100 p-3 border border-gray-100">
                        <ul>
                            {suggestions.map((suggestion) => <li key={suggestion} className="py-1 shadow-sm">{suggestion}</li>)}
                            {/* <li className="py-1 shadow-sm">Hi</li>
                        <li className="py-1 shadow-sm">Hi</li>
                        <li className="py-1 shadow-sm">Hi</li>
                        <li className="py-1 shadow-sm">Hi</li>
                        <li className="py-1 shadow-sm">Hi</li>
                        <li className="py-1 shadow-sm">Hi</li> */}
                        </ul>
                    </div>
                }
            </div>
            <div className="col-span-1">
                <img
                    className="h-8"
                    alt="user"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                />
            </div>

        </div>
    );
};

export default Head;
