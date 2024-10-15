"use client";
import { CenterBox } from "@/components/styled";
import styled from "styled-components";

export const GlassBox = styled(CenterBox)`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`;

export const WhiteGlassBox = styled(CenterBox)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  z-index: 1000;
`;

type BlurBoxProps = {
  background: string;
};

export const BlurBox = styled(CenterBox)<BlurBoxProps>`
  background: ${(props) => props.background};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  z-index: 1000;
`;
