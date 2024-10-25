import {createContext, useContext, useEffect, useState} from 'react'

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    )

    const updateUser = (data) => {
        setCurrentUser(data)
    }

    const values = {
        currentUser,
        updateUser
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser]);

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)
export default AuthProvider