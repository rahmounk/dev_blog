import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import doge from "../assets/dog.gif";
import background from "../assets/bg2.png";

const FormContact = () => {
    // Déclaration des const du formulaire de contact
    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [mail, setMail] = useState({});
    const [content, setContent] = useState("");
    const [submit, setSubmit] = useState(false);

    // clé emailjs correspondant a l'adresse trash
    const serviceID = "service_gmwj17y";
    const templateID = "template_wojlupw";

    // Initialiser le mailer
    const mailer = emailjs.init("user_TsiXgctaKQx2Ip7qCjw9l");
    const isInitialMount = useRef(true);

    // fonction asyncrone pour envoyer les emails
    const sendMail = async () => {
        try {
            const mailSent = await emailjs.send(serviceID, templateID, mail);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        setMail({
            ...{ name },
            ...{ tel },
            ...{ mail },
            ...{ content },
        });
    };

    useEffect(() => {
        // Dans le IF ne pas envoyer de mail si les champs sont vides
        if (isInitialMount.current) {
            isInitialMount.current = false;
            // Dans le ELSE si mail a une valeur true alors tu sendMail
        } else {
            console.log(mail);
            mail && sendMail();
        }
    }, [submit]);

    if (submit) {
        return (
            <div className="message-envoye">
                <p>Votre message a bien été envoyé</p>
                <Link to="/blog"> Retour aux posts </Link>
            </div>
        );
    } else {
        return (
            <div className="container" style={{ backgroundImage: `url(${background})` }}>
                <img src={doge} alt="" width="100px" />
                <h1>Contactez moi !</h1>

                <form action="" id="formulaire">
                    <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        className="name-form"
                        id="name"
                        placeholder="Votre nom.."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="phone-num">Tel</label>
                    <input
                        type="tel"
                        className="phone-form"
                        id="phone-num"
                        placeholder="06-00-00-00-00"
                        pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="email-form"
                        id="email"
                        placeholder="email.."
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                    />

                    <label>Votre message</label>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>

                    <input
                        className="button-form"
                        type="submit"
                        value="ENVOYER"
                        onClick={handleSubmit}
                    />
                </form>
            </div>
        );
    }
};

export default FormContact;
