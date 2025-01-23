import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 70rem;
  height: fit-content;
  margin: 1rem auto 0;
  padding: 1rem 5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:${props => props.mode ? "#000000" : " #f7fafc"};
  border-radius: 1rem 1rem 0 0;
  @media (max-width: 768px) {
    margin: auto auto auto 5rem;
    align-items: flex-start;
    justify-content: space-around;
    max-width: 768px; 
    width: 100%;
    padding: 3rem 0 2rem;
    background-color: transparent;
  };
  `

export const LogoBlock = styled.div`
  display: flex;
  width: 20%;
  margin: 0;
  padding: 1rem 0;
  @media (max-width: 768px) {
    width: fit-content;
    padding: 0;
    flex-direction: column;
  };
  `

export const LogoTitle = styled.h2`
  margin: auto 10px;
  padding: 1rem 0;
  letter-spacing: 0.2rem;
  -webkit-font-smoothing: auto;
  color: #5cba9a;
  `

export const LinksBlock = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 0;
  background-color: ${props => props.mode ? "#000000" : " #f7fafc"};
  padding: 0;
  @media (max-width: 768px) {
    gap: 2rem;
    flex-grow: 1;
    background-color: ${props => props.mode ? "#000000" : "transparent"};
  };
  `
export const LinkStyle = styled.a`
  appearance: none;
  text-decoration: none;
  color: #696970;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 1rem 1.5rem;
  &:hover {
    background-color: #5cba9a;
    border-radius: 10px;
    color: #f7fafc;
  }
  @media (max-width: 768px) {
    display: none;
  };  
`
export const LinkButtonStyle = styled.button`
  appearance: none;
  border: none;
  outline: none;
  borderRadius: 10px;
  color: #696970;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 1rem 1.5rem;
  &:hover {
    background-color: #5cba9a;
    border-radius: 10px;
    color: #f7fafc;
  }
  @media (max-width: 768px): {
    display: none;
  }
`
export const StyledMobileMenu = styled.div`
  display: none;
  position: relative;
  @media (max-width: 768px) {
    display: block;
  };
`
export const StyledDropdown  = styled.section`
 position: absolute;
 top: 8rem;
 left: 30rem;
 border: 1px solid #696970;
 border-radius: 1.5rem;
 z-index: 2;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: flex-start;
 background-color: ${props => props.mode ? "#000000" : " #f7fafc"};
 padding: 2rem;
`
export const LinkStyleDropdown = styled(LinkStyle)`
  display: none;
  @media (max-width: 768px) {
    font-size: 2rem;
    display: block;
  };
`
export const SignInMobileBlock = styled.ul`
    display: none;
    margin: 0;
    gap: 0.5rem;
    font-size: 1.5rem;
    flex-direction: column;
  @media (max-width: 768px) {
    display: flex;
  };
`
export const LinkMobileStyle = styled(LinkButtonStyle)`
  display: none;
  border-radius: 10px;
  @media (max-width: 768px) {
    display: block;

  };
`


