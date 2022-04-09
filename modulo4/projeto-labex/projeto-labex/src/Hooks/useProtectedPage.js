import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect (() => {
        const token = localStorage.getItem('token')

        if(token === null){
            console.log('User não está logado!')
            navigate('/')
        }
    }, [navigate])
}
export default useProtectedPage