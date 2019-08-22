import React, { Component } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Task = t.struct({
    nimi: t.String,
    sisalto: t.String,
    deadline: t.String,
    sijainti: t.String
});

// Lomakkeen muotoilu (Samu)
const formStyles = {
    ...Form.stylesheet,
    formGroup: {
        normal: {
            marginBottom: 10
        },
    },
    controlLabel: {
        normal: {
            color: 'blue',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        },
        // Virheen sattuessa muotoilu
        error: {
            color: 'red',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        }
    }
};

const options = {
    fields: {
        nimi: {
            error: 'Ei ole sopiva nimi'
        },
        sisalto: {
            error: 'Ei ole sopiva sisältö'
        },
        deadline: {
            error: 'Ei ole sopiva deadline'
        },
        sijainti: {
            error: 'Ei ole sopiva sijainti'
        },
    },
    stylesheet: formStyles,
};

export default class AddTaskScreen extends Component {

    state = {
        nimi:"",
        sisalto:"",
        deadline:"",
        sijainti:""
    };
    render() {
        return(
            <View style={styles.container}>
                <Form
                    ref={c => this._form = c}
                    type={Task}
                    options={options}
                    onChange={(text) => this.setState(text)}
                    value={this.state}
                />
                <Button
                    title="Console.log"
                    onPress={() => console.log(this.state)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
});

