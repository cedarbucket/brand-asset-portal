"use client";
import styled, { css } from "styled-components";
import {
  space,
  borderRadius,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  color,
  background,
  BackgroundProps,
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  style,
  compose,
  shadow,
  ShadowProps,
  BackgroundColorProps,
} from "styled-system";
import { StyledWithConfig } from "@/theme/StyledWithConfig";
import {
  BASE_COLORS,
  ThemedBorderRadiusProps,
  ThemedColorProps,
  ThemedSpaceProps,
} from "@/theme";

const gap = style({
  prop: "gap",
  key: "space",
  scale: "space",
});

const systemStyles = compose(
  space,
  layout,
  typography,
  color,
  background,
  border,
  flexbox,
  position,
  borderRadius,
  gap,
  shadow
);

export type BoxProps = ThemedSpaceProps &
  ThemedBorderRadiusProps &
  LayoutProps &
  TypographyProps &
  ThemedColorProps &
  BackgroundProps &
  BorderProps &
  FlexboxProps &
  PositionProps &
  BackgroundColorProps &
  ShadowProps & {
    gap?: string | number | string[] | number[];
    borderRed?: boolean;
    cursor?: "pointer";
  };

export const Box = styled.div.withConfig(StyledWithConfig)<BoxProps>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: ${(props) => (props.borderRed ? "1px solid red " : "none")};
  ${(props) =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${systemStyles};
`;

export const CenterBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${flexbox}
`;

export const HoverBox = styled(CenterBox)<BoxProps>`
  &:hover {
    background-color: ${BASE_COLORS.lightGrey};
    cursor: pointer;
  }
`;
