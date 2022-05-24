import React from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Details from './components/Details';
import Categories from './components/Categories';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Maps from './components/Maps';
import Paypal from './components/Paypal';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login}
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="Home" component={Home}
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="Register" component={Register}
      options={{
        headerShown: false,
      }}
      />
       <Stack.Screen name="Details" component={Details}
      options={{
        headerShown: false,
      }}
      />
       <Stack.Screen name="Categories" component={Categories}
      options={{
        headerShown: false,
      }}
      />
       <Stack.Screen name="Cart" component={Cart}
      options={{
        headerShown: false,
      }}
      />
       <Stack.Screen name="Payment" component={Payment}
      options={{
        headerShown: false,
      }}
      />
       {/* <Stack.Screen name="Paypal" component={Paypal}
      options={{
        headerShown: false,
      }}
      /> */}
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}