import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Example from "../pages/Example/ExamplePage";
//S3 files
import S3Overview from "../pages/S3/S3Overview";
import S3Setup from "../pages/S3/S3Setup";
import S3Development from "../pages/S3/S3Development";
//EC2 files
import EC2Overview from "../pages/EC2/EC2Overview";
import EC2Setup from "../pages/EC2/EC2Setup";
import EC2Development from "../pages/EC2/EC2Development";

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
            {/* EC2 Route */}
            <Route
                path="/ec2"
                element={<EC2Overview />}
            />
            <Route
                path="/ec2/setup"
                element={<EC2Setup />}
            />
            <Route
                path="/ec2/development"
                element={<EC2Development />}
            />
        </Routes>
    );
}
