import React from "react";
import { View, Image, Text, SafeAreaView, ScrollView } from "react-native";
import CardContent from "../components/card/content";
import { globalStyle } from "../globalStyle";

export default function Vidio() {
  return (
    <SafeAreaView>
      <SafeAreaView style={{ margin: 20, marginTop: 60, flexDirection: "row" }}>
        <Image source={require("../assets/arrow-back-black.png")} />
        <Text style={[globalStyle.textTitle, { marginLeft: "34%" }]}>
          Video
        </Text>
      </SafeAreaView>
      <ScrollView>
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
      </ScrollView>
    </SafeAreaView>
  );
}
