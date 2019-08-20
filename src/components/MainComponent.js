import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class MainComponent extends Component {
    state = {todolista: [
        {id: '1', todo: 'Tämä on todo YKSI'},
        {id: '2', todo: 'Tämä on todo KAKSI'},
        {id: '3', todo: 'Tämä on todo KOLME'},
        {id: '4', todo: 'Tämä on todo NELJÄ'},
        {id: '5', todo: 'Tämä on todo VIISI'}
    ]};

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.todolista}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item}) => <Text style={styles.item}>{item.id}: {item.todo}</Text>}
                />
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
})
