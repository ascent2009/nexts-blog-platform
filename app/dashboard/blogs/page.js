/* eslint-disable @next/next/no-async-client-component */
"use client"

import Image from 'next/image'
import { StyledBlogs, StyledBlogItem, StyledLink, StyledText, StyledTitle, StyledTextBlock, StyledAuthorBlock, StyledTagBlock, StyledTag } from '../../styles/blogs.styled';
import Button from "../../components/Button"

export default async function Blogs({posts, fetchBlogs}) {
        
async function deleteBlog(id) {
      try {
        let data = await fetch(`https://673d146b4db5a341d833f71e.mockapi.io/blogs/${id}`, { method: 'DELETE' })
        let blog = await data.json();
        alert(`Are you sure you want to delete the blog?`)
        alert(`Blog ${blog.title} № ${id} successfully deleted`)
        await fetchBlogs()
      } catch(e) {
        console.log(e.message);
      }
    }

    return (
      <StyledBlogs>
          {posts ? posts.map((post) => (
            <StyledBlogItem key={post.id}>
                <StyledLink href={`/dashboard/blogs/${post.id}`}>
                  <StyledTextBlock>
                    <StyledTitle>{post.title}</StyledTitle>
                    <StyledAuthorBlock>
                      <Image
                        src={post.avatar}
                        alt={post.author}
                        width={35}
                        height={35}
                        priority={false}
                        style={{borderRadius: "50%"}}
                      />
                      {post.author} on {new Date(post.createdAt).toLocaleDateString("en-US", {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </StyledAuthorBlock>
                    <StyledText>{post.text.slice(0, 300)}...</StyledText>
                    <StyledTagBlock>
                      {post.isPopular ? <StyledTag title="Popular">Popular</StyledTag> : null}
                      {post.isEngineering ? <StyledTag title="Engineering" style={{backgroundColor: "#BC8F8F"}} >Engineering</StyledTag> : null}
                      {post.isMarketing ? <StyledTag title="Growth marketing" style={{backgroundColor: "#7FFFD4"}}>Growth marketing</StyledTag> : null}
                      {post.isCompany ? <StyledTag title="Company" style={{backgroundColor: "#b0c4de"}}>Company</StyledTag> : null}
                    </StyledTagBlock>
                  </StyledTextBlock>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    priority={false}
                    style={{borderRadius: "10px"}}
                  />
                
                </StyledLink>
                <StyledLink href={`/dashboard/blogs/${post.id}/edit`} style={{  position:"absolute", top: 15, right: 15, background: "transparent" }}>
                  <Image
                      src="/edit.svg"
                      alt="go edit blog"
                      width={40}
                      height={40}
                      priority={false}
                      title="edit this blog"
                  />
                </StyledLink>
                <Button deleteBlog={() => deleteBlog(post.id)} />               
          </StyledBlogItem>
          )) : null}
        </StyledBlogs>
        
    )
  }