// import { Box, Button, Row, Text } from "@/components";
// import { TSocialPlatform } from "@/utils/types";
// import { useMemo, useState } from "react";

// type TGenericSocialMediaAssetDownloaderProps = {
//   title: string;
//   description: string;
//   data: TSocialPlatform;
// };
// export const GenericSocialMediaAssetDownloader: React.FC<
//   TGenericSocialMediaAssetDownloaderProps
// > = ({ title, description, data }) => {
//   const [selectedVariant, setSelectedVariant] = useState<string>(data[0].id);

//   const handleVariantChange = (id: string) => {
//     setSelectedVariant(id);
//   };

//   const previews = useMemo(
//     () => data.find((c) => c.id === selectedVariant)?.preview,
//     [selectedVariant, data]
//   );

//   return (
//     <Box
//       flexDirection={["column", "row"]}
//       width={"100%"}
//       height={"100%"}
//       p={["m", "l"]}
//       alignItems={"center"}
//       gap={["m", "xl"]}
//       style={{
//         backgroundColor: "rgba(255,255,255,0.07)",
//       }}
//     >
//       <Box
//         width={["100%", "50%"]}
//         height={"100%"}
//         alignItems={["center", "start"]}
//         justifyContent={"center"}
//         gap={["xl", "l"]}
//         p={["m", "l"]}
//       >
//         <Text color="white" fontSize={[24, 40]}>
//           {title}
//         </Text>
//         <Text color="white" fontSize={[16, 20]} textAlign={["center", "start"]}>
//           {description}
//         </Text>

//         <Row flexWrap={"wrap"} justifyContent={"center"} gap={"m"}>
//           {data.map((c, i) => (
//             <Box
//               key={i}
//               backgroundColor={
//                 selectedVariant === c.id ? "white" : "transparent"
//               }
//               p={["s", "m"]}
//               borderRadius={"m"}
//               style={{ cursor: "pointer" }}
//               onClick={() => handleVariantChange(c.id)}
//             >
//               <Text
//                 color={selectedVariant === c.id ? "black" : "white"}
//                 fontSize={[13, 24]}
//                 style={{ userSelect: "none" }}
//               >
//                 {c.label}
//               </Text>
//             </Box>
//           ))}
//         </Row>
//       </Box>
//       <Box
//         width={["100%", "50%"]}
//         height={"100%"}
//         border={"1px solid white"}
//         style={{ backgroundColor: "rgba(50,50,50,1)" }}
//         borderRadius={"m"}
//         gap={["s", "m"]}
//         p={"xs"}
//       >
//         <Row
//           width={"100%"}
//           alignItems={"center"}
//           overflowX={"auto"}
//           justifyContent={
//             previews && previews?.length > 3 ? "flex-start" : "center"
//           }
//         >
//           {previews && previews.length > 0 ? (
//             <Row gap={"m"} px={"m"}>
//               {previews &&
//                 previews.map((p, i) => (
//                   <Box
//                     key={i}
//                     width={["30vw", "15vw"]}
//                     height={["30vw", "15vw"]}
//                     backgroundImage={`url(${p})`}
//                     backgroundPosition={"center"}
//                     backgroundSize={"cover"}
//                     borderRadius={"m"}
//                   ></Box>
//                 ))}
//             </Row>
//           ) : null}
//         </Row>
//         <Button
//           width={"fit-content"}
//           alignSelf={"center"}
//           variant="plain"
//           borderRadius={"m"}
//           border={"1px solid white"}
//           color={"white"}
//           backgroundColor={"black"}
//           px={["l", "xl"]}
//           py={["xs", "m"]}
//           fontSize={[17, 17]}
//         >
//           Download
//         </Button>
//       </Box>
//     </Box>
//   );
// };

import React, { useMemo, useState } from "react";
import { Box, Button, Row, Text } from "@/components";
import JSZip from "jszip";
import { TSocialPlatform } from "@/utils/types";
import { BASE_COLORS } from "@/theme";

type TGenericSocialMediaAssetDownloaderProps = {
  title: string;
  description: string;
  data: TSocialPlatform;
};

export const GenericSocialMediaAssetDownloader: React.FC<
  TGenericSocialMediaAssetDownloaderProps
