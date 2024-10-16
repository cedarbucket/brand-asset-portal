import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCirclePlay,
  faWallet,
  faGear,
  faHeadphones,
  faRightFromBracket,
  faXmark,
  faPenToSquare,
  faCircleExclamation,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";

type IconProps = {
  name: string;
  size?: "1x" | "2x" | "3x" | "4x" | "5x";
  color: string;
};

const IconMap: Record<string, IconDefinition> = {
  advertisement: faCirclePlay,
  wallet: faWallet,
  settings: faGear,
  support: faHeadphones,
  logout: faRightFromBracket,
  close: faXmark,
  edit: faPenToSquare,
  error: faCircleExclamation,
  upload: faArrowUpFromBracket,
};

export const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  const icon = IconMap[name];
  return (
    <FontAwesomeIcon icon={icon} size={size ? size : "1x"} color={color} />
  );
};
