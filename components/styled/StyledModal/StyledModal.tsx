"use client";
import { CenterBox } from "@/components/styled";
import styled, { keyframes } from "styled-components";

const scaleUp = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const StyledModal = styled(CenterBox)`
  animation: ${scaleUp} 0.2s ease-in-out;
`;
