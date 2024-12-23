import Image from 'next/image'
import Link from 'next/link';

const Blog = async({params}) => {
    const {id} = await params;
    let data = await fetch(`https://673d146b4db5a341d833f71e.mockapi.io/blogs/${id}`)
    let blog = await data.json();
    const {avatar, author, createdAt, text, image, title} = blog;

    const styles = {
        blog: {
            maxWidth: "70rem",
            margin: "0 auto 4rem",
            padding: "3rem  5rem",
            background: "#f7fafc",
            borderRadius: "0 0 1rem 1rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            fontWeight: "bold", 
        },
        title: {
            color: "#696970",
            fontSize: "2rem",
            margin: 0
        },
        author: {
            display: "flex",
            maxWidth: "30rem",
            margin: "0",
            marginBottom: "2rem",
            fontSize: "1.3rem",
            color: "#83838a",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "1rem",
            
        },
        content: {
            display: "flex",
            gap: "3rem",
            color: "#9e9ea3",
            lineHeight: "1.5rem",
        },
        text: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }
    }

    return (
        <main style={styles.blog}>
            <h2 style={styles.title}>{title}</h2>
            <div style={styles.author}>
                <Image
                    src={avatar}
                    alt={author}
                    width={50}
                    height={50}
                    priority={false}
                    style={{borderRadius: "50%"}}
                />
                      {author} on {createdAt.slice(0, createdAt.indexOf("T"))}
            </div>
            <div style={styles.content}>
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={400}
                    priority={false}
                    style={{borderRadius: "1rem"}}
                />
                <div style={styles.text}>
                    <p style={{margin: 0}}>{text}</p>
                    <Link href="/" style={{fontWeight: "normal", color: "#5c86b5", alignSelf: "flex-end"}}>Back to posts</Link>
                </div>
                
            </div>
                
        </main>
    );
}

export default Blog;