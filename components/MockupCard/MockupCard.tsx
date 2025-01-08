import { Box } from "../styled";

type MockupCardProps = {
  id: string;
  filePath: string;
  preview: string;
};

export const MockupCard: React.FC<MockupCardProps> = ({ preview }) => {
  return (
    <Box
      width={["80vw", "17vw"]}
      height={["80vw", "17vw"]}
      backgroundImage={`url(${preview})`}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      borderRadius={"m"}
    />
  );
};
