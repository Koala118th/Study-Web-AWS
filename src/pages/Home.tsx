import { Link } from "react-router-dom";

export default function Home() {
    const features = [
        {
            name: "Example",
            path: "/example",
        }
    ];

    return (
        <div style={{ padding: "2rem" }}>
            <h1>AWS Study Web</h1>

            <p>
                Welcome to the project repository. This page contains
                navigation links and development guidance for teammates.
            </p>

            <hr />

            <h2>Features</h2>

            <ul>
                {features.map((feature) => (
                    <li key={feature.path}>
                        <Link to={feature.path}>
                            {feature.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <hr />

            <h2>Feature Development Guide</h2>

            <ol>
                <li>
                    Create a new branch on GitHub.
                    <ul>
                        <li>
                            Branch format:
                            <code>
                                feature-name
                            </code>
                        </li>

                        <li>
                            If revising an existing feature:
                            <code>
                                feature-name-v2
                            </code>
                        </li>
                    </ul>
                </li>

                <li>
                    Create a new folder inside:
                    <code>
                        /src/pages/
                    </code>

                    <ul>
                        <li>
                            Folder format:
                            <code>
                                FeatureName
                            </code>
                        </li>
                    </ul>
                </li>

                <li>
                    Create the page component.

                    <pre>
                        {`src/pages/Example/ExamplePage.tsx`}
                    </pre>
                </li>

                <li>
                    Register the route inside:
                    <code>
                        /src/router/index.tsx
                    </code>
                    <pre>
                        {`<Route
    path="/example"
    element={<ExamplePage />}
/>`}
                    </pre>
                </li>

                <li>
                    Add a navigation link to the feature.
                    <pre>
                        {`<Link to="/inventory">
  Inventory
</Link>`}
                    </pre>
                </li>
                <li>
                    Submit a Pull Request after testing.
                </li>
            </ol>
            <hr />
        </div>
    );
}