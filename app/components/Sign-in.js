import {logIn, logOut} from "../lib/actions"
import {LinkButtonStyle, LinkMobileStyle } from "../styles/header.styled";
import Image from "next/image";

const SignIn = ({user}) => {
    

    
    return (
        <>
            <form action={async () => {
                await logOut()
              }
            }  style={{appearance: "none"}}
            >
                <LinkButtonStyle type="submit">
                    Sign Out
                </LinkButtonStyle>
                <LinkMobileStyle type="submit">
                    <Image
                        src="/logout.svg"
                        alt="logout"
                        width={60}
                        height={60}
                        priority={false}
                    />
                </LinkMobileStyle>
            </form>
            <form action={async () => {
                    await logIn()
                    }    
                }
            >
                <LinkButtonStyle type="submit">{user ? user : "Sign In"}</LinkButtonStyle>
                <LinkMobileStyle type="submit">
                    <Image
                        src={user ? "/user.svg" : "/login.svg"}
                        alt="loggedIn"
                        width={60}
                        height={60}
                        priority={false}
                    />
                </LinkMobileStyle>
            </form>
        </>
    );
}

export default SignIn;