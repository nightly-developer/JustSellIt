import { StyleSheet,Text,View } from "react-native"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState } from "react";


import ListingDetailsScreen from "./screens/ListingDetailsScreen"
import ViewImageScreen from "./screens/ViewImageScreen"
import WelcomScreen from "./screens/WelcomScreen"
import MessagesScreen from "./screens/MessagesScreen"
import Colors from "@/constants/Colors"
import Card from "@/components/Card"
import Icon from "@/components/Icon";
import ListItem from "@/components/ListItem";
import AcountScreen from "./screens/AcountScreen";
import ListingsScreen from "./screens/ListingsScreen";
import Screen from "@/components/Screen";
import AppTextInput from "@/components/AppTextInput";
import AppPicker, { item } from "@/components/AppPicker";
import LoginScreen from "./screens/LoginScreen";

const categories: item[]= [
  {
    label: "Furniture",
    slug: "furniture",
    value: 1
  },
  {
    label: "Clothing",
    slug: "clothing",
    value:2
  },
  {
    label: "Cameras",
    slug: "cameras",
    value: 3
  }
]

export default function Index() {
  // return <WelcomScreen />
  
  // return <ViewImageScreen />
  
  // return <View style={styles.cardContainer}><Card title={"Red Jacket"} subTitle={"$80"} imageSource={require("../app/assets/images/jacket.jpg")}></Card></View>
  
  // return <ListingDetailsScreen title={"Red Jacket"} price={80} imageSource={require("../app/assets/images/jacket.jpg")}/>
  
  // return <AcountScreen />
  
  // return <MessagesScreen/>
  
  // return <ListingsScreen/>

  // return <Screen children={<Text>Hello</Text>} />

  // const [category, setCategory] = useState<item | undefined>(undefined);
  // return <Screen>
  //   <AppPicker
  //     selectedItem={category}
  //     onSelectItem={(item:item) => setCategory(item)}
  //     items={categories}
  //     placeholder="Category"
  //     iconName="apps"
  //   />
  //   <AppTextInput iconName="email" otherProps={{ placeholder:"email" }} />
  // </Screen>

  return <LoginScreen/>
}
  

// const styles = StyleSheet.create({
//   cardContainer: {
//     backgroundColor: Colors.backgroundColor,
//     padding: 30,
//     height: "100%"
//   }
// })
