import axios from "axios"

const url = import.meta.env.VITE_BASE_URL

export const getProject = async () => {
    try {
        const res = await axios.get(`${url}/project`)
        return res.data
    } catch (err) {
        return err
    }
}

export const getStack = () => {
    try {
        const res = axios.get(`${url}/stack`)
        return res
    } catch (err) {
        return err
    }
}