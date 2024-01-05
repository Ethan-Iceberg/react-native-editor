import React from 'react';
import {View} from 'react-native';
import UpSvg from '../../assets/images/up.svg';
import DownSvg from '../../assets/images/Down.svg';

interface Props {
  up?: boolean;
  down?: boolean;
}

function UpDownArrowIcon({up, down}: Props) {
  return (
    <View style={{marginLeft: -10}}>
      {up && <UpSvg width={12} height={12} color={'#666666'} />}
      {down && <DownSvg width={12} height={12} color={'#666666'} />}
    </View>
  );
}

export default UpDownArrowIcon;
