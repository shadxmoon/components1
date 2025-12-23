import {useEffect} from "react"
import { useInput } from "./UseInput"
import { useForm } from 'react-hook-form'
import { getSets, saveSets } from '../storage'
import { useLocation, useNavigate } from "react-router-dom"

export function FormCreateCard(){
    const navigate = useNavigate()
    const location = useLocation()
    const preselectedSetId = location.state?.preselectedSetId
    const sets = getSets()
    const {register, handleSubmit, setValue, formState : {errors}} = useForm({defaultValues: {setId:"", frontText: "", backText: ""}})
        console.log(errors)
    useEffect(() => {
        if (preselectedSetId) {
            setValue('setId', preselectedSetId)
        }
    }, [preselectedSetId, setValue])

    const onSubmit = (data) => {
    const updatedSets = sets.map(set => {
      if (set.id !== data.setId) return set
      return {
        ...set,
        cards: [
            ...set.cards,
            {
                id: Date.now().toString(),
                front: data.frontText,
                back: data.backText
            }
        ]
    }
})
    saveSets(updatedSets)
    navigate('/');
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Набор</label>
            <select {...register('setName', { required: true })}>
                <option value="">Выберите набор</option>
                {sets.map(set => (
                    <option key={set.id} value={set.id}>
                        {set.name}
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