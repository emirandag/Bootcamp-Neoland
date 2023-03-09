import { useState } from "react"
import useDebounce from "../../hooks/useDebounce/useDebounce"

 const Component = () => {

    const [value, setValue] = useState('')

    const debounceValue = useDebounce(value, 500)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <p>Valor a tiempo real: {value}</p>
            <p>Valor debounced: {debounceValue}</p>

            <input type="text" value={value} onChange={handleChange} />
        </div>
    )
}

export default Component

