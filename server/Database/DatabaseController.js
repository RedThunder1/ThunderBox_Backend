import {dbServices} from "./Database.js";

class dbController {
    register = async (req, res) => {
        const data = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        }
        const account = await dbServices.prototype.Register(data)
        res.status(201).send(account)
    }

    authorize = async (req, res) => {
        const data = {
            name: req.body.name,
            password: req.body.password
        }
        const account = await dbServices.prototype.Authorize(data)
        res.send(account)
    }
}