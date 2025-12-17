import './Header.css'
import {Link} from 'react-router-dom'
export function Header(){
    return (
        <div className="header">
            <h1><Link to='/'>Флеш-карточки</Link></h1>
            <nav className='main-menu'>
                <ul>
                    <li>
                        <Link className='main-menu__link' to='/admin'>Создать сет</Link>
                    </li>
                </ul>
            </nav>
        </div>        
    )
}