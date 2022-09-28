import React from 'react';
import {SafeAreaView, StyleSheet, Switch, View} from 'react-native';
import {Button} from '../components/Buttons/Index';
import {styles} from '../Styles/Styles';
import {InputResult} from './InputResult';

function KeyWord() {
  const [secondsNumber, setSecondsNumber] = React.useState('');
  const [operation, setOperation] = React.useState('0');
  const [switchTheme, setSwitchTheme] = React.useState(false);

  const onPressButton = value => {
    if (operation === '0') {
      setOperation(value);
      setSecondsNumber(value);
    } else {
      let result = operation + value;
      setOperation(operation + value);

      if (
        result.includes('+') ||
        result.includes('*') ||
        result.includes('/') ||
        result.includes('-')
      ) {
        console.log('recorreeeer');
        setOperation(result);
        if (getResult(result) != 'Error') {
          setSecondsNumber(getResult(result));
        }
      } else {
        setSecondsNumber(result);
      }
    }
  };

  const clear = () => {
    setSecondsNumber('');
    setOperation('0');
  };

  const deleteNumber = () => {
    if (operation.slice(0, -1).length > 0) {
      let result = operation.slice(0, -1);
      setOperation(result);
      if (getResult(result) != 'Error') {
        setSecondsNumber(getResult(result));
      } else {
        setSecondsNumber(result);
      }
    } else {
      clear();
    }
  };

  const igualResult = () => {
    setOperation(getResult(operation));
    setSecondsNumber('');
  };

  const getResult = problem => {
    let result = '';
    try {
      let resultado = eval(problem);
      result = resultado;
    } catch (e) {
      // result=operation;
      result = 'Error';
    }
    return result;
  };

  return (
    <SafeAreaView style={stylesApp.container}>
      {/* <Switch
        value={switchTheme}
        style={styles.swicth}
        onValueChange={() => setSwitchTheme(!switchTheme)}
      /> */}
      <View style={stylesApp.viewContainerButton}>
        <InputResult
          secondsNumber={secondsNumber}
          operation={operation}></InputResult>
        <View style={stylesApp.viewButtons}>
          <Button value="AC" isOrange onPress={() => clear()}></Button>
          <Button value="X" isOrange onPress={() => deleteNumber()}></Button>
          <Button
            value="%"
            isOrange
            onPress={() => onPressButton('%')}></Button>
          <Button
            value="/"
            isOrange
            onPress={() => onPressButton('/')}></Button>
        </View>
        <View style={stylesApp.viewButtons}>
          <Button value="7" onPress={() => onPressButton('7')}></Button>
          <Button value="8" onPress={() => onPressButton('8')}></Button>
          <Button value="9" onPress={() => onPressButton('9')}></Button>
          <Button
            value="*"
            isOrange
            onPress={() => onPressButton('*')}></Button>
        </View>
        <View style={stylesApp.viewButtons}>
          <Button value="4" onPress={() => onPressButton('6')}></Button>
          <Button value="5" onPress={() => onPressButton('5')}></Button>
          <Button value="6" onPress={() => onPressButton('4')}></Button>
          <Button
            value="-"
            isOrange
            onPress={() => onPressButton('-')}></Button>
        </View>
        <View style={stylesApp.viewButtons}>
          <Button value="1" onPress={() => onPressButton('1')}></Button>
          <Button value="2" onPress={() => onPressButton('2')}></Button>
          <Button value="3" onPress={() => onPressButton('3')}></Button>
          <Button
            value="+"
            onPress={() => onPressButton('+')}
            isOrange></Button>
        </View>
        <View style={stylesApp.viewButtons}>
          <Button value="X" isOrange onPress={() => deleteNumber()}></Button>
          <Button value="0" onPress={() => onPressButton('0')}></Button>
          <Button value="." onPress={() => onPressButton('.')}></Button>
          <Button value="=" onPress={() => igualResult()} isOrange></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
const stylesApp = StyleSheet.create({
  viewsButton: {
    height: 200,
    width: '100%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  viewContainerButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    width: '100%',
  },
  font: {
    fontFamily: 'ProximaNova-Regular',
  },
  viewButtons: {
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export {KeyWord};
