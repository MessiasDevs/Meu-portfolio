import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2vz5d6g",
        "template_ctg8bln",
        formRef.current,
        "gKUNsTzA7sE4pgN8k"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Quer saber mais ? Entre em contato !</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +55 71 992664912
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              messiasvieira755@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Salvador - Bahia , Brasil
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Qual a minha historia?</b> Contate-me e podemos falar sobre projetos futuros e tudo sobre minha carreira academica e profissional.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nome" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Assunto" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Messagem" name="message" />
            <button>Enviar</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
