import React from "react";
import { View, Image, Text, SafeAreaView, ScrollView } from "react-native";
import { globalStyle } from "../globalStyle";
import CardList from "../components/card/list";

export default function Material() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <SafeAreaView style={{ margin: 20, marginTop: 60, flexDirection: "row" }}>
        <Image source={require("../assets/arrow-back-black.png")} />
        <Text style={[globalStyle.textTitle, { marginLeft: "34%" }]}>
          Material
        </Text>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 1, flexDirection: "row", width: "100%" }}>
        <SafeAreaView style={{ width: "100%", flex: 1 }}>
          <CardList style={{ width: "100%", flex: 1 }} />
          <CardList style={{ width: "100%", flex: 1 }} />
          <CardList style={{ width: "100%", flex: 1 }} />
        </SafeAreaView>
        <SafeAreaView style={{ width: "100%", flex: 1 }}>
          <CardList style={{ width: "100%", flex: 1 }} />
          <CardList style={{ width: "100%", flex: 1 }} />
          <CardList style={{ width: "100%", flex: 1 }} />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
