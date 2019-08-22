import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';


// Propseina todo:n päivämäärä, "nimi" sekä delete-näppäin (Tuomas)
export default class Note extends React.Component {
    render() {
        return (

            <View key={this.props.keyval} style={styles.note}>

                <Text style={styles.noteText}>{JSON.stringify(this.props.val._id)}</Text>
                <Text style={styles.noteText}>{JSON.stringify(this.props.val.task)}</Text>

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
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
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
    }
});