import Link from 'next/link'
import { LinksBlock, LinkStyleDropdown, StyledDropdown } from "../styles/header.styled";

export default function Dropdown({mode}) {
    return (
        <StyledDropdown mode={mode}>
                <Link href="/products" passHref legacyBehavior><LinkStyleDropdown>Products</LinkStyleDropdown></Link>
                <Link href="/pricing" passHref legacyBehavior><LinkStyleDropdown>Pricing</LinkStyleDropdown></Link>
                <Link href="/docs" passHref legacyBehavior><LinkStyleDropdown>Docs</LinkStyleDropdown></Link>
                <Link href="/company" passHref legacyBehavior><LinkStyleDropdown>Company</LinkStyleDropdown></Link>
        </StyledDropdown>
        
    );
}