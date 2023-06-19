import { useOutletContext } from "react-router-dom"

export function NewBook(){
    const obj = useOutletContext()
    return <h1>NewBook</h1>
}