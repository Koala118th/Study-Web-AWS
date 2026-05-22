import { NavLink } from "react-router-dom";
import "../styles/header.css";

type FeatureHeaderProps = {
    title: string;
    description: string;
    basePath: string;
};

export default function FeatureHeader({ title, description, basePath }: FeatureHeaderProps) {
    return (
        <header className="feature-header">
            <h1>{title}</h1>
            <p>{description}</p>

            <nav className="feature-nav">
                <NavLink to="/" end className={navClass}>← Home</NavLink>
                <NavLink to={basePath} end className={navClass}>Overview</NavLink>
                <NavLink to={`${basePath}/setup`} className={navClass}>Setup</NavLink>
                <NavLink to={`${basePath}/development`} className={navClass}>Development</NavLink>
            </nav>
        </header>
    );
}


const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "feature-link active-link" : "feature-link";