import React, {Component} from 'react';
import { StyleSheet, View, Button, BackHandler} from 'react-native';
import NavBar from "../components/NavBar";
import MainComponent from "../components/MainComponent";
import Footer from "../components/Footer";




export default class HomeScreen extends Component {

    render() {
        const {navigate}=this.props.navigation;
        const tasks = this.props.navigation.getParam('tasks','ei tullu mitään');


    return (
        <View>
            <NavBar/>
            <Button onPress={()=>navigate('Menu')}title={'Menuscreenille'}/>
            {/*<Text style={styles.saatanallinenTeksti}>Saatana</Text>*/}
            <MainComponent tasks={tasks}/>
            {/*<Text style={styles.saatanallinenTeksti}>Ystävä</Text>*/}
            <Footer/>
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




