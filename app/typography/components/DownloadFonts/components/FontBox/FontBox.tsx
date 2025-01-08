"use client";
import { Box, Button, Row, Text } from "@/components";
import { BASE_FONTS } from "@/theme";
import JSZip from "jszip";

type FontBoxProps = {
  id: string;
  name: string;
  files: Array<string>;
  font: keyof typeof BASE_FONTS;
};

export const FontBox: React.FC<FontBoxProps> = ({ id, name, files, font }) => {
  const handleDownload = async () => {
    try {
      const zip = new JSZip();

      // Create array of fetch promises
      const fetchPromises = files.map(async (filePath) => {
        const response = await fetch(filePath);
        const blob = await response.blob();
        const fileName = filePath.split("/").pop() || "font.ttf";
        zip.file(fileName, blob);
      });

      // Wait for all files to be fetched and added to zip
      await Promise.all(fetchPromises);

      // Generate the zip file
      const content = await zip.generateAsync({ type: "blob" });

      // Create download link and trigger download
      const url = window.URL.createObjectURL(content);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${id}-fonts.zip`;
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading fonts:", error);
    }
  };

  return (
    <Box
      width={["100%", "50%"]}
      height={["50%", "100%"]}
      bg={"black"}
      borderRadius={"m"}
      p={["m", "xl"]}
      gap={"m"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text
        color="white"
        font={font}
        fontSize={[16, 20]}
      >{`Font Name: ${name}`}</Text>
      <Text color="white" font={font} fontSize={[16, 20]}>
        {`Weight: Regular, `}
        <Text font={font}>Bold</Text>
      </Text>
      <Row gap={["s", "l"]} color="white" alignItems={"center"}>
        <Text font={font} fontSize={[40, 40]}>
          H1
        </Text>
        <Text font={font} fontSize={[32, 32]}>
          H2
        </Text>
        <Text font={font} fontSize={[24, 24]}>
          H3
        </Text>
        <Text fontSize={[20, 20]}>Sub Header</Text>
        <Text fontSize={[20, 20]}>Body</Text>
      </Row>
      <Text color="white" font={font} fontSize={[14, 20]}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </Text>
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
      >
        Download Font
      </Button>
    </Box>
  );
};
