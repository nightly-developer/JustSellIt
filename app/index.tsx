import Card from "@/components/Card"
import ViewImageScreen from "./screens/ViewImageScreen"
import WelcomScreen from "./screens/WelcomScreen"
import Colors from "@/constants/Colors"
import { View,StyleSheet } from "react-native"
import ListingDetailsScreen from "./screens/ListingDetailsScreen"

export default function Index() {
  // return <WelcomScreen />
  return <ViewImageScreen />
  // return <View style={styles.cardContainer}><Card
  //   title={"Red Jacket"} subTitle={"$80"} imageSource={require("../app/assets/images/jacket.jpg")}></Card>
  //   </View>
  // return <ListingDetailsScreen title={"Red Jacket"} price={80} imageSource={require("../app/assets/images/jacket.jpg")}/>
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.backgroundColor,
    padding: 30,
    height: "100%"
  }
})
