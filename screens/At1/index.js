import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const At1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Atividades AT1</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Cronometro")}
                style={styles.uiButton}
            ><Text style={styles.buttonText}>Stopwatch</Text></TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Quotes")}
                style={styles.uiButton}
            ><Text style={styles.buttonText}>Quotes</Text></TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("FortuneCookie")}
                style={styles.uiButton}
            ><Text style={styles.buttonText}>Fortune Cookie</Text></TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("ContadorRestaurante")}
                style={styles.uiButton}
            ><Text style={styles.buttonText}>Counter</Text></TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
            ><Text style={styles.buttonText}>Back</Text></TouchableOpacity>
        </View>
    );
};

export default At1;

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
        width: 140,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#afc0e3',
        borderRadius: 5
    },
    backButton: {
        marginTop: 25,
        width: 140,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0a5a8',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 16,
    }
});