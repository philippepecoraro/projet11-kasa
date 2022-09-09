import { ReactComponent as KasaFooter } from '../../assets/kasaFooter.svg'
import '../Footer/Footer.css';


function Footer() {
    return (
        < div className='footer' >
            <div className='footerLogo'>
                <KasaFooter />
            </div>
            <div className='footerText'>
                © 2020 Kasa. All rights reserved
            </div>

        </div >
    )
}

export default Footer
