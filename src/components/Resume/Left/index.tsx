import { useState, useEffect } from "react";
import * as S from "./styles";
import PerfilImage from "../../../assets/perfil.png";

export const Left = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
      setDarkTheme(true);
    }
  }, []);

  const handleToggleTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);

    if (newTheme) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <S.Container className="resume__left">
      <S.Home className="home" id="inicio">
        <div className="home__container section bd-grid">
          <div className="home__data bd-grid">
            <img className="home__img" src={PerfilImage} alt="Perfil" />

            <h1 className="home__title">
              <b>KAIQUE</b>
            </h1>
            <h3 className="home__profession">Desenvolvedor front-end</h3>
            {/* <div>
              <a
                download=""
                href="assets/Currículo.pdf"
                className="home__button-movil"
              >
                Baixar
              </a>
            </div> */}
          </div>

          <div className="home__address bd-grid">
            <span className="home__information">
              <i className="bx bx-map home__icon"></i> São Paulo - SP
            </span>
            <span className="home__information">
              <i className="bx bx-envelope home__icon"></i>{" "}
              kaiqueols75@gmail.com
            </span>
          </div>
        </div>

        <i
          className={`bx ${darkTheme ? "bx-sun" : "bx-moon"} change-theme`}
          title="Tema"
          id="theme-button"
          onClick={handleToggleTheme}
        ></i>

        {/* <a
          download=""
          href="assets/Currículo.pdf"
          style={{ textDecoration: "none" }}
        >
          <i className="bx bx-download generate-pdf"></i>
        </a> */}
      </S.Home>

      <S.Social className="social section">
        <h2 className="section-title">SOCIAL</h2>

        <div className="social__container bd-grid">
          <a
            href="https://www.linkedin.com/in/kaique-oliveira-santos-0806a6a3/"
            target="_blank"
            className="social__link"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin-square social__icon"></i> Linkedin
          </a>
          <a
            href="https://www.facebook.com/kaique.oliveirasantos.547/"
            target="_blank"
            className="social__link"
            rel="noreferrer"
          >
            <i className="bx bxl-facebook social__icon"></i> Facebook
          </a>
          <a
            href="https://www.instagram.com/kaique_o_s/"
            target="_blank"
            className="social__link"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram social__icon"></i> Instagram
          </a>
          <a
            href="https://github.com/EuKaique"
            target="_blank"
            className="social__link"
            rel="noreferrer"
          >
            <i className="bx bxl-github social__icon"></i> Github
          </a>
        </div>
      </S.Social>

      <S.Perfil>
        <h2 className="section-title" style={{ marginTop: "1.5rem" }}>
          PERFIL
        </h2>

        <p className="profile__description">
          Realizador: Os Realizadores demonstram grande interesse em seu
          trabalho e têm contínua busca por realização pessoal. Possuem uma
          opinião positiva sobre o trabalho a ser realizado e têm dificuldade em
          delegar quando estão sob pressão. Nessas situações, o Realizador tende
          a assumir toda a carga de trabalho para garantir que as coisas sejam
          feitas da maneira certa. Quando delegam, têm a tendência de reassumir
          a tarefa caso a qualidade da entrega não esteja de acordo com suas
          expectativas.
        </p>
      </S.Perfil>
    </S.Container>
  );
};
