//endast testsida, ignorera
//Gustavs text om vad detta är/gör, se mp4
//updater function, good practice att använda 

//OBS!! (count + 1)     för (count++) funkar inte här
//OBS om varför arrow function istället för (count + 1), för att React ska använda uppdaterade värde istället för samma värde igen. 

import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    };
    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
    };
    const reset = () => {
        setCount(0);        //behöver inte använda full uppdater function här
    };

    return <div>
            <p>{count}</p>
            <button onClick={decrement}>Decrement by 2</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment by 3</button>
        </div>;
}

export default Counter;