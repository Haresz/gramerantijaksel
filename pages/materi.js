import React from "react";
import { View, Image, Text, SafeAreaView } from "react-native";
import { globalStyle } from "../globalStyle";
import CustomCardBox from "../components/card/box";

const Materi = ({ navigation }) => {
  return (
    <SafeAreaView style={globalStyle.containerPage}>
      <View style={{ margin: 20, marginTop: 40 }}>
        <Image source={require("../assets/arrow-back.png")} />
        <Image
          style={{ marginLeft: "35%", marginBottom: 60, marginTop: 40 }}
          source={require("../assets/pp.png")}
        />
      </View>
      <SafeAreaView style={globalStyle.containerContent}>
        <Text style={[globalStyle.textTitle, { marginTop: 20 }]}>
          Choose the learning method you want
        </Text>
        <Text style={{ fontSize: 11, textAlign: "center" }}>
          Please choose from the 3 learning methods you want below
        </Text>
        <SafeAreaView
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <CustomCardBox
            title="Vidio"
            onPress={() => navigation.navigate("Vidio")}
          />
          <CustomCardBox
            title="Materi"
            onPress={() => navigation.navigate("Material")}
          />
          <CustomCardBox title="Quiz" />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Materi;
