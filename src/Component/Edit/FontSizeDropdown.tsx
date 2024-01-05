import {StyleSheet, View} from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import UpDownArrowIcon from '../common/UpDownArrowIcon';
interface Props {
  positionRight?: boolean;
  positionLeft?: boolean;
  width?: number;
  topHeight?: any;
  right?: any;
  left?: any;
  value: string;
  setValue: any;
  items: Data[];
  setItems: any;
  open: boolean;
  onOpen?: any;
  setOpen: any;
  onChangeValue?: any;
  placeholder?: string;
}

type Data = {
  label: string;
  value: string;
};

const FontSizeDropdown = ({
  positionRight,
  positionLeft,
  width,
  topHeight,
  right,
  left,
  value,
  setValue,
  items,
  setItems,
  open,
  setOpen,
  onOpen,
  onChangeValue,
  placeholder,
}: Props) => {
  const handleValueChange = (itemValue, itemIndex) => {
    // Do something with the selected value
    onChangeValue(itemValue);
  };

  return (
    <View
      style={{
        zIndex: 1000,
        position: 'absolute',
        top: topHeight,
        right: positionRight && right,
        left: positionLeft && left,
      }}>
      <DropDownPicker
        listMode="SCROLLVIEW"
        scrollViewProps={{
          nestedScrollEnabled: true,
        }}
        closeOnBackPressed={true}
        closeAfterSelecting={true}
        disableBorderRadius={false} //false로 해야 보더레디어스 css 설정할 수 있음
        //전체 드롭다운 스타일
        containerStyle={{
          width: 64,
          // width: width,
          position: 'relative',
          top: 1,
          left: 0,
          // backgroundColor: 'cyan',
        }}
        //드롭다운리스트 스타일
        dropDownContainerStyle={{
          // relative 줘야 리스트 스크롤 가능 하게함
          position: 'relative', // to fix scroll issue ... it is by default 'absolute'
          top: 1, //to fix gap between label box and container
          left: 0,
          borderRadius: 8,
          borderColor: '#e6e6e6',
          borderWidth: 1,
          backgroundColor: 'white',
        }}
        //드롭다운라벨박스 스타일
        style={{
          // width: width,
          width: 64,
          height: 40, // 드롭다운 높이
          minHeight: 40,
          borderColor: 'transparent',
          // backgroundColor: 'cyan',
        }}
        // 드롭다운라벨박스 폰트스타일
        labelStyle={{
          // 선택된 라벨아이템의 폰트 스타일
          marginRight: 11,
          fontFamily: 'Pretendard-Regular',
          fontSize: 12,
          fontWeight: 'normal',
          fontStyle: 'normal',
          letterSpacing: 0,
          textAlign: 'right',
          color: '#222222',
        }}
        // 드롭다운 라벨 Arrow

        ArrowUpIconComponent={() => <UpDownArrowIcon up />}
        ArrowDownIconComponent={() => <UpDownArrowIcon down />}
        // 드롭다운 리스트아이템
        listItemContainerStyle={{
          paddingHorizontal: 8,
          height: 40, // 리스트 아이템의 높이
          // backgroundColor: 'red',
        }}
        // 드롭다운 리스트아이템 폰트 스타일
        listItemLabelStyle={{
          fontFamily: 'Pretendard-Regular',
          fontSize: 12,
          fontWeight: 'normal',
          fontStyle: 'normal',
          letterSpacing: 0,
          textAlign: 'left',
          color: '#222222',
        }}
        maxHeight={100} //드롭다운 리스트 높이
        //드롭다운 리스트아이템 구분선
        itemSeparator={false}
        itemSeparatorStyle={{
          backgroundColor: '#cccccc',
        }}
        showTickIcon={true} //드롭다운 리스트 선택된 리스트 체크아이콘 보이기 여부
        // 선택된 리스트아이템
        selectedItemContainerStyle={{
          backgroundColor: '#ffffff',
        }}
        // 선택된 리스트아이템 폰트 스타일
        selectedItemLabelStyle={{
          fontFamily: 'Pretendard-SemiBold',
          fontSize: 12,
          fontWeight: '600',
          fontStyle: 'normal',
          letterSpacing: 0,
          textAlign: 'left',
          color: '#222222',
        }}
        placeholder={value}
        open={open}
        onOpen={onOpen}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={handleValueChange} // Add the onValueChange prop
      />
    </View>
  );
};

export default FontSizeDropdown;

const styles = StyleSheet.create({});

FontSizeDropdown.defaultProps = {
  topHeight: 0,
  right: 16,
  left: 16,
};
