import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';

export default class MainComponent extends Component {
    onPressDeleteButton() {
        alert('I... am... DELETE')
    }

    state = {todolista: [
        {id: '1', todo: 'Tämä on todo YKSI'},
        {id: '2', todo: 'Tämä on todo KAKSI'},
        {id: '3', todo: 'Tämä on todo KOLME'},
        {id: '4', todo: 'Tämä on todo NELJÄ'},
        {id: '5', todo: 'Tämä on todo VIISI'},
        {id: '6', todo: 'Tämä on todo KUUSI'},
    ]};

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                <FlatList
                    data={this.state.todolista}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item}) => <Text style={styles.item}>{item.id}: {item.todo}</Text>}
                />
                <TouchableOpacity onPress={this.onPressDeleteButton} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>Delete</Text>
                </TouchableOpacity>


                </ScrollView>
                <View>
                    <TextInput style={styles.textInput}
                    placeholder='Text Input -kenttä'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                    >
                    </TextInput>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: 22,
        // height: 1000,
        // width: 1000,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    scrollContainer: {
        // flex: 1,
        marginBottom: 0,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
        zIndex: 10,
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText: {
        color: 'white',
    },
});
