import {Pressable, StyleSheet, View} from 'react-native'
import React from 'react'
import {SvgProps} from 'react-native-svg'

interface Props {
  data: Data[]
  onPress?: () => void
  positionRight?: boolean
  positionLeft?: boolean
  right?: any
  left?: any
  top?: any
}

type Data = {
  Svg: React.FC<SvgProps>
}

const ToolbarIconButton = ({
  onPress,
  data,
  positionRight,
  positionLeft,
  right,
  top,
  left,
}: Props) => {
  return (
    <Pressable
      style={{
        zIndex: 1000,
        position: 'absolute',
        top: top,
        right: positionRight && right,
        left: positionLeft && left,
      }}
      onPress={onPress}>
      {data.map((item, index) => (
        <View key={index} style={styles.iconBox}>
          <item.Svg width={20} height={20} color={'#666666'} />
        </View>
      ))}
    </Pressable>
  )
}

export default ToolbarIconButton

ToolbarIconButton.defaultProps = {
  top: 0,
  right: 0,
  left: 0,
}

const styles = StyleSheet.create({
  iconBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    // backgroundColor: 'red',
  },
})
