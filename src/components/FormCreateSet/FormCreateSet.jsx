import './FormCreateSet.css'
import { getData, saveData } from '../../storage';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
export function FormCreateSet(){
    const navigate = useNavigate()
    const {register, handleSubmit, formState : {errors}} = useForm({defaultValues: {name: "", description: ""}})
    console.log(errors)

    const onSubmit = (data) => {
    const cards = getData();

    const newSetCard = {
      id: Date.now(),
      setName: data.name,
      front: 'Первая карточка',
      back: 'Описание'
    };

    saveData([...cards, newSetCard]);
    navigate('/');
  };


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