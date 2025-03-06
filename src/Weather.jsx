import React from "react";
import { useState, useContext } from "react";
import './styles/components/App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import WeatherContext from '../Contexts/WeatherContext';
import WeatherContext from "./Contexts/WeatherContext";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Loading from "./Components/Loading";

export default function Weather() {

    const { loading, weather } = useContext(WeatherContext);

    return (
        <>
            {loading ? (

                <Loading />

            ) : weather ? (

                <>
                    <Header />
                    <Body />
                </>

            ) : (
                <p>Error fetching weather data.</p>
            )}

        </>
    )
}
