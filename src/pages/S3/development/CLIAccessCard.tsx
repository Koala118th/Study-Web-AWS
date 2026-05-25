import PolicyCodeEditor from "./components/PolicyCodeEditor";

export default function CLIAccessCard() {
    return (
        <div className="section-card">
            <h2>Task: Accessing S3 Object using personal device's Terminal</h2>
            <h3>Follow the steps below and try to download an image from the S3 bucket:</h3>
            <ol>
                <li>
                    <strong>Enable the policy.</strong>
                    <div className="code-section-box">
                        Sample bucket policy for allowing access to S3 objects through IAM user or role:
                        <PolicyCodeEditor mode="iam" />
                    </div>
                    <div className="note-box">
                        <strong>Note:</strong>
                        When accessing S3 through the AWS CLI, authentication is typically performed using an IAM user or IAM role.
                        Ensure that the ARN is written in the correct format:
                        <br />
                        <strong>IAM User ARN:</strong>{" "}
                        <code>"arn:aws:iam::account-id:user/username"</code>
                        <br />
                        <strong>IAM Role ARN:</strong>{" "}
                        <code>"arn:aws:iam::account-id:role/role-name"</code>
                    </div>
                </li>
                <li>
                    <strong>Use AWS CLI to access the object.</strong>
                    <div className="code-section-box">
                        Install AWS CLI and confirm the installation:
                        <div className="code-section">
                            <span className="json-code">$ msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi
                                <br />
                                $ aws --version
                            </span>
                            <br />
                            <span className="json-code-response">aws-cli/2.34.47 Python/3.14.4 Windows/11 exe/AMD64</span>
                        </div>
                        <br />
                        Configure AWS CLI with your credentials and confirm the configuration:
                        <div className="code-section">
                            <span className="json-code">$ aws configure </span>
                            <br />
                            <span className="json-code-response">{`    AWS Access Key ID [None]: AKIA...
    AWS Secret Access Key [None]: xxxxxxxxx
    Default region name [None]: ap-southeast-1
    Default output format [None]: json`}
                            </span>
                            <br />
                            <span className="json-code">$ aws sts get-caller-identity</span>
                            <br />
                            <span className="json-code-response">
                                {`    {
        "UserId": "Access Key ID",
        "Account": "Account ID",
        "Arn": "IAM User or Role ARN"
    }`}</span>
                        </div>
                        <br />
                        Some common AWS CLI commands for accessing S3 objects:
                        <div className="code-section">
                            <span className="json-code">$ aws s3 ls s3://bucket-name/</span>
                            <br />
                            <span className="json-code">$ aws s3 cp s3://bucket-name/object-key local-file-path</span>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    )
}