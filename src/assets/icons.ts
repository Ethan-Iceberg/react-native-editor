interface Icons {
  readonly [key: string]: any
}

const icons: Icons = {
  nmn: require('./images/icon_coin_nmn.png'),
  metamask: require('./images/MetaMask.png'),
  cooth: require('./images/Token.png'),
  bpn: require('./images/BPN.png'),
}

export default function icon(name: string) {
  return icons[name.toLowerCase()]
}


// ## 토큰 아이콘 적용
// ```javascript
// import icon from '../assets/icons'

// require('../assets/images/icon_coin_nmn.png') // 이것 대신에
// icon('nmn') // 이렇게 사용할 수 있음

// {/* <Image source={require('../assets/images/icon_coin_nmn.png')} /> */}
// <Image source={icon('nmn')} />
// <Image source={icon('NMN')} />
// ```
