import {StyleSheet} from 'react-native';
import React from 'react';
import ToolbarIconButton from '../common/ToolbarIconButton';
import BoldSvg from '../../assets/images/Bold.svg';

interface Props {
  onPress?: () => void;
  positionRight?: boolean;
  positionLeft?: boolean;
  right?: any;
  left?: any;
  top?: any;
}

const FontBoldButton = ({
  left,
  onPress,
  positionLeft,
  positionRight,
  right,
}: Props) => {
  return (
    <ToolbarIconButton
      data={[{Svg: BoldSvg}]}
      onPress={onPress}
      positionLeft={positionLeft}
      positionRight={positionRight}
      top={1}
      left={left}
      right={right}
    />
  );
};

export default FontBoldButton;

const styles = StyleSheet.create({});
