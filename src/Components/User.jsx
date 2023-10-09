import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const User = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className="flex items-center space-x-2 mr-4">
            <img src={user?.photoURL} alt="Image of the user" className="h-6 w-6 lg:h-8 lg:w-8 rounded-full object-cover" />
            <p className="font-medium text-sm lg:text-lg">{user?.displayName}</p>
        </div>
    );
};

export default User;