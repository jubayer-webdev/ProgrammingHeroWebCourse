import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

    // const handleChange = (evnt) => {
    //     setValue(evnt.target.value);
    //     console.log('In useInputState value = ', value);
    // }
    // return [value, handleChange];

    //! return by object
    const onChange = e => {
        setValue(e.target.value);
        console.log('onChange value = ', value);
    }
    //! {value: "default@email.go", onChange:f}
    return { value, onChange };
}

export default useInputState;