// import { Box, CenterBox, Text, Row, Button } from "@/components";
// import { TLogoColor } from "@/utils/types";
// import Image from "next/image";
// type LogoSelectorProps = {
//   colors: TLogoColor[];
// };

// export const LogoSelector: React.FC<LogoSelectorProps> = ({ colors }) => {
//   if (!colors || colors.length === 0) {
//     return (
//       <CenterBox
//         width={["100%", "50%"]}
//         height={"100%"}
//         borderRadius={"m"}
//         border={"1px solid white"}
//         style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
//       >
//         <Text color="white" fontSize={18}>
//           No Colors Available
//         </Text>
//       </CenterBox>
//     );
//   }

//   return (
//     <Box
//       width={["100%", "50%"]}
//       height={"100%"}
//       borderRadius={"m"}
//       border={"1px solid white"}
//       style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
//     >
//       <Box
//         width={"100%"}
//         height={"100%"}
//         display={["none !important", "flex !important"]}
//         justifyContent={"space-between"}
//         p={"l"}
//       >
//         <Row width={"100%"} overflowX={"auto"}>
//           <Row gap={"l"} p={"xs"}>
//             {colors.map((c) => (
//               <Box
//                 key={c.id}
//                 minWidth={"12vw"}
//                 minHeight={"12vw"}
//                 borderRadius={"m"}
//               >
//                 <Image
//                   src={c.src}
//                   alt={c.id}
//                   style={{
//                     objectFit: "cover",
//                     borderRadius: "inherit",
//                     width: "100%",
//                     height: "100%",
//                   }}
//                 />
//               </Box>
//             ))}
//           </Row>
//         </Row>
//         <Box alignItems={"center"}>
//           <Button variant="primary" width={"fit-content"}>
//             Download
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

import { Box, CenterBox, Text, Row, Button } from "@/components";
import { TLogoColor } from "@/utils/types";
import Image from "next/image";
import { useState, useCallback } from "react";
import JSZip from "jszip";
import { BASE_COLORS } from "@/theme";

type LogoSelectorProps = {
  colors: TLogoColor[];
};

export const LogoSelector: React.FC<LogoSelectorProps> = ({ colors }) => {
  const [selectedColors, setSelectedColors] = useState<Set<string>>(new Set());

  const toggleSelection = useCallback((colorId: string) => {
    setSelectedColors((prev) => {
      const newSelection = new Set(prev);
      if (newSelection.has(colorId)) {
        newSelection.delete(colorId);
      } else {
        newSelection.add(colorId);
      }
      return newSelection;
    });
  }, []);

  const handleDownload = async () => {
    if (selectedColors.size === 0) return;

    const zip = new JSZip();

    // Create a folder in the zip for the logos
    const logoFolder = zip.folder("logos");

    // Add each selected logo to the zip
    const downloadPromises = Array.from(selectedColors).map(async (colorId) => {
      const color = colors.find((c) => c.id === colorId);
      if (!color) return;

      try {
        const response = await fetch(color.src);
        const blob = await response.blob();
        // Use the color id or a custom name for the file
        logoFolder?.file(`${color.id}.png`, blob);
      } catch (error) {
        console.error(`Error downloading ${color.id}:`, error);
      }
    });

    try {
      await Promise.all(downloadPromises);
      const content = await zip.generateAsync({ type: "blob" });

      // Create and trigger download
      const downloadUrl = URL.createObjectURL(content);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "logos.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error creating zip:", error);
    }
  };

  if (!colors || colors.length === 0) {
    return (
      <CenterBox
        width={["100%", "50%"]}
        height={"100%"}
        borderRadius={"m"}
        border={"1px solid white"}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
      >
        <Text color="white" fontSize={18}>
          No Colors Available
        </Text>
      </CenterBox>
    );
  }

  return (
    <Box
      width={["100%", "50%"]}
      height={"100%"}
      borderRadius={"m"}
      border={"1px solid white"}
      style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
    >
      <Box
        width={"100%"}
        height={"100%"}
        display={["flex !important", "flex !important"]}
        justifyContent={"space-between"}
        p={"l"}
      >
        <Row width={"100%"} overflowX={"auto"}>
          <Row gap={"l"} p={"xs"}>
            {colors.map((c) => (
              <Box
                key={c.id}
                minWidth={["25vw", "12vw"]}
                minHeight={["25vw", "12vw"]}
                borderRadius={"m"}
                onClick={() => toggleSelection(c.id)}
                style={{
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <Image
                  src={c.src}
                  alt={c.id}
                  width={100}
                  height={100}
                  style={{
                    objectFit: "cover",
                    borderRadius: "inherit",
                    width: "100%",
                    height: "100%",
                    border: selectedColors.has(c.id)
                      ? `2px solid ${BASE_COLORS.success}`
                      : "none",
                  }}
                />
                {selectedColors.has(c.id) && (
                  <CenterBox
                    position="absolute"
                    top="8px"
                    right="8px"
                    width={"20px"}
                    height={"20px"}
                    borderRadius="circle"
                    backgroundColor="success"
                  >
                    <Text color="white" fontSize="12px">
                      ✓
                    </Text>
                  </CenterBox>
                )}
              </Box>
            ))}
          </Row>
        </Row>
        <Box alignItems={"center"}>
          <Button
            variant="primary"
            width={"fit-content"}
            onClick={handleDownload}
            disabled={selectedColors.size === 0}
          >
            Download {selectedColors.size > 0 ? `(${selectedColors.size})` : ""}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
