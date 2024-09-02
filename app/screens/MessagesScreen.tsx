import { FlatList, StyleSheet } from 'react-native'
import React from 'react'

import ListItem from '@/components/ListItem'
import Screen from '@/components/Screen'
import ListItemSeparator from '@/components/ListItemSeparator'

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require('../assets/images/rick_profile.png')
  },
  {
    id: 2,
    title: "T2",
    description: "D1",
    image: require('../assets/images/rick_profile.png')
  },
  
]

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) =>
          <ListItem
            title={item.title}
            subtitle={item.description}
            imageSource={item.image}
            onPress={() => console.log("message selected",item)}
          />}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({

})