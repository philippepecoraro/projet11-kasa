import './Apropos.css';
import backgroundImg from '../../assets/aProposBackground.png';
import backgroundMobileImg from '../../assets/aProposBackgroundMobile.png';
import { useState, useEffect } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';


function Apropos() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 780 ? backgroundImg : backgroundMobileImg;
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    return (
        <div className='aProposData'>
            <div className='aProposImage'>
                <img src={imageUrl} alt='BackgroundImg' className='aProposImg'></img>
            </div>
            <div className='aProposDropdown'>
                <div className='fiabiliteDropdown'>
                    <Dropdown buttonValue='Fiabilité'
                        dropdownText='Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les informations sont
                régulièrement vérifiées par nos équipes.' logementClass='Fiabilite' />
                </div>
                <div className='respectDropdown'>
                    <Dropdown buttonValue='Respect'
                        dropdownText='La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera
                une exclusion de notre plateforme.' logementClass='Respect' />
                </div>
                <div className='serviceDropdown'>
                    <Dropdown buttonValue='Service'
                        dropdownText="Nos équipes se tiennent à votre disposition pour vous fournir
                une expérience parfaite. N'hésitez pas à nous contacter si vous avez la
                moindre question." logementClass='Service' />
                </div>
                <div className='responsabiliteDropdown'>
                    <Dropdown buttonValue='Responsabilité'
                        dropdownText="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
                les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
                En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de 
                vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur
                la sécurité domestique pour nos hôtes." logementClass='Responsabilite' />
                </div>
            </div>
        </div>
    )
}
export default Apropos