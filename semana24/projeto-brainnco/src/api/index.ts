import axios from "axios"
import {getLotteries, getLotteriesContests, getContestById } from "./routes"

const api = async (route: 'getLotteries' | 'getLotteriesContests' | 'getContestById', id?: string) => {
    const request = {
        getLotteries, 
        getLotteriesContests, 
        getContestById: getContestById(id)
    }[route]

    return   axios.get(`${process.env.REACT_APP_BASE_URL}${request}`)
}

export default api