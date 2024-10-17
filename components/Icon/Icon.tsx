import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
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
  faHome,
} from "@fortawesome/free-solid-svg-icons";

type IconProps = {
  name: string;
  size?: SizeProp;
  color: string;
};

const IconMap: Record<string, IconDefinition> = {
  home: faHome,
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
