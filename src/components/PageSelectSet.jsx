import React from "react";
import { Header } from "./Header/Header";

import './PageSelectSet.css'

export function PageSelectSet(){
    return (
        <>
        <Header/>
        <h2>Выбор сетов</h2>
        <div className="container">
        <div className="set" id='english'>
            <h3>English</h3>
        </div>
        <div className="set" id='fruits'>
            <h3>Fruits and Vegetables</h3>
        </div>
        </div>
        </>
    )
}