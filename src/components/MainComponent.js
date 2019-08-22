import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';

export default class MainComponent extends Component {
    onPressDeleteButton() {
        alert('I... am... DELETE')
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                <FlatList
                    data={this.props.tasks}
                    keyExtractor={(item)=> JSON.stringify(item._id)}
                    renderItem={({item}) => <Text style={styles.item}>{JSON.stringify(item.task)}</Text>}
                />
                <TouchableOpacity onPress={this.onPressDeleteButton} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>Delete</Text>
                </TouchableOpacity>
                </ScrollView>
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
