import { useEffect, useState } from "react"

export const useFetchData = ({ endPoint }) => {
    const [data, setData] = useState(null)

    console.log(endPoint);
    useEffect(() => {
        fetch(`https://server.theglampcity.com/api/${endPoint}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })

    }, [endPoint])
    return data;
}