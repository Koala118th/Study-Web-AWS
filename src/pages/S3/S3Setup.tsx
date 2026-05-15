// S3Setup.tsx
import "./S3.css";
// Assets
import bucketImage3 from "./assets/bucket-manage-1.png";
import bucketImage4 from "./assets/bucket-manage-2.png";

// Components
import S3Header from "./S3Header";

export default function S3Setup() {
    return (
        <div className="s3-page">
            <S3Header />
            <hr />
            {/* Creating and Managing S3 Buckets */}
            <div className="section-card">
                <h2>Creating and Managing S3 Buckets</h2>
                <ol>
                    <li>
                        <strong>Set the bucket name and region.</strong>
                        <div className="note-box">
                            <strong>Note 1:</strong>
                            {" "} The bucket name must be globally unique.
                        </div>
                        <div className="note-box">
                            <strong>Note 2:</strong>
                            {" "}us-east-1 region has the cheapest pricing, but if you set up the EC2 instance in a different region, it may cost more.
                        </div>
                    </li>

                    <li>
                        <strong> Set object ownership.</strong>
                        <div className="note-box">
                            <strong>Note 3  :</strong>
                            {" "}
                            ACLs are disabled by
                            default. Only the bucket
                            owner has the right to
                            manage objects in it.
                        </div>
                    </li>

                    {/* Access Permissions */}
                    <li className="permission-section">
                        <strong> Set access permissions. </strong>
                        <p> <i>A similar visualization of the access control options is shown below:</i> </p>
                        <div className="checklist-item">
                            <label>
                                <input type="checkbox" />

                                <span>
                                    Block all public
                                    access
                                </span>
                            </label>
                        </div>
                        <ul className="sub-checklist">
                            <li>
                                <label>
                                    <input type="checkbox" />

                                    <span>
                                        Block public access to buckets and objects granted through <i>new</i> access control lists (ACLs).
                                    </span>
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input type="checkbox" />

                                    <span>
                                        Block public access to buckets and objects granted through <i>any</i> access control lists (ACLs).
                                    </span>
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input type="checkbox" />

                                    <span>
                                        Block public access to buckets and objects granted through <i>new</i> public bucket or access point policies.
                                    </span>
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span>
                                        Block public and cross-account access to buckets and objects through <i>any</i>  public bucket or access point policies.
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </li>

                    {/* Versioning */}
                    <li>
                        <strong>
                            Set versioning:
                        </strong>
                        {" "}
                        Versioning allows you to keep
                        multiple versions of an object
                        in the same bucket.

                        <div className="note-box">
                            <strong>Note:</strong>
                            {" "}
                            Disabled by default.
                        </div>
                    </li>
                </ol>
            </div>

            {/* Bucket Management */}
            <div className="section-card">
                <h2>Managing Bucket</h2>

                <h3>
                    Bucket management console
                </h3>

                <img
                    src={bucketImage3}
                    alt="Managing S3 Bucket"
                />

                <p className="image-caption">
                    AWS S3 bucket management
                    console.
                </p>

                <h3>
                    Bucket's objects management
                    console
                </h3>

                <img
                    src={bucketImage4}
                    alt="Bucket Objects Management"
                />

                <p className="image-caption">
                    AWS S3 object management
                    interface.
                </p>
            </div>
        </div>
    );
}