import { NavLink } from "react-router-dom";

export default function HomeLink() {
    return (
        <nav className="feature-nav">
            <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive
                            ? "feature-link active-link"
                            : "feature-link"
                    }
                >
                    &lt;- Home
                </NavLink>
        </nav>
    )
}