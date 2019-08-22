import React, {Component} from 'react';
import { StyleSheet, View, Button, BackHandler} from 'react-native';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Main from "../components/Main";



export default class HomeScreen extends Component {

    render() {

        const {navigate}=this.props.navigation;
    return (
        <View>
            <NavBar/>
            <Button onPress={()=>navigate('Menu')} title={'Menuscreenille'}/>
            {/*<Text style={styles.saatanallinenTeksti}>Saatana</Text>*/}
            <Main/>
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




