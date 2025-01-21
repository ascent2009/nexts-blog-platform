"use client"

import { BodyContainer } from "./styles/global.styled"; 
// import { Metadata }   from "next";
// export const experimental_ppr = true;
const metadata = {
  title: {
    template: '%s | Blog platform',
    default: 'Blog platform',
  },
  description: "NextJS 15 blog project",}
import { ThemeProvider } from "./components/theme-provider"
import { useTheme } from "next-themes"
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import { HeaderContainer, LogoBlock, LogoTitle, LinksBlock, LinkStyle, StyledMobileMenu, SignInMobileBlock } from "./styles/header.styled";
import SignIn from './components/Sign-in';
import Dropdown from './components/Dropdown';
import Home from "./page"
import {SignInCred} from './components/Sign-in-cred';


export default function RootLayout({ children }) {
  
  const [user, setUser] = useState("");
  const [mode, setMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { setTheme } = useTheme()

  const userName = fetch('https://api.github.com/users/ascent2009')
      .then(response => response.json())
      .then(data => {setUser(data.login)})
      .catch(error => console.error('Error:', error));

  return (
    <html lang="en">
    <BodyContainer mode={mode}>
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
          <Image
              src={mode && "/light.svg" || "/dark.svg"}
              alt="mode"
              width={50}
              height={50}
              priority={false}
              style={{position: "absolute", top: 10, left: 10}}
              title="switch to dark mode"
              onClick={() => {
                setMode(!mode);
                setTheme("dark");
                localStorage.setItem("mode", mode)
              }}
          />
    <HeaderContainer mode={mode}>
        <Link href="/" style={{textDecoration: "none"}}>
          <LogoBlock>
              <Image
                src="/nextjs.svg"
                alt="nextjs logomark"
                width={60}
                height={60}
                priority={false}
              />
              <LogoTitle>NextJS</LogoTitle>
          </LogoBlock>
        </Link>
        <LinksBlock>
          <Link href="/products" passHref legacyBehavior><LinkStyle>Products</LinkStyle></Link>
          <Link href="/pricing" passHref legacyBehavior><LinkStyle>Pricing</LinkStyle></Link>
          <Link href="/docs" passHref legacyBehavior><LinkStyle>Docs</LinkStyle></Link>
          <Link href="/company" passHref legacyBehavior><LinkStyle>Company</LinkStyle></Link>
        </LinksBlock>
        <LinksBlock style={{gap: "0.5rem"}} mode={mode}>
            <SignIn user={user}/>
        </LinksBlock>
        <StyledMobileMenu mode={mode}>
          <Image
                src="/menu-meatballs.svg"
                alt="menu"
                width={80}
                height={80}
                priority={false}
                onClick={() => setOpenMenu(!openMenu)}
          />
        </StyledMobileMenu>
        {openMenu && <Dropdown user={user} />}
          {/* <SignInCred /> */}
      </HeaderContainer>
        {children} 
      {/* </ThemeProvider> */}
    </BodyContainer>
    </html>
  );
}
