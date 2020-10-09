import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f63f3e',
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 28,
        fontWeight: '700',
        color: '#fff',
    },
});

export default Header;
