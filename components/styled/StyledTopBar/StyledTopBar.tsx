"use client";
import styled from "styled-components";
import { Row } from "../Row";

export const StyledTopBar = styled(Row)`
  transition: width 0.1s ease-in-out;
  transition: opacity 0.1s ease-in-out;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Adjust the values as needed */

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
