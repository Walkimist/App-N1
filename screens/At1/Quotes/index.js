import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import quotes from './assets/quotes.json';

import einsteinPhoto from './assets/einstein.png';
import gandhiPhoto from './assets/gandhi.png';
import steveJobsPhoto from './assets/steveJobs.png';
import mandelaPhoto from './assets/mandela.png';

const authorImages = {
    'einstein.png': einsteinPhoto,
    'gandhi.png': gandhiPhoto,
    'steveJobs.png': steveJobsPhoto,
    'mandela.png': mandelaPhoto
}

const Quotes = ({ navigation }) => {
    const [quoteId, setQuoteId] = useState(0);

    const generateQuote = () => {
        const newQuote = Math.floor(Math.random() * quotes.length);
        console.log(quotes[0]);
        setQuoteId(newQuote);
    };

    return (
        <View style={styles.container}>
            <View style={styles.quotesContainer}>
                <Text style={styles.title}>Quotes</Text>
                <Text style={styles.subTitle}>{quotes[quoteId].quote}</Text>
                <Text style={styles.authorName}>-{quotes[quoteId].author}</Text>
                <Image
                    source={authorImages[quotes[quoteId].image]}
                    style={styles.authorImage}
                />
                <TouchableOpacity
                    onPress={() => generateQuote()}
                    style={styles.uiButton}
                ><Text style={styles.buttonText}>Generate Quote</Text></TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                ><Text style={styles.buttonText}>Back</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default Quotes;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e1e9eb',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quotesContainer: {
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
        fontSize: 18,
        marginBottom: 20
    },
    uiButton: {
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
    },
    authorName: {
        marginTop: 20,
        marginRight: -250,
        fontWeight: 'bold',
        color: '#464961',
        marginBottom: 30,
        fontSize: 14
    },
    authorImage: {
        marginBottom: 50,
        borderStyle: 'solid',
        borderColor: '#464961',
        borderWidth: .5,
        borderRadius: 9,
        width: 200,
        height: 200
    }
});