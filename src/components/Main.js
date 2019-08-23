import React from 'react';
import {Text, View, TextInput, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import { CheckBox } from 'react-native-elements'

// Main- ja Note -luokat korvaavat aiemman MainComponent -luokan (Tuomas)
// Note.js:ssä propseina näytettävien todo:n päivämäärä, "nimi" sekä delete-näppäin (Tuomas)
import Note from './Note';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteArray: [
                {date: '1955/11/5', note: 'Marty yrittää iskeä omaa äitiään'},
                {date: '2015/10/21', note: 'Palaa tulevaisuuteen',},
                {date: '2019/8/22', note: 'Tämä on todo KOLME'},
            ],
            noteText: '',
        }
    }

    // Näytettävät todo:t sekä niiden poistamisen toteuttava "D"-näppäin (Tuomas)
    render() {
        const tasks = this.props.tasks;
        let notes = tasks.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                         deleteMethod={ () => this.onPressDeleteButton() } />
        });



        return (
            <View>
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

            </View>
        );
    }

    onPressDeleteButton() {
        alert('You DELETED a task! Did you really complete it? Be honest!')
    }

}

const styles = StyleSheet.create({
    scrollContainer: {
        // flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        // zIndex: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        // zIndex: 11,
        right: 20,
        bottom: 0,
        backgroundColor: 'black',
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        // elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 32,
    },
});