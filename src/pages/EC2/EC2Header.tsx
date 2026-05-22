import { NavLink } from "react-router-dom";
import "../../css/header.css";

export default function EC2Header() {
    return (
        <header className="feature-header">
            <h1>EC2</h1>

            <p>
                This page is for EC2 feature
                development and testing.
            </p>

            <nav className="feature-nav">
                <NavLink
                    to="/ec2"
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
                    to="/ec2/setup"
                    className={({ isActive }) =>
                        isActive
                            ? "feature-link active-link"
                            : "feature-link"
                    }
                >
                    Setup
                </NavLink>

                <NavLink
                    to="/ec2/development"
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