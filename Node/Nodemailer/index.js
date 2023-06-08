const express = require("express")
const nodemailer = require("nodemailer")
const dotenv = require("dotenv")
dotenv.config()

const PORT = process.env.PORT

const server = express()

const router = express.Router()


router.get("/sendNewMail", (req, res, next) => {
    const email = process.env.EMAIL
    const password = process.env.password
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: email,
            pass: password
        }
    })

    const mailOptions = {
        from: email,
        to: "edulucho88@gmail.com",
        subject: "Confirmation TEST NODEMAILER",
        text: "OK todo bien"
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return next(error)
        } else {
            return res.status(200).json("Email sent: " + info.response)
        }
    })
})

server.use("/", router)

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
})