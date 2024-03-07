import A from "./A"
import B from "./B"

export default function Proes(props){

let priyal =props.name

return(
        <>
        { priyal ? <A/> : <B/> }
        </>
    )
}