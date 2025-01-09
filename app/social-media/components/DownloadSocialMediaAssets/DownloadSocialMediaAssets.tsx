"use client";
import { Box, Button, CenterBox, Row } from "@/components";
import { TSocialMediaPlatformKey } from "@/utils/types";
import { useState } from "react";
import { DownloadFacebookAssets } from "./components/DownloadFacebookAssets";
import { DownloadInstagramAssets } from "./components/DownloadInstagramAssets";
import { DownloadLinkedinAssets } from "./components/DownloadLinkedinAssets";
import { SocialMediaPlatforms } from "@/utils/constants";

export const DownloadSocialMediaAssets = () => {
  const [activeComponent, setActiveComponent] =
    useState<TSocialMediaPlatformKey>("facebook");

  const ComponentMap: Record<TSocialMediaPlatformKey, React.FC> = {
    facebook: DownloadFacebookAssets,
    instagram: DownloadInstagramAssets,
    linkedin: DownloadLinkedinAssets,
  };

  const handleComponentChange = (key: TSocialMediaPlatformKey) => {
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
          {SocialMediaPlatforms.map((smp, i) => {
            const isActive = smp.key === activeComponent;
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
                onClick={() => handleComponentChange(smp.key)}
              >
                {smp.label}
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
    </Box>
  );
};
