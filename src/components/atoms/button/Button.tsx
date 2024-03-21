import React, { useCallback, useMemo } from 'react';
import { styles } from './Button.styles';
import IconSvg from '../icons-svg';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { ButtonProps } from './Button.types';

export default function Button({
  text,
  textColor,
  buttonColor,
  isOutlineStyle,
  iconName,
  iconColor,
  iconSize,
  isDisabled,
  style,
  textStyle,
  disabledStyle,
  onPress,
  onPressDisabled,
}: ButtonProps) {
  const btnStyle = useMemo(() => {
    let outStyle: StyleProp<ViewStyle> = [
      styles.container,
      isOutlineStyle ? styles.outlineContainer : null,
    ];

    if (iconName) {
      outStyle.push(styles.row);
    }

    if (style) {
      outStyle.push(style);
    }

    if (isDisabled && disabledStyle) {
      outStyle.push(disabledStyle);
    }

    if (buttonColor) {
      isOutlineStyle
        ? outStyle.push({ borderColor: buttonColor })
        : outStyle.push({ backgroundColor: buttonColor });
    }

    return outStyle;
  }, [buttonColor, disabledStyle, iconName, isDisabled, isOutlineStyle, style]);

  const txtStyle = useMemo(() => {
    let outStyle: StyleProp<TextStyle> = [
      styles.text,
      isOutlineStyle ? styles.outlineText : null,
    ];

    if (iconName) {
      outStyle.push(styles.row);
    }

    if (textStyle) {
      outStyle.push(textStyle);
    }

    if (textColor) {
      outStyle.push({ color: textColor });
    }

    return outStyle;
  }, [iconName, isOutlineStyle, textColor, textStyle]);

  const onPressButton = useCallback(
    () => (isDisabled && onPressDisabled ? onPressDisabled() : onPress()),
    [isDisabled, onPress, onPressDisabled],
  );

  return (
    <TouchableOpacity
      onPress={() => onPressButton()}
      disabled={isDisabled}
      style={btnStyle}>
      {text ? <Text style={txtStyle}>{text}</Text> : null}
      {iconName ? (
        <IconSvg iconName={iconName} color={iconColor} width={iconSize || 28} />
      ) : null}
    </TouchableOpacity>
  );
}
