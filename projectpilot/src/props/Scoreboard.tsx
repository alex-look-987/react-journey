import { useState, useEffect } from "react";

function Scoreboard() {
    const [score, setScore] = useState(0)

    useEffect(() => {
        const socket = new WebSocket('wss://example.com')

        socket.onmessage = (event) => {
            const points = JSON.parse(event.data).points
            setScore((prevScore) => prevScore + points)
        }
        return () => socket.close()
    }, [])

    return <div>Score {score}</div>
}

export default Scoreboard