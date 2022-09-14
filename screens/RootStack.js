import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import WriteScreen from './WriteScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        //해더를 제거함으로써 => 생성된 해더가 메인이 될 수 있게 해줌
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
