"use client";
import styled from "styled-components";
import { Row } from "../Row";

import { BASE_COLORS, BASE_SPACING } from "@/theme";

export const StyledSideBarNavLink = styled(Row)`
  border-radius: ${BASE_SPACING.s}px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  gap: 15px;
  align-items: center;
  &:hover {
    background-color: ${BASE_COLORS.lightGrey};
  }
  cursor: pointer;
`;
