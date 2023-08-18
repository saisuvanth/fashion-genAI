import axios from "axios";
import { useContext } from "react";
import UserContext from "../context/userContext";

const useApi = () => {
    const { } = useContext(UserContext);

    const URL = 'http://13.233.157.55:8080'

    const postPrompt = () => {

    }

    const getProducts = (imageUrl) => {
        return axios.post(`${URL}/model/getSimilarProducts`, {
            "image": imageUrl
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    const login = (email, password) => {
        return axios.post(`${URL}/auth/login`, {
            email, password
        })
    }

    const newChat = () => {
        return axios.get(`${URL}/data/new-chat`, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    const getPromptWithMaskedImage = (chatId, prompt, image, maskedImage) => {

        return axios.post(`${URL}/model/promptWithMaskedImage`, { chatId, prompt, image, maskedImage }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    return { login, newChat, getProducts, getPromptWithMaskedImage }
}

export default useApi;