"use client";
import { CenterBox } from "@/components/styled";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
 0% { transform: scale(0); }
  25% { transform: scale(1.1); }
  50% { transform: scale(1); }
  75% {transform: scale(1.1);}
  100% {transform: scale(1);}
`;

export const BouncyModal = styled(CenterBox)`
  animation: ${bounce} 0.3s ease-in-out;
`;
