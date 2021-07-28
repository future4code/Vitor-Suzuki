import axios from 'axios'
import { addressInfo } from '../types'

// -- EXERCÍCIO 1:

export const getAddressInfo = async (zipcode: string): Promise<addressInfo | null> => {

    try {
        const result = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/ `)

        return {
            street: result.data.logradouro,
            neighborhood: result.data.bairro,
            city: result.data.cidade,
            state: result.data.uf,
        }
    } catch(error) {
        console.log(error);
        return null
    }
}

// -- EXERCÍCIO 2: Tabela criada no workbench

/*EXERCÍCIO 3: Tabela alterada no workbench: 

 ALTER TABLE userAddress
 ADD id INT PRIMARY KEY,
 ADD name VARCHAR(255) NOT NULL,
 ADD nickname VARCHAR(255) NOT NULL,
 ADD email VARCHAR(255) NOT NULL; */