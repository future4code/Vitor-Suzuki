import express, { Express, request, Request, Response } from "express";
import cors from "cors";
import { countries } from './data';
import { country } from './types';

const app: Express = express();

// -- ENDPOINT 1 -- //

app.use(express.json());
app.use(cors());

app.get("/countries", (req: Request, res: Response) => {
    const result = countries.map((country: country) => {
        return { id: country.id, name: country.name }
    });
    res.status(200).send(result)
})

// -- ENDPOINT 2 -- //

app.get("/countries/:id", (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
        (country) => country.id === Number(req.params.id)
    );

    if (result) {
        res.status(200).send(result)
    } else {
        res.status(400).send("Not Found!")
    }
})

// -- ENDPOINT 3 -- //

app.get("/countries/search", (req: Request, res: Response) => {
    try {
        
        let result: country[] = countries;

    
        if (req.query.name) {
            result = result.filter((country) => {
                return country.name.includes(req.query.name as string)
            })
        };

        if (req.query.capital) {
            result = result.filter((country) => {
                return country.capital.includes(req.query.capital as string)
            })
        };

        if (req.query.continent) {
            result = result.filter((country) => {
                return country.continent.includes(req.query.continent as string)
            })
        }

        res.status(200).send(result);
    } catch {
        res.status(400).send("Erro")
    }

})

// -- ENDPOINT 4 -- //

app.post("/countries/:id", (req: Request, res: Response) => {
 // -- ???????? -- //
})