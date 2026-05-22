import { useEffect, useState } from "react";

import { getFile } from "../../api/s3";
import "./S3.css";
import FeatureHeader from "../../components/FeatureHeader";
// Assets
import image1 from "./assets/s3-dev-1.png";


export default function S3Development() {
    return (
        <div className="s3-page">
            <FeatureHeader
                title="S3"
                description="This page is for S3 feature development and testing."
                basePath="/s3"
            />
            <hr />
            <QuestionCard1 />
            <QuestionCard2 />
            <QuestionCard3 />
        </div>
    );
}

export function QuestionCard1() {
    return (
        <div className="section-card">
            <h2>Task: Accessing S3 Object from public</h2>
            <h3>If you can't access the objects, here are some things to check:</h3>
            <ol>
                <li>
                    <strong>Have you enabled public access to the bucket?</strong>
                    <img src={image1} alt="Edit Block public access" style={{ width: "100%", maxWidth: "100%", }} />
                    <div className="note-box">
                        <strong>Note:</strong>
                        {" "} Only disabling "Block all public access" in case you want to make the objects in the bucket public.
                        <br />
                        <strong>Important:</strong>
                        {" "} You can still access the objects in the bucket if you have the correct permissions and are authenticated. This setting only affects public access, not access for authenticated users.
                    </div>
                </li>
                <li>
                    <strong>Have you set the correct permissions for the objects?</strong>
                    <div className="code-section-box">
                        Policy code example for allowing public read access to all objects in the bucket:
                        <PolicyCode />
                    </div>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Field</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Sid</strong></td>
                                    <td>
                                        Stands for Statement ID, a name you can give to the policy statement.
                                    </td>
                                </tr>

                                <tr>
                                    <td><strong>Effect</strong></td>
                                    <td>
                                        Specifies whether the statement allows or denies access.
                                    </td>
                                </tr>

                                <tr>
                                    <td><strong>Principal</strong></td>
                                    <td>
                                        Specifies the entity that is allowed or denied access.
                                    </td>
                                </tr>

                                <tr>
                                    <td><strong>Action</strong></td>
                                    <td>
                                        Specifies the action that is allowed or denied.
                                    </td>
                                </tr>

                                <tr>
                                    <td><strong>Resource</strong></td>
                                    <td>
                                        Specifies the resource to which the action applies.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ol>
        </div >
    );
}

export function PolicyCode() {
    const actions = [
        "s3:GetObject",
        "s3:ListBucket",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:PutBucketPolicy",
        "s3:DeleteBucketPolicy",
        "s3:*"
    ];

    const [sid, setSid] = useState('"Statement id can be anything"');
    const [resource, setResource] = useState('"arn:aws:s3:::bucket-name/*"');
    const [value, setValue] = useState("s3:GetObject");

    return (
        <div className="code-section">
            <span className="json-code">{`{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": `}</span>

            <input
                type="text"
                className="json-code-text"
                value={sid}
                onChange={(e) => setSid(e.target.value)}
                size={Math.max(sid.length, 1)}
            />
            <span className="json-code">{`,
            "Effect": `}</span>

            <select className="json-code-select">
                <option>"Allow"</option>
                <option>"Deny"</option>
            </select>

            <span className="json-code">{`,
            "Principal": `}</span>

            <select className="json-code-select">
                <option>"*"</option>
                <option>{"{"}"AWS": "arn:partition:service:region:account-id:resource"{"}"}</option>
            </select>

            <span className="json-code">{`,
            "Action": `}</span>

            <select
                className="json-code-select"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
                {actions.map((action) => (
                    <option key={action} value={action}>
                        {action}
                    </option>
                ))}
            </select>

            <span className="json-code">{`,
            "Resource": `}</span>

            <input
                type="text"
                className="json-code-text"
                value={resource}
                onChange={(e) => setResource(e.target.value)}
                size={Math.max(resource.length, 1)}
            />

            <span className="json-code">{`
        }
    ]
}`}</span>
        </div>
    );
}

export function QuestionCard2() {
    return (
        <div className="section-card">
            <h2>Task: Accessing S3 Object using personal device's Terminal</h2>
            <h3>Follow the steps below and try to download an image from the S3 bucket:</h3>
            <ol>
                <li>
                    <strong>Enable the policy.</strong>
                    <div className="code-section-box">
                        Sample bucket policy for allowing access to S3 objects through IAM user or role:
                        <PolicyCodeIAM />
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

export function PolicyCodeIAM() {
    const actions = [
        "s3:GetObject",
        "s3:ListBucket",
        "s3:PutObject",
        "s3:DeleteObject"
    ];
    const [value, setValue] = useState("s3:GetObject");
    return (
        <div className="code-section">
            <span className="json-code">{`{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "CLI Access",
            "Effect": `}</span>

            <select className="json-code-select">
                <option>"Allow"</option>
                <option>"Deny"</option>
            </select>

            <span className="json-code">{`,
            "Principal": "AWS": "arn:partition:service:region:account-id:resource",
            "Action": `}</span>

            <select
                className="json-code-select"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
                {actions.map((action) => (
                    <option key={action} value={action}>
                        {action}
                    </option>
                ))}
            </select>

            <span className="json-code">{`,
            "Resource": "arn:aws:s3:::bucket-name/*"
        }
    ]
}`}</span>
        </div>
    );
}

export function QuestionCard3() {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        async function fetchImage() {
            try {
                const data = await getFile(
                    "Screenshot 2026-05-14 205849.png"
                );

                setImageUrl(data.url);
            } catch (error) {
                console.error(error);
            }
        }

        fetchImage();
    }, []);

    return (
        <div className="section-card">
            <h2>Task: Accessing S3 Object using API</h2>

            <h3>
                Try to access the S3 object using the API endpoint provided by your backend.
            </h3>

            <div className="code-section-box">
                Sample code for fetching an S3 object through an API endpoint:

                <div className="code-section">
                    <span className="json-code">
                        {`import { getFile } from "path-to-api/s3";`}
                    </span>

                    <br />
                    <img src={imageUrl} alt="S3 Object" />
                </div>
            </div>
        </div>
    );
}
