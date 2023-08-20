import axios from "axios";
import {useContext} from "react";
import UserContext from "../context/userContext";

const useApi = () => {
    const {} = useContext(UserContext);

    const URL = 'http://3.110.51.142:8080'

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

    const signup = (name, email, password, confirmPassword) => {
        return axios.post(`${URL}/auth/signup`, {
            name, email, password, confirmPassword
        })
    };

    const getUserData = () => {
        return axios.get(`${URL}/data/user-data`, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
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
        return axios.post(`${URL}/model/promptWithMaskedImage`, {chatId, prompt, image, maskedImage}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    const getRecommendation = (products,image,maskedImage) => {
        return axios.post(`${URL}/model/recommendation`, {products,image,maskedImage}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    return {login, signup,newChat, getProducts, getPromptWithMaskedImage, getRecommendation, getUserData}
}

export default useApi;