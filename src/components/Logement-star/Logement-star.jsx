import './Logement-star.css';
import { ReactComponent as EtoileCouleur } from '../../assets/etoileCouleur.svg';
import { ReactComponent as Etoile } from '../../assets/etoile.svg';
import { ReactComponent as EtMobile } from '../../assets/etoileMobile.svg';
import { ReactComponent as EtMobileCouleur } from '../../assets/etoileMobileCouleur.svg';



function LogementStar({ logement }) {

    return (
        <div className='logementRating'>
            {[...Array(Number(logement.rating))].map((e, i) => {
                return <div key={i} className='logementStar'>
                    <EtoileCouleur />
                    <EtMobileCouleur />
                </div>
            })
            }
            {[...Array(5 - (logement.rating))].map((e, i) => {
                return <div key={i} className='logementStar'>
                    <Etoile />
                    <EtMobile />
                </div>
            })
            }
        </div>
    )
}
export default LogementStar