import { Box, CenterBox, Text } from "@/components";
import { Fonts } from "@/utils/constants";
import { FontBox } from "./components/FontBox";

export const DownloadFonts = () => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      p={["m", "2xl"]}
      alignItems={"center"}
      gap={["m", "xl"]}
    >
      <Text color="white" fontSize={[24, 40]} textAlign={["center", "left"]}>
        Visual Harmony Through Fonts
      </Text>
      <Text color="white" fontSize={[16, 20]} textAlign={["center", "left"]}>
        Introduces the importance of typography in creating a cohesive brand
        identity.
      </Text>
      <CenterBox
        width={["100%", "70%"]}
        height={"100%"}
        borderRadius={"m"}
        border={"1px solid white"}
        style={{ backgroundColor: "rgba(50, 50, 50, 1)" }}
      >
        <Box
          width={"100%"}
          height={"100%"}
          flexDirection={["column", "row"]}
          p={["s", "m"]}
          gap={["s", "m"]}
        >
          {Fonts.map((f) => (
            <FontBox key={f.id} {...f} />
          ))}
        </Box>
      </CenterBox>
    </Box>
  );
};
