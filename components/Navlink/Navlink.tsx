import Link from "next/link";
import { Box, Text } from "../styled";

type NavlinkProps = {
  isActive: boolean;
  label: string;
  href: string;
};

export const Navlink: React.FC<NavlinkProps> = ({ isActive, label, href }) => {
  return (
    <Box
      minWidth={"fit-content"}
      px={["m", "l"]}
      py={["s", "m"]}
      backgroundColor={isActive ? "white" : "black"}
      borderRadius={"s"}
    >
      <Link href={href} style={{ textDecoration: "none" }}>
        <Text fontSize={[16, 20]} color={isActive ? "black" : "white"}>
          {label}
        </Text>
      </Link>
    </Box>
  );
};
