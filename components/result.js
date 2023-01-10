import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ImcContext } from "../context/ImcContext";

export default function Result() {
    const {imcValue, imcCategory} = useContext(ImcContext);
    
    return (
        <View>
            <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Seu IMC é igual a:</Text>
                <Text style={styles.resultIMC}>{imcValue}</Text>
            </View>

            <View style={styles.categoryContainer}>
                <Text style={styles.resultLabel}>Você está com:</Text>
                <Text style={styles.resultCategory}>{imcCategory}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    resultContainer: {
        marginTop: 35,
        alignItems: 'center',
    },
    resultLabel: {
        fontWeight: 'bold',
        color: '#a7a7a7',
    },
    resultIMC: {
        color: '#0fcf9e',
        fontWeight: 'bold',
        fontSize: 32,
    },
    resultCategory: {
        color: '#0fcf9e',
        fontWeight: 'bold',
        fontSize: 22
    },
    categoryContainer: {
        marginTop: 15,
        alignItems: 'center',
    }
});