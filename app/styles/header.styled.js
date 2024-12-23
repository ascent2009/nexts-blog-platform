import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 70rem;
  height: fit-content;
  margin: 4rem auto 0;
  padding: 1rem 5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f7fafc;
  border-radius: 1rem 1rem 0 0;
  ;
  `

export const LogoBlock = styled.div`
  display: flex;
  ${'' /* flex-grow: 1; */}
  width: 20%;
  margin: 0;
  padding: 1rem 0;
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
  width: fit-content;
  justify-content: space-around;
  margin: 0;
  background-color: inherit;
  ${'' /* padding: 1rem 0; */}
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
  `
export const AuthBlock = styled(LinksBlock)`
`
