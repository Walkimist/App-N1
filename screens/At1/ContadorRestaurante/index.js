import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const ContadorRestaurante = ({ navigation }) => {
    const [clientNumber, setClientNumber] = useState(0);

    const increaseNumber = () => {
        setClientNumber(clientNumber + 1);
    }

    const decreaseNumber = () => {
        if (clientNumber > 0) {
            setClientNumber(clientNumber - 1);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.subSubTitle}>Restaurant Customer Counter</Text>
            <Text style={styles.subTitle}>Number of clients:</Text>
            <Text style={styles.title}>{clientNumber}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => decreaseNumber()}
                    style={styles.uiButton}
                ><Text style={styles.buttonText}>-</Text></TouchableOpacity>
                <TouchableOpacity
                    onPress={() => increaseNumber()}
                    style={styles.uiButton}
                ><Text style={styles.buttonText}>+</Text></TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
            ><Text style={styles.backButtonTextbuttonText}>Back</Text></TouchableOpacity>
        </View>
    );
};

export default ContadorRestaurante;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e1e9eb',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fortuneContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    subSubTitle: {
        color: '#464961',
        fontSize: 16,
        marginBottom: 20
    },
    subTitle: {
        color: '#464961',
        fontSize: 22
    },
    title: {
        fontWeight: 'bold',
        color: '#464961',
        fontSize: 32
    },
    uiButton: {
        margin: 5,
        marginTop: 25,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#afc0e3',
        borderRadius: 5
    },
    backButton: {
        marginTop: 15,
        width: 140,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0a5a8',
        borderRadius: 5
    },
    buttonText: {
        color: '#464961',
        fontSize: 32,
    },
    backButtonText: {
        fontSize: 16,
    }
});