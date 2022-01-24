import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import { ToastAndroid } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function permissao({ route, navigation }) {
  const { id } = route.params;
  console.log('id',id)
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
  }
  useEffect(()=>{
     changeScreenOrientation()
     ToastAndroid.show('Volte para ler outro QR Code!', ToastAndroid.SHORT);
  },[navigation])
  return (
    
    <>
    <StatusBar style="light" />
    <WebView 
        source={{ 
          //uri: `http://192.168.0.231:4354/${id}`,
          uri: `http://191.189.243.14:4312/${id}`,
          headers: {
            Authorization: process.env.TOKEN,
          }
      }}
        
    />
    </>
  );
}

