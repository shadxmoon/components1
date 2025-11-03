import {Card} from "../Card/Card.jsx"
import {useState} from "react"
import './Set.css'
import cards from '../../data.json'
export function Set(){
    const [step, setStep] = useState(0)
    const totalCards = cards.length

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
            <h2>Название набора</h2>
            <Card 
            key={cards[step].id}
            front={cards[step].front}
            back={cards[step].back}
            />
            <div className="elements">
                <button onClick={handlePrev} disabled={step===0}> &lt; </button>
                <div> {step + 1}/{totalCards}</div>
                <button onClick={handleNext} disabled={step===totalCards-1}> &gt; </button>
            </div>
        </div>
        
    )
}