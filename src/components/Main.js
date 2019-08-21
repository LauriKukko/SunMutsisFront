import React from 'react';
import {Text, View, TextInput, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';


// Main- ja Note -luokat korvaavat aiemman MainComponent -luokan (Tuomas)
// Note.js:ssä propseina näytettävien todo:n päivämäärä, "nimi" sekä delete-näppäin (Tuomas)
import Note from './Note';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        }
    }


    // Näytettävät todo:t sekä niiden poistamisen toteuttava "D"-näppäin (Tuomas)
    render() {
        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                         deleteMethod={ () => this.deleteNote() } />
        });

        return (
            <View>
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput style={styles.textInput}
                        onChangeText={(noteText) => this.setState({noteText})}
                        value={this.state.noteText}
                        placeholder='Kirjoita tähän todo'
                        placeholderTextColor='white'
                        underlindeColorAndroid='transparent'>
                    </TextInput>
                </View>

                <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>

            </View>
        );
    }


    addNote() {
        if (this.state.noteText) {

            var paivamaara = new Date();
            this.state.noteArray.push({
                'date': paivamaara.getFullYear() +
                "/" + (paivamaara.getMonth() +1) +
                "/" + paivamaara.getDate(),
                'note': this.state.noteText
            });
            this.setState({ noteArray: this.state.noteArray })
            this.setState({ noteText: '' });
        }
    }

    deleteNote(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray })
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
        bottom: -65,
        backgroundColor: 'red',
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        // elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
});