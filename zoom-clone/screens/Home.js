import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MenuButtons from "../components/MenuButtons";
import ContactsMenu from "../components/ContactsMenu";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100vh" }}>
        <Header />
        <SearchBar />
        <MenuButtons navigation={navigation} />
        <ContactsMenu />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    padding: 15,
  },
});

export default Home;
