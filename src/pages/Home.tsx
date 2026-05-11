import { Link } from "react-router-dom";

export default function Home() {
    const features = [
        {
            name: "Example",
            path: "/example",
        },
        {
            name: "S3",
            path: "/s3",
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
                    Every feature must contain:

                    <pre>
                        {`FeatureName/
├── FeatureNameHeader.tsx
├── FeatureNameHeader.css
├── FeatureNameOverview.tsx
├── FeatureNameSetup.tsx
├── FeatureNameDevelopment.tsx
├── assets/
└── FeatureName.css`}
                    </pre>
                </li>

                <li>
                    Create the feature header component.

                    <p>
                        You may copy the existing feature
                        header template and update the
                        navigation links.
                    </p>

                    <pre>
                        {`<NavLink
    to="/feature-name"
>
`}
                    </pre>
                </li>

                <li>
                    Every feature must contain these pages:

                    <ul>
                        <li>
                            <code>
                                FeatureNameOverview.tsx
                            </code>
                            : General information about
                            the AWS feature/service.
                        </li>

                        <li>
                            <code>
                                FeatureNameSetup.tsx
                            </code>
                            : Guide for setting up the
                            feature in the AWS Console.
                        </li>

                        <li>
                            <code>
                                FeatureNameDevelopment.tsx
                            </code>
                            : Guide for using the feature
                            in development/code projects.
                        </li>
                    </ul>
                </li>

                <li>
                    CSS files and assets related to the
                    feature must stay inside the feature
                    folder.

                    <pre>
                        {`FeatureName/
├── assets/
├── FeatureName.css
└── FeatureNameHeader.css`}
                    </pre>
                </li>

                <li>
                    Register the routes inside:
                    <code>
                        /src/router/index.tsx
                    </code>

                    <pre>
                        {`<Route
    path="/feature-name"
    element={<FeatureNameOverview />}
/>

<Route
    path="/feature-name/setup"
    element={<FeatureNameSetup />}
/>

<Route
    path="/feature-name/development"
    element={<FeatureNameDevelopment />}
/>`}
                    </pre>
                </li>

                <li>
                    Link the feature in:
                    <code>
                        /src/pages/Home.tsx
                    </code>

                    <pre>
                        {`const features = [
    {
        name: "FeatureName",
        path: "/feature-name",
    }
];`}
                    </pre>
                </li>

                <li>
                    Submit a Pull Request after testing.
                </li>
            </ol>
        </div>
    );
}