import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from "../../assets/backgroundImg.png"
import '../Home/Home.css'


function Home() {
    useEffect(() => {
        getAllData();
    }, [])
    const [appartData, setAppartData] = useState([])

    const getAllData = async () => {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/logements.json`);
        const allData = await response.json();
        console.log('allData:', allData)
        setAppartData(allData);
    }

    return (
        <div className='home'>
            <div className='background'>
                <img src={backgroundImg} alt="" className='backgroundImg' />
                <h1 className='backgroundText'>Chez vous, partout et ailleurs</h1>
            </div>
            <div className='area'>
                <div className='bodyData'>
                    {appartData.map(appart => (
                        <Link key={appart.id} className={'section-article'} to={`/ficheLogement/${appart.id}`}
                        >
                            <div className='imgArea'></div>
                            <h2 className='title'>{appart.title}</h2>
                            <img src={appart.cover} alt='' className='img' />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;