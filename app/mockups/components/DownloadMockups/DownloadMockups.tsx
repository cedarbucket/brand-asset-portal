import { Box, Text, CenterBox, Row } from "@/components";
import { MockupCard } from "@/components/MockupCard";
import { Mockups } from "@/utils/constants";

export const DownloadMockups = () => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      p={["m", "2xl"]}
      alignItems={"center"}
      gap={["m", "xl"]}
    >
      <Text color="white" fontSize={[24, 40]} textAlign={["center", "left"]}>
        Visualizing the Brand in Real-World Applications
      </Text>
      <Text color="white" fontSize={[16, 20]} textAlign={["center", "left"]}>
        {
          "This section showcases how the brand's visual identity comes to life across various touchpoints, ensuring consistency and coherence in every interaction."
        }
      </Text>
      <CenterBox
        width={["100%", "70%"]}
        height={"100%"}
        borderRadius={"m"}
        border={"1px solid white"}
        style={{ backgroundColor: "rgba(50, 50, 50, 1)" }}
      >
        <Row
          display={["none !important", "flex !important"]}
          justifyContent={Mockups.length > 3 ? "start" : "center"}
          overflowX={"auto"}
          width={"100%"}
          height={"100%"}
          p={["s", "m"]}
          gap={["s", "m"]}
        >
          <Row gap={"xl"}>
            {Mockups.map((m, i) => (
              <MockupCard key={i} {...m} />
            ))}
          </Row>
        </Row>
        <Row
          display={["flex !important", "none !important"]}
          justifyContent={"start"}
          overflowX={"auto"}
          width={"100%"}
          height={"100%"}
          p={["s", "m"]}
          gap={["s", "m"]}
        >
          <Row gap={"l"}>
            {Mockups.map((m, i) => (
              <MockupCard key={i} {...m} />
            ))}
          </Row>
        </Row>
      </CenterBox>
    </Box>
  );
};
