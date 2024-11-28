import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Main = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Atividades N1</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("At1")}
                style={styles.uiButton}
            ><Text style={styles.buttonText}>AT1</Text></TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("At2")}
                style={styles.uiButton}
            ><Text style={styles.buttonText}>AT2</Text></TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("About")}
                style={styles.uiButton}
            ><Text style={styles.buttonText}>About</Text></TouchableOpacity>
        </View>
    );
};

export default Main;

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
        fontSize: 32
    },
    uiButton: {
        marginTop: 25,
        width: 120,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#afc0e3',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 16,
    }
});