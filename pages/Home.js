import React from "react";
import { View, Image, Text, SafeAreaView } from "react-native";
import { globalStyle } from "../globalStyle";
import CardContent from "../components/card/content";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyle.containerPage}>
      <View style={globalStyle.containerNav}>
        <Text style={globalStyle.textNav}>
          Learn English grammar easily here
        </Text>
        <Image source={require("../assets/Frameinfo.png")} />
      </View>
      <View style={globalStyle.containerContent}>
        <CardContent click={() => navigation.navigate("Materi")} />
        <CardContent />
        <CardContent />
      </View>
    </SafeAreaView>
  );
};

export default Home;
