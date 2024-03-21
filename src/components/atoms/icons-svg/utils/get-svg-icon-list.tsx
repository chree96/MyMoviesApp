import React from 'react';
import { AddCircle, Check, Cross, Favorites, Heart, Lens } from '../../svg';

export const getSvgIconList: any = (
  width?: number,
  color?: string | symbol,
) => {
  return {
    addCircle: <AddCircle width={width} color={color} />,
    check: <Check width={width} color={color} />,
    cross: <Cross width={width} color={color} />,
    outLineHeart: <Heart width={width} isOutline color={color} />,
    heart: <Heart width={width} color={color} />,
    favorites: <Favorites width={width} color={color} />,
    lens: <Lens width={width} color={color} />,
  };
};
