import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const TaskItem = ({ item, toggleCompleted, deleteTask }) => {
    return (
        <View key={item.id} style={styles.taskItem}>
            <TouchableOpacity style={styles.taskCheckbox} onPress={() => toggleCompleted(item.id)}>
                <CheckBox checkedColor="#f63f3e" checked={item.completed} onPress={() => toggleCompleted(item.id)} />
                <Text style={[styles.taskText, item.completed ? styles.taskCompletedText : styles.taskNotCompletedText]}>{item.task}</Text>
            </TouchableOpacity>
            <View>
                <TouchableOpacity onPress={() => deleteTask(item.id)}>
                    <Icon name="trash" size={20} color="#333" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    taskCheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskItem: {
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    taskCompletedText: {
        textDecorationLine: 'line-through',
        fontStyle: 'italic',
        color: '#a5a5a5',
    },
    taskNotCompletedText: {
        textDecorationLine: 'none',
        fontStyle: 'normal',
        color: '#333',
    },
    taskText: {
        fontSize: 18,
    },
});

export default TaskItem;
