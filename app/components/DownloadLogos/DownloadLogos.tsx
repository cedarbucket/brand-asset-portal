"use client";
import { Box, CenterBox, Row, Text } from "@/components";
import { LogoSelector } from "./components/LogoSelector";
import { TLogoVariants } from "@/utils/types";
import { LogoVariants } from "@/utils/constants";
import { useState } from "react";

export const DownloadLogos = () => {
  const [selectedVariant, setSelectedVariant] =
    useState<keyof TLogoVariants>("pure_pines");

  const LogoVariantMap: Record<
    keyof TLogoVariants,
    TLogoVariants[keyof TLogoVariants]
  > = {
    pure_pines: LogoVariants.pure_pines,
    pine_plate: LogoVariants.pine_plate,
    full_identity: LogoVariants.full_identity,
    signature_text: LogoVariants.signature_text,
  };

  const handleVariantChange = (variant: keyof TLogoVariants) => {
    setSelectedVariant(variant);
  };

  const colors = LogoVariantMap[selectedVariant].colors;

  return (
    <CenterBox width={"100%"} height={"100%"} p={["m", "2xl"]}>
      <Box
        width={"100%"}
        height={"100%"}
        border={"1px solid white"}
        borderRadius={"l"}
        flexDirection={["column", "row"]}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
        p={["m", "2xl"]}
      >
        <Box
          width={["100%", "50%"]}
          height={"100%"}
          alignItems={["center", "start"]}
          justifyContent={"center"}
          gap={["xl", "2xl"]}
        >
          <Text color="white" fontSize={[24, 40]}>
            Logo Details
          </Text>
          <Text color="white" fontSize={[16, 20]} textAlign={"center"}>
            This section contains variants of logos and representation of logos
            in different colors
          </Text>

          <Row flexWrap={"wrap"} justifyContent={"center"} gap={"m"}>
            {Object.keys(LogoVariants).map((key) => (
              <Box
                key={key}
                backgroundColor={
                  selectedVariant === key ? "white" : "transparent"
                }
                p={["s", "m"]}
                borderRadius={"m"}
                style={{ cursor: "pointer" }}
                onClick={() => handleVariantChange(key as keyof TLogoVariants)}
              >
                <Text
                  color={selectedVariant === key ? "black" : "white"}
                  fontSize={[13, 24]}
                  style={{ userSelect: "none" }}
                >
                  {LogoVariants[key as keyof typeof LogoVariants].name}
                </Text>
              </Box>
            ))}
          </Row>
        </Box>
        <LogoSelector colors={colors} />
      </Box>
    </CenterBox>
  );
};
