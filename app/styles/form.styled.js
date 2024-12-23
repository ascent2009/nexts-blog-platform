import styled from "styled-components";
import { StyledInput } from './dashboard.style';

export const StyledFormContainer = styled.section`
    max-width: 70rem;
    margin: auto;
    padding: 0 5rem;
    background-color: #f7fafc;
    border-radius: 0 0 1rem 1rem;
`

export const StyledDate = styled.h3`
    display: flex;
    color: #696970;
    margin: 0;
    padding: 4rem 0 0;
    width: 50%;
    justify-content: space-between;
    align-items: center;
`

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3rem 0;
  gap: 1rem;
`
export const StyledDiv = styled(StyledDate)`
    padding: 0;
    font-size: 1rem;
    width: 70%;
`
export const StyledLabel = styled.label`
    font-weight: bold;
    margin-right: 1rem;
`
export const StyledTextarea = styled(StyledInput)`
    min-width: 165%;
    height: 20%;
    resize: vertcal;
    font-size: 1rem;
`
export const StyledButtonBlock = styled.div`
    margin: 2rem 0;
    display: flex;
    gap: 2rem;
`

export const StyledButton = styled.button`
    padding: 10px 20px;
    width: fit-content;
    font-weight: bold;
    color: white;
    background: #5cba9a;
    border-radius: 50px;
    border: none;
    outline: none;
    font-size: 1rem;
    cursor: pointer;
    &:active {
        transform: translateY(2px);
    }
`
export const StyledButtonLink = styled(StyledButton)`
    appearance: none;
    text-decoration: none;
`