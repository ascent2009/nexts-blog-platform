import styled from "styled-components";

export const StyledBlogs = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;
    padding: 0;
    list-style: none;
    @media (max-width: 768px) {
        gap: 3rem;
    };
    
`
export const StyledBlogItem = styled.li`
    position: relative;
`

export const StyledLink = styled.a`
    width: fit-content;
    padding: 2rem;
    font-size: 0.7rem;
    appearance: none;
    text-decoration: none;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    font-weight: bold;
    cursor: pointer;
    color: #696970;
    &:nth-child(even) {
        flex-direction: row-reverse;
    }
    &:hover {
       background-color: #f5f5f5;
       border-radius: 20px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
    };
`

export const StyledTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    gap: 2rem;
`

export const StyledAuthorBlock = styled.div`
    display: flex;
    max-width: 20rem;
    margin: 0;
    color: #83838a;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    @media (max-width: 768px) {
        font-size: 1.5rem;
        max-width: 30rem;
    };
`

export const StyledTitle = styled.h2`
    font-size: 1.5rem;
    margin: 0;
    @media (max-width: 768px) {
        font-size: 2.5rem;
    };
`
export const StyledText = styled.p`
    color: #9e9ea3;
    font-size: 0.8rem;
    margin: 0;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    };
`
export const StyledTagBlock = styled.div`
    display: flex;
    margin-left: 30px;
`

export const StyledTag = styled.h3`
    font-size: 0.7rem;
    color: #5c86b5;
    width: fit-content;
    padding: 5px 10px;
    background-color: #F08080;
    border-radius: 5px;
    margin: 0;
    margin-left: -30px;

`
  