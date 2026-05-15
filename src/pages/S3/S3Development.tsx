import { act, useState } from "react";
const actions = [
    "s3:GetObject",
    "s3:ListBucket",
    "s3:PutObject",
    "s3:DeleteObject",
    "s3:PutBucketPolicy",
    "s3:DeleteBucketPolicy",
    "s3:*"
];

import "./S3.css";
import S3Header from "./S3Header";
// Assets
import image1 from "./assets/s3-dev-1.png";
import image2 from "./assets/s3-dev-2.png";
import image3 from "./assets/s3-dev-3.png";
import image4 from "./assets/s3-dev-4.png";
import image5 from "./assets/s3-dev-5.png";

export default function S3Development() {
    return (
        <div className="s3-page">
            <S3Header />
            <hr />
            <div className="section-card">
                <h2>How not to be a Dumbass</h2>
                <div className="question-card">
                    <div className="question-title">
                        Task: Accessing the Object from public
                    </div>
                    <div>
                        <strong className="question-content">Copy the URL of the object.</strong>
                        <br />
                        <img src={image3} alt="Copy Object URL" />
                        <strong className="question-content">Paste the URL in a new browser tab.</strong>
                        <img src={image4} alt="Paste Object URL" />
                    </div>
                </div>
                <h3>If you can't access the objects, here are some things to check:</h3>
                <img src={image2} alt="Public Access Example" />
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
                        <img src={image5} alt="Set Object Permissions" />
                        <div className="policy-code-box">
                            Policy code example for allowing public read access to all objects in the bucket:
                            <PolicyCode />
                        </div>
                        <div className="note-box">
                            <strong>Note:</strong>
                            {" "} The policy session allows you to control the permissions for the objects in the bucket.
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export function PolicyCode() {
    const [sid, setSid] = useState('"Statement id can be anything"');
    const [resource, setResource] = useState('"arn:aws:s3:::bucket-name/*"');
    const [value, setValue] = useState("s3:GetObject");

    return (
        <div className="policy-code-line">
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
                <option>"arn:aws:iam::account-id:root"</option>
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