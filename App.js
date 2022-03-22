import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileStack from './src/ECommerceSample/stack/ProfileStack'
import DashboardStack from './src/ECommerceSample/stack/DashboardStack'
import SearchStack from './src/ECommerceSample/stack/SearchStack'
import CartStack from './src/ECommerceSample/stack/CartStack'
import ProductsStack from './src/ECommerceSample/stack/ProductsStack'




const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={DashboardStack} />
        <Tab.Screen name="Products" component={ProductsStack} />
        <Tab.Screen name="Cart" component={CartStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
