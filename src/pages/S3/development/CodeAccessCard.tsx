// React and related imports
import { useRef, useState } from "react";
import { getFile, putFile, deleteFile } from "../../../api/s3";

export default function CodeAccessCard() {


    return (
        <div className="section-card">
            <h2>Task: Accessing S3 Objects using the API</h2>

            <h3>Step 1 — Set the Bucket Policy</h3>
            <div className="code-section-box">
                Ensure your bucket policy allows these actions for your IAM user:
                <div className="code-section">
                    <span className="json-code">{`"Action": [
    "s3:GetObject",
    "s3:PutObject",
    "s3:DeleteObject"
]`}</span>
                </div>
            </div>

            <h3>Step 2 — Install the Library and Import the Functions</h3>
            <div className="code-section-box">
                Install the AWS SDK:
                <div className="code-section">
                    <span className="json-code">$ npm install @aws-sdk/client-s3</span>
                </div>
                Import the functions in your API file:
                <div className="code-section">
                    <span className="json-code">{`import {
    GetObjectCommand,
    PutObjectCommand,
    DeleteObjectCommand,
    HeadObjectCommand
} from "@aws-sdk/client-s3";`}</span>
                </div>
            </div>

            <h3>Step 3 — Set Up the Request</h3>
            <div className="code-section-box">
                Each operation needs a command with the bucket name and key:
                <div className="code-section">
                    <span className="json-code">{`const command = new GetObjectCommand({
    Bucket: name,
    Key: key,
});`}</span>
                </div>
            </div>

            <h3>Step 4 — Set Up the API Function</h3>
            <div className="code-section-box">
                Call your backend API from the frontend:
                <div className="code-section">
                    <span className="json-code">{`import { getFile, putFile, deleteFile } from "path-to-api/s3";

const data = await getFile(key);
await putFile(key, file);
await deleteFile(key);`}</span>
                </div>
            </div>

            <h3>Try It Yourself</h3>
            <Demonstration />
        </div>
    );
}

function Demonstration() {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [currentKey, setCurrentKey] = useState<string | null>(null);

    async function handleFetch(key: string) {
        setLoading(true);
        setError(null);
        try {
            const data = await getFile(key);
            setImageUrl(data.url);
        } catch (err) {
            setError("Failed to fetch file. Check your policy.");
            setImageUrl(null);
        } finally {
            setLoading(false);
        }
    }

    async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        setLoading(true);
        setError(null);
        try {
            await putFile(file.name, file);
            setCurrentKey(file.name);
            await handleFetch(file.name);
        } catch (err) {
            setError("Failed to upload file.");
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete() {
        if (!currentKey) return;
        setLoading(true);
        setError(null);
        try {
            await deleteFile(currentKey);
            setImageUrl(null);
            setCurrentKey(null);
        } catch (err) {
            setError("Failed to delete file.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <div className="demo-controls">
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleUpload}
                />

                <button onClick={() => fileInputRef.current?.click()} disabled={loading}>Upload</button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {imageUrl && (
                <div style={{ position: "relative", display: "inline-block" }}>
                    <img src={imageUrl} alt="S3 Object" />
                    <button onClick={handleDelete} className="delete-button-small">
                        ×
                    </button>
                </div>
            )}
        </div>
    )
}

