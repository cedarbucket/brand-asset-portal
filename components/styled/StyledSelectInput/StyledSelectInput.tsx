"use client";
import { BASE_BORDER_RADII, BASE_COLORS, BASE_SPACING } from "@/theme";
import styled from "styled-components";

export const StyledSelectInput = styled.select<{
  height?: number;
  boxShadow?: boolean;
}>`
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  padding: ${BASE_SPACING.xs};
  border: 1px ${BASE_COLORS.lightGrey};
  border-radius: ${BASE_BORDER_RADII.s};
  color: ${BASE_COLORS.black};
  font-size: 16px;

  &:focus {
    border-color: red;
    outline: none;
  }
`;
