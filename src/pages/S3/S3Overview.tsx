import "./S3.css";
import S3Header from "./S3Header";
export default function S3Overview() {
    return (
        <div style={{ padding: "2rem" }}>
            <S3Header />
            <hr />
            {/* What is S3? */}
            <h2>What is S3?</h2>
            <h3>Definition</h3>
            <p>
                S3 stands for Simple Storage Service. It is an object storage service that allows you to store and retrieve data from anywhere on the web
            </p>
            <h3>Types of S3</h3>
            <p>
                There are several types of S3 storage classes, each designed for different use cases:
            </p>
            {/* Table comparing S3 storage classes */}
            <table>
                <thead>
                    <tr>
                        <th>Active Data</th>
                        <th>Infrequently Accessed Data</th>
                        <th>Archive Data</th>
                        <th>Intelligent Tiering</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>S3 Standard (Main focus) </strong>
                        </td>
                        <td>
                            S3 Standard-Infrequently Accessed,
                            <br />
                            S3 One Zone-Infrequently Accessed
                        </td>
                        <td>
                            S3 Glacier Flexible Retrieval,
                            <br />
                            S3 Glacier Deep Archive
                        </td>
                        <td>S3 Intelligent-Tiering</td>
                    </tr>
                </tbody>
            </table>
            {/* Pricing Information */}
            <h3>Pricing Information</h3>
            <table>
                <thead>
                    <tr>
                        <th>
                            <strong>Cost Money</strong>
                        </th>
                        <th>
                            <strong>Free of Charge</strong>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ul>
                                <li>Storage usage per month (GB/month)</li>
                                <li>PUT, COPY, POST, LIST requests</li>
                                <li>GET and retrieval requests</li>
                                <li>Data transfer OUT to the internet</li>
                                <li>Cross-region data transfer</li>
                                <li>Retrieval from archival storage classes</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Data transfer INTO S3</li>
                                <li>DELETE requests</li>
                                <li>Same-region transfer in some AWS services</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
        </div>
    );
}