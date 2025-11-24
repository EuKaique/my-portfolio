import * as S from "./styles";

export const Right = () => {
  return (
    <S.Container>
      <S.Education id="education">
        <h2 className="section-title">EDUCAÇÃO</h2>

        <div className="education__container bd-grid">
          <div className="education__content">
            <div className="education__time">
              <span className="education__rounder"></span>
              <span className="education__line"></span>
            </div>

            <div className="education__data bd-grid">
              <h3 className="education__title">Ciência da computação</h3>
              <span className="education__studies">
                Universidade Paulista - UNIP
              </span>
              <span className="education__year">2014 - 2017</span>
            </div>
          </div>

          <div className="education__content">
            <div className="education__time">
              <span className="education__rounder"></span>
              <span className="education__line"></span>
            </div>

            <div className="education__data bd-grid">
              <h3 className="education__title">
                Programação WEB avançada com PHP e Laravel
              </h3>
              <span className="education__studies">Udemy</span>
              <span className="education__year">2021 - 2022</span>
            </div>
          </div>

          <div className="education__content">
            <div className="education__time">
              <span className="education__rounder"></span>
            </div>

            <div className="education__data bd-grid">
              <h3 className="education__title">Curso de React.js e Next.js</h3>
              <span className="education__studies">Udemy</span>
              <span className="education__year">2022 - 2023</span>
            </div>
          </div>
        </div>
      </S.Education>
      <S.Skills id="skills">
        <h2 className="section-title">HABILIDADES</h2>

        <div className="skills__content bd-grid">
          <ul className="skills__data">
            <li className="skills__name">
              <span className="skills__circle"></span>HTML / CSS
            </li>
            <li className="skills__name">
              <span className="skills__circle"></span>Javascript / Typescript
            </li>
            <li className="skills__name">
              <span className="skills__circle"></span>React JS / Next JS
            </li>
            <li className="skills__name">
              <span className="skills__circle"></span>React Native
            </li>
            <li className="skills__name">
              <span className="skills__circle"></span>Styled Components / TailwindCSS
            </li>
          </ul>

          <ul className="skills__data">
            <li className="skills__name">
              <span className="skills__circle"></span>APIs REST / Graph QL / Webhooks
            </li>
            <li className="skills__name">
              <span className="skills__circle"></span>Redux / Zustand
            </li>
            <li className="skills__name">
              <span className="skills__circle"></span>Git / Github / Azure DevOps
            </li>
            <li className="skills__name">
              <span className="skills__circle"></span>Node / Npm / Pnpm /Yarn
            </li>
            <li className="skills__name">
              <span className="skills__circle"></span>Figma / AdobeXD / Storybook
            </li>
          </ul>
        </div>
      </S.Skills>
      <S.Experience id="experiencia">
        <h2 className="section-title">EXPERIÊNCIA</h2>

        <div className="experience__container bd-grid">
          <div className="experience__content">
            <div className="experience__time">
              <span className="experience__rounder"></span>
              <span className="experience__line"></span>
            </div>

            <div className="experience__data bd-grid" style={{ marginBottom: "2rem"}}>
              <h3 className="experience-title">Desenvolvedor front-end</h3>
              <span className="experience__company">
                04/2024 - Atualmente | BASF
              </span>
              <br />
              <p className="experience__description">
                Trabalho na construção de interfaces web com React e Next.js. Realizo
                melhorias e desenvolvimento de novas funcionalidades com as melhores práticas
                de desenvolvimento.
              </p>
            </div>
          </div>
        </div>

        <div className="experience__container bd-grid" style={{ marginBottom: "2rem"}}>
          <div className="experience__content">
            <div className="experience__time">
              <span className="experience__rounder"></span>
              <span className="experience__line"></span>
            </div>

                        <div className="experience__data bd-grid">
              <h3 className="experience-title">Analista programador</h3>
              <span className="experience__company">
                07/2022 - 02/2024 | DuoSystem Inteligência em Saúde
              </span>
              <br />
              <p className="experience__description">
                Trabalhei realizando correções e melhorias no sistema, conforme
                a necessidade do cliente
              </p>
            </div>
          </div>
        </div>

        <div className="experience__container bd-grid">
          <div className="experience__content">
            <div className="experience__time">
              <span className="experience__rounder"></span>
            </div>
            <div className="experience__data bd-grid">
              <h3 className="experience-title">Analista programador JR</h3>
              <span className="experience__company">
                08/2021 - 03/2022 | Tesis tecnologia e qualidade em engenharia
              </span>
              <br />
              <p className="experience__description">
                Trabalhei em um sistema PHP legado, realizando melhorias,
                correções e extrações de dados para o cliente
              </p>
            </div>
          </div>
        </div>
      </S.Experience>
      <S.Hobbies id="hobbies">
        <h2 className="section-title" style={{ marginTop: '1.5rem'}}>HOBBIES</h2>

        <div className="interests__container bd-grid">
          <div className="interests__content">
            <i className="bx bx-headphone interest__icon"></i>
            <span className="interests__name">Música</span>
          </div>

          <div className="interests__content">
            <i className="bx bx-book interest__icon"></i>
            <span className="interests__name">Livros</span>
          </div>

          <div className="interests__content">
            <i className="bx bx-game interest__icon"></i>
            <span className="interests__name">Jogos</span>
          </div>

          <div className="interests__content">
            <i className="bx bx-dumbbell interest__icon"></i>
            <span className="interests__name">Treino</span>
          </div>

          <div className="interests__content films-series">
            <i className="bx bx-movie-play interest__icon"></i>
            <span className="interests__name">Filmes e séries</span>
          </div>
        </div>
      </S.Hobbies>
    </S.Container>
  );
};
