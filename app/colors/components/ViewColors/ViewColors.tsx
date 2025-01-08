import { Box, CenterBox, ColorCard, Row, Text } from "@/components";
import { Colors } from "@/utils/constants";

export const ViewColors = () => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      p={["m", "2xl"]}
      borderRed
      alignItems={"center"}
      gap={["m", "xl"]}
    >
      <Text color="white" fontSize={[24, 40]}>
        Brand Colors
      </Text>
      <Text color="white" fontSize={[16, 20]}>
        Defining Our Visual Identity Through Colors.
      </Text>
      <CenterBox
        width={["100%", "100%"]}
        height={"100%"}
        borderRadius={"m"}
        border={"1px solid white"}
        style={{ backgroundColor: "rgba(50, 50, 50, 1)" }}
      >
        <Row
          display={["none !important", "flex !important"]}
          flexDirection={"row"}
          width={"100%"}
          height={"100%"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          {Colors.map((c) => (
            <ColorCard key={c.id} {...c} />
          ))}
        </Row>
        <Row
          display={["flex !important", "none !important"]}
          flexDirection={"row"}
          flexWrap={"wrap"}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"l"}
        >
          {Colors.map((c) => (
            <ColorCard key={c.id} {...c} />
          ))}
        </Row>
      </CenterBox>
    </Box>
  );
};
