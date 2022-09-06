import { Link } from 'react-router-dom';
import './NotFound.css';


function Error() {
    return (
        <div className='Error'>
            <h1 className='DefaultNumb'>404</h1>
            <h2 className='DefaultText'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link className={'DefaultLink'} to={'/'}>
                Retournez sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error