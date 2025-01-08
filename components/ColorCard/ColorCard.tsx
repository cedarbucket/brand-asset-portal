import { BASE_COLORS } from "@/theme";
import { Box, Row, Text } from "../styled";

type ColorCardProps = {
  id: string;
  label: string;
  color: keyof typeof BASE_COLORS;
  hex: string;
};

export const ColorCard: React.FC<ColorCardProps> = ({ label, color, hex }) => {
  const isWhite = color === "white";
  return (
    <Box
      width={["40vw", "15vw"]}
      height={["40vw", "15vw"]}
      borderRadius={"m"}
      bg={color}
      justifyContent={"space-between"}
      py={["s", "l"]}
      px={["s", "l"]}
    >
      <Row
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Text fontSize={[14, 19]} color={isWhite ? "black" : "white"}>
            Color
          </Text>
          <Text fontSize={[18, 24]} color={isWhite ? "black" : "white"}>
            {label}
          </Text>
        </Box>
        {/* <Icon name={"copy"} size="2xs" color={isWhite ? "black" : "white"} /> */}
      </Row>
      <Text fontSize={24} color={isWhite ? "black" : "white"}>
        {hex}
      </Text>
    </Box>
  );
};
