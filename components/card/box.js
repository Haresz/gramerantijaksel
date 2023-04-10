import react from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { globalStyle } from "../../globalStyle";

const CustomCardBox = (props) => {
  return (
    <TouchableOpacity
      style={{
        width: 110,
        height: 140,
        marginVertical: 8,
        padding: 4,
        backgroundColor: "#F3F3FC",
      }}
      onPress={props.onPress}
    >
      <Image
        style={{ width: 80, height: 80, marginLeft: 10, marginTop: 10 }}
        source={require("../../assets/pp.png")}
      />
      <Text style={{ textAlign: "center", marginTop: 10 }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomCardBox;
