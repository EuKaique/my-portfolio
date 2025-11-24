import styled from "styled-components";

export const Container = styled.div`
  padding: 0 1.5rem;
`;
export const Education = styled.section`
  position: relative;
  padding: 3rem 0;

  .education__content {
    display: flex;
  }

  .education__time {
    padding-right: 1rem;
  }

  .education__rounder {
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    background-color: var(--text-color-light);
    border-radius: 50%;
    margin-top: 0.25rem;
  }

  .education__line {
    display: block;
    width: 2px;
    height: 110%;
    background-color: var(--text-color-light);
    transform: translate(7px, 0);
  }

  .education__data {
    gap: 0.5rem;
  }

  .education__title {
    font-size: var(--h3-font-size);
  }

  .education__studies {
    font-size: var(--small-font-size);
    color: var(--title-color);
  }

  .education__year {
    font-size: var(--smaller-font-size);
    color: var(--title-color);
  }
`;
export const Skills = styled.section`
  .skills__content {
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }

  .skills__name {
    display: flex;
    align-items: center;
    margin-bottom: var(--mb-3);
  }

  .skills__circle {
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: var(--text-color);
    border-radius: 50%;
    margin-right: 0.75rem;
  }
`;
export const Experience = styled.section`
  .experience__content {
    display: flex;
  }

  .experience__time {
    padding-right: 1rem;
  }

  .experience__rounder {
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    background-color: var(--text-color-light);
    border-radius: 50%;
    margin-top: 0.25rem;
  }

  .experience__line {
    display: block;
    width: 2px;
    height: 110%;
    background-color: var(--text-color-light);
    transform: translate(7px, 0);
  }

  .experience__data {
    gap: 0.5rem;
  }

  .experience__title {
    font-size: var(--h3-font-size);
  }

  .experience__company {
    font-size: var(--small-font-size);
    color: var(--title-color);
  }
`;
export const Hobbies = styled.section`
    margin-bottom: 1.5rem;
  .interests__container {
    grid-template-columns: repeat(3, 1fr);
    margin-top: var(--mb-1);
  }

  .interests__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .interest__icon {
    font-size: 1.5rem;
    color: var(--text-color-light);
    margin-bottom: 0.2rem;
  }
  @media screen and (max-width: 576px) {
    .films-series span {
        width: 150px;
        margin-left: 3rem;
    }
  }
`;
