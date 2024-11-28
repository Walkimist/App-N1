import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import React, { useState } from 'react';

const COLOR_WHITE = '#e1e9eb';
const COLOR_BLACK = '#464961';
const COLOR_LIGHT_RED = '#f0a5a8';
const COLOR_DARK_RED = '#e63e45';
const COLOR_LIGHT_BLUE = '#afc0e3';
const COLOR_DARK_BLUE = '#2761d9'

const At2 = ({ navigation }) => {
    const [theme, setTheme] = useState('Light');
    const [fontSize, setFontSize] = useState(16);
    const [nightMode, setNightMode] = useState(false);

    const resetPreferences = () => {
        setTheme('Light');
        setFontSize(16);
        setNightMode(false);
    };

    const backgroundTheme = () => {
        if (nightMode) return COLOR_BLACK;
        if (theme === 'Light') return COLOR_WHITE;
        if (theme === 'Dark') return COLOR_BLACK;
        return COLOR_WHITE;
    };

    const fontTheme = () => {
        return backgroundTheme() === COLOR_WHITE ? COLOR_BLACK : COLOR_WHITE;
    }

    const buttonTheme = () => {
        return backgroundTheme() === COLOR_WHITE ? COLOR_LIGHT_BLUE : COLOR_DARK_BLUE;
    }

    const backButtonTheme = () => {
        return backgroundTheme() === COLOR_WHITE ? COLOR_LIGHT_RED : COLOR_DARK_RED;
    }

    return (
        <View style={[styles.container, { backgroundColor: backgroundTheme() }]}>
            <Text style={[styles.title, { color: fontTheme(), fontSize: fontSize }]}>Preference Settings</Text>
            <Text style={[styles.subTitle, { color: fontTheme(), fontSize: fontSize }]}>Theme:</Text>
            <View style={[styles.pickerContainer, { borderColor: fontTheme() }]}>
                <Picker
                    selectedValue={theme}
                    style={[styles.picker, { color: fontTheme() }]}
                    onValueChange={(itemValue) => setTheme(itemValue)}
                    itemStyle={{ color: fontTheme() }}
                >
                    <Picker.Item label="Light" value="Light" />
                    <Picker.Item label="Dark" value="Dark" />
                    <Picker.Item label="Auto" value="Auto" />
                </Picker>
            </View>

            <Text style={[styles.label, { color: fontTheme(), fontSize: fontSize }]}>
                Font Size: {fontSize}
            </Text>
            <Slider
                style={styles.slider}
                minimumValue={12}
                maximumValue={30}
                step={1}
                value={fontSize}
                onValueChange={(value) => setFontSize(value)}
                minimumTrackTintColor={fontTheme()}
                maximumTrackTintColor={fontTheme()}
                thumbTintColor={fontTheme()}
            />
            <TouchableOpacity
                onPress={() => resetPreferences()}
                style={[styles.uiButton, { backgroundColor: buttonTheme() }]}
            ><Text style={[styles.buttonText, { color: fontTheme() }]}>Reset</Text></TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[styles.backButton, { backgroundColor: backButtonTheme() }]}
            ><Text style={[styles.buttonText, { color: fontTheme() }]}>Back</Text></TouchableOpacity>
        </View>
    );
};

export default At2;

const styles = StyleSheet.create({
    pickerContainer: {
        width: '40%',
        borderRadius: 9,
        borderWidth: 2,
        borderStyle: 'solid',
    },
    picker: {
        width: '100%'
    },
    slider: {
        width: '80%',
        marginTop: 20,
    },
    label: {
        marginTop: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subTitle: {
        marginBottom: 10,
        marginTop: 20,
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
        backgroundColor: '#2761d9',
        backgroundColor: '#2761d9',
        borderRadius: 5
    },
    backButton: {
        marginTop: 25,
        width: 140,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e63e45',
        backgroundColor: '#e63e45',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 16,
    }
});