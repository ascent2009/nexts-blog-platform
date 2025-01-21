import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 70rem;
  height: fit-content;
  margin: 4rem auto 0;
  padding: 1rem 5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:${props => props.mode ? "#000000" : " #f7fafc"};
  border-radius: 1rem 1rem 0 0;
  @media (max-width: 768px) {
    margin: auto 0;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem; 
    max-width: 100%;
    padding: 5rem 0 1rem;
  };
  `

export const LogoBlock = styled.div`
  display: flex;
  ${'' /* flex-grow: 1; */}
  width: 20%;
  margin: 0;
  padding: 1rem 0;
  @media (max-width: 768px) {
    width: fit-content;
    padding: 0;
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
  ${'' /* flex-grow: 1; */}
  ${'' /* width: fit-content; */}
  justify-content: space-around;
  margin: 0;
  background-color: ${props => props.mode ? "#000000" : " #f7fafc"};
  padding: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    ${'' /* width: 50rem; */}
    gap: 2rem;
    ${'' /* flex-grow: 1; */}
    background-color: ${props => props.mode ? "#000000" : " #f7fafc"};
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
    ${'' /* font-size: 1.5rem; */}
    display: none;
  };  
`
export const LinkButtonStyle = styled.button`
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
    display: block;
    font-size: 3rem;
    max-width: fit-content;
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
 top: 10rem;
 left: 20rem;
  ${'' /* width: 20rem;
  height: 20rem; */}
 border: 1px solid #696970;
 border-radius: 1.5rem;
 z-index: 2;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: ${props => props.mode ? "#000000" : " #f7fafc"};
 padding: 2rem;
`
export const LinkStyleDropdown = styled(LinkStyle)`
  display: none;
  @media (max-width: 768px) {
    font-size: 3rem;
    display: block;
  };
`
export const SignInMobileBlock = styled.ul`
    display: none;
    ${'' /* width: 50%;
    height: 50%; */}
    margin: 0;
    gap: 0.5rem;
    font-size: 1.5rem;
    flex-direction: column;
  @media (max-width: 768px) {
    display: flex;
    
  };
`

export const AuthBlock = styled(LinksBlock)`
`
