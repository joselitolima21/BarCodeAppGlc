import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import { ToastAndroid } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function permissao({ route, navigation }) {
  var { id } = route.params;
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
  }
  console.log('id',id)
  useEffect(()=>{
     changeScreenOrientation()
     ToastAndroid.show('Volte para ler outro QR Code!', ToastAndroid.SHORT);
  },[navigation])
  return (
    
    <>
    <StatusBar style="light" />
    <WebView 
        source={{ 
          uri: `http://192.168.0.200:4354/${id}`,
          //uri: `http://stranserver.hopto.org:4354/${id}`,
          headers: {
            Authorization: process.env.TOKEN,
          }
      }}
        
    />
    </>
  );
}

