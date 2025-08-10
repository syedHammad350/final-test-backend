import express from "express"
import { Adminlogin } from '../Controller/Admin.controller.js';



    const AdminRoute=express.Router()
    AdminRoute.post('/admin',Adminlogin)

    export default AdminRoute
