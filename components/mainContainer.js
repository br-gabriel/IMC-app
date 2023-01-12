import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ImcContext } from "../context/ImcContext";
import ErrorMessage from "./errorMessage";
import Form from './form';
import Result from "./result";

export default function MainContainer() {
    const {imcValue} = useContext(ImcContext);

    return (
        <ScrollView style={styles.container}
        showsVerticalScrollIndicator={false}>
            <Form />
            {imcValue == null ? <ErrorMessage/> : <Result />}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        maxWidth: 450,
        height: '100%',

        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        
        marginTop: 25,
        padding: 20,
    }
});