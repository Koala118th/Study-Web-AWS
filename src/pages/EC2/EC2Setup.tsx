// EC2Setup.tsx
import "./EC2.css";
import ec2Image from "./assets/ec2-console.png";
import FeatureHeader from "../../components/FeatureHeader";

export default function EC2Setup() {
  return (
    <div className="ec2-page">
      <FeatureHeader
        title="EC2"
        description="This page covers how to launch and configure an EC2 instance."
        basePath="/ec2"
      />
      <hr />

      {/* Launch EC2 */}
      <div className="section-card">
        <h2>Launching an EC2 Instance</h2>

        <ol>
          <li>
            <strong>Choose an AMI (Amazon Machine Image).</strong>
            <div className="note-box">
              <strong>Note:</strong>{" "}
              Amazon Linux is recommended for beginners.
            </div>
          </li>

          <li>
            <strong>Select instance type.</strong>
            <div className="note-box">
              <strong>Note:</strong>{" "}
              t2.micro is Free Tier eligible.
            </div>
          </li>

          <li>
            <strong>Create or select a key pair.</strong>
            <div className="note-box">
              <strong>Important:</strong>{" "}
              The .pem file is used to SSH into your instance. Keep it safe.
            </div>
          </li>

          <li className="permission-section">
            <strong>Configure security group.</strong>
            <p><i>Allow required inbound traffic:</i></p>

            <div className="checklist-item">
              <label>
                <input type="checkbox" />
                <span>SSH (port 22)</span>
              </label>
            </div>

            <div className="checklist-item">
              <label>
                <input type="checkbox" />
                <span>HTTP (port 80)</span>
              </label>
            </div>

            <div className="checklist-item">
              <label>
                <input type="checkbox" />
                <span>Custom TCP (port 3000)</span>
              </label>
            </div>

            <div className="note-box">
              <strong>Note:</strong>{" "}
              Port 3000 is required for accessing your Node.js application.
            </div>
          </li>

          <li>
            <strong>Launch the instance.</strong>
          </li>
        </ol>
      </div>

      {/* EC2 Console */}
      <div className="section-card">
        <h2>EC2 Console Overview</h2>

        <img
          src={ec2Image}
          alt="EC2 Console"
        />

        <p className="image-caption">
          AWS EC2 instance launch and management console.
        </p>
      </div>

      {/* Cost Note */}
      <div className="section-card">
        <h2>Cost Considerations</h2>

        <ul>
          <li>
            <strong>Stopping instance:</strong> No compute charge.
          </li>
          <li>
            <strong>Terminating instance:</strong> Deletes instance permanently.
          </li>
        </ul>

        <div className="note-box">
          <strong>Important:</strong>{" "}
          Always stop or terminate instances when not in use to avoid unexpected charges.
        </div>
      </div>
    </div>
  );
}