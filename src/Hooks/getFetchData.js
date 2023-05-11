import { useEffect, useState } from "react"

export const useFetchData = ({ endPoint }) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:5055/api/${endPoint}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })

    }, [endPoint])
    return data;
}