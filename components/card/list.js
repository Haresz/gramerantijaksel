import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CardList = ({ title, imageSource, description }) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View>
          <Text style={styles.cardTitle}>HALO</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F3F3FC",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  cardImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 10,
    marginRight: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
  },
  cardDescription: {
    fontSize: 16,
  },
});

export default CardList;
