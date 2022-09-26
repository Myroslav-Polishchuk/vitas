import React from 'react'

import FooterComp from '../components/Footer/Footer'

function Footer(props) {
    return (
        <footer className="footer">
            <div className="footerContainer globalWrapper">
                <FooterComp {...props}/>
            </div>
        </footer>
    );
}

export default Footer;