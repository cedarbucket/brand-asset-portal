"use client";
import { HeaderLinks } from "@/utils/constants";
import { Box, Row, Text } from "../styled";
import { Navlink } from "../Navlink";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <Box
      width={"100%"}
      py={"m"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={["s", "m"]}
    >
      <Text color="white" fontSize={[20, 32]}>
        Branding Asset
      </Text>

      <Row
        gap={["l", "4xl"]}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
      >
        <Row alignItems={"center"} width={"40%"} justifyContent={"flex-end"}>
          <Text color="white" fontSize={[22, 72]}>
            Cedar Bucket
          </Text>
        </Row>
        <Box
          backgroundImage={`url("/assets/images/x.png")`}
          width={[18, 44]}
          height={[23, 57]}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
        />
        <Row alignItems={"center"} width={"40%"} justifyContent={"flex-start"}>
          <Text color="white" fontSize={[22, 72]}>
            Saibbyweb
          </Text>
        </Row>
      </Row>

      <Text color="white" fontSize={[16, 24]}>
        Complete Brand Identity Package
      </Text>

      <Row
        width={"100%"}
        justifyContent={["flex-start", "center"]}
        overflowX={"scroll"}
        px={["m", "none"]}
        py={"m"}
      >
        <Row>
          {HeaderLinks.map((l, i) => (
            <Navlink
              key={i}
              isActive={pathname === l.href}
              label={l.label}
              href={l.href}
            />
          ))}
        </Row>
      </Row>
    </Box>
  );
};
