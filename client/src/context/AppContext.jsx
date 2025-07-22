import { Children, createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";


axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const navigate = useNavigate()

    const currency = import.meta.env.VITE_CURRENCY

    const [token, setToken] = useState(null)

    const [user, setUser] = useState(null)

    const [isOwner, setIsOwner] = useState(false)

    const [showLogin, setshowLogin] = useState(false)

    const [pickupDate, setPickupDate] = useState('')

    const [returnDate, setreturnDate] = useState('')

    const [products, setProducts] = useState([])

    // Function To Check If User Is Logged In.

    const fetchUser = async () => {

        try {

            const { data } = await axios.get('/api/user/user-data')

            if (data.success) {

                setUser(data.user)
                setIsOwner(data.user.role === 'owner')

            } else {

                navigate('/')
            }

        } catch (error) {

            toast.error(error.message)

        }

    }

    // Function To Fetch All Cars From The Server

    const fetchProducts = async () => {

        try {

            const { data } = await axios.get('/api/user/product-data')

            data.success ? setProducts(data.products) : toast.error(data.message)

        } catch (error) {

            toast.error(data.message)

        }

    }

    // Function To Log Out User

    const logOut = () => {

        localStorage.removeItem('token')

        setToken(null)

        setUser(null)

        setIsOwner(false)

        axios.defaults.headers.common['Authorization'] = ''

        toast.success('You have been Logged Out')

    }

    // useEffect To Retrive The Token From Local Storage.

    useEffect(() => {

        const token = localStorage.getItem('token')

        setToken(token)
        fetchProducts()

    }, [])

    // useEffect To Fetch User Data When Token Is Available.

    useEffect(() => {

        if (token) {

            axios.defaults.headers.common['Authorization'] = `${token}`;

            fetchUser();

        }

    }, [token]);



    const value = {

        navigate,
        currency,
        axios,
        user, setUser,
        token, setToken,
        isOwner, setIsOwner,
        fetchUser,
        showLogin, setshowLogin,
        logOut,
        fetchProducts,
        products, setProducts,
        pickupDate, setPickupDate,
        returnDate, setreturnDate

    }

    return (

        <AppContext.Provider value={value}>

            {children}

        </AppContext.Provider>

    )

}

export const useAppContext = () => {

    return useContext(AppContext)

}