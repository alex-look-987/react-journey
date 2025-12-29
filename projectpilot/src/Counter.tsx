import React, {useState} from "react";

interface CounterType {
    initialCount: number
}

function Counter ({initialCount}: CounterType) {
    const [count, setCount] = useState(initialCount)

    return (
        <>
        Count: {count}
        <button onClick={() => {setCount(count+1)}}>Increment (Functional Updater)</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        </>
    )
}

export default Counter

