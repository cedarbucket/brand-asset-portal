"use client";

import { AppButtonVariants, BASE_COLORS } from "@/theme";
import { StyledWithConfig } from "@/theme/StyledWithConfig";
import styled from "styled-components";
import {
  typography,
  space,
  background,
  color,
  border,
  layout,
  variant,
  flex,
  flexbox,
  TypographyProps,
  SpaceProps,
  BackgroundProps,
  ColorProps,
  BorderProps,
  LayoutProps,
  FlexProps,
  FlexboxProps,
} from "styled-system";

type ButtonProps = TypographyProps &
  SpaceProps &
  BackgroundProps &
  ColorProps &
  LayoutProps &
  FlexProps &
  FlexboxProps &
  BorderProps & {
    variant?: AppButtonVariants;
  };

export const Button = styled.button.withConfig(StyledWithConfig)<ButtonProps>`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  ${typography}
  ${space}
  ${background}
  ${color}
  ${border}
  ${layout}
  ${flex}
  ${flexbox}
  cursor: pointer;
  ${variant({
    scale: "buttonVariants",
  })}
  &:hover {
    background-color: ${BASE_COLORS.lightGrey};
    color: black;
  }
`;
