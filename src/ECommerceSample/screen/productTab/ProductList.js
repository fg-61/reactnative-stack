import React from 'react'
import { View, Text, Button } from 'react-native'

const ProductList = ({navigation}) => {
    return (
        <View>
            <Text>Product List</Text>
            <Button
                title="Go to Detail"
                onPress={() => navigation.navigate('ProductDetail')}
            />
        </View>
    )
}

export default ProductList