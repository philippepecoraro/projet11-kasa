import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Logement.css';
import Dropdown from '../../components/Dropdown/Dropdown';
import Star from '../../components/Star/Star';
import Tag from '../../components/Tag/Tag';
import Carousel from '../../components/Carousel/Carousel';


const Logement = () => {
    let navigate = useNavigate();
    const [logement, setLogement] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getLogement = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/data/logements.json`);
                if (!response.ok) {
                    throw new Error
                        (response.status)
                } else {
                    const data = await response.json();
                    const dataFilter = data.filter(x => x.id === id)
                    setLogement(dataFilter[0]);
                    if (dataFilter.length < 1) {
                        navigate('*')
                    }
                }
            } catch (error) {
                console.log('error', error)
            }
        }
        getLogement();
    }, [id, navigate]);

    return (
        <div className='logement'>
            {logement !== null && logement.tags && logement.description && logement.equipments &&
                < div >
                    <div className='logementImage'>
                        <Carousel slides={logement.pictures} />
                    </div>

                    <div className='logementData'>
                        <div className='logementLeftPart'>
                            <h2 className='logementTitle'>{logement.title}</h2>
                            <h4 className='logementLocation'>{logement.location}</h4>
                            <Tag logement={logement} />
                        </div>
                        <div className='logementRightPart'>
                            <div className='logementNamePicture'>
                                <h3 className='logementName'>
                                    {(logement.host.name).split(' ').map((item, i) => {
                                        return <p key={i}>{item}</p>
                                    })}
                                </h3>
                                <img src={logement.host.picture} alt={(logement.host.name) + ' portrait'} className='logementPicture' />
                            </div>
                            <div>
                                <Star logement={logement} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='logementDescEqui'>
                            <div className='logementDescription'>
                                <Dropdown buttonValue="Description" dropdownText={logement.description}
                                    logementClass='Description' />
                            </div>
                            <div className='logementEquipements'>
                                <Dropdown buttonValue='Equipements' dropdownText={logement.equipments}
                                    logementClass='Equipements' />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Logement; 