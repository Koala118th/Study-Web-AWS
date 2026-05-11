import "./S3.css";
import bucketImage1 from "./assets/bucket-create-1.png";
import S3Header from "./S3Header";

export default function S3Setup() {
    return (
        <div style={{ padding: "2rem" }}>
            <S3Header />
            {/* Creating and Managing S3 Buckets */}
            <h2>Creating and Managing S3 Buckets</h2>
            <ol>
                <li>
                    Set the bucket name and region.
                    <br />
                    <img src={bucketImage1} />
                </li>
            </ol>

        </div>
    );
}