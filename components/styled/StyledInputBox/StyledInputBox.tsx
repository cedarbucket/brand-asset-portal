"use client";
import { ChangeEvent } from "react";
import {
  BASE_COLORS,
  BASE_SPACING,
  ThemedColorProps,
  ThemedSpaceProps,
} from "@/theme";
import { StyledWithConfig } from "@/theme/StyledWithConfig";
import styled from "styled-components";
import {
  background,
  layout,
  space,
  border,
  BackgroundProps,
  BorderProps,
  LayoutProps,
  color,
  width,
  WidthProps,
} from "styled-system";

export type StyledInputBoxProps = BackgroundProps &
  BorderProps &
  LayoutProps &
  ThemedSpaceProps &
  ThemedColorProps &
  WidthProps & {
    placeholderColor?: string;
    type?: string;
    name?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    value?: unknown;
    placeholder?: string;
    height?: string;
    borderRadius?: string;
  };

export const StyledInputBox = styled.input.withConfig(
  StyledWithConfig
)<StyledInputBoxProps>`
  ${width}
  outline: none;
  font-family: DMSansRegular;
  font-size: 15px;
  padding-left: ${BASE_SPACING.l}px;
  ${border}
  ${background}
  ${layout}
  ${space}
  ${color}
  &::placeholder {
    color: ${(props) => props.placeholderColor || BASE_COLORS.grey};
    font-family: DMSansRegular;
    font-size: 18px;
  }
  &::-webkit-file-upload-button {
    color: ${BASE_COLORS.white};
    cursor: pointer;
    height: 100%;
    border: none;
    border-radius: ${BASE_SPACING.s}px;
    margin-right: ${BASE_SPACING.l}px;
    padding-left: ${BASE_SPACING.l}px;
    padding-right: ${BASE_SPACING.l}px;
  }
`;
