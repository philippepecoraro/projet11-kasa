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
import { useState, useEffect } from 'react';


function Header() {
    const accueil = 'Accueil'
    const aPropos = 'A Propos'
    const accueilUpper = 'ACCUEIL'
    const aProposUpper = 'A PROPOS'

    const [smallerScreen, setSmallerScreen] = useState(false);
    console.log('smallerScreen:', smallerScreen)

    const handler = () => {
        const list = window.matchMedia("(max-width: 475px)");
        setSmallerScreen(list.matches);
    };
    useEffect(() => {
        handler();
        window.addEventListener('resize', handler);
        return () => {
            window.removeEventListener('resize', handler);
        };
    }, []);

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

            {smallerScreen ?
                <div className='nav-bar'>
                    <NavLink to='/' className={({ isActive }) => {
                        return isActive ? 'accueilActive' : 'accueil'
                    }}
                    >{accueilUpper}</NavLink>
                    <NavLink to='/apropos' className={({ isActive }) => {
                        return isActive ? 'aProposActive' : 'aPropos'
                    }}
                    >{aProposUpper}</NavLink>
                </div> :
                <div className='nav-bar'>
                    <NavLink to='/' className={({ isActive }) => {
                        return isActive ? 'accueilActive' : 'accueil'
                    }}
                    >{accueil}</NavLink>
                    <NavLink to='/apropos' className={({ isActive }) => {
                        return isActive ? 'aProposActive' : 'aPropos'
                    }}
                    >{aPropos}</NavLink>
                </div>
            }

        </div>
    )
}
export default Header