import React from "react";
import { useState, useEffect } from "react";
import { Header } from "./Header/Header";
import './PageSelectSet.css'
import { BtnSet } from "./BtnSet/BtnSet";
import { getSets, deleteSetById } from '../storage';

export function PageSelectSet() {
  const [sets, setSets] = useState([])
  const [isEditMode, setIsEditMode] = useState(false)

  useEffect(() => {
    setSets(getSets())
  }, [])
  const handleDelete = (id) => {
    const targetSet = sets.find(s => s.id === id)
    if (!window.confirm(`Удалить сет "${targetSet?.name}"?`)) return
    deleteSetById(id)
    setSets(getSets()) 
  }

  return (
    <>
      <Header/>
      <div className={`select-container ${isEditMode ? 'edit-mode' : ''}`}>
        <h2> ♡ выбор сетов ♡ </h2>

        <ul className='set-list'>
          {sets.length ? (
            sets.map(set => (
            <BtnSet
            key={set.id}
            id={set.id}
            name={set.name}
            isEditMode={isEditMode}
            onDelete={() => handleDelete(set.id)}
            />
          ))
        ) : (<p>сетов пока нет</p>)}
        </ul>

        <button
        className="edit-mode-btn"
        onClick={() => setIsEditMode(!isEditMode)}>
            {isEditMode ? "готово" : "*редактировать*"}
        </button>

      </div>
    </>
  );
}
