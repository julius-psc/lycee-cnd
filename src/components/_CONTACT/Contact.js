


import React from "react";

import { useState } from 'react';
import { send } from 'emailjs-com';

import '../../styles/_CONTACT/Contact.css';


const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });
    
    const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_fps0evg',
          'template_wwr3zsq',
          toSend,
          'dyqfydvVHUdbIW5F6'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
    };
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <>
            <h1 id="contact-h1">Contacter</h1>
            <div className="contact-sect">
                <div className="contact-details">
                    <div>
                        <h4>Téléphone</h4>
                        <p>02 31 36 12 12</p>
                    </div>
                    <div>
                        <h4>Gmail</h4>
                        <p>secretariat-eleves@elcdouvres.fr</p>
                        <p>secretariat-direction@elcdouvres.fr</p>
                    </div>
                    <div>
                        <h4>ENT</h4>
                        <p>Ecole Directe</p>
                    </div>
                    <div>
                        <h4>Instagram</h4>
                        <p>@lycee.cnd</p>
                    </div>
                </div>

                <div className="contact-form">
                    <form onSubmit={onSubmit}>
                        <input
                            type='text'
                            name='from_name'
                            placeholder='De:'
                            value={toSend.from_name}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            name='to_name'
                            placeholder='À:'
                            value={toSend.to_name}
                            onChange={handleChange}
                        />

                        <input
                            type='text'
                            name='reply_to'
                            placeholder='Email:'
                        />

                        <textarea
                            type='text'
                            name='message'
                            value={toSend.message}
                            onChange={handleChange}
                            id="msg-input"
                        />

                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;