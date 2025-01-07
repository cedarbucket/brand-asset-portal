"use client";
import { Box, CenterBox } from "@/components";
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
    <CenterBox width={"100%"} height={"100%"} borderRed p={["m", "2xl"]}>
      <Box
        width={"100%"}
        height={"100%"}
        border={"1px solid white"}
        borderRadius={"l"}
        flexDirection={["column", "row"]}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
        p={["m", "2xl"]}
      >
        <Box width={["100%", "50%"]} height={"100%"}></Box>
        <LogoSelector colors={colors} />
      </Box>
    </CenterBox>
  );
};
