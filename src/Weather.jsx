import React from "react";
import { useState } from "react";
import './styles/components/App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./Components/Header";
import Body from "./Components/Body";

export default function Weather() {

    const [theme, setTheme] = useState("dark");
    const [loading, setLoading] = useState(true);

    return (
        <>
            <div className={`App-${theme}`}>

                <Header />
                <Body loading="loading" setLoading="setLoading"/>
            </div>
        
        </>
    )
}
