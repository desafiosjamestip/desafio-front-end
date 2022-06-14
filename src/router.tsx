import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FormStep1 } from "./pages/FormStep1";
import { FormStep2 } from "./pages/FormStep2";
import { View } from "./pages/View";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormStep1 />} />
                <Route path="/step2" element={<FormStep2 />} />
                <Route path="/view" element={<View />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}