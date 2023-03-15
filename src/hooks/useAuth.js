import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { getUser, addUser} from "../Database/DatabaseMethods";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children, userData }) => {
    const [user, setUser] = useLocalStorage(children, userData);
    const navigate = useNavigate();

    const login = async (data) => {
        if(await getUser(data.email, data.password)){
            setUser(data);
            navigate("/dashboard/about", { replace: true });
        }else {
            setUser(null);
        }
    };

    const register = async (data) => {
        await addUser(data.email, data.password)
        setUser(data);
        navigate("/dashboard/about", { replace: true });
    };

    const logout = () => {
        setUser(null);
        navigate("/", { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            login,
            register,
            logout
        }),
        [user]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
