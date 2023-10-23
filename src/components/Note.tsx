import { useState } from "react"

const Note = () => {
    
    const [X, setX] = useState(700);
    const [Y, setY] = useState(500);

    const CalcVals = (e:any) => {
        console.log("X: " + e.clientX + " | Y: " + e.clientY);
        setY(e.clientY);
        setX(e.clientX);
    }

    return (
        <span className=" h-16 w-16 rounded-full bg-red-300 border-4 border-black border-solid text-center absolute z-10" style={{left:X,top:Y}} draggable={true} onDrag={CalcVals} onDragEnd={CalcVals}>
        
        </span>
    )
}

export default Note;

