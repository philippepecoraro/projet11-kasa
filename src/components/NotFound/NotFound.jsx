import { Link } from 'react-router-dom';
import './NotFound.css';
import { useState, useEffect } from 'react';


function Error() {
    const [smallerScreen, setSmallerScreen] = useState(false);

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
        <div className='Error'>
            <h1 className='DefaultNumb'>404</h1>
            {smallerScreen ?
                <h2 className='DefaultText'>Oups! La page que<br />vous demandez n'existe pas.</h2> :
                <h2 className='DefaultText'>Oups! La page que vous demandez n'existe pas.</h2>}

            <Link className={'DefaultLink'} to={'/'}>
                Retournez sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error