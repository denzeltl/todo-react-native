import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const TaskItem = ({ item, toggleCompleted, deleteTask }) => {
    return (
        <View style={styles.taskItem}>
            <TouchableOpacity style={styles.taskCheckbox} onPress={() => toggleCompleted(item.id)}>
                <CheckBox checkedColor="#f63f3e" checked={item.completed} onPress={() => toggleCompleted(item.id)} />
                <Text style={[styles.taskText, item.completed ? styles.taskCompletedText : styles.taskNotCompletedText]}>{item.task}</Text>
            </TouchableOpacity>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.edit} onPress={() => Alert.prompt('Title', 'Delete this task?', (text) => console.log(text))}>
                    <Icon name="edit" size={20} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Confirm', 'Delete this task?', [{ text: 'Cancel' }, { text: 'Yes', onPress: () => deleteTask(item.id) }])}>
                    <Icon name="trash" size={20} color="#333" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    edit: {
        marginRight: 20,
    },
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
