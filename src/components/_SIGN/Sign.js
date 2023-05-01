



import React from "react";

import '../../styles/_SIGN/Sign.css';
import pdf from "../../assets/images/tarifs-cnd.pdf"


const Sign = () => {
    return (
        <div className="sign-section">
            <h1>Inscriptions</h1>
            <div className="sign-details">
                <div className="sign-text">
                    <h3>Procédure d'inscription</h3>
                    <p>Nous sommes habilités à accueillir des élèves boursiers. Pour toute demande, merci de bien vouloir contacter le secrétariat.</p>
                    <p>Pour toute demande d'inscription, cliquer <a target="_blank" href="https://preinscriptions.ecoledirecte.com/?RNE=0141193W">ce lien</a></p>
                    <h3>Tarifs</h3>
                    <div className="mobile-pdf-view">
                        <p>Pour voir tout les tarifs concernant l'année scolaire : <a href="https://drive.google.com/file/d/1Mh4WAtuBSioTyU2WeiMwAnPW1sNGw20v/view?usp=sharing" target="_blank" rel="noopener">lien</a></p>
                    </div>
                </div>
                <embed class="tarifs-pdf" embed src={pdf} type="application/pdf" width="100%" height="600px"></embed>
            </div>
        </div>
    )
}

export default Sign;