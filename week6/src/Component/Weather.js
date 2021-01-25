import React, { useState } from "react";
import { render } from "react-dom";
import './Weather.css';

export const Weather = () => {
    const [cityName, setCity] = useState("");
    const [weathers, setWeathers] = useState("");
    const [images, setImg] = useState("");
    const [postCityName, setPostCity] = useState("");

    const getCity = (e) => {
        setCity(e.target.value);
    }

    const getWeather = async () => {
        await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=90148420274ab156a4b372cb991d351f')
            .then((res) => res.json())
            .then((res) => {
                setPostCity(res.name);
                setWeathers(res.weather[0].main);
                setImg('http://openweathermap.org/img/w/'+res.weather[0].icon+'.png');
            })
            .catch(err => alert("없는 도시입니다."));

    }

    return (
        <div >
            <h1>나라별 도시 날씨 정보 받아오기~!</h1>
            <input type='text' placeholder='도시 이름 입력(영어로)' onChange={getCity}/>
            <input type='button' value='Click'  onClick={getWeather}/>
            <Weather
                postCity = {postCityName}
                weather = {weathers}
                image = {images}
            />
        </div>
    );
};

render(<Weather />, document.querySelector("#root"));