import { createContext, useState } from "react";

export const ImcContext = createContext();

export default function ImcContextProvider({children}) {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [imcValue, setImcValue] = useState(null);
    const [imcCategory, setImcCategory] = useState("");
    const [btnText, setBtnText] = useState("Calcular");

    function imcCalculator() {
        return setImcValue(2);
    };

    function validationForm() {
        if(weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setErrorMsg("")
            setBtnText("Calcular novamente")
            return
        };

        setImcValue(null)
        setImcCategory(null)
        setErrorMsg("Preencha todos os campos*")
    };

    return (
        <ImcContext.Provider 
        value={{
            weight, setWeight, height, 
            setHeight, errorMsg, imcValue, 
            imcCategory, btnText, validationForm
        }}>
            {children}
        </ImcContext.Provider>
    );
};