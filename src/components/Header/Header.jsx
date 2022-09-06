import { NavLink } from 'react-router-dom';
import { ReactComponent as Kletter } from '../../assets/kLetter.svg'
import { ReactComponent as Maison } from '../../assets/maison.svg'
import { ReactComponent as Sletter } from '../../assets/sLetter.svg'
import { ReactComponent as Aletter } from '../../assets/aLetter.svg'
import { ReactComponent as KletterMobile } from '../../assets/kLetterMobile.svg'
import { ReactComponent as MaisonMobile } from '../../assets/maisonMobile.svg'
import { ReactComponent as SLetterMobile } from '../../assets/sLetterMobile.svg'
import { ReactComponent as ALetterMobile } from '../../assets/aLetterMobile.svg'
import '../Header/Header.css'


function Header() {

    return (
        <div className='header'>
            <div className='logo'>
                <Kletter />
                <Maison />
                <Sletter />
                <Aletter />
                <KletterMobile />
                <MaisonMobile />
                <SLetterMobile />
                <ALetterMobile />
            </div>

            <div className='nav-bar'>
                <NavLink to='/' className={({ isActive }) => {
                    return isActive ? 'accueilActive' : 'accueil'
                }}
                >Accueil</NavLink>

                <NavLink to='/apropos' className={({ isActive }) => {
                    return isActive ? 'aProposActive' : 'aPropos'
                }}
                >A Propos</NavLink>
            </div>
        </div>
    )
}
export default Header