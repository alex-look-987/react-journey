import {useState} from "react";

function LikeButton() {
    const [likes, setLikes]  = useState(0)

    const handleLike = () => {
        // simulating delay as if sending data to server
        setTimeout(() => {
            setLikes((prevLikes) => prevLikes + 1) // ensures correct state update
            
        }, 0)
    }

    return <button onClick={handleLike}>Likes: {likes} </button>
}

export default LikeButton