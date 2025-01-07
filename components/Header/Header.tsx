import { Box } from "../styled";
import { ThemeSwitch } from "../ThemeSwitch";

export const Header = () => {
  return (
    <Box width={"100%"} height={["20vh", "13vh"]} borderRed>
      <ThemeSwitch />
    </Box>
  );
};
