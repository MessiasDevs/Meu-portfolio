import "./about.css";
import Award from "../../img/award.png";
import one from "../../img/onebit.png";
import facu from "../../img/facu.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre mim</h1>
        <p className="a-sub">
          Aqui falarei um pouco sobre mim e tambem um pouco sobre minha trajetoria profissional.
        </p>
        <p className="a-desc">
          Falando de Messias, você precisa falar sobre uma pessoa ambiciosa
          e que não se contenta com o pouco, sempre foi uma pessoa esforçada
          e que sempre correu atrás de aprender e exercitar seus conhecimentos.
          Uma pessoa autodidata e que se por algum acaso vier errar sabe localizar o erro e corrigir.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Marinha do Brasil</h4>
            <p className="a-award-desc">
              Tive a honra de servir o meu pais no ano de 2020,
              la aprendi coisas unicas que vou levar pra toda minha vida.
            </p>
          </div>
        </div>
        <div className="a-award">
          <img src={one} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Progamador Full Stack Javascript</h4>
            <p className="a-award-desc">
              Meu primeiro curso na area de progamação, onde dei o ponta pé inicial na minha carreira de progamador.
            </p>
          </div>
        </div>
        <div className="a-award">
          <img src={facu} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Universidade Cruzeiro do sul</h4>
            <p className="a-award-desc">
              Atualmento estou no 2º semestre de analise e desenvolvimento de sistemas,
              estou aprendendo muito com a graduação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
