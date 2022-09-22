import './Tag.css';


function Tag({ logement }) {

    return (
        <div className='tags'>
            {(logement.tags).map((tag, i) => (
                <div key={i} className='tag'>
                    {tag}
                </div>
            ))}
        </div>
    )
}
export default Tag;