import { useHistory } from "react-router-dom"
import  Button  from "../Button"
import { CustomHeader } from "./style"

const Header = ({button, path}) =>{
    const history = useHistory()

    return(
        <CustomHeader>
            <img src="https://jamestip.com/wp-content/uploads/2021/07/JamesTip_Logo_RGB_Horizontal_White-1.png" alt="logo-james-tip"/>
            <Button onClick={() => history.push(path)}>{button}</Button>
        </CustomHeader>
    )
}

export default Header