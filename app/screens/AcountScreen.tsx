import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
// import { FlatList } from 'react-native-gesture-handler'

import Screen from '@/components/Screen'
import ListItem from '@/components/ListItem'
import Icon,{MaterialCommunityIconsName } from '@/components/Icon'
import ListItemSeparator from '@/components/ListItemSeparator'
import defaultStyles from '@/constants/styles'
const Colors = defaultStyles.Colors

const menueItems:{
    title: string;
    icon: {
        name: MaterialCommunityIconsName;
        backgroundColor: string;
    };
}[] = [
  {
    title: "my listings",
    icon: {
      name : "format-list-bulleted",
      backgroundColor: Colors.primary
    }
  },
  {
    title: "my messages",
    icon: {
      name: "email",
      backgroundColor: Colors.secondary
    }
  }
]

const AcountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Rick Sanchez'
          subtitle='crazy scientist'
          imageSource={require('../assets/images/rick_profile.png')}
          onPress={() => { }}
          renderRightActions={() => <></>}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menueItems}
          keyExtractor={item => item.title}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              renderRightActions={() => <></>}
              onPress={() => {}}
            />}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title='Log Out'
        IconComponent={
          <Icon name='logout' backgroundColor='#ffe66e'/>
        }
        onPress={() => {}}
        renderRightActions={() => <></>}
      />
    </Screen>
  )
}

export default AcountScreen

const styles = StyleSheet.create({
  container: {
    marginVertical:20
  },
  screen: {
    backgroundColor: Colors.light
  }
})