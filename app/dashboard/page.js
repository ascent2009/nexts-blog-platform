"use client"

import {StyledDashboard, StyledMenuBlock, StyledMenu, StyledMenuItem} from '../styles/dashboard.style';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import Blogs from './blogs/page'

// import dynamic from 'next/dynamic'
import Loading from "../dashboard/loading"
import Search from '../components/Search'
import { Suspense } from 'react';
// import {fetchBlogs} from '../lib/data'
import { usePathname, useSearchParams, useRouter  } from 'next/navigation';

// const Blogs = dynamic(() => import('./blogs/page'), { ssr: false })
export default function Dashboard({ children }) {
    
    const [posts, setPosts] = useState([])
    const refActive = useRef(["isPopular", "isEngineering", "isMarketing", "isCompany"])

    async function fetchBlogs() {
        const url = `https://673d146b4db5a341d833f71e.mockapi.io/blogs`;
        let data = await fetch(url, { next: {revalidate: 10} })
        let posts = await data.json()
        setPosts(prev => prev = posts);
    } 

    useEffect(() => {
        fetchBlogs()
    }, [])

    const handleSearch = useDebouncedCallback(async (term) => {
        const url = `https://673d146b4db5a341d833f71e.mockapi.io/blogs?search=${term}`;
        let data = await fetch(url, { next: {revalidate: 10} })
        let posts = await data.json()
        // const params = new URLSearchParams(searchParams);
        // if (term) {
        //     params.set('query', term);
        // } else {
        //     params.delete('query');
        // }
        // replace(`${pathname}?${params.toString()}`);
        setPosts(posts);
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
// refActive.current.style.color = "#5cba9a";
            // refActive.current.style.borderBottom = "1px solid #5cba9a";
        }, [posts]
    )

    
    // const searchPar = await props.searchParams;
    // const query = searchPar.query || '';
    // const currentPage = Number(searchPar.page) || 1;
    
    
    // console.log('posts: ', posts);
    
    
    // const [active, setActive] = useState('');
    // const handleActiveMenuItem = (e) => {
    //     setActive("active");
    //     e.target.classList.add(active);
    //     // if (active) e.target.classList.remove(active);
    // }
    // useEffect(() => setActive(''), []);

    

    return (
        <>
            <StyledDashboard>
                <StyledMenuBlock>
                    <StyledMenu>
                        <StyledMenuItem id="menuItem" 
                        // onClick={handleActiveMenuItem}
                        onClick={() => handleFilter("isPopular", "Popular")}
                        ref={refActive}
                        >Popular</StyledMenuItem>
                        <StyledMenuItem id="menuItem" 
                        // onClick={handleActiveMenuItem}
                        onClick={() => handleFilter("isEngineering", "Engineering")}
                        ref={refActive}
                        >Engineering</StyledMenuItem>
                        <StyledMenuItem id="menuItem"
                        // onClick={handleActiveMenuItem}
                        onClick={() => handleFilter("isMarketing", "Growth marketing")}
                        ref={refActive}
                        >Growth marketing</StyledMenuItem>
                        <StyledMenuItem id="menuItem"
                        // onClick={handleActiveMenuItem}
                        onClick={() => handleFilter("isCompany", "Company")}
                        ref={refActive}
                        >Company</StyledMenuItem>
                    </StyledMenu>
                </StyledMenuBlock>
                <Search handleSearch={handleSearch}/>
            </StyledDashboard>
            <Suspense fallback={<Loading />}>
                <Blogs loading="lazy" posts={posts} />
            </Suspense>
        </>
    )
}