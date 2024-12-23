/* eslint-disable @next/next/no-async-client-component */
"use client"

// import Link from 'next/link';
import Image from 'next/image'
import { StyledBlogs, StyledBlogItem, StyledLink, StyledText, StyledTitle, StyledTextBlock, StyledAuthorBlock, StyledTagBlock, StyledTag } from '../../styles/blogs.styled';

export default async function Blogs({posts}) {
        

    // const filteredPosts = posts.filter(post => post["isEngineering"] === true);
    // const foundPosts = posts.filter(post => post.title.includes("al"));


    
    return (
      <StyledBlogs>
          {posts.map((post) => (
            <StyledBlogItem key={post.id}>
              {/* <Link href={`/dashboard/blogs/${post.id}`}> */}
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
                      {post.author} on {post.createdAt.slice(0, post.createdAt.indexOf("T"))}
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
            {/* </Link> */}
          </StyledBlogItem>
          ))}
      </StyledBlogs>
        
    )
  }