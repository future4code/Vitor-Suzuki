import React from "react"
import { HeaderContainer} from "./styles"
import Input from "../Input/Input"
import IForm from "../../interfaces/IForm"

const Header: React.FC<IForm>= (props) => {

    return (
        <HeaderContainer>
                <Input {...props}/>
        </HeaderContainer>
    )
}

export default Header