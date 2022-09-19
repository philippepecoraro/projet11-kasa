import './Logement-dropdown.css';
import { useState } from 'react';
import { ReactComponent as DropdownClose } from '../../assets/dropdown_close.svg'
import { ReactComponent as DropdownOpen } from '../../assets/dropdown_open.svg';
import { ReactComponent as DropdownOpenMobile } from '../../assets/dropdown_open_mobile.svg';
import { ReactComponent as DropdownCloseMobile } from '../../assets/dropdown_close_mobile.svg';

function LogementDropdown({ logement, buttonValue, dropdownText, textAreaClass, logementText }) {
    console.log('dropdownText:', dropdownText)
    console.log('buttonValue:', buttonValue)
    console.log('logement:', logement)
    const [toggle, setToggleDescription] = useState(true);
    const changeStateDescription = () => {
        setToggleDescription(!toggle);
    }

    return (

        <div className='LogementDropdown'>
            {toggle ?
                <button onClick={changeStateDescription}
                    type='button'>
                    {buttonValue}
                    <div className='LogementArrow'
                    >
                        <DropdownClose />
                        <DropdownCloseMobile />
                    </div>
                </button>
                : <button onClick={changeStateDescription}
                    type='button'>
                    {buttonValue}
                    <div className='LogementArrow'
                    >
                        <DropdownOpen />
                        <DropdownOpenMobile />
                    </div>
                </button>}

            <div className={textAreaClass} style={{
                display: toggle ?
                    'none' : 'flex'
            }}>
                <div className={logementText} style={{
                    display: toggle ?
                        'none' : 'flex'
                }}>
                    {logementText === 'logementDescriptionText' ?
                        dropdownText
                        : (logement.equipments).map((item, i) => {
                            return <div key={i}>{item}</div>
                        })
                    }
                </div>
            </div>
        </div>

    )
}
export default LogementDropdown