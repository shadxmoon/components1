import React from "react";
import { Header } from "./Header/Header";
import { Outlet, Link} from "react-router-dom";
import './PageCreateSet.css'

export function PageCreateSet(){
    return( 
    <div>
        <Header/>
        <h2> &#9825; создание сета карточек &#9825;</h2>
        <div className="creation-container">
            <Link to='createset' className="create-link">новый набор</Link>
            <Link to='createcard' className="create-link">новая карточка</Link>
        </div>
        <Outlet/>
    </div>
    )
}