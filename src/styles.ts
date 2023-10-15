import { styled } from "styled-components";
import tw from "twin.macro";

export const HomeContainer = styled.main<{ themeColor: boolean }>`
  background-color: ${(props) => (props.themeColor ? "#EBEBEB" : "#232339")};
  
  ${tw`
        min-h-screen
        text-white
        text-base
        md:flex
        px-2
    `}
`;

export const ScrollTop = styled.button<{ themeColor: boolean }>`
  position: fixed;
  bottom: 3%;
  right: 3%;
  border-radius: 50%;
  padding: 0.65rem;
  background-color: ${(props) => (props.themeColor ? "#232339" : "#EBEBEB")};
  color: ${(props) => (props.themeColor ? "#EBEBEB" : "#232339")};
  font-size: 1.35rem;
`