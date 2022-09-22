import './Dropdown.css';
import { useState } from 'react';
import { ReactComponent as DropdownClose } from '../../assets/dropdown_close.svg'
import { ReactComponent as DropdownOpen } from '../../assets/dropdown_open.svg';
import { ReactComponent as DropdownOpenMobile } from '../../assets/dropdown_open_mobile.svg';
import { ReactComponent as DropdownCloseMobile } from '../../assets/dropdown_close_mobile.svg';
import { ReactComponent as DropdownOpenApropos } from '../../assets/dropdown_open_apropos.svg';
import { ReactComponent as DropdownCloseApropos } from '../../assets/dropdown_close_apropos.svg';

function Dropdown({ buttonValue, dropdownText, logementClass }) {
    const [toggle, setToggle] = useState(true);
    const changeState = () => {
        setToggle(!toggle);
    }
    let apropos = false;
    if (logementClass === 'Fiabilite' || logementClass === 'Respect' || logementClass === 'Service'
        || logementClass === 'Responsabilite') {
        apropos = true;
        console.log('logementApropos:', apropos)
    } else {
        apropos = false;
        console.log('logementApropos:', apropos)
    }

    return (
        <div className='Dropdown'>
            {toggle ?
                <button onClick={changeState}
                    type='button'>
                    {buttonValue}
                    <div className='LogementArrow'
                    >
                        {apropos ? <DropdownCloseApropos /> : <DropdownClose />}
                        <DropdownCloseMobile />
                    </div>
                </button>
                : <button onClick={changeState}
                    type='button'>
                    {buttonValue}
                    <div className='LogementArrow'
                    >
                        {apropos ? <DropdownOpenApropos /> : <DropdownOpen />}
                        <DropdownOpenMobile />
                    </div>
                </button>
            }
            <div className={logementClass === 'Equipements' ? 'logementEquipementsTextArea' :
                apropos ? 'aProposTextArea' :
                    'logementDescriptionTextArea'} style={{
                        display: toggle ?
                            'none' : 'flex'
                    }}>
                <div className={logementClass === 'Equipements' ? 'logementEquipementsText' :
                    logementClass === 'Fiabilite' ? 'aProposFiabiliteText' :
                        logementClass === 'Respect' ? 'aProposRespectText' :
                            logementClass === 'Service' ? 'aProposServiceText' :
                                logementClass === 'Responsabilite' ? 'aProposResponsabiliteText' :
                                    'logementDescriptionText'} style={{
                                        display: toggle ?
                                            'none' : 'flex'
                                    }}>
                    {logementClass !== 'Equipements' ?
                        dropdownText
                        : (dropdownText).map((item, i) => {
                            return <div key={i}>{item}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Dropdown