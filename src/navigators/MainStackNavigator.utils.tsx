import React from 'react';
import { Screen } from '../constants/Screen';
import { Favorites, HomeIcon } from '../components/atoms/svg';

export const tabIcon = (route: any, focused: boolean) => {
  const iconColor = focused ? '#ec2426' : 'grey';

  switch (route.name) {
    case Screen.Home:
      return <HomeIcon fill={iconColor} />;
    case Screen.Lists:
      return <Favorites fill={iconColor} width={32} />;
  }
};