> = ({ title, description, data }) => {
  const [selectedVariant, setSelectedVariant] = useState<string>(data[0].id);
  const [selectedPreviews, setSelectedPreviews] = useState<Set<number>>(
    new Set()
  );

  const handleVariantChange = (id: string) => {
    setSelectedVariant(id);
    setSelectedPreviews(new Set());
  };

  const previews = useMemo(
    () => data.find((c) => c.id === selectedVariant)?.preview,
    [selectedVariant, data]
  );

  const togglePreviewSelection = (index: number) => {
    setSelectedPreviews((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleDownload = async () => {
    if (!previews || selectedPreviews.size === 0) return;

    const zip = new JSZip();
    const selectedFiles = Array.from(selectedPreviews).map(
      (index) => previews[index]
    );

    try {
      const fetchPromises = selectedFiles.map(async (previewUrl, index) => {
        const response = await fetch(previewUrl);
        const blob = await response.blob();
        const extension = previewUrl.split(".").pop() || "png";
        zip.file(`preview_${index + 1}.${extension}`, blob);
      });

      await Promise.all(fetchPromises);

      const content = await zip.generateAsync({ type: "blob" });
      const downloadUrl = URL.createObjectURL(content);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `${selectedVariant}-assets.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error creating zip file:", error);
    }
  };

  return (
    <Box
      flexDirection={["column", "row"]}
      width="100%"
      height="100%"
      p={["m", "l"]}
      alignItems="center"
      gap={["m", "xl"]}
      style={{
        backgroundColor: "rgba(255,255,255,0.07)",
      }}
    >
      <Box
        width={["100%", "50%"]}
        height="100%"
        alignItems={["center", "start"]}
        justifyContent="center"
        gap={["xl", "l"]}
        p={["m", "l"]}
      >
        <Text color="white" fontSize={[24, 40]}>
          {title}
        </Text>
        <Text color="white" fontSize={[16, 20]} textAlign={["center", "start"]}>
          {description}
        </Text>

        <Row flexWrap="wrap" justifyContent="center" gap="m">
          {data.map((c, i) => (
            <Box
              key={i}
              backgroundColor={
                selectedVariant === c.id ? "white" : "transparent"
              }
              p={["s", "m"]}
              borderRadius="m"
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
        height="100%"
        border="1px solid white"
        style={{ backgroundColor: "rgba(50,50,50,1)" }}
        borderRadius="m"
        gap={["s", "m"]}
        p="xs"
      >
        <Row
          width="100%"
          alignItems="center"
          overflowX="auto"
          justifyContent={
            previews && previews.length > 3 ? "flex-start" : "center"
          }
        >
          {previews && previews.length > 0 ? (
            <Row gap="m" px="m">
              {previews.map((p, i) => (
                <Box
                  key={i}
                  width={["30vw", "15vw"]}
                  height={["30vw", "15vw"]}
                  backgroundImage={`url(${p})`}
                  backgroundPosition="center"
                  backgroundSize="cover"
                  borderRadius="m"
                  position={"relative"}
                  border={
                    selectedPreviews.has(i)
                      ? `2px solid ${BASE_COLORS.success}`
                      : "none"
                  }
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => togglePreviewSelection(i)}
                >
                  {selectedPreviews.has(i) && (
                    <Box
                      position="absolute"
                      top="m"
                      right="m"
                      width="24px"
                      height="24px"
                      borderRadius="circle"
                      backgroundColor="success"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text color="white" fontSize={12}>
                        ✓
                      </Text>
                    </Box>
                  )}
                </Box>
              ))}
            </Row>
          ) : null}
        </Row>
        <Button
          width="fit-content"
          alignSelf="center"
          variant="plain"
          borderRadius="m"
          border="1px solid white"
          color="white"
          backgroundColor="black"
          px={["l", "xl"]}
          py={["xs", "m"]}
          fontSize={[17, 17]}
          onClick={handleDownload}
          disabled={selectedPreviews.size === 0}
          style={{
            opacity: selectedPreviews.size === 0 ? 0.5 : 1,
            cursor: selectedPreviews.size === 0 ? "not-allowed" : "pointer",
          }}
        >
          Download Selected ({selectedPreviews.size})
        </Button>
      </Box>
    </Box>
  );
};

export default GenericSocialMediaAssetDownloader;
