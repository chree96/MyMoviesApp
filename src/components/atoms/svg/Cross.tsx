import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../../styles';

const Cross = (props: any) => {
  const width = props?.width || 24;
  const color = props?.color || colors.solidBlack;

  return (
    <Svg
      width={width}
      height={width}
      fill="none"
      viewBox="0 0 24 24"
      {...props}>
      <Path
        fill={color}
        d="M6.995 7.006a1 1 0 0 0 0 1.415l3.585 3.585-3.585 3.585a1 1 0 1 0 1.414 1.414l3.585-3.585 3.585 3.585a1 1 0 0 0 1.415-1.414l-3.586-3.585 3.586-3.585a1 1 0 0 0-1.415-1.415l-3.585 3.585L8.41 7.006a1 1 0 0 0-1.414 0Z"
      />
    </Svg>
  );
};
export default Cross;
