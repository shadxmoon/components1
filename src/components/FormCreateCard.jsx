import React from "react"
import { useInput } from "./UseInput"
import { useForm } from 'react-hook-form'
import { getData, saveData } from '../storage'

export function FormCreateCard(){
    const {register, handleSubmit, formState : {errors}} = useForm({defaultValues: {frontText: "", backText: ""}})
        console.log(errors)
    const cards = getData()
    const sets = [...new Set(cards.map(c => c.setName))]
    const onSubmit = (data) => {
  const newCard = {
    id: Date.now(),
    setName: data.setName, // 🔥 ВАЖНО
    front: data.frontText,
    back: data.backText
  }

  saveData([...cards, newCard])
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Набор</label>
            <select {...register('setName', { required: true })}>
                <option value="">Выберите набор</option>
                {sets.map(name => (
                    <option key={name} value={name}>
                        {name}
                    </option>
                ))}
            </select>
            <div className='form__item'>
                <label htmlFor="frontText">
                    Передняя сторона карточки
                </label>
                <input 
                    type='text'
                    name='frontText'
                    {...register('frontText', {required:"заполните переднюю сторону карточки", minLength: {value: 4, message:"поле должно содержать минимум 4 символа"}, maxLength:{value: 30, message:"поле может содержать максимум 30 символов"}})}
                />
                <p className='error-msg'>{errors.frontText?.message}</p> 
            </div>
          
            <div className='form__item'>
            <label htmlFor="backText">
                Задняя сторона карточки
            </label> 
              <input type='text' name='backText'  {...register('backText', {required:"заполните заднюю сторону карточки", minLength: {value: 4, message:"поле должно содержать минимум 4 символа"},maxLength:{value: 30, message:"поле может содержать максимум 30 символов"}})}/> 
              <p className='error-msg'>{errors.backText?.message}</p> 
            </div>
            <div className='form__item'>
                <input type='submit' value='Создать'/>
            </div>
        </form>
    )
}