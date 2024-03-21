import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { colors } from '../../../styles';

const AddCircle = (props: any) => {
  const width = props?.width || 24;
  const color = props?.color || colors.solidWhite;

  return (
    <Svg
      width={width}
      height={width}
      fill="none"
      viewBox="0 0 24 24"
      {...props}>
      <Circle cx={12} cy={12} r={10} stroke={color} strokeWidth={1.5} />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 12h-3m0 0H9m3 0V9m0 3v3"
      />
    </Svg>
  );
};
export default AddCircle;
