import { Card } from "../Card/Card.jsx"
import { useState } from "react"
import { useParams } from "react-router-dom"
import './Set.css'
import { getSets } from '../../storage'

export function Set() {
  const { id } = useParams()
  const sets = getSets()
  const currentSet = sets.find(s => s.id === id)

  const [step, setStep] = useState(0)

  if (!currentSet) {
    return <p>Сет не найден</p>
  }

  const cards = currentSet.cards
  const totalCards = cards.length

  if (totalCards === 0) {
    return (
      <div>
        <h2>{currentSet.name}</h2>
        <p>в этом сете пока нет карточек... </p>
      </div>
    )
  }

  const card = cards[step]

  const handlePrev = () => step > 0 && setStep(step - 1)
  const handleNext = () => step < totalCards - 1 && setStep(step + 1)

  return (
    <div>
      <h2>{currentSet.name}</h2>

      <Card
        key={card.id}
        front={card.front}
        back={card.back}
      />

      <div className="elements">
        <button onClick={handlePrev} disabled={step === 0} className='slide-btn'>&lt;</button>
        <div className='counter'>{step + 1}/{totalCards}</div>
        <button onClick={handleNext} disabled={step === totalCards - 1} className='slide-btn'>&gt;</button>
      </div>
    </div>
  )
}
