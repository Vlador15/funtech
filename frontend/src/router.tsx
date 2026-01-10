const PrivateRoute = () => {
    const isAuth = useAppSelector((s) => s.auth.isAuth);
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

const PublicRoute = () => {
    const isAuth = useAppSelector((s) => s.auth.isAuth);
    return isAuth ? <Navigate to="/profile" /> : <Outlet />;
};
