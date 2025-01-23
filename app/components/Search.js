import Image from 'next/image'
import {StyledSearchBlock, StyledInput, StyledSearch, StyledSearchMobile} from '../styles/dashboard.style';

export default function Search({handleSearch, fetchBlogs, inputRef}) {

    const clearSearch = () => {
        fetchBlogs()
    }

    return (
        <StyledSearchBlock>
                <StyledInput
                    type="text"
                    onChange={(e) => {handleSearch(e.target.value);}}
                    defaultValue=""
                    ref={inputRef}
                />
                <Image
                    src="/search.svg"
                    alt="search input"
                    width={16}
                    height={16}
                    priority={false}
                />
                <StyledSearch as="button" onClick={clearSearch}>Clear search</StyledSearch>
                <StyledSearchMobile as="button" onClick={clearSearch} style={{textDecoration: "none", transform: "rotate(45deg)"}}>
                    +
                </StyledSearchMobile>
                <StyledSearchMobile as="a" style={{textDecoration: "none"}} href="/dashboard/blogs/create">
                     +   
                </StyledSearchMobile>
                
                <StyledSearch as="a" style={{marginLeft:"2rem", textDecoration: "none"}} href="/dashboard/blogs/create">+ New post</StyledSearch>
            </StyledSearchBlock>
    );
}