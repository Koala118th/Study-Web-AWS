import FeatureHeader from "../../components/FeatureHeader";
import "./EC2.css";
import "../../styles/components.css"
export default function S3Overview() {
    return (
        <div className="page">
            <FeatureHeader
                title="EC2"
                description="This page is for EC2 feature development and testing."
                basePath="/ec2"
            />
        </div>
    )
}