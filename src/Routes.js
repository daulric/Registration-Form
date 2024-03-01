import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RegisterPage from "./Pages/register"
import IdCard from "./Pages/card"

function RoutePage() {
    return (
        <Router>
            <Routes>
                <Route path="/" element = {<RegisterPage />} />
                <Route path="/id-card" element={<IdCard />} />
            </Routes>
        </Router>
    )
}

export default RoutePage;