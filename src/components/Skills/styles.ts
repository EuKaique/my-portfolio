import { styled } from "styled-components";
import tw from "twin.macro";

export const SkillsContainer = styled.section`
    ${tw`
        pt-12
        pl-8
        flex
        flex-col
    `}
    min-width: 90%;
    margin: 0 auto;

    @media (min-width: 2550px){
        min-width: 50.5%;
        max-width: 1280px;
    }
`

export const TitleContainer = styled.div<{themeColor: boolean}>`
    ${tw`
        flex
        items-center
        justify-center
        gap-8
        pb-8
        md:justify-start
        md:pl-1
    `}
    margin-left: -10.8%;

    @media (max-width: 1024px){
        margin-left: -13.2%;
    }
    @media (min-width: 1280px) and (max-width: 1365px){
        margin-left: -11.2%;
    }
    @media (min-width: 1440px){
        margin-left: -10.4%;
    }
    @media (min-width: 1600px){
        margin-left: -9.8%;
    }
    @media (min-width: 1920px){
        margin-left: -9%;
    }
    @media (min-width: 2560px){
        margin-left: -6.1%;
    }

    div:first-child{
        ${tw`bg-slate-700`};
        border-radius: 50%;
        display: flex;
        padding: 0.6rem;
        
        div{
            background-color: #CCC;
            padding: 0.4rem 0.4rem;
            border-radius: 50%;
        }
    }

    h1{
        font-size: 1.5rem;
        font-family: 'Manjari', sans-serif;
    }
    color: ${(props) => (props.themeColor ? "#232339" : "#BBBBBB")};
`

export const RowOne = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 768px){
        display: block;
    }
`

export const Card = styled.div<{ themeColor: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 8rem;
    background-color: ${props => props.themeColor ? '#D8D9DA' : "#2E2E48"};
    color: #79819A;
    font-weight: 600;
    font-size: 1.05rem;
    ul{
        list-style: disc;
    }
`

export const RowTwo = styled.div<{themeColor: boolean}>`
  display: flex;
  background-color: ${props => props.themeColor ? '#D8D9DA' : "#2E2E48"};
  margin-bottom: 1rem;
  :first-child{
    margin-top: 1.5rem;
    width: 50%;
    height: 60%;
    border-right: 1px solid #79819A;
  }
  :last-child{
    width: 50%;
  }
    @media (max-width: 768px){
        display: flex;
        align-items: center;

        :last-child{
            padding-top: 1.5rem;
        }
    }
`

export const RowThree = styled.div<{themeColor: boolean}>`
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 1rem; 
    margin-bottom: 1rem;

    .ul-style{
        display: flex;
        align-items: center;
        list-style: none;

        li{
            border-right: 1px solid #79819A;
            padding: 0 1rem;

        }
        :last-child{
            border-right: none;
        }
    }

    @media (max-width: 768px){
        display: block;
    }
`