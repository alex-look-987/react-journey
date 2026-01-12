function TestAppChild() {
    return <Parent/>
}

function Parent() {
    const handleRequest = (request: string): void => {
        if (request.includes('car')) {
            alert('No')
        }
    }

    return (
        <div>
            <h1>Parent (Child-To-Parent)</h1>
            <Child onRequest={handleRequest}/>
        </div>
    )
}

interface ChildProps {
    onRequest:(request: string) => void
}

function Child({onRequest}: ChildProps) {
    const handleClick = () => {
        onRequest('Can i have the car?')
    }

    return (
        <div>
            <h2>Child</h2>
            <button onClick={handleClick}>Ask for the car</button>
        </div>
    )
}

export default TestAppChild