import express from 'express'
import dbController from './DatabaseController'

export const router = express.Router()

router.post('/', dbController.register)

router.get('/', dbController.authorize)