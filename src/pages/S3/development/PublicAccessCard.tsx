// Assets
import image1 from "../assets/s3-dev-1.png";
import PolicyCodeEditor from "./components/PolicyCodeEditor";

export default function PublicAccessCard() {
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
                        <PolicyCodeEditor mode="public" />
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