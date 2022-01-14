import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function permissao({ route, navigation }) {
  const { id } = route.params;

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
  }
  useEffect(()=>{
     changeScreenOrientation() 
  },[navigation])
  return (
    
    <>
    <StatusBar style="light" />
    <WebView 
        source={{ uri: `http://192.168.0.231:1221/${id}` }}
    />
    </>
  );
}

