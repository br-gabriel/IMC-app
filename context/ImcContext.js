import { createContext, useEffect, useState } from "react";

export const ImcContext = createContext();

export default function ImcContextProvider({children}) {
    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [imcValue, setImcValue] = useState(null);
    const [imcCategory, setImcCategory] = useState("");
    const [btnText, setBtnText] = useState("Calcular");

    useEffect(() => {
        setBtnText("Calcular");
        setErrorMsg(null);
    }, []);

    function imcCalculator() {
        const formattedHeight = height.replace(",", ".")
        const imcResult = (weight/(formattedHeight*formattedHeight)).toFixed(2)
        
        setImcValue(imcResult)

        if (imcResult < 18.5 ) {
            setImcCategory("FALTA DE PESO")
        } else if (imcResult >= 18.5 && imcResult < 25) {
            setImcCategory("PESO NORMAL")
        } else if (imcResult >= 25 && imcResult < 30) {
            setImcCategory("SOBREPESO")
        } else if (imcResult >= 30 && imcResult < 35) {
            setImcCategory("OBESIDADE I")
        } else if (imcResult >= 35 && imcResult < 40) {
            setImcCategory("OBESIDADE II")
        } else if (imcResult >= 40) {
            setImcCategory("OBESIDADE III")
        }     
        
        return [imcValue, imcCategory]
    };
    
    function validationForm() {
        if(weight != 0 && height != 0) {
            imcCalculator()
            setErrorMsg(null)
            setWeight(0)
            setHeight(0)
            setBtnText("Calcular novamente")
            return
        };

        setImcValue(null)
        setImcCategory(null)
        setErrorMsg("Preencha todos os campos*")
        setBtnText("Calcular")
        return
    };

    return (
        <ImcContext.Provider 
        value={{
            weight, setWeight, height, 
            setHeight, errorMsg, imcValue, 
            imcCategory, validationForm, btnText
        }}>
            {children}
        </ImcContext.Provider>
    );
};