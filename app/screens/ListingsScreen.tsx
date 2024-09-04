import { FlatList, StyleSheet, Text, View, ImageSourcePropType } from 'react-native'
import React from 'react'

import Screen from '@/components/Screen'
import Card from '@/components/Card'
import Colors from '@/constants/Colors'

const listings: { id: number, title: string, price: number, image:ImageSourcePropType}[] = [
  {
    id: 1,
    title: 'Red jacket',
    price: 100,
    image: require('../assets/images/jacket.jpg')
  },
  {
    id: 2,
    title: 'Couch for living room',
    price: 1000,
    image: require('../assets/images/jacket.jpg')
  }
]

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subTitle={'$'+item.price}
            imageSource={item.image}
          />}
      />
    </Screen>
  )
}

export default ListingsScreen

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: Colors.light
  }
})