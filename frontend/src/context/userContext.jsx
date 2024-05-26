
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation"


const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [currentUser, setcurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const [loggedIn, setLoggedIn] = useState(currentUser !== null);

    const router = useRouter();

    const logout = () => {
        sessionStorage.removeItem('user');
        setLoggedIn(false);
        router.push("/")
    }

    return (
        <UserContext.Provider value={{
            loggedIn, setLoggedIn, logout, currentUser, setcurrentUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => useContext(UserContext);

export default useUserContext;