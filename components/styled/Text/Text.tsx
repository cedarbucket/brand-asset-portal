"use client";
import {
  ThemedBorderRadiusProps,
  ThemedColorProps,
  ThemedSpaceProps,
} from "@/theme";

import { AppThemeWeights, AppThemeFonts, AppTextVariants } from "@/theme";
import { StyledWithConfig } from "@/theme/StyledWithConfig";
import styled, { keyframes } from "styled-components";
import {
  width,
  WidthProps,
  height,
  HeightProps,
  space,
  SpaceProps,
  color,
  typography,
  TypographyProps,
  LayoutProps,
  border,
  BorderProps,
  background,
  BackgroundProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  system,
  variant,
} from "styled-system";

const customTypography = system({
  font: {
    property: "fontFamily",
    scale: "fonts",
  },
  weight: {
    property: "fontWeight",
    scale: "fontWeights",
  },
  size: {
    property: "fontSize",
    scale: "fontSizes",
  },
});

type ResponsiveValue<T> = T | Array<T | null> | { [breakpoint: string]: T };

type TextProps = WidthProps &
  HeightProps &
  SpaceProps &
  ThemedColorProps &
  ThemedSpaceProps &
  ThemedBorderRadiusProps &
  TypographyProps &
  LayoutProps &
  BorderProps &
  BackgroundProps &
  PositionProps &
  ShadowProps & {
    font?: AppThemeFonts;
    weight?: AppThemeWeights;
    size?: ResponsiveValue<number | string>;
    variant?: AppTextVariants;
  };

export const Text = styled.span.withConfig(StyledWithConfig)<TextProps>`
  ${width}
  ${height}
  ${space}
  ${color}
  ${typography}
  ${border}
  ${background}
  ${position}
  ${shadow}
  ${customTypography}
  ${variant({
    scale: "textVariants", // This should match the key in your theme
  })}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const OpacityText = styled(Text)`
  animation: ${fadeIn} 1s ease-in-out;
`;
