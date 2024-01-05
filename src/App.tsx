import React, {useCallback, useRef, useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import AlignLeftSvg from './assets/images/Aalign-Left.svg';
import AlignCenterSvg from './assets/images/Aalign-Center.svg';
import AlignRightSvg from './assets/images/Aalign-Right.svg';
import FontFamilyDropdown from './Component/Edit/FontFamilyDropdown';
import FontSizeDropdown from './Component/Edit/FontSizeDropdown';
import LineBox from './Component/common/LineBox';
import FontBoldButton from './Component/Edit/FontBoldButton';
import TextUnderlineButton from './Component/Edit/TextUnderlineButton';
import TextAlignDropdown from './Component/common/TextAlignDropdown';
import {WebView} from 'react-native-webview'

const App = () => {
  const webViewRef = useRef(null);
  const [testdata, setTestData] = useState(null);
  const [font, setFont] = useState('기본서체');
  const [fontSize, setFontSize] = useState('h1');
  const [init, setInit] = useState(false);
  const tfont = 'Georgia, serif';
  const [htmlContent, setHtmlContent] = useState(`
  <!DOCTYPE html>
  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">
<html>
<head>
  <title>HTML Editor</title>
  <style>
  @font-face {
    font-family: 'Anton';
    src: url('file:///android_asset/fonts/Anton-Regular.ttf') format('truetype');
  }
    body {
      font-family: Arial, sans-serif;
      font-size: 44px;
    }
    #editor {
      width: 100%;
      height: 200px;
      border: 1px solid #ccc;
      padding: 10px;
    }
    button {
      margin-top: 10px;
    }
  </style>
  <script>

  // Function to send a message to the React Native app
  function sendMessageToRN(data) {
    window.ReactNativeWebView.postMessage(data);
  }

  // Add event listeners to the elements you want to track clicks or interactions
  document.addEventListener('click', function(event) {
    // Here, you can handle the click event or any other interaction
    // For example, you can extract the clicked element's details and send them back to the React Native app
    const elementData = 'click';
    
    // {
    //   tag: event.target.tagName,
    //   id: event.target.id,
    //   classList: event.target.classList.toString(),
    // };

    // Send the data back to the React Native app
    sendMessageToRN(JSON.stringify(elementData));
  });

  function onHeading1() {
    document.execCommand('fontSize', false, '3'); 
  }
  function onHeading2() {
    document.execCommand('fontSize', false, '5'); 
  }
  function onHeading3() {
    document.execCommand('fontSize', false, '7'); 
  }
  </script>
</head>
<body contenteditable="true">
<p>React-Native HTML Editor Example</p>
</body>
</html>
  `);
  const [flag, setFlag] = useState(false);

  //폰트패밀리 dropdown
  const [openFamily, setOpenFamily] = useState(false);
  const [familyValue, setFamilyValue] = useState('기본서체');
  const [familyItems, setFamilyItems] = useState([
    {label: '기본서체', value: '기본서체'},
    {label: 'Anton', value: 'Anton'},
    {label: '나눔고딕', value: '나눔고딕'},
    {label: '나눔명조', value: '나눔명조'},
  ]);

  //폰트사이즈 dropdown
  const [openSize, setOpenSize] = useState(false);
  const [sizeValue, setSizeValue] = useState('H1');
  const [sizeItems, setSizeItems] = useState([
    {label: 'h1', value: 'h1'},
    {label: 'h2', value: 'h2'},
    {label: 'h3', value: 'h3'},
  ]);

  //텍스트문단 dropdown
  const [openAlign, setOpenAlign] = useState(false);
  AlignLeftSvg;
  const [alignValue, setAlignValue] = useState<any>('');
  const [align, setAlignItems] = useState([
    {
      SvgValue: 'AlignLeftSvg',
      Svg: AlignLeftSvg,
    },
    {SvgValue: 'AlignCenterSvg', Svg: AlignCenterSvg},
    {SvgValue: 'AlignRightSvg', Svg: AlignRightSvg},
  ]);

  const onFamilyOpen = useCallback(() => {
    setOpenSize(false);
  }, []);

  const onSizeOpen = useCallback(() => {
    setOpenFamily(false);
  }, []);

  const setAlign = itemValue => {
    setAlignValue(itemValue);
    console.log(itemValue.SvgValue);

    switch (itemValue.SvgValue) {
      case 'AlignLeftSvg':
        handleAlignLeft();
        break;
      case 'AlignCenterSvg':
        handleAlignCenter();
        break;
      case 'AlignRightSvg':
        handleAlignRight();
        break;
    }
  };

  const handleSetFontSize = itemValue => {
    // Do something with the selected value
    // setFontSize(itemValue);
    // webViewRef.current.injectJavaScript(
    //   `document.execCommand('fontSize', '${itemValue}');`,
    // )
    //executeCommand('formatBlock', false, '<h1>');
    switch (itemValue) {
      case 'h1':
        console.log('h1');
        webViewRef.current.injectJavaScript('onHeading1();');
        setFontSize('h1');
        break;
      case 'h2':
        webViewRef.current.injectJavaScript('onHeading2();');
        setFontSize('h2');
        break;
      case 'h3':
        webViewRef.current.injectJavaScript('onHeading3();');
        setFontSize('h3');
        break;
    }
    setInit(true);
  };

  const executeCommand = command => {
    webViewRef.current.injectJavaScript(`document.execCommand('${command}');`);
  };

  const handleBold = () => {
    executeCommand('bold');
  };

  const handleItalic = () => {
    executeCommand('italic');
  };

  //underline
  const handleUnderline = () => {
    executeCommand('underline');
  };
  const handleDefault = fontSize => {
    webViewRef.current.injectJavaScript('setDefaultFont()');
  };

  // Function to set text alignment to the left
  const handleAlignLeft = () => {
    executeCommand('justifyLeft');
  };

  // Function to set text alignment to the center
  const handleAlignCenter = () => {
    executeCommand('justifyCenter');
  };

  const handleSetFont = itemValue => {
    // Do something with the selected value

    switch (itemValue) {
      case 'Anton':
        webViewRef.current.injectJavaScript(
          "document.execCommand('fontName', false, 'Anton');",
        );
        setFont(itemValue);
        break;
    }
  };

  return (
    <Pressable
      onPress={() => {
        setOpenFamily(false);
        setOpenSize(false);
        setOpenAlign(false);
      }}>
      <SafeAreaView style={styles.container}>
        {/* toolbar */}
        <FontFamilyDropdown
          positionLeft
          left={8}
          open={openFamily}
          onOpen={onFamilyOpen}
          setOpen={setOpenFamily}
          value={familyValue}
          setValue={setFamilyValue}
          items={familyItems}
          setItems={setFamilyItems}
          onChangeValue={handleSetFont}
        />
        <FontSizeDropdown
          positionLeft
          left={140}
          open={openSize}
          onOpen={onSizeOpen}
          setOpen={setOpenSize}
          value={sizeValue}
          setValue={setSizeValue}
          items={sizeItems}
          setItems={setSizeItems}
          onChangeValue={handleSetFontSize}
        />
        <LineBox positionLeft left={205} />
        <FontBoldButton positionRight right={96} onPress={handleBold} />
        <TextUnderlineButton
          positionRight
          right={56}
          onPress={handleUnderline}
        />
        <TextUnderlineButton
          positionRight
          right={56}
          onPress={handleUnderline}
        />
        <LineBox positionRight right={45} />
        <TextAlignDropdown
          positionRight
          right={8}
          data={align}
          visible={openAlign}
          setVisible={setOpenAlign}
          selected={alignValue}
          setSelected={setAlign}
          onSelect={setAlignValue}
        />
        {/* toolbar 틀  */}
        <View style={styles.toolbarContainer}>
          <View style={styles.toolbarBorder} />
        </View>
        {/* view */}
        <View style={styles.viewContainer}>
          <View style={styles.area}>
            <WebView
              style={styles.webView}
              ref={webViewRef}
              source={{html: htmlContent}}
              onLoadEnd={() => {
                const injectedJavaScript = `
                  document.body.addEventListener('input', function() {
                    window.ReactNativeWebView.postMessage(document.body.innerHTML);
                  });
                  `;
                webViewRef.current.injectJavaScript(injectedJavaScript);
              }}
              onMessage={event => {
                const content = event.nativeEvent.data;
                if (flag === false) {
                  if (content === '"click"') {
                    webViewRef.current.injectJavaScript(
                      "document.execCommand('fontName', false, 'Anton');",
                    );
                    webViewRef.current.injectJavaScript('onHeading1();');
                  }
                  setFlag(true);
                  console.log('111111111111111111');
                }
                if (content !== '"click"') {
                  //save content
                  console.log('[content]',content)
                  console.log('22222222222222');
                }
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    height: 500,
    // backgroundColor: 'red',
  },
  toolbarContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    overflow: 'hidden',
  },
  toolbarBorder: {
    height: 42,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#cccccc',
    // backgroundColor: 'cyan',
  },

  btnWrap: {
    position: 'absolute',
    left: 122 + 65,
    top: 0,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  viewContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    // backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#cccccc',
    zIndex: -1,
    position: 'absolute',
    top: 48,
    width: '100%',
    height: 430,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  area: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
  },
  webView: {
    flexGrow: 1,
  },
});

export default App;
