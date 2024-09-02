import { FlatList, StyleSheet } from 'react-native'
import React from 'react'

import Screen from '@/components/Screen'
import ListItem from '@/components/ListItem'
import ListItemSeparator from '@/components/ListItemSeparator'
import ListItemDeleteAction from '@/components/ListItemDeleteAction'
import Icon from '@/components/Icon'

import { MaterialCommunityIcons } from "@expo/vector-icons";

// type MaterialCommunityIconName = keyof typeof MaterialCommunityIcons.glyphMap;

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
  let name:keyof typeof MaterialCommunityIcons.glyphMap = "close"
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
            IconComponent={<Icon MaterialCommunityIconName="close" backgroundColor='#000' size={40} iconColor='#fff'/>}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() =>
              <ListItemDeleteAction onPress={() => console.log("delete message")} />}
          />}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({})