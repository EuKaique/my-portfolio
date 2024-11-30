import { styled } from "styled-components";
import tw from "twin.macro";

export const SocialsContainer = styled.div`
    ${tw`
        pt-2
        px-4
    `}
    .bg-instagram{
        background: radial-gradient(circle at 30% 107%, #FA8F21, #D82D75 40%);
    }
    .bg-facebook{
        background-color: #0866FF;
    }
    .bg-linkedin{
        background-color: #0077B5;
    }
    @media (max-width: 768px){
        ${tw`
            border-b
            border-slate-400
            w-10/12
            m-auto
        `}
    }
`

export const Title = styled.p`
    ${tw`
        pl-2
        pb-4
        pt-6
        text-lg
        text-center
        text-slate-400
        font-semibold
        border-t
        border-slate-400
        md:text-sm
        md:text-left
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

        &:hover{
            color: #A478E8;
            transition: 0.2s ease-in-out;
            cursor: pointer;
        }

        @media (max-width: 768px){
            display: none;
        }
    }
`

export const IconContainer = styled.div`
    ${tw`
        rounded-full
        px-2
        py-2
        cursor-pointer
    `}
`