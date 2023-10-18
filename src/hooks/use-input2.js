import { useState } from "react";


const useInput2 = (validateInput) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouch] = useState(false);

    const valueIsValid = validateInput(enteredValue);
    const hasError = !valueIsValid  && isTouched ;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }
    const inputBlurHandler = (event) => {
        setIsTouch(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouch(false);
    }


    return{
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }


}

export default useInput2;