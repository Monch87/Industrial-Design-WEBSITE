import axios from 'axios'

class ContactService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/contact`,
            withCredentials: true
        })
    }

    sendMail = (contactDetails) => this.api.put('/contact', contactDetails)
}

export default ContactService