import { useParams } from 'react-router-dom';


function Logement() {
    const { id } = useParams();
    console.log('params:', id)

    return (
        <div>
            <h1>Fiche Logement</h1>
            <p>params: {id}</p>
        </div>

    )
}

export default Logement; 