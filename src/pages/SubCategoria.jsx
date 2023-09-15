import { useParams } from "react-router-dom";
import ListPosts from "../components/ListPost";

const SubCategoria = () => {
    const {SubCategoria} = useParams()

    return (
        
        <ListPosts url={`/posts?subcategoria=${SubCategoria}`} />
        )
}

export default SubCategoria