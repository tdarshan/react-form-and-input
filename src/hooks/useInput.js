import { useState } from "react";

export const useInput = function (defaultValue, validationFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);


    const handleInputChange = function (e) {
        setEnteredValue(e.target.value);

        setDidEdit(false)
    }

    const handleInputBlur = function () {
        setDidEdit(true)
    }

    const isValueValid = validationFn(enteredValue);


    return {
        value: enteredValue, 
        setValue: setEnteredValue,
        setIsEdit: setDidEdit,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !isValueValid
    }
}