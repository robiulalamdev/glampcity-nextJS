import { useRouter } from "next/router";
import { useAuth } from "@/Hooks/getAuth";
import SmallLoader from "@/components/Loaders/SmallLoader";

const PrivateRoute = ({ children }) => {
    const router = useRouter();
    const { user, loading } = useAuth();

    if (user === null) {
        // console.log("loading....................");
        return <SmallLoader />
    }

    else if (user?._id && loading === false) {
        return children
    }
    else if (!user?._id && loading === false) {
        router.push("/login");
    }
};

export default PrivateRoute;
