import Nav from "./nav";
import { useParams } from 'react-router-dom'

export default function EditPost(){
    const {postId} = useParams()
    return(
        <>
        <Nav />
        <p>edit post {postId}</p>
        </>
    )
}