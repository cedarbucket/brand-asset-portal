"use client";
import React from "react";
import { Box, Button, Row, ShadowBox, Text } from "../components";
import styled from "styled-components";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { useRouter } from "next/navigation";

const GlowyText = styled(Text)`
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
`;

const featureList = [
  "🚀 Seamless integration with the Next.js App Router, ensuring advanced and powerful routing for your project.",
  " 🛠 Built with TypeScript for a better developer experience and type-safety across your app.",
  "💅 Styled-components for scoped CSS with support for dynamic styling.",
  "🎨 Styled-system for responsive design and theming, allowing flexible layouts and UI consistency.",
  " 🌗 Theme switching capability between Dark and Light modes to provide a personalized experience.",
  `📦 Includes basic components like Box, Row, Column, Input Box, Text Area, Date Range Picker, etc to speed up layout development.`,
];

export default function HomePage() {
  const router = useRouter();

  const handleNavigateToComponentView = () => {
    router.push("/components");
  };
  return (
    <Box
      width={"100%"}
      height={"100%"}
      color="white"
      padding={"3xl"}
      gap={"xl"}
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
          fontSize="4rem"
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
        <Text color="foreground" fontSize="1.3rem" lineHeight="1.1">
          Welcome to the Next.js boilerplate repository! This project includes
          everything you need to start building modern, performant web
          applications with ease.
        </Text>
      </Box>

      <Box justifyContent="center" alignItems={"center"} gap={"l"}>
        <Text fontSize="1.5rem" color="foreground">
          Key Features
        </Text>
        <Row
          width={"100%"}
          flexWrap={"wrap"}
          textAlign="left"
          gap={"2xl"}
          justifyContent={"center"}
        >
          {featureList.map((feature, index) => (
            <ShadowBox width={"30%"} key={index} p={"m"} borderRadius={"s"}>
              <Text color="foreground" fontSize="1.1rem">
                {feature}
              </Text>
            </ShadowBox>
          ))}
        </Row>
        <Box width={"100%"} alignItems={"center"}>
          <Button
            variant="primary"
            width={"50%"}
            onClick={handleNavigateToComponentView}
          >
            Click Here To View Components
          </Button>
        </Box>
      </Box>

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
          v1.0.4
        </Text>
      </Box>
    </Box>
  );
}
