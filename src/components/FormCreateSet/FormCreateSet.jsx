import './FormCreateSet.css'
import { getSets, saveSets } from '../../storage';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
export function FormCreateSet(){
    const navigate = useNavigate()
    const {register, handleSubmit, formState : {errors}} = useForm({defaultValues: {setId:"", name: "", description: ""}})
    console.log(errors)

    const onSubmit = (data) => {
    if (!data.name || !data.name.trim()) return
    const sets = getSets();
    const newSet = {
      id: Date.now().toString(),
      name: data.name.trim(),
      description: data.description,
      cards: [] 
    }

    saveSets([...sets, newSet])

    navigate('/admin/createcard', {
      state: { preselectedSetId: newSet.id }
    })
}

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form__item'>
                <label htmlFor='name'>
                    Название набора
                </label>
                <input 
                    type='text'
                    name='name'
                    {...register('name', {required:"Заполните поле Название набора", minLength: {value: 4, message:"Название набора должно содержать минимум 4 символа"}, maxLength:{value: 30, message:"поле может содержать максимум 30 символов"}})}
                />
                <p className='error-msg'>{errors.name?.message}</p>  
            </div>
            
            <div className='form__item'>
                <label htmlFor='description'>
                    Описание
                </label>
                <textarea 
                    name='description'
                    id='description'
                    {...register('description', {required: "Заполните поле Описание набора"})}
                />
                <p className='error-msg'>{errors.description?.message}</p>   
            </div>

            <div className='form__item'>
              <input type='submit'value='Создать'/>  
            </div>
        </form>
    )
}