"use client"

import { StyledContainer } from "./styles/container.styled"; 
import Dashboard from "./dashboard/page";

export default function Home() {
  
  const mode = localStorage.getItem("mode")
  
  return (
    <StyledContainer mode={mode}>
      <Dashboard />
    </StyledContainer>
  );
}
