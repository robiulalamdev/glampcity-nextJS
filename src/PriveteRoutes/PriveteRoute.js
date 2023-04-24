import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@/Hooks/getAuth";
import SmallLoader from "@/components/Loaders/SmallLoader";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
    const router = useRouter();
    const { user, loading } = useAuth();

    if (loading) {
        return <SmallLoader />
    }

    if (user?._id && loading === false) {
        return children
    }
    else if (!user && loading === false) {
        router.push("/login");
    }
};

export default PrivateRoute;
