import {Link} from 'react-router-dom'
import './BtnSet.css'
export function BtnSet({name,id, onDelete, isEditMode}){
    return (
        <li className="list-set__item">
  <div className="set-btn-wrapper">
    <Link
      className="link-set__btn"
      to={`/set/${id}`}
      state={{ set: name }}
    >
      {name}
    </Link>

    {isEditMode && (
      <button
        className="delete-set-btn"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onDelete(name)
        }}
      >
        ✖
      </button>
    )}
  </div>
</li>

    )
}