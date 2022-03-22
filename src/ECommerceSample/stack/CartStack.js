import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { View, Text } from 'react-native'
import CartMainScreen from '../screen/cartTab/CartMainScreen';

const CartStack = () => {

    const CartStack = createNativeStackNavigator();

    return (
        <CartStack.Navigator>
            <CartStack.Screen name="CartMain" component={CartMainScreen} />
        </CartStack.Navigator>
    )

}

export default CartStack