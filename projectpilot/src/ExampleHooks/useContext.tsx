
/* 
useContex Hook is a technique for passing data down the component tree without having to pass props through components. 
It is used by creating a provider component and often by creating a Hook to consu,e the value in a child component

The type of the value provided by the context is inferred from the value passed to the createContext call
*/

import { useContext, createContext, useState, useMemo } from "react";

type Theme = 'ligth' | 'dark' | "system"

const ThemeContext = createContext<Theme>("system")

const useGetTheme = () => useContext(ThemeContext)

function MyComponent() {
    const theme = useGetTheme()

    return (
        <div>
            <p>Current theme: {theme}</p>
        </div>
    )
}

export function ContextApp() {
    const [theme, setTheme] = useState<Theme>('dark')

    return (
        <ThemeContext value={theme}>
            <MyComponent/>
        </ThemeContext>
        
    )
}

///////////////////////////////////////////////////////////////////////////

// simple example but you cn imagine more complex object here
type ComplexObject = {
    kind: string
}

// Context is created with '| null' in the type to accurately reflect the default value
const Context = createContext<ComplexObject | null>(null)

const useGetComplexObject = () => {
    const object = useContext(Context)

    if (!object) {
        throw new Error("useGetComplexObject must be used within a Provider")
    }

    return object
}

function Component() {
    const object = useGetComplexObject()

    return (
        <div>
            <p>Current object: {object.kind} </p>
        </div>
    )
}

export function ComplexContextApp() {
    const object = useMemo(()=> ({kind: "test"}), [] )

    return (
        <Context value={object}>
            <Component/>
        </Context>
        
    )
}


