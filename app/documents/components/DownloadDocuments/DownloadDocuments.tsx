"use client";
import { Box, CenterBox, Row, Button } from "@/components";
import { TDocumentKey } from "@/utils/types";
import { useState } from "react";
import { DownloadBusinessCard } from "./components/DownloadBusinessCard";
import { DownloadLetterhead } from "./components/DownloadLetterhead";
import { DownloadEmailSignature } from "./components/DownloadEmailSignature";
import { DocumentTypes } from "@/utils/constants";

export const DownloadDocuments = () => {
  const [activeComponent, setActiveComponent] =
    useState<TDocumentKey>("business-card");

  const ComponentMap: Record<TDocumentKey, React.FC> = {
    "business-card": DownloadBusinessCard,
    letterhead: DownloadLetterhead,
    "email-signature": DownloadEmailSignature,
  };

  const handleComponentChange = (key: TDocumentKey) => {
    setActiveComponent(key);
  };

  const Component = ComponentMap[activeComponent];

  return (
    <Box
      width={"100%"}
      height={"100%"}
      p={["m", "l"]}
      alignItems={"center"}
      gap={["m", "xl"]}
    >
      <Row
        p={"m"}
        width={["100%", "70%"]}
        justifyContent={["start", "center"]}
        overflowX={["scroll", "auto"]}
      >
        <Row gap={"m"}>
          {DocumentTypes.map((dt, i) => {
            const isActive = dt.key === activeComponent;
            return (
              <Button
                border={"1px solid white"}
                backgroundColor={isActive ? "white" : "black"}
                color={isActive ? "black" : "white"}
                minWidth={"fit-content"}
                px={["m", "l"]}
                py={["m", "l"]}
                borderRadius={["s", "m"]}
                key={i}
                variant="plain"
                fontSize={[14, 18]}
                onClick={() => handleComponentChange(dt.key)}
              >
                {dt.label}
              </Button>
            );
          })}
        </Row>
      </Row>
      <CenterBox
        width={["100%", "70%"]}
        height={"100%"}
        borderRadius={"m"}
        border={"1px solid white"}
        style={{ backgroundColor: "rgba(50, 50, 50, 1)" }}
      >
        <Component />
      </CenterBox>
      ;
    </Box>
  );
};
