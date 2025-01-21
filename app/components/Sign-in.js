import {logIn, logOut, fetchUser} from "../lib/actions"
import { LinksBlock, LinkStyle, LinkButtonStyle } from "../styles/header.styled";

const SignIn = ({user}) => {
    

    
    return (
        // <LinksBlock style={{gap: "0.5rem"}}>  
        <>
            <form action={async () => {
                await logOut()
              }
            }  style={{appearance: "none"}}
            >
                <LinkButtonStyle type="submit">
                    Sign Out
                </LinkButtonStyle>
            </form>
            <form action={async () => {
                    await logIn()
                    }    
                }
            >
                <LinkButtonStyle type="submit">{user ? user : "Sign In"}</LinkButtonStyle>
            </form>
    {/* </LinksBlock> */}
        </>
    );
}

export default SignIn;