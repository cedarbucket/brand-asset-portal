import { Box, Row, Text } from "../styled";

export const Footer = () => {
  return (
    <Row
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      py={"m"}
      px={"m"}
      gap={"l"}
    >
      <Box
        width={"50%"}
        border={"0.5px solid white"}
        display={["none !important", "block !important"]}
        borderRadius={"l"}
        height={"fit-content"}
      />
      <Row
        p={"l"}
        style={{
          border: "1px solid rgba(132,132,132,0.26)",
          backgroundColor: "rgba(132,132,132,0.04)",
        }}
        borderRadius={"m"}
        alignItems={"center"}
        gap={"m"}
      >
        <Text color="white">Designed By Saibbyweb</Text>
        <Box
          backgroundImage={`url("/assets/images/sw_white.png")`}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          width={30}
          height={30}
        />
      </Row>
    </Row>
  );
};
