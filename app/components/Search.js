// "use client"

import Image from 'next/image'
import Link from 'next/link';
import {StyledSearchBlock, StyledInput, StyledSearch} from '../styles/dashboard.style';
// import { usePathname, useSearchParams, useRouter  } from 'next/navigation';

export default function Search({handleSearch}) {

    // const searchParams = useSearchParams();
    // const pathname = usePathname();
    // const { replace } = useRouter();

    // async function handleSearch(term) {
    //     const url = `https://673d146b4db5a341d833f71e.mockapi.io/blogs?search=${term}`;
    //     let data = await fetch(url, { next: {revalidate: 10} })
    //     let posts = await data.json()
    //     // const params = new URLSearchParams(searchParams);
    //     // if (term) {
    //     //     params.set('query', term);
    //     // } else {
    //     //     params.delete('query');
    //     // }
    //     // replace(`${pathname}?${params.toString()}`);
    //     // return posts;
    //     console.log('posts: ', posts);
    // }

    return (
        <StyledSearchBlock>
                <StyledInput
                    type="text"
                    onChange={(e) => {handleSearch(e.target.value);}}
                    defaultValue=""
                />
                <Image
                    src="/search.svg"
                    alt="search input"
                    width={16}
                    height={16}
                    priority={false}
                />
                <StyledSearch>Search</StyledSearch>
                <StyledSearch as="a" style={{marginLeft:"2rem", textDecoration: "none"}} href="/dashboard/blogs/create">+ New post</StyledSearch>
            </StyledSearchBlock>
    );
}