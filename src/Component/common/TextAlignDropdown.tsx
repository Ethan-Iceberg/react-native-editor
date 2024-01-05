import React, {FC, ReactElement, useRef, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import AlignLeftSvg from '../../assets/images/Aalign-Left.svg';

interface Props {
  data: AlignData[];
  visible?: any;
  setVisible?: any;
  setSelected: any;
  selected: any;
  onSelect: any;
  positionRight?: boolean;
  positionLeft?: boolean;
  top?: any;
  left?: any;
  right?: any;
}

type AlignData = {
  SvgValue: string;
  Svg: React.FC<SvgProps>;
};

const TextAlignDropdown = ({
  onSelect,
  data,
  visible,
  setVisible,
  selected,
  setSelected,
  positionLeft,
  positionRight,
  top,
  left,
  right,
}: Props) => {
  const DropdownButton = useRef<any>();

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    setVisible(true);
  };

  const onItemPress = (item: any) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderDropdown = () => {
    if (visible) {
      return (
        <>
          <View
            style={{
              position: 'absolute',
              top: 3,
              right: 72,
              width: 90,
              // backgroundColor: 'red',
            }}>
            <Pressable
              style={[styles.dropdown]}
              onPress={() => setVisible(false)}>
              {data.map((item, index) => (
                <Pressable
                  key={index}
                  onPress={() => {
                    onItemPress(item);
                  }}>
                  <View style={styles.iconBox}>
                    <item.Svg width={20} height={20} color={'#666666'} />
                  </View>
                </Pressable>
              ))}
            </Pressable>
          </View>
        </>
      );
    }
  };

  return (
    <View
      style={[
        styles.block,
        {
          zIndex: 1000,
          position: 'absolute',
          top: top,
          right: positionRight && right,
          left: positionLeft && left,
        },
      ]}>
      <Pressable
        ref={DropdownButton}
        style={styles.button}
        onPress={toggleDropdown}>
        {selected && selected.SvgValue ? (
          <>
            {selected && (
              <selected.Svg width={20} height={20} color={'#666666'} />
            )}
          </>
        ) : (
          <AlignLeftSvg width={20} height={20} color={'#666666'} />
        )}
      </Pressable>
      <View
        style={{
          width: 120,
        }}>
        {renderDropdown()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    width: 40,
  },
  button: {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'transparent',
  },
  buttonText: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#222222',
  },
  dropdown: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    width: 90,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    // backgroundColor: 'red',
  },
  iconBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 40,
  },
});

export default TextAlignDropdown;

TextAlignDropdown.defaultProps = {
  top: 0,
  right: 0,
  left: 0,
};
