import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from "../../assets/backgroundImg.png"
import '../Home/Home.css'

const Home = () => {
    useEffect(() => {
        getAllData();
    }, []);
    const [appartData, setAppartData] = useState([])
    const getAllData = async () => {
        try {
            const response = await fetch(`${process.env.PUBLIC_URL}/data/logements.json`);
            if (!response.ok) {
                throw new Error(response.status)
            } else {
                const allData = await response.json();
                setAppartData(allData);
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div className='home'>
            <div className='background'>
                <img src={backgroundImg} alt='backgroundImage' className='backgroundImg' />
                <h1 className='backgroundText'>Chez vous, partout et ailleurs</h1>
            </div>
            <div className='area'>
                <div className='bodyData'>
                    {appartData.map(appart => (
                        <Link key={appart.id} className={'section-article'}
                            to={`/logement/${appart.id}`}
                            state={{ appartData }}
                        >
                            <div className='imgArea'></div>
                            <h2 className='title'>{appart.title}</h2>
                            <img src={appart.cover} alt='logementCover' className='img' />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Home;