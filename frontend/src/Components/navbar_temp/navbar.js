import styled from "styled-components"

export const Navbar = styled.nav`
   display: flex;
   justify-content: center;
   align-items: center;

   @media (max-width: 576px) {
    display: flex;
    justify-content: left;
   }
`;