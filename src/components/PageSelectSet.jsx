import React from "react";
import { useState, useEffect } from "react";
import { Header } from "./Header/Header";
import './PageSelectSet.css'
import { BtnSet } from "./BtnSet/BtnSet";
import { getData, deleteSet } from '../storage';

export function PageSelectSet() {
  const [cards, setCards] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false)

  useEffect(() => {
    setCards(getData());
  }, []);
  const handleDelete = (setName) => {
    if (!window.confirm(`Удалить сет "${setName}"?`)) return
    deleteSet(setName)
    setCards(getData()) // 🔥 реактивное обновление
  }
  const sets = [...new Set(cards.map(c => c.setName))]
    .map((name, index) => (
      <BtnSet
      key={index}
      name={name}
      id={index}
      isEditMode={isEditMode}
      onDelete={handleDelete}/>
    ));

  return (
    <>
      <Header/>
      <div className={`select-container ${isEditMode ? 'edit-mode' : ''}`}>
        <h2> ♡ выбор сетов ♡ </h2>

        <ul className='set-list'>
           {sets.length ? sets : <p>Сетов пока нет</p>}
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
