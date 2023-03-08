import { Navigate, useOutlet } from "react-router-dom";
import { useAuth} from "../hooks/useAuth";
import { AppBar } from "./AppBar";

export const ProtectedLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();

    if (!user) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <AppBar
                pages={[
                    { label: "News & About", path: "about" },
                    { label: "Garden", path: "garden" },
                    { label: "Discussion", path: "discussion" }
                ]}
            />
            {outlet}
        </div>
    );
};
