import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';
const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');
import React, {Component} from 'react';
import { View,Button, StyleSheet } from 'react-native';



class LoginScreen extends Component {
    state = {tasks: []};



    componentDidMount() {
        this.loadClient();

    }


    loadClient() {
        Stitch.initializeDefaultAppClient('sunmutsisapp-zcbch').then(client => {
            this.setState({ client });
            const dbClient = client.getServiceClient(MongoDB.RemoteMongoClient.factory, "sunmutsisservice");
            this.setState({db : dbClient.db("sunmutsisdatabase")});
        });
    }

    authenticate() {
        return Stitch.defaultAppClient.auth.loginWithCredential(new AnonymousCredential())
            .then(user => {
                console.log(`Logged in as anonymous user with id: ${user.id}`);
                return user.id;
            })
            .catch(err=>console.error(err));
    }

    logout() {
        this.state.auth.logout()

    }

    loadCollection() {
        const collection = this.state.db.collection("sunmutsiscollection");
       return collection.find({ owner_id: "5d55586588fa4b77303ba1ab"}).toArray().then(foundTask => {
            if (foundTask) {
            //    foundDoc.forEach(console.log);
                this.setState({tasks: foundTask })
                return 2
            } else {
                console.log("ei löytyny mitää")
            }
        })}


    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.button}>
                <Button onPress={
                    () => this.authenticate().then(
                        () => this.loadCollection().then(
                            () => navigate('Home', {tasks: this.state.tasks})))}title={'LOGIN'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 300,
    },
});

export default LoginScreen;
//()=>navigate('Home')