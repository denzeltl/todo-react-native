import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const InputForm = ({ addTask }) => {
    const [value, setValue] = useState('');

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={(text) => setValue(text)} value={value} placeholder="Enter task here" selectionColor="#ddd" selectTextOnFocus={true} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    addTask(value);
                    setValue('');
                }}
            >
                <Text style={styles.buttonText}>
                    <Icon name="plus" size={18} color="#fff" /> Add Task
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f63f3e',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
    container: {
        padding: 30,
        paddingBottom: 0,
    },
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
    },
});

export default InputForm;
