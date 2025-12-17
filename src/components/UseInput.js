import React from "react";

export function useInput (initialValue){
    const [value, setValue] = React.useState(initialValue)


    function handleChange(e){
    setValue(e.target.value)
    }

    return [value, handleChange]
}