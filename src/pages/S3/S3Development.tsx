import "./S3.css";
import S3Header from "./S3Header";
// Assets
import image1 from "./assets/s3-dev-1.png"
export default function S3Development() {
    return (
        <div className="s3-page">
            <S3Header />
            <hr />
            <div className="section-card">
                <h2>How not to be a Dumbass</h2>
                <h3>Why did you cannot access to the objects in the bucket?</h3>
                <ol>
                    <li>
                        <strong>Have you enabled public access to the bucket?</strong>
                        <img src={image1} alt="Public Access Example" />
                    </li>
                </ol>
            </div>
        </div>
    );
}