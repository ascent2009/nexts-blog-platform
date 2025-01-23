import Image from 'next/image'
import Link from 'next/link';
import "../../../styles/blog.css"

const Blog = async({params}) => {
    
    const {id} = await params;
    let data = await fetch(`https://673d146b4db5a341d833f71e.mockapi.io/blogs/${id}`)
    let blog = await data.json();
    const {avatar, author, createdAt, text, image, title} = blog;

    console.log(new Date(createdAt).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }));

    return (
        <main className="blog">
            <h2 className="blog__title">{title}</h2>
            <div className="blog__author">
                <Image
                    src={avatar}
                    alt={author}
                    width={50}
                    height={50}
                    priority={false}
                    style={{borderRadius: "50%"}}
                />
                      {author} on {new Date(createdAt).toLocaleDateString("en-US", {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
            </div>
            <div className='blog__content'>
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={400}
                    priority={false}
                    style={{borderRadius: "1rem", flexGrow: 1, width: "100%"}}
                />
                <div className='blog__content_text'>
                    <p style={{margin: 0}}>{text}</p>
                    <Link href="/" className="blog__content_link">Back to posts</Link>
                </div>
            </div>
                
        </main>
    );
}

export default Blog;