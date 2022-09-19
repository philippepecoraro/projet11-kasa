import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Logement.css';
import LogementDropdown from '../../components/Logement-dropdown/Logement-dropdown';
import LogementStar from '../../components/Logement-star/Logement-star';
import LogementTag from '../../components/Logement-tag/Logement-tag';


const Logement = () => {
    let navigate = useNavigate();
    const [logement, setLogement] = useState({});
    console.log('logement:', logement)
    console.log('logement:', logement.title)
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
                        {console.log('logement:', { logement })}
                        <img src={logement.cover} alt='' className='logementImg' />
                    </div>

                    <div className='logementData'>
                        <div className='logementLeftPart'>
                            <h2 className='logementTitle'>{logement.title}</h2>
                            <h4 className='logementLocation'>{logement.location}</h4>
                            <LogementTag logement={logement} />
                        </div>
                        <div className='logementRightPart'>
                            <div className='logementNamePicture'>
                                <h3 className='logementName'>{logement.host.name}</h3>
                                <img src={logement.host.picture} alt='' className='logementPicture' />
                            </div>
                            <div>
                                <LogementStar logement={logement} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='logementDescEqui'>
                            <div className='logementDescription'>
                                <LogementDropdown logement={logement} buttonValue="Description"
                                    dropdownText={logement.description} textAreaClass='logementDescriptionTextArea'
                                    logementText='logementDescriptionText' />
                            </div>
                            <div className='logementEquipements'>
                                <LogementDropdown logement={logement} buttonValue='Equipements'
                                    dropdownText={logement.equipments} textAreaClass='logementEquipementsTextArea'
                                    logementText='logementEquipementsText' />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Logement; 