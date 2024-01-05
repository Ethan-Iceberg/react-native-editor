import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ToolbarIconButton from '../common/ToolbarIconButton';
import UnderlineSvg from '../../assets/images/Underline.svg';

interface Props {
  onPress?: () => void;
  positionRight?: boolean;
  positionLeft?: boolean;
  top?: any;
  left?: any;
  right?: any;
}

const TextUnderlineButton = ({
  onPress,
  positionLeft,
  positionRight,
  left,
  right,
}: Props) => {
  return (
    <ToolbarIconButton
      data={[{Svg: UnderlineSvg}]}
      onPress={onPress}
      positionLeft={positionLeft}
      positionRight={positionRight}
      top={1}
      left={left}
      right={right}
    />
  );
};

export default TextUnderlineButton;

const styles = StyleSheet.create({});
