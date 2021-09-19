import React from "react"
import { Props } from "../model/types"

const Sidebar: React.FC<Props> = ({color}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100vw" height="100vh" viewBox="0 0 613 1080" fill="none">
            <path d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z" fill={color} />
        </svg>)

}

export default Sidebar