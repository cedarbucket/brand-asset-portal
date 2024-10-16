"use client";
import React from "react";
import { Box, Row, Text } from "../components";
import styled from "styled-components";
import { ThemeSwitch } from "@/components/ThemeSwitch";

const GlowyText = styled(Text)`
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
`;

export default function HomePage() {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      color="white"
      padding={"xxxl"}
      gap={"xxl"}
      alignItems={"center"}
      backgroundColor={"background"}
    >
      <Row
        width={"100%"}
        alignItems={"center"}
        justifyContent="center"
        position={"relative"}
      >
        <GlowyText
          color="foreground"
          fontSize="5rem"
          textAlign="center"
          letterSpacing={5}
        >
          Next.js Boilerplate
        </GlowyText>
        <Box position={"absolute"} right={0}>
          <ThemeSwitch />
        </Box>
      </Row>

      <Box width={"80%"} textAlign="center">
        <Text color="foreground" fontSize="2rem" lineHeight="1.2">
          Welcome to the Next.js boilerplate repository! This project includes
          everything you need to start building modern, performant web
          applications with ease.
        </Text>
      </Box>

      <Row justifyContent="center">
        <Box textAlign="left" gap={"l"}>
          <Text fontSize="1.5rem" color="foreground">
            Key Features
          </Text>
          <Text color="foreground" fontSize="1.1rem">
            🚀 Seamless integration with the Next.js App Router, ensuring
            advanced and powerful routing for your project.
          </Text>
          <Text color="foreground" fontSize="1.1rem">
            🛠 Built with TypeScript for a better developer experience and
            type-safety across your app.
          </Text>
          <Text color="foreground" fontSize="1.1rem">
            💅 Styled-components for scoped CSS with support for dynamic
            styling.
          </Text>
          <Text color="foreground" fontSize="1.1rem">
            🎨 Styled-system for responsive design and theming, allowing
            flexible layouts and UI consistency.
          </Text>
          <Text color="foreground" fontSize="1.1rem">
            🌗 Theme switching capability between Dark and Light modes to
            provide a personalized experience.
          </Text>
          <Text color="foreground" fontSize="1.1rem">
            📦 Includes basic components like <strong>Box</strong> and{" "}
            <strong>Row</strong> to speed up layout development.
          </Text>
        </Box>
      </Row>

      <Box alignItems={"center"} gap={"l"}>
        <Text fontSize="1.5rem" color="foreground">
          How to Use
        </Text>
        <Text color="foreground" fontSize="1.1rem" lineHeight="1.6">
          Clone the repository, install the dependencies, and get started
          building your Next.js app.
        </Text>
        <Box bg="grey" borderRadius="m" paddingX={"xl"} py={"m"}>
          <Text
            color="foreground"
            as="code"
            fontSize="1rem"
            display="block"
            lineHeight="1.8"
          >
            git clone
            https://github.com/wajahatbanday/nextjs-styled-boilerplate.git
            <br />
            cd nextjs-boilerplate
            <br />
            yarn
            <br />
            yarn dev
          </Text>
        </Box>
      </Box>

      <Box textAlign="center" width="100%" gap={"xs"}>
        <Text color="foreground" fontSize="0.875rem">
          Created by Wajahat Banday
        </Text>
        <Text color="foreground" fontSize="0.875rem">
          github: /wajahatbanday
        </Text>
        <Text color="foreground" fontSize="0.875rem">
          v1.0
        </Text>
      </Box>
    </Box>
  );
}
