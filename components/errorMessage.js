import React, { useContext } from "react";
import { StyleSheet, Text} from "react-native";
import { ImcContext } from "../context/ImcContext";

export default function ErrorMessage() {
    const { errorMsg } = useContext(ImcContext);
    
    return (
        <Text style={styles.errorText}>{errorMsg}</Text>
    );
};

const styles = StyleSheet.create({
    errorText: {
        color: '#0fcf9e',
        fontWeight: 'normal',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 14,
        marginBottom: 30
    }
});