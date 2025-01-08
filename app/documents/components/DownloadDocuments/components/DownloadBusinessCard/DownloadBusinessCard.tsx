"use client";
import { Box, Button, Row, Text } from "@/components";
import { BusinessCards } from "@/utils/constants";
import { useState } from "react";
import JSZip from "jszip";

export const DownloadBusinessCard = () => {
  const [selectedVariant, setSelectedVariant] = useState<string>("standard");
  const [isDownloading, setIsDownloading] = useState(false);

  const handleVariantChange = (id: string) => {
    setSelectedVariant(id);
  };

  const handleDownload = async () => {
    const selectedCard = BusinessCards.find((c) => c.id === selectedVariant);
    if (!selectedCard?.filePath) return;

    try {
      setIsDownloading(true);
      const zip = new JSZip();

      // Fetch the PDF file
      const response = await fetch(selectedCard.filePath);
      const blob = await response.blob();

      // Add the PDF to the zip file
      const fileName =
        selectedCard.filePath.split("/").pop() || "business-card.pdf";
      zip.file(fileName, blob);

      // Generate the zip file
      const content = await zip.generateAsync({ type: "blob" });

      // Create and trigger download
      const url = window.URL.createObjectURL(content);
      const link = document.createElement("a");
      link.href = url;
      link.download = `business-card-${selectedVariant}.zip`;
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading business card:", error);
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
          Logo Details
        </Text>
        <Text color="white" fontSize={[16, 20]} textAlign={["center", "start"]}>
          This section contains variants of logos and representation of logos in
          different colors
        </Text>

        <Row flexWrap={"wrap"} justifyContent={"center"} gap={"m"}>
          {BusinessCards.map((c, i) => (
            <Box
              key={i}
              backgroundColor={
                selectedVariant === c.id ? "white" : "transparent"
              }
              p={["s", "m"]}
              borderRadius={"m"}
              style={{ cursor: "pointer" }}
              onClick={() => handleVariantChange(c.id)}
            >
              <Text
                color={selectedVariant === c.id ? "black" : "white"}
                fontSize={[13, 24]}
                style={{ userSelect: "none" }}
              >
                {c.label}
              </Text>
            </Box>
          ))}
        </Row>
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
          backgroundImage={`url(${
            BusinessCards.find((c) => c.id === selectedVariant)?.preview
          })`}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
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
