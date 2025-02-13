import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../../styles';

function Lens(props: any) {
  const width = props?.width || 30;
  const color = props?.color || colors.solidWhite;

  return (
    <Svg width={width} height={width} viewBox="0 0 129 129" {...props}>
      <Path
        fill={color}
        d="M51.6 96.7c11 0 21-3.9 28.8-10.5l35 35c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-35-35c6.5-7.8 10.5-17.9 10.5-28.8 0-24.9-20.2-45.1-45.1-45.1-24.8 0-45.1 20.3-45.1 45.1 0 24.9 20.3 45.1 45.1 45.1zm0-82c20.4 0 36.9 16.6 36.9 36.9C88.5 72 72 88.5 51.6 88.5S14.7 71.9 14.7 51.6c0-20.3 16.6-36.9 36.9-36.9z"
      />
    </Svg>
  );
}

export default Lens;
