import {
    Routes,
    Route,
    Link,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Blogpage from "./pages/Blogpage";
import Homepage from "./pages/Homepage";
import Notfoundpage from "./pages/Notfoundpage";
import "./App.css";
import Layout from "./components/Layout";
import Singlepage from "./pages/Singlepage";
import CreatePost from "./pages/CreatePost";
import Editpost from "./pages/Editpost";
import Loginpage from "./pages/Loginpage";
import RequireAuth from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

function App() {
    return (
        <div className="app">
            <AuthProvider>
                <Routes>
                    {/* Это общая обертка, которая будет отрисовываться всегда */}
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Homepage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route
                            path="about-us"
                            element={<Navigate to="/about" replace />}
                        />
                        <Route path="blog" element={<Blogpage />} />
                        <Route path="blog/:id" element={<Singlepage />} />
                        <Route path="blog/:id/edit" element={<Editpost />} />
                        <Route
                            path="blog/new"
                            element={
                                <RequireAuth>
                                    <CreatePost />
                                </RequireAuth>
                            }
                        />
                        <Route path="login" element={<Loginpage />} />
                        <Route path="*" element={<Notfoundpage />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
