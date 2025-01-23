import styled from "styled-components";

export const StyledDashboard = styled.section`
  width:100%;
  height: 3rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid #e9edf5;
  @media (max-width: 768px) {
    padding: 10rem 0 7rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  };
`

export const StyledMenuBlock = styled.nav`
  height: fit-content;
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  };
`
export const StyledMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
  @media (max-width: 768px) {
    width: 85%;
    flex-wrap: wrap;
    gap: 2rem;
  };
`
export const StyledMenuItem = styled.li`
  margin-bottom: -2px;
  padding-bottom: 1rem;
  color: #9e9ea3;
  font-weight: bold;
  font-size: 0.8rem;
  &:hover {
    color: #5cba9a;
    border-bottom: 1px solid #5cba9a;
  }
  &.active {
    color: #5cba9a;
    border-bottom: 1px solid #5cba9a;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  };
`

export const StyledMenuItemActive = styled(StyledMenuItem)`
  color: #5cba9a;
`

export const StyledSearchBlock = styled.div`
  display: flex;
  height: fit-content;
  width: 45%;
  padding-bottom: 1rem;
  justify-content: flex-end;
  align-items: flex-end;
  @media (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
    justify-content: space-around;
  };
`
export const StyledInput = styled.input`
  appearance: none;
  background-color: #e9edf5;
  border: none;
  margin-bottom: -.35rem;
  height: 1.5rem;
  width: 45%;
  margin-right: 10px;
  padding-left: 10px;
  flex-grow: 1;
  outline: none;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #9e9ea3;
  @media (max-width: 768px) {
    height: 90%;
    font-size: 2rem;
    border: 2px solid #9e9ea3;
  };
`

export const StyledSearch = styled(StyledMenuItem)`
  color: #dadadc;
  margin-bottom: 0;
  padding-bottom: 0;
  padding-left: 10px; 
  list-style-type: none;
  border: none;
  outline: none;
  background-color: transparent;
  &:hover {
    color: #9e9ea3;
    border-bottom: none;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: none;
  };
`
export const StyledSearchMobile = styled(StyledSearch)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 4rem;
  };
`