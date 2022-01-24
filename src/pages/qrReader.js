import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import decrypt from '../auth/decrypt';
import { StatusBar } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useIsFocused } from '@react-navigation/native';

export default function qrReader({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const isFocused = useIsFocused();

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }

  // Request Camera Permission
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      changeScreenOrientation()
      setScanned(false)
    });
    askForCameraPermission();
    return unsubscribe
  }, [navigation]);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    const id = decrypt(data)
    if(id === 'erro') {
      Alert.alert('Aviso','O QRcode que você tentou ler não é uma permissão digital ou está rasurado.\n\nCaso esteja rasurado o pemissionário deve solicitar outra pemissão digital na GLC-STRANS')
    } else {
      setScanned(true);
      console.log(id)
      navigation.navigate("Permissao", {id})
    }
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <Text>Esperando pela permissão da câmera</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <Text style={{ margin: 10 }}>Acesso a câmera não permitido</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (

      <View style={styles.container}>
      <StatusBar style="light" />
      <>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style= {isFocused ? { height: 400, width: 400 } : { height: 200, width: 200 }} />
      </View>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },
  web: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
  }
});
