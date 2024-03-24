import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (evnt) => {
        setValue(evnt.target.value);
        console.log('In useInputState value = ', value);
    }
    return [value, handleChange];
}

export default useInputState;