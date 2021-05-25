import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const PersonSVG = ({isPlayers}) => {
  console.log('PersonSVG =>', isPlayers);
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={isPlayers ? '#E4163A' : '#DADADA'}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9999 4C11.9999 6.21 10.2099 8 7.99989 8C5.78989 8 3.99989 6.21 3.99989 4C3.99989 1.79 5.78989 0 7.99989 0C10.2099 0 11.9999 1.79 11.9999 4ZM-3.05176e-05 14C-3.05176e-05 11.34 5.32997 10 7.99997 10C10.67 10 16 11.34 16 14V15C16 15.55 15.55 16 15 16H0.999969C0.449969 16 -3.05176e-05 15.55 -3.05176e-05 15V14Z"
      />
    </Svg>
  );
};
