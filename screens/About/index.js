import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const About = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About</Text>
            <Text style={styles.subText}>Made by</Text>
            <Text style={styles.text}>Paulo Vitor Bernardi Theobald</Text>
            <Text style={styles.subText}>Special Thanks</Text>
            <Text style={styles.text}>Victor Manuel Zerefos de Oliveira</Text>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
            ><Text style={styles.buttonText}>Back</Text></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e1e9eb',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        color: '#464961',
        fontSize: 32,
        marginBottom: 12
    },
    subText: {
        fontWeight: 'bold',
        marginTop: 20,
        color: '#464961',
        fontSize: 16,
        marginBottom: 12,
    },
    text: {
        color: '#464961',
        fontSize: 16,
        marginBottom: 12,
    },
    backButton: {
        marginTop: 25,
        width: 140,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0a5a8',
        borderRadius: 5
    }
});

export default About;