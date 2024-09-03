import { StyleSheet } from "react-native"
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import ListingDetailsScreen from "./screens/ListingDetailsScreen"
import ViewImageScreen from "./screens/ViewImageScreen"
import WelcomScreen from "./screens/WelcomScreen"
import MessagesScreen from "./screens/MessagesScreen"
import Colors from "@/constants/Colors"
import Card from "@/components/Card"
import Screen from "@/components/Screen";
import Icon from "@/components/Icon";
import ListItem from "@/components/ListItem";
import AcountScreen from "./screens/AcountScreen";

export default function Index() {
  // return <WelcomScreen />
  // return <ViewImageScreen />
  // return <View style={styles.cardContainer}><Card
  //   title={"Red Jacket"} subTitle={"$80"} imageSource={require("../app/assets/images/jacket.jpg")}></Card>
  //   </View>
  // return <ListingDetailsScreen title={"Red Jacket"} price={80} imageSource={require("../app/assets/images/jacket.jpg")}/>
  // return <GestureHandlerRootView>
  //   <MessagesScreen />
  // </GestureHandlerRootView>
  return <AcountScreen/>
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.backgroundColor,
    padding: 30,
    height: "100%"
  }
})
