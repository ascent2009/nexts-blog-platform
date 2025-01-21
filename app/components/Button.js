"use client"
import Image from 'next/image'

const Button = ({deleteBlog}) => {

    return (
        <button style={{
            position: "absolute",
            bottom: 15,
            right: 15,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            width: "100px",
            height: "100px",
        }}>
            <Image
                    src="/trash.svg"
                    alt="delete"
                    width={40}
                    height={40}
                    priority={false}
                    
                    title="remove this blog"
                    onClick={deleteBlog}
                />
        </button>
    );
};

export default Button;