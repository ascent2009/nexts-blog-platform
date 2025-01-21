"use client"

import {StyledDashboard, StyledMenuBlock, StyledMenu, StyledMenuItem} from '../styles/dashboard.style';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import Blogs from './blogs/page'
import Loading from "../dashboard/loading"
import Search from '../components/Search'
import { Suspense } from 'react';
import { usePathname, useSearchParams, useRouter  } from 'next/navigation';
import Link from 'next/link';
const metadata = {
    title: 'Dashboard',
  };

export default function Dashboard({ children }) {
    
    const [posts, setPosts] = useState([])
    const [searchMessage, setSearchMessage] = useState("")
    const refActive = useRef(["isPopular", "isEngineering", "isMarketing", "isCompany"])
    const inputRef = useRef(null);

    async function fetchBlogs() {
        try {
            const url = new URL('https://673d146b4db5a341d833f71e.mockapi.io/blogs');
            url.searchParams.append('page', 1);
            url.searchParams.append('limit', 50);
            let response = await fetch(url, { next: {revalidate: 0} });
            let pagPosts = await response.json();
            setPosts(prev => prev = pagPosts);
            inputRef.current.value = null;
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    const handleSearch = useDebouncedCallback(async (term) => {
        const url = `https://673d146b4db5a341d833f71e.mockapi.io/blogs?search=${term}`;
        let data = await fetch(url, { next: {revalidate: 10} })
        let searchedPosts = await data.json()
        setPosts(searchedPosts);
        inputRef.current.value && setSearchMessage(`${searchedPosts.length} post(-s) matching "${term}"`)
        && setSearchMessage(null)
    }, 300)

    const handleFilter = useCallback(
        async(prop, value="") => {
            const url = `https://673d146b4db5a341d833f71e.mockapi.io/blogs`;
            let data = await fetch(url)
            let posts = await data.json()
            let filteredPosts = posts.filter(post => post[prop] === true)
            setPosts(prev => prev = prop ? filteredPosts : posts);
            
            const menuItems = document.querySelectorAll("#menuItem")
            menuItems.forEach(menuItem => {
                    if (menuItem.innerHTML === value) {
                        menuItem.style.color = "#5cba9a";
                        menuItem.style.borderBottom = "1px solid #5cba9a";
                    } else {
                        menuItem.style.color = "#9e9ea3";
                        menuItem.style.borderBottom = "none";
                    }
                }
            )
        }, [posts]
    )

    return (
        <>
            <StyledDashboard>
                <StyledMenuBlock>
                    <StyledMenu>
                        <StyledMenuItem id="menuItem" 
                        onClick={() => handleFilter("isPopular", "Popular")}
                        ref={refActive}
                        >Popular</StyledMenuItem>
                        <StyledMenuItem id="menuItem" 
                        onClick={() => handleFilter("isEngineering", "Engineering")}
                        ref={refActive}
                        >Engineering</StyledMenuItem>
                        <StyledMenuItem id="menuItem"
                        onClick={() => handleFilter("isMarketing", "Growth marketing")}
                        ref={refActive}
                        >Growth marketing</StyledMenuItem>
                        <StyledMenuItem id="menuItem"
                        onClick={() => handleFilter("isCompany", "Company")}
                        ref={refActive}
                        >Company</StyledMenuItem>
                    </StyledMenu>
                </StyledMenuBlock>
                <Search handleSearch={handleSearch} fetchBlogs={fetchBlogs} inputRef={inputRef} />
            </StyledDashboard>
            <h4 style={{color: "rgb(95, 126, 163)", textAlign: "right", paddingRight: "32px"}}>{searchMessage}</h4>
            <Suspense fallback={<Loading />}>
                <Blogs loading="lazy" posts={posts} fetchBlogs={fetchBlogs} searchMessage={searchMessage} />
            </Suspense>
        </>
    )
}