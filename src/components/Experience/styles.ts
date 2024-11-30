import { styled } from "styled-components";
import tw from "twin.macro";

export const ExperienceContainer = styled.section`
    ${tw`
        pt-8
        pl-8
        flex
        flex-col
    `}
    max-width: 1280px;
    margin: 0 auto;
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

    margin-left: -4.6%;

    @media (max-width: 1024px){
        margin-left: -6.6%;
    }
    @media (min-width: 1280px) and (max-width: 1365px){
        margin-left: -4.9%;
    }
    @media (min-width: 1440px){
        margin-left: -4.2%;
    }
    @media (min-width: 1600px){
        margin-left: -3.7%;
    }
    @media (min-width: 1920px){
        margin-left: -3%;
    }
    @media (min-width: 2560px){
        margin-left: -0.2%;
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

export const ExperienceContent = styled.div`
    ${tw`
        py-4
        px-4
    `}
`

export const Content = styled.div`
    ${tw`
        flex
        flex-col
        md:flex-row
        h-32
    `}
`

export const Details = styled.div`
    ${tw`
        flex
        items-center
        md:items-start
        md:w-5/12
        md:flex-col
        lg:w-6/12
        xl:w-8/12
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
        items-center
        justify-center
        gap-4
        md:justify-start
    `}
    div:first-child{
        border-radius: 50%;
        display: flex;
        align-items: center;
        padding: 0.25rem;
        max-height: 0.7rem;

        @media (min-width: 768px){
            margin-left: -0.25rem;
            margin-top: -0.5rem;
        }
        
        div{
            background-color: #CCC;
        }
    }
    p{
        color: ${(props) => (props.themeColor ? "#232339" : "#BBBBBB")};
        @media (min-width: 768px){
            margin-top: -1rem;
        }
    }
    @media (max-width: 768px){
        margin-top: 1.25rem;
    }
`

export const CompanyContainer = styled.div<{themeColor: boolean}>`
    ${tw`
        flex
        items-center
        justify-center
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