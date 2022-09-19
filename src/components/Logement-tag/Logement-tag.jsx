import './Logement-tag.css';


function LogementTag({ logement }) {

    return (
        <div className='logementTags'>
            {(logement.tags).map((tag, i) => (
                <div key={i} className='logementTag'>
                    {tag}
                    {console.log('tag1:', tag)}
                </div>
            ))}
        </div>
    )
}
export default LogementTag;