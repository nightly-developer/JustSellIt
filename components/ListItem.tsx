import { View, StyleSheet, Image,TouchableHighlight,ImageSourcePropType } from 'react-native'
import React, { ReactNode } from 'react'

import AppText from '@/components/AppText'
import { Swipeable } from 'react-native-gesture-handler';
import defaultStyles from '@/constants/styles'
const Colors = defaultStyles.Colors

interface props{
  title: string,
  subtitle?: string,
  imageSource?: ImageSourcePropType,
  IconComponent?: ReactNode,
  onPress: () => void,
  renderRightActions: () => ReactNode,
}

export default function ListItem(props:props) {
  return (
    <Swipeable renderRightActions={props.renderRightActions} onSwipeableOpen={direction => console.log(direction)}>
      <TouchableHighlight underlayColor={Colors.light} onPress={props.onPress}>
        <View style={styles.container}>
          {props.IconComponent}
          {props.imageSource && <Image style={styles.image} source={props.imageSource} />}
          <View style={styles.detailsContainer}>
            <AppText text={props.title} style={styles.title}/>
            {props.subtitle && <AppText text={props.subtitle} style={styles.subTitle}></AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: Colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});