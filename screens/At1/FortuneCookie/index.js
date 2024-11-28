import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import fortunes from './assets/fortunes.json'

import cookieClosed from './assets/fortuneCookieClosed.png'
import cookieOpen from './assets/fortuneCookieOpen.png'

const FortuneCookie = ({ navigation }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [randomFortune, setRandomFortune] = useState('');

    const resetCookie = () => {
        setIsOpen(false);
        setRandomFortune('');
    };

    const openCookie = () => {
        if (!isOpen) {
            const chosenFortune = fortunes[Math.floor(Math.random() * fortunes.length)].fortune;
            setRandomFortune(chosenFortune);
            setIsOpen(true);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.fortuneContainer}>
                <Text style={styles.title}>Fortune Cookie</Text>

                {!isOpen ? (<Image source={cookieClosed} />) : (<Image source={cookieOpen} />)}
                {isOpen && (<Text style={styles.subTitle}>{randomFortune}</Text>)}
                {!isOpen ? (
                    <TouchableOpacity
                        onPress={() => openCookie()}
                        style={styles.uiButton}
                    ><Text style={styles.buttonText}>Open</Text></TouchableOpacity>) : (
                    <TouchableOpacity
                        onPress={() => resetCookie()}
                        style={styles.uiButton}
                    ><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>)}
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                ><Text style={styles.buttonText}>Back</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default FortuneCookie;

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
    subTitle: {
        color: '#464961',
        fontSize: 18
    },
    title: {
        fontWeight: 'bold',
        color: '#464961',
        fontSize: 28
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