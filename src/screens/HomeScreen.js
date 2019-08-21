import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from "../components/NavBar";
import MainComponent from "../components/MainComponent";
import Footer from "../components/Footer";

const HomeScreen = () => {
    return (
        <View>
            <NavBar/>
            {/*<Text style={styles.saatanallinenTeksti}>Saatana</Text>*/}
            <MainComponent/>
            {/*<Text style={styles.saatanallinenTeksti}>Ystävä</Text>*/}
            <Footer/>
        </View>
    );
};
const styles = StyleSheet.create({
    text:{
        fontSize: 30
    },
    saatanallinenTeksti:{
        fontSize: 50,
        color: 'red'
    }
});
export default HomeScreen;
