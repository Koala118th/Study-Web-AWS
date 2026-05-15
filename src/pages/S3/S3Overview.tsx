// S3Overview.tsx

import "./S3.css";
import S3Header from "./S3Header";

export default function S3Overview() {
    return (
        <div className="s3-page">
            <S3Header />

            {/* =========================
                What is S3
            ========================= */}
            <div className="section-card">
                <h2>What is S3?</h2>

                <h3>Definition</h3>

                <p>
                    S3 stands for Simple Storage
                    Service. It is an object
                    storage service that allows
                    you to store and retrieve
                    data from anywhere on the
                    web.
                </p>

                <div className="note-box">
                    <strong>Important:</strong>
                    {" "}
                    S3 is object storage, not a
                    traditional file system or
                    virtual machine.
                </div>

                {/* =========================
                    Types of S3
                ========================= */}
                <h3>Types of S3 Storage Classes</h3>

                <p>
                    AWS provides several storage
                    classes designed for
                    different access patterns
                    and cost requirements.
                </p>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Active Data
                                </th>

                                <th>
                                    Infrequently
                                    Accessed Data
                                </th>

                                <th>
                                    Archive Data
                                </th>

                                <th>
                                    Intelligent
                                    Tiering
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <strong>
                                        S3 Standard
                                        (Main Focus)
                                    </strong>
                                </td>

                                <td>
                                    S3
                                    Standard-Infrequently
                                    Accessed
                                    <br />
                                    <br />
                                    S3 One
                                    Zone-Infrequently
                                    Accessed
                                </td>

                                <td>
                                    S3 Glacier
                                    Flexible
                                    Retrieval
                                    <br />
                                    <br />
                                    S3 Glacier
                                    Deep Archive
                                </td>

                                <td>
                                    S3
                                    Intelligent-Tiering
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* =========================
                    Pricing Information
                ========================= */}
                <h3>Pricing Information</h3>

                <p>
                    S3 pricing depends on
                    storage usage, requests,
                    and data transfer.
                </p>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Cost Money
                                </th>

                                <th>
                                    Free of Charge
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <ul className="pricing-list">
                                        <li>
                                            Storage
                                            usage per
                                            month
                                            (GB/month)
                                        </li>

                                        <li>
                                            PUT,
                                            COPY,
                                            POST,
                                            LIST
                                            requests
                                        </li>

                                        <li>
                                            GET and
                                            retrieval
                                            requests
                                        </li>

                                        <li>
                                            Data
                                            transfer
                                            OUT to
                                            the
                                            internet
                                        </li>

                                        <li>
                                            Cross-region
                                            data
                                            transfer
                                        </li>

                                        <li>
                                            Retrieval
                                            from
                                            archival
                                            storage
                                            classes
                                        </li>
                                    </ul>
                                </td>

                                <td>
                                    <ul className="pricing-list">
                                        <li>
                                            Data
                                            transfer
                                            INTO S3
                                        </li>

                                        <li>
                                            DELETE
                                            requests
                                        </li>

                                        <li>
                                            Same-region
                                            transfer
                                            in some
                                            AWS
                                            services
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="note-box">
                    <strong>Beginner Tip:</strong>
                    {" "}
                    Most unexpected S3 charges
                    come from:
                    <ul className="pricing-list">
                        <li>
                            Large internet
                            downloads
                        </li>

                        <li>
                            Too many requests
                        </li>

                        <li>
                            Cross-region
                            transfers
                        </li>

                        <li>
                            Forgetting to delete
                            unused storage
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}