import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

const Cronometro = ({ navigation }) => {
    const [startTime, setStartTime] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const restartStopwatch = () => {
        setIsPaused(false);
        setIsRunning(false);
        setStartTime(null);
        setElapsedTime(0);
    };

    const startStopwatch = () => {
        if (!isRunning && elapsedTime === 0) {
            setStartTime(Date.now());
            setIsRunning(true);
        }
    };

    const pauseStopwatch = () => {
        if (elapsedTime !== 0) {
            if (isRunning) {
                setIsPaused(true);
                setIsRunning(false);
                setElapsedTime(prev => prev + (Date.now() - startTime));
                setStartTime(null);
            } else {
                setIsPaused(false);
                setStartTime(Date.now());
                setIsRunning(true);
            }
        }
    };

    useEffect(() => {
        let timerInterval;
        if (isRunning) {
            timerInterval = setInterval(() => {
                setElapsedTime(prev => prev + (Date.now() - startTime));
                setStartTime(Date.now());
            }, 20);
        } else {
            clearInterval(timerInterval);
        }
        return () => clearInterval(timerInterval);
    }, [isRunning, startTime]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}>Stopwatch</Text>

            <Text style={styles.title}>{formatTime(elapsedTime)}</Text>
            {elapsedTime === 0 ? (<TouchableOpacity
                onPress={() => startStopwatch()}
                style={styles.uiButton}
            ><Text style={styles.buttonText}>Start</Text></TouchableOpacity>) : (<TouchableOpacity
                onPress={() => pauseStopwatch()}
                style={styles.uiButton}
            ><Text style={styles.buttonText}>{!isPaused ? ('Pause') : ('Resume')}</Text></TouchableOpacity>)}

            <TouchableOpacity
                onPress={() => restartStopwatch()}
                style={styles.uiButton}
            ><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
            ><Text style={styles.buttonText}>Back</Text></TouchableOpacity>
        </View>
    );
};

export default Cronometro;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e1e9eb',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subTitle: {
        color: '#464961',
        fontSize: 18
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