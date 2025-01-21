import { useRef } from "react"
import Image from 'next/image'
import Link from 'next/link';
import {StyledSearchBlock, StyledInput, StyledSearch} from '../styles/dashboard.style';
import { usePathname, useSearchParams, useRouter  } from 'next/navigation';

export default function Search({handleSearch, fetchBlogs, inputRef}) {

    // const inputRef = useRef()

    const clearSearch = () => {
        inputRef.current.value = " "
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
                <StyledSearch as="a" style={{marginLeft:"2rem", textDecoration: "none"}} href="/dashboard/blogs/create">+ New post</StyledSearch>
            </StyledSearchBlock>
    );
}