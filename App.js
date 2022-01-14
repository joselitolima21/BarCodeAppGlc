import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import qrReader from './src/pages/qrReader';
import permissao from './src/pages/permissao';

export default function App() {

    const Stack = createNativeStackNavigator()

    return ( 
    <NavigationContainer >
        <Stack.Navigator>
            <Stack.Screen  name="QRreader" component={qrReader} />
            <Stack.Screen options={{headerShown: false}} name="Permissao" component={permissao} />
        </Stack.Navigator>
    </NavigationContainer>    
    )
}