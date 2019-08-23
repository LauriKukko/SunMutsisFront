import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, CheckBox} from 'react-native';


// Propseina todo:n päivämäärä, "nimi" sekä delete-näppäin (Tuomas)
export default class Note extends React.Component {

    //Constructor luotu pelkästään CheckBoxin toiminnallisuuden toteuttamisen vuoksi.
    // CheckBoxin klikkaaminen toteuttaa "checkBoxText"-funktion.
    // Funktio tarkistaa CheckBoxin tämänhetkisen staten, ja muuttaa sen käänteiseksi,
    // eli Truesta False ja Falsesta True. (Tuomas)

    constructor() {
        super();
        this.state = {
            check: false
        }
    }

    checkBoxTest() {
        this.setState({
            check:!this.state.check
        })
    }

    painaTaskia() {
        alert('moro')
    }

    render() {
        // const { navigate } = this.props.navigation;
        return (

            <View key={this.props.keyval} style={styles.note}>


                <CheckBox style={styles.checkbox} value={this.state.check} onChange={()=> this.checkBoxTest() } />

                  <TouchableOpacity onPress={ this.painaTaskia.bind(this)} >
                  {/*<TouchableOpacity onPress={()=> navigate('AddTask')} >*/}
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>
                  </TouchableOpacity>


                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>X</Text>
                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        flexDirection: 'row',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 10,
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    checkbox: {
        // backgroundColor: 'red',
    }
});