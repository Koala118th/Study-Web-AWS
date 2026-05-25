
// Styles
import "./S3.css";
// Components
import FeatureHeader from "../../components/FeatureHeader";

// Development components
import PublicAccessCard from "./development/PublicAccessCard.tsx";
import CLIAccessCard from "./development/CLIAccessCard.tsx"
import CodeAccessCard from "./development/CodeAccessCard.tsx";

export default function S3Development() {
    return (
        <div className="s3-page">
            <FeatureHeader
                title="S3"
                description="This page is for S3 feature development and testing."
                basePath="/s3"
            />
            <hr />
            <PublicAccessCard />
            <CLIAccessCard />
            <CodeAccessCard />
        </div>
    );
}


