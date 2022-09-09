import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Logement.css';
import { ReactComponent as EtoileCouleur } from '../../assets/etoileCouleur.svg'
import { ReactComponent as Etoile } from '../../assets/etoile.svg'


const Logement = () => {
    const [logement, setLogement] = useState([]);
    const { id } = useParams();
    console.log('id:', id)
    useEffect(() => {
        const getLogement = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/data/logements.json`);
                console.log('response:', response)
                if (!response.ok) {
                    throw new Error
                        (response.status)
                } else {
                    const data = await response.json();
                    console.log('data:', data)
                    const dataFilter = data.filter(x => x.id === id)
                    console.log('dataFilter:', dataFilter)
                    setLogement(dataFilter);
                }
            } catch (error) {
                console.log('error', error)
            }
        }
        getLogement();
    }, [id]);
    return (
        <div className='logement'>
            {logement.length > 0 &&
                <div>
                    <img src={logement[0].cover} alt='' className='logementImg' />
                    <div className='logementNameHost'>
                        <h2 className='logementTitle'>{logement[0].title}</h2>
                        <div className='logementNamePicture'>
                            <h3 className='logementName'>{logement[0].host.name}</h3>
                            <img src={logement[0].host.picture} alt='' className='logementPicture' />
                        </div>
                    </div>
                    <h4 className='logementLocation'>{logement[0].location}</h4>

                    <div className='logementTagRating'>
                        <div className='logementTags'>
                            {(logement[0].tags).map((tag, i) => (
                                <div key={i} className='logementTag'>
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <div className='logementRating'>
                            {[...Array(Number(logement[0].rating))].map((e, i) => {
                                console.log(logement[0].rating)
                                return <div key={i} className='logementStar'>
                                    <EtoileCouleur />
                                </div>
                            })
                            }

                            {[...Array(5 - (Number(logement[0].rating)))].map((e, i) => {
                                return <div key={i} className='logementStar'>
                                    <Etoile />
                                </div>
                            })
                            }
                        </div>
                    </div>
                    <div className='logementDescEqui'>
                        <div className='logementDescription'>{logement[0].description}</div>
                        <div className='logementEquipment'>{logement[0].equipments}</div>
                    </div>
                </div>
            }
        </div>

    )
}

export default Logement; 