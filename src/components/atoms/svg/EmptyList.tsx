import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { colors } from '../../../styles';

const EmptyList = (props: any) => {
  const width = props?.width || 200;
  const color = props?.color || colors.solidWhite;

  return (
    <Svg
      xmlSpace="preserve"
      width={width}
      height={width}
      viewBox="0 0 32 32"
      {...props}>
      <G fill={color}>
        <Path d="M21.5 14.75c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM10.5 14.75c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75z" />
      </G>
      <G
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}>
        <G stroke={color}>
          <Path d="M21.5 1.5h-17v29h23v-23" />
          <Path d="m21.5 1.5 5.979 6H21.5V4M14.5 18.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5M20.75 15.5c0 .41.34.75.75.75s.75-.34.75-.75-.34-.75-.75-.75-.75.34-.75.75zM11.25 15.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75z" />
        </G>
        <G stroke={color}>
          <Path d="M21.5 1.5h-17v29h23v-23" />
          <Path d="m21.5 1.5 5.979 6H21.5V4M14.5 18.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5M20.75 15.5c0 .41.34.75.75.75s.75-.34.75-.75-.34-.75-.75-.75-.75.34-.75.75zM11.25 15.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75z" />
        </G>
      </G>
    </Svg>
  );
};
export default EmptyList;
