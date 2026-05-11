import { NavLink } from "react-router-dom";
import "../../css/header.css";

export default function S3Header() {
    return (
        <header className="feature-header">
            <h1>S3</h1>

            <p>
                This page is for S3 feature
                development and testing.
            </p>

            <nav className="feature-nav">
                <NavLink
                    to="/s3"
                    end
                    className={({ isActive }) =>
                        isActive
                            ? "feature-link active-link"
                            : "feature-link"
                    }
                >
                    Overview
                </NavLink>

                <NavLink
                    to="/s3/setup"
                    className={({ isActive }) =>
                        isActive
                            ? "feature-link active-link"
                            : "feature-link"
                    }
                >
                    Setup
                </NavLink>

                <NavLink
                    to="/s3/development"
                    className={({ isActive }) =>
                        isActive
                            ? "feature-link active-link"
                            : "feature-link"
                    }
                >
                    Development
                </NavLink>
            </nav>
        </header>
    );
}