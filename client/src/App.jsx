import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ProtectedRoute from "./libs/ProtectedRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import MainLayout from "./components/Layout/MainLayout.jsx";
import BillPage from "./pages/BillPage.jsx";
import StatisticsPage from "./pages/StatisticsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            {
                path: "",
                element: <MainLayout />,
                children: [
                    {
                        path: "",
                        element: <HomePage />
                    },
                    {
                        path: "bills",
                        element: <BillPage />
                    },
                    {
                        path: "statistics",
                        element: <StatisticsPage />
                    }
                ]
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    }
])


const App = () => {
    return  <RouterProvider router={routes} />
};

export default App;