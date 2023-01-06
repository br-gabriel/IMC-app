import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Form from './form';
import Result from "./result";

export default function MainContainer() {
    return (
        <View style={styles.container}>
            <Form />
            <Result />
        </View>
    )
}

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
    },
})