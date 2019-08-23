import React, {Component} from 'react';
import { StyleSheet, View, Button, BackHandler} from 'react-native';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default class HomeScreen extends Component {

    render() {
        const {navigate}=this.props.navigation;
        const tasks = this.props.navigation.getParam('tasks','ei tullu mitään');
    return (
        <View>
            <NavBar/>
            <Main tasks={tasks}/>
            {/*<Text style={styles.saatanallinenTeksti}>Ystävä</Text>*/}
            <Footer {...this.props}/>
        </View>
    );
}};

const styles = StyleSheet.create({
    text:{
        fontSize: 30
    },
    saatanallinenTeksti:{
        fontSize: 50,
        color: 'red'
    }
});




