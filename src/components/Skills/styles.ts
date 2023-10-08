import { styled } from "styled-components";
import tw from "twin.macro";

export const SkillsContainer = styled.div`
    ${tw`
        pt-12
        pl-8
        flex
        flex-col
    `}
    width: 90%;
    margin: 0 auto;
`

export const TitleContainer = styled.div<{themeColor: boolean}>`
    ${tw`
        flex
        items-center
        gap-8
        pb-8
    `}
    margin-left: -10.8%;

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
        /* gap: 3rem; */

        li{
            border-right: 1px solid #79819A;
            padding: 0 1rem;

        }
        :last-child{
            border-right: none;
        }
    }
`