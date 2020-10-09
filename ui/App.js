import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header';
import TaskItem from './components/TaskItem';

const App = () => {
    const [data, setData] = useState([
        { id: 1, task: 'Task 1', completed: true },
        { id: 2, task: 'Task 2', completed: false },
        { id: 3, task: 'Task 3', completed: false },
        { id: 4, task: 'Task 4', completed: false },
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

    return (
        <View style={styles.container}>
            <Header title="Todo App" />
            <FlatList style={styles.taskList} data={data} renderItem={({ item }) => <TaskItem toggleCompleted={toggleCompleted} deleteTask={deleteTask} item={item} />} />
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
    },
});

export default App;
