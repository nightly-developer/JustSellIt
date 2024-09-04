import { FlatList, StyleSheet,ImageSourcePropType } from 'react-native'
import React, { useState } from 'react'

import Screen from '@/components/Screen'
import ListItem from '@/components/ListItem'
import ListItemSeparator from '@/components/ListItemSeparator'
import ListItemDeleteAction from '@/components/ListItemDeleteAction'


interface Message{
  id: number,
  title: string,
  description: string,
  image: ImageSourcePropType
}

const initialMessages = [
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

export default function MessagesScreen() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: { id: number }) => {
    setMessages(messages.filter(msg => msg.id !== message.id))
  }

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
            onPress={() => console.log("message selected", item)}
            renderRightActions={() =>
              <ListItemDeleteAction
                onPress={() => handleDelete(item)} />}
          />}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([{
            id: 3,
            title: "T3",
            description: "D3",
            image: require('../assets/images/rick_profile.png')
          }])
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})