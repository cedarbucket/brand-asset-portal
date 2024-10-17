import styled from "styled-components";
import { StyledWithConfig } from "@/theme/StyledWithConfig";
import {
  background,
  border,
  color,
  layout,
  space,
  width,
  BackgroundProps,
  BorderProps,
  LayoutProps,
  WidthProps,
} from "styled-system";
import { BASE_COLORS, ThemedColorProps, ThemedSpaceProps } from "@/theme";
import { ChangeEvent } from "react";

export type StyledTextAreaProps = BackgroundProps &
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

export const StyledTextArea = styled.textarea.withConfig(
  StyledWithConfig
)<StyledTextAreaProps>`
  ${width}
  min-height: 100px;
  outline: none;
  font-family: DMSansRegular;
  font-size: 15px;
  padding: 10px;
  resize: none;
  ${background};
  ${color};
  ${border}
  ${layout}
  ${space}
  &::placeholder {
    color: ${(props) => props.placeholderColor || BASE_COLORS.grey};
    font-family: DMSansRegular;
    font-size: 18px;
  }
`;
