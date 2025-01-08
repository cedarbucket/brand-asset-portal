"use client";
import { Box, Button, Text } from "@/components";
import { Letterhead } from "@/utils/constants";
import { useState } from "react";
import JSZip from "jszip";

export const DownloadLetterhead = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!Letterhead.filePath) return;

    try {
      setIsDownloading(true);
      const zip = new JSZip();

      // Fetch the PDF file
      const response = await fetch(Letterhead.filePath);
      const blob = await response.blob();

      // Add the PDF to the zip file
      const fileName = Letterhead.filePath.split("/").pop() || "letterhead.pdf";
      zip.file(fileName, blob);

      // Generate the zip file
      const content = await zip.generateAsync({ type: "blob" });

      // Create and trigger download
      const url = window.URL.createObjectURL(content);
      const link = document.createElement("a");
      link.href = url;
      link.download = "letterhead.zip";
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading letterhead:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Box
      flexDirection={["column", "row"]}
      width={"100%"}
      height={"100%"}
      p={["m", "l"]}
      alignItems={"center"}
      gap={["m", "xl"]}
      style={{
        backgroundColor: "rgba(255,255,255,0.07)",
      }}
    >
      <Box
        width={["100%", "50%"]}
        height={"100%"}
        alignItems={["center", "start"]}
        justifyContent={"center"}
        gap={["xl", "2xl"]}
        p={["m", "xl"]}
      >
        <Text color="white" fontSize={[24, 40]}>
          Letterhead
        </Text>
        <Text color="white" fontSize={[16, 20]} textAlign={["center", "start"]}>
          Access the professionally designed letterhead template to ensure all
          official communication reflects our brand identity.
        </Text>
      </Box>
      <Box
        width={["100%", "50%"]}
        height={"100%"}
        border={"1px solid white"}
        style={{ backgroundColor: "rgba(50,50,50,1)" }}
        borderRadius={"m"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={["s", "m"]}
      >
        <Box
          borderRadius={"m"}
          backgroundImage={`url(${Letterhead.preview})`}
          backgroundSize={"cover"}
          backgroundPosition={"top"}
          width={["60vw", "20vw"]}
          height={["30vw", "13vw"]}
        />
        <Button
          width={"fit-content"}
          alignSelf={"center"}
          variant="plain"
          borderRadius={"m"}
          border={"1px solid white"}
          color={"white"}
          backgroundColor={"black"}
          px={["l", "xl"]}
          py={["xs", "m"]}
          fontSize={[17, 17]}
          onClick={handleDownload}
          disabled={isDownloading}
        >
          {isDownloading ? "Downloading..." : "Download"}
        </Button>
      </Box>
    </Box>
  );
};
