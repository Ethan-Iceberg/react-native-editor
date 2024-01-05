import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  positionRight?: boolean;
  positionLeft?: boolean;
  right?: any;
  left?: any;
  top?: any;
}

const LineBox = ({positionRight, positionLeft, right, top, left}: Props) => {
  return (
    <View
      style={[
        styles.lineBox,
        {
          zIndex: 1000,
          position: 'absolute',
          top: top,
          right: positionRight && right,
          left: positionLeft && left,
        },
      ]}>
      <View style={styles.line} />
    </View>
  );
};

export default LineBox;

LineBox.defaultProps = {
  top: 0,
  right: 0,
  left: 0,
};

const styles = StyleSheet.create({
  lineBox: {
    width: 11,
    height: 42,
    // backgroundColor: 'red',
  },
  line: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateY: -10}],
    width: 1,
    height: 20,
    backgroundColor: '#cccccc',
    // backgroundColor: 'black',
  },
});
