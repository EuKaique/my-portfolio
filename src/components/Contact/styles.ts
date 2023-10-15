import { styled } from "styled-components";
import tw from "twin.macro";

export const ContactContainer = styled.div`
    ${tw`
        pt-2
        px-4
    `}
`

export const Title = styled.p`
    ${tw`
        pb-4
        text-lg
        text-slate-400
        font-semibold
        text-center
        md:text-left
        md:pl-2
        md:text-sm
    `}
`

export const ListItems = styled.ul`
    ${tw`
        flex
        flex-wrap
        justify-center
        md:flex-col
        md:justify-start
        md:mb-2
        md:gap-4
        gap-12
        list-none
    `}
`

export const ListItem = styled.li<{themeColor: boolean}>`
    ${tw`
        leading-6
        flex
        flex-col
        items-center
        text-center
        justify-center
        gap-4
        mb-12
        md:justify-start
        md:flex-row
        md:mb-0
        md:text-left
    `}
    p{
        font-size: 0.9rem;
        font-weight: 600;
        color: #79819A;
    }
    h3{
        font-size: 0.9rem;
        font-weight: 400;
        color: ${(props) => (props.themeColor ? "#232339" : "#FFFFFF")};

        @media (max-width: 768px){
            display: none;
        }
    }
`

export const IconContainer = styled.div`
    ${tw`
        rounded-full
        bg-slate-700
        px-2
        py-2
    `}
`