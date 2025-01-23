"use client"

import {useState, useRef} from "react"
import Image from "next/image";
import {StyledFormContainer, StyledDate, StyledForm, StyledDiv, StyledLabel, StyledTextarea, StyledButton, StyledButtonLink, StyledButtonBlock} from "../styles/form.styled"
import {StyledInput} from '../styles/dashboard.style';
import "../styles/fileInput.css"

export default function Form() {

    

    const [data, setData] = useState(
        {
            id: (Math.random() * 100).toFixed(0),
            title: '',
            avatar: "",
            author: '',
            createdAt: new Date().toISOString().split('T')[0],
            image: '',
            text: '',
            isPopular: false,
            isEngineering: false,
            isMarketing: false,
            isCompany: false,
        }
    )

    const [checked, setСhecked] = useState(false)

    const imageRef = useRef("");

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value })
    }

    const handleCheckbox = () => {
        setСhecked(!checked);
    }

    async function sendPost() {
        const {title, text, id, avatar, author, createdAt, image, isPopular, isEngineering, isMarketing, isCompany} = data;
        
        const formData = new FormData();
        formData.append("id", id);
        formData.append("title", title);
        formData.append("text", text);
        formData.append("avatar", avatar);
        formData.append("author", author);        
        formData.append("createdAt", createdAt);
        formData.append("image", image);
        formData.append("isPopular", isPopular);
        formData.append("isEngineering", isEngineering);
        formData.append("isMarketing", isMarketing);
        formData.append("isCompany", isCompany);
        
        fetch('https://673d146b4db5a341d833f71e.mockapi.io/blogs', {
            method: 'POST',
            // headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: formData
          }).then(res => {
            if (res.ok) {
                console.log("Your post was successfully published!");
                return res.json();
            }
            // handle error
          }).then(post => {
            alert("Your post was successfully published!");
            // do something with the new task
          }).catch(error => {
            // handle error
            console.error(error.message);
          })
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
            
    }

    return (
        <StyledFormContainer>
        <StyledDate>
            Post № {data.id} on {data.createdAt}
        </StyledDate>
            <br/>
            <br/>
            <br/>
            <strong style={{color: "#5cba9a"}}>Enter your data:</strong>
        <StyledForm 
        onSubmit={sendPost}
        >
            
            <StyledDiv as="div">
                <StyledLabel htmlFor="title">Title</StyledLabel>
                <StyledInput type="text" id="title" name="title" onChange={handleChange} autoComplete="on" style={{fontSize: "1rem" }} required/>
            </StyledDiv>
            
            <StyledDiv as="div" style={{margin: "2rem 0" }}>
                <StyledLabel htmlFor="avatar">Avatar</StyledLabel>
                <StyledInput type="file" id="avatar" name="avatar" accepts=".jpg, .jpeg, .png" className="file-input" style={{border: "none"}} required/>
                <StyledLabel htmlFor="author">Author</StyledLabel>
                <StyledInput type="text" id="author" name="author" onChange={handleChange} autoComplete="on" style={{fontSize: "1rem"}} required/>
            </StyledDiv>
            <StyledDiv as="div" style={{flexDirection: "column", alignItems: "flex-start", gap: "1rem", marginBottom: "2rem" }} >
                <StyledDiv>
                    <StyledLabel htmlFor="image">Image</StyledLabel>
                    <StyledInput type="file" id="image" name="image" accepts=".jpg, .jpeg, .png" ref={imageRef} className="file-input" style={{border: "none"}} required/>
                    <div style={{display: "none"}}>
                      <Image 
                        id="file-preview"
                        src=""
                        alt="preview"
                        width={50}
                        height={50}
                        priority={false}/>
                    </div>
                </StyledDiv>
                <StyledDiv>
                    <StyledLabel htmlFor="text">Content</StyledLabel>
                    <StyledTextarea as="textarea" type="text" id="text" name="text" onChange={handleChange} autoComplete="on" wrap="hard" row={20} required/>
                </StyledDiv>
            </StyledDiv>
            <StyledDiv as="div" style={{flexDirection: "column", gap: "1rem", alignItems: "flex-start", marginBottom: "2rem" }}>
                <StyledDiv>
                    <StyledLabel htmlFor="popular">Popular</StyledLabel>
                    <input type="checkbox" id="popular" name="popular" onChange={handleCheckbox} label="Popular" value={checked}/>
                </StyledDiv>
                <StyledDiv style={{justifyContent: "space-between"}}>
                    <StyledLabel htmlFor="engineering">Engineering</StyledLabel>
                    <input type="checkbox" id="engineering" name="engineering" onChange={handleCheckbox} label="Engineering" value={checked}/>
                </StyledDiv>
                <StyledDiv style={{justifyContent: "space-between"}}>
                    <StyledLabel htmlFor="marketing">Growth marketing</StyledLabel>
                    <input type="checkbox" id="marketing" name="marketing" onChange={handleCheckbox} label="Growth marketing" value={checked}/>
                </StyledDiv>
                <StyledDiv style={{justifyContent: "space-between"}}>
                    <StyledLabel htmlFor="company">Company</StyledLabel>
                    <input type="checkbox" id="company" name="company" onChange={handleCheckbox} label="Company" value={checked}/>
                </StyledDiv>
            </StyledDiv>
            <StyledButtonBlock>
                <StyledButton 
                type="submit"
             >Create post</StyledButton>
             <StyledButtonLink as="a"
            type="button"
            href="/"
             >Cancel</StyledButtonLink>
            </StyledButtonBlock>
            
        </StyledForm>
        </StyledFormContainer>
        )
    }