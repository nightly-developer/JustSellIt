import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

import colors from '../../constants/Colors';
import AppText from '@/components/AppText'
import ListItem from '@/components/ListItem';

interface props {
  title: string,
  price: number,
  imageSource: ImageSourcePropType,
}

export default function ListingDetailsScreen(props:props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={props.imageSource} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} text={props.title} />
        <AppText style={styles.price} text={"$ " + props.price.toString()} />
        <View style={styles.userContainer}>
          <ListItem
            imageSource={require("../../app/assets/images/rick_profile.png")}
            title="Rick Sanchez"
            subtitle="5 Listing"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 240
  },
  detailsContainer: {
    paddingTop: 20,
  },
  title: {
    marginBottom: 7,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontWeight: "800"
  },
  price: {
    fontWeight: "bold",
    color: colors.secondary,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  userContainer: {
    marginVertical: 20
  }
})
