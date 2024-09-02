import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface props {
  MaterialCommunityIconName: keyof typeof MaterialCommunityIcons.glyphMap;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}

function Icon(props:props) {
  return (
    <View
       style={{
        width: props.size ?? 0,
        height: props.size ?? 0,
        borderRadius: (props.size ?? 0) / 2,
        backgroundColor: props.backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5
      }}
    >
      <MaterialCommunityIcons name={props.MaterialCommunityIconName} color={props.iconColor} size={(props.size??1) * 0.5} />
    </View>
  );
}

export default Icon;