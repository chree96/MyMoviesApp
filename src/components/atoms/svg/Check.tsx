import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../../styles';

const Check = (props: any) => {
  const width = props?.width || 24;
  const color = props?.color || colors.solidWhite;

  return (
    <Svg
      width={width}
      height={width}
      fill="none"
      viewBox="0 0 24 24"
      {...props}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 12.611 8.923 17.5 20 6.5"
      />
    </Svg>
  );
};
export default Check;
