import { Box, CenterBox, Text, Row } from "@/components";
import { TLogoColor } from "@/utils/types";
import Image from "next/image";
type LogoSelectorProps = {
  colors: TLogoColor[];
};

export const LogoSelector: React.FC<LogoSelectorProps> = ({ colors }) => {
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
        display={["none !important", "flex !important"]}
      >
        <Box width={"100%"} p={"l"} alignItems={"center"}>
          <Row width={"100%"} overflowX={"auto"}>
            <Row gap={"l"} p={"xs"}>
              {colors.map((c) => (
                <Box
                  key={c.id}
                  minWidth={"12vw"}
                  minHeight={"12vw"}
                  borderRadius={"m"}
                  backgroundImage={`url(${c.src})`}
                  backgroundSize={"cover"}
                  backgroundPosition={"center"}
                  borderRed
                >
                  {/* <Image
                    src={c.src}
                    alt={c.id}
                    fill
                    style={{ objectFit: "cover", borderRadius: "inherit" }}
                  /> */}
                </Box>
              ))}
            </Row>
          </Row>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};
