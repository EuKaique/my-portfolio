import { styled } from "styled-components";
import tw from "twin.macro";

export const ExperienceContainer = styled.section`
    ${tw`
        pt-8
        pl-8
        flex
        flex-col
    `}
`

export const TitleContainer = styled.div<{themeColor: boolean}>`
    ${tw`
        flex
        items-center
        gap-8
        pb-8
    `}
    margin-left: -4.6%;

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

export const ExperienceContent = styled.div`
    ${tw`
        py-4
        px-4
    `}
`

export const Content = styled.div`
    ${tw`
        flex
        h-32
    `}
`

export const Details = styled.div`
    ${tw`
        flex
        flex-col
        w-6/12
    `}
`

export const LineVertical = styled.div`
    ${tw`
        border-l
        border-slate-500
    `}
`

export const PeriodContainer = styled.div<{themeColor: boolean}>`
    font-size: 0.8rem;
    ${tw`
        flex
    `}
    div:first-child{
        border-radius: 50%;
        display: flex;
        margin-top: -0.2rem;
        margin-left: -0.25rem;
        padding: 0.25rem;
        max-height: 0.7rem;
        
        div{
            background-color: #CCC;
            border-radius: 50%;
        }
    }
    p{
        margin-top: -0.6rem;
        margin-left: 1.2rem;
        color: ${(props) => (props.themeColor ? "#232339" : "#BBBBBB")};
    }
`

export const CompanyContainer = styled.div<{themeColor: boolean}>`
    ${tw`
        flex
        items-center
        gap-4
        ml-6
        mt-6
    `}
    h5{
        font-size: 0.9rem;
        margin-bottom: 0.4rem;
        color: ${(props) => (props.themeColor ? "#232339" : "#BBBBBB")};
    }
    h3{
        font-size: 1rem;
        font-weight: 600;
        color: ${(props) => (props.themeColor ? "#232339" : "#BBBBBB")};
    }
`

export const LogoContainer = styled.div`
    img{
        width: 3rem;
        height: 3rem;
        border-radius: 0.6rem;
    }
`

export const InfoContainer = styled.div`
    ${tw`
        flex
        flex-col
        text-xs
    `}
`

export const Description = styled.div<{themeColor: boolean}>`
    ${tw`
        leading-6
        text-xs
        w-11/12
        text-justify
        flex
        items-center
        pr-4
    `}
    color: ${(props) => (props.themeColor ? "#232339" : "#BBBBBB")};
`