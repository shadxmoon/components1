import {Card} from "../Card/Card.jsx"
import {useState} from "react"
import { useLocation, useParams} from "react-router-dom"
import './Set.css'
import { getData } from '../../storage';

export function Set(){
    const param = useParams()
    console.log(param.id)
    const [step, setStep] = useState(0)
    
    const location = useLocation()
    const { set } = location.state
    const cards = getData();
    const ourCards = cards.filter(c => c.setName === set);
    const totalCards = ourCards.length
    const handlePrev = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    }

    const handleNext = () => {
        if (step < totalCards - 1) {
            setStep(step + 1);
        }
    }
    return (
        <div>
            <h2>{ourCards[step].setName}</h2>
            <Card 
            key={ourCards[step].id}
            front={ourCards[step].front}
            back={ourCards[step].back}
            />
            <div className="elements">
                <button onClick={handlePrev} disabled={step===0} className='slide-btn'> &lt; </button>
                <div className='counter'> {step + 1}/{totalCards}</div>
                <button onClick={handleNext} disabled={step===totalCards-1} className='slide-btn'> &gt; </button>
            </div>
        </div>
        
    )
}