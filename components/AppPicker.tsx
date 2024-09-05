import React, { useState } from 'react'
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'

import { MaterialCommunityIconsName } from "@/components/Icon"
import Screen from '@/components/Screen'
import AppText from './AppText'
import PickerItem from './PickerItem'
import defaultStyles from '@/constants/styles'
const Colors = defaultStyles.Colors

export interface item{
    label: string,
    slug: string,
    value: number,
}

interface props{
  placeholder:string,
  iconName: MaterialCommunityIconsName,
  items: item[],
  selectedItem: item | undefined,
  onSelectItem: (item:item) => void
}

function AppPicker(props: props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {props.iconName &&
              <MaterialCommunityIcons
                name={props.iconName}
                size={20}
                color={Colors.medium}
                style={styles.icon}
              />}
          <AppText text={props.selectedItem ? props.selectedItem.label : props.placeholder} style={styles.AppText} />
          <MaterialCommunityIcons
                name="chevron-down"
                size={20}
                color={Colors.medium}
              />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button color="red" title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={props.items}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) =>
            <PickerItem
              label={item.label}
                onPress={() => {
                  setModalVisible(false)
                  props.onSelectItem(item)
              }}
            />}
          />  
        </Screen>
      </Modal>
    </>
  )
}

export default AppPicker

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 10,
    marginHorizontal:20
  },
  AppText: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  }
})