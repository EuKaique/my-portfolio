import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 968px) {
    background-color: var(--container-color-alt);
    padding: 0 1.5rem;
  }
`;
export const Home = styled.section`
  position: relative;

  .home__container {
    gap: 3rem;
  }

  .home__data {
    gap: 0.5rem;
    text-align: center;
  }

  .home__img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    justify-self: center;
    margin-bottom: var(--mb-1);
  }

  .home__title {
    font-size: var(--h1-font-size);
  }

  .home__profession {
    font-size: var(--normal-font-size);
    margin-bottom: var(--mb-1);
  }

  .home__address {
    gap: 1rem;
  }

  .home__information {
    display: flex;
    align-items: center;
    font-size: var(--small-font-size);
  }

  .home__icon {
    font-size: 1.2rem;
    margin-right: 0.25rem;
  }

  .home__button-movil {
    display: inline-block;
    border: 2px solid var(--text-color);
    color: var(--title-color);
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    transition: 0.3s;
    font-weight: var(--font-medium);
    margin-top: var(--mb-3);
  }

  .home__button-movil:hover {
    background-color: var(--text-color);
    color: var(--container-color);
  }
`;
export const Social = styled.section`
  .social__container {
    grid-template-columns: max-content;
    gap: 1rem;
  }

  .social__link {
    display: inline-flex;
    align-items: center;
    font-size: var(--small-font-size);
    color: var(--text-color);
  }

  .social__link:hover {
    color: var(--title-color);
  }

  .social__icon {
    font-size: 1.2rem;
    margin-right: 0.25rem;
  }
`;
export const Perfil = styled.section`
  .profile__description {
    text-align: left;
    line-height: 1.6;
  }
`;
