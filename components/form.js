import React, { useContext } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { ImcContext } from "../context/ImcContext";

export default function Form() {
    const {weight, setWeight, height, setHeight, btnText, validationForm} = useContext(ImcContext);

    return (
        <View>
            <Text style={styles.inputTitle}>Peso</Text>
            <TextInput
                onChange={setWeight}
                value={weight}
                style={styles.inputArea}
                placeholder="Ex: 85 kg"
                keyboardType="numeric"
            />
            
            <Text style={styles.inputTitle}>Altura</Text>
            <TextInput
                onChange={setHeight}
                value={height}
                style={styles.inputArea}
                placeholder="Ex: 1.8 m"
                keyboardType="numeric"
            />

            <TouchableOpacity 
                style={styles.button}
                onPress={validationForm}
            >
                <Text style={styles.buttonText}>{btnText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputTitle: {
        color: '#0fcf9e',
        fontWeight: 'bold',
    },
    inputArea: {
        height: 50,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#0fcf9e',
        borderRadius: 50,
        padding: 10,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 18,
    }
});