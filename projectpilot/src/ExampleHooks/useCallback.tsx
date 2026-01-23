/* 
useCallback provide a stable reference to a function as long as the dependencies passed into the second parameter are the same.
Like useMemo, the function's type is inferred from the return value of the function in the first parameter.
You can be more explicit by providing a type argument to the Hook
*/

import { useState,useCallback } from "react";

const handleClick = useCallback(()=> {//...
                    }, [])

export function Form() {
    const [value, setValue] = useState("Change me")

    const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
        setValue(event.currentTarget.value)
    }, [setValue]) 

    return (
        <>
        <input value={value} onChange={handleChange}/>
        <p>Value: {value}</p>
        </>
    )
}