import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type MaterialCommunityIconsName = keyof typeof MaterialCommunityIcons.glyphMap;

interface props {
  name: MaterialCommunityIconsName,
  backgroundColor?: string;
  iconColor?: string;
  size?: number;
}

function Icon(props: props) {
  const size = props.size ?? 40
  return (
    <View
       style={{
        width: props.size ?? size,
        height: props.size ?? size,
        borderRadius: (props.size ?? size) / 2,
        backgroundColor: props.backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5
      }}
    >
      <MaterialCommunityIcons name={props.name} color={props.iconColor??"white"} size={(props.size??size) * 0.5} />
    </View>
  );
}

export default Icon;