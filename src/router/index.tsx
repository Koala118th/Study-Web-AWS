import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Example from "../pages/Example/ExamplePage";
//S3 files
import S3Overview from "../pages/S3/S3Overview";
import S3Setup from "../pages/S3/S3Setup";
import S3Development from "../pages/S3/S3Development";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/example"
                element={<Example />}
            />
            {/* S3 Route */}
            <Route
                path="/s3"
                element={<S3Overview />}
            />
            <Route
                path="/s3/setup"
                element={<S3Setup />}
            />
            <Route
                path="/s3/development"
                element={<S3Development />}
            />
        </Routes>
    );
}
