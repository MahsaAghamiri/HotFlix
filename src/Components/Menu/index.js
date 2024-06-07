import { Link } from "react-router-dom"

export default function Menu({menuItems = []}){
     function rendermenu(){
       return menuItems.map(({id, title, link}) => {
            return(
                <li key={id}><Link to={link} className="custom-link">{title}</Link></li>
            )
       })
     }
    return(<ul>{rendermenu()}</ul>)
}