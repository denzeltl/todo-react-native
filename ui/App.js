import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import InputForm from './components/InputForm';
import TaskItem from './components/TaskItem';

import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const [data, setData] = useState([
        { id: uuidv4(), task: 'Task 1', completed: true },
        { id: uuidv4(), task: 'Task 2', completed: false },
        { id: uuidv4(), task: 'Task 3', completed: false },
        { id: uuidv4(), task: 'Task 4', completed: false },
    ]);

    const toggleCompleted = (id) => {
        setData(
            data.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                }
                return task;
            })
        );
    };

    const deleteTask = (id) => {
        setData(data.filter((task) => task.id !== id));
    };

    const addTask = (text) => {
        if (text) {
            setData([{ id: uuidv4(), task: text, completed: false }, ...data]);
        } else {
            Alert.alert('Error', 'Please enter a task', [{ text: 'OK' }]);
        }
    };

    return (
        <View style={styles.container}>
            <Header title="Todo App" />
            <InputForm addTask={addTask} />
            <FlatList
                style={styles.taskList}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <TaskItem toggleCompleted={toggleCompleted} deleteTask={deleteTask} item={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    taskList: {
        padding: 30,
        paddingBottom: 0,
        marginBottom: 60,
    },
});

export default App;
