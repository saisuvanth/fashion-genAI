import { chakra } from "@chakra-ui/react";
import { theme as proTheme } from "@chakra-ui/pro-theme";

export const Logo = ({width,height,...props}) => (
  <chakra.svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>medical</title>
    <path
      d="M31,46H17a3,3,0,0,1-3-3V34H5a3,3,0,0,1-3-3V17a3,3,0,0,1,3-3h9V5a3,3,0,0,1,3-3H31a3,3,0,0,1,3,3v9h9a3,3,0,0,1,3,3V31a3,3,0,0,1-3,3H34v9A3,3,0,0,1,31,46ZM18,42H30V30H42V18H30V6H18V18H6V30H18V42Z"
      fill="#805AD5"
    />
    <rect width={width} height={height} fill="none" />
  </chakra.svg>
);
