import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import Colors from '../constants/Colors';

import AppText from '../components/AppText'

interface props {
  title: string,
  subTitle: string,
  imageSource: ImageSourcePropType,
}

function Card(props: props) {
  console.log(Colors.white)
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={props.imageSource} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} text={props.title} />
        <AppText style={styles.subtitle} text={props.subTitle} />
      </View>
    </View>
  );
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
    paddingTop: 30,
  },
  title: {
    marginBottom: 7,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  subtitle: {
    fontWeight: "bold",
    color: Colors.secondary,
    paddingHorizontal: 10,
    marginBottom: 7,
    borderRadius: 5,
  }
})


export default Card;