import FeatureHeader from "../../components/FeatureHeader";
import "./EC2.css";
import "../../styles/components.css"

import img1 from "./assets/EC2-connect-button.png";
import img2 from "./assets/EC2-instant-connect.png";
import img3 from "./assets/EC2-hostname.png";
import img4 from "./assets/Putty-key-file.png"
export default function S3Overview() {
    return (
        <div className="page">
            <FeatureHeader
                title="EC2"
                description="This page is for EC2 feature development and testing."
                basePath="/ec2"
            />
            <hr/>
            <TaskCard1/>
            <TaskCard2/>
            <TaskCard3/>
            <TaskCard4/>
        </div>
    )
}

export function TaskCard1() {
    return (
        <div className="section-card">
            <h2>SSH to EC2 using AWS console</h2>
            <ol>
                <li>
                    <strong>Select EC2 instance and click Connect at the top</strong>
                    <img className="list-img" src={img1} alt="ec2 connect button"/>
                </li>
                <li>
                    <strong>In EC2 Instant Connect, click connect at the bottom</strong>
                    <img className="list-img" src={img2} alt="ec2 instant connect button"/>
                </li>
            </ol>
            <div className="note-box">
                <strong>Note:</strong>
                {" "} Security group must allow SSH inbound from anywhere
            </div>
        </div>
    )
}

export function TaskCard2(){
    return(
        <div className="section-card">
            <h2>SSH to EC2 using Putty</h2>
            <ol>
                <li>
                    <strong>Use PuttyGen to turn .pem key to .ppk ley</strong>
                </li>
                <li>
                    <strong>In Putty, Hostname is "ec2-user@" + your public DNS</strong>
                    <img className="list-img" src={img3} alt="ec2 hostname"/>
                </li>
                <li>
                    <strong>In Putty, click SSH, then Auth, then Credentials, click browse to get Public key file for authentication, choose the .ppk file</strong>
                    <img className="list-img" src={img4} alt="Putty key file location"/>
                </li>
                <li>
                    <strong>Finally, click open</strong>
                </li>
            </ol>
            <div className="note-box">
                <strong>Note:</strong>
                {" "} Security group must allow SSH inbound from only your ip
            </div>
        </div>
    )
}

export function TaskCard3(){
    return(
        <div className="section-card">
            <h2>Pull and run this docker website using git in EC2</h2>
            <ol>
                <li>
                    <strong>SSH into the EC2 and run the following commands</strong>
                </li>
                <li>
                    <strong>*Install docker</strong>
                    <p>
                        sudo yum update -y<br/>
                        sudo yum install docker -y<br/>
                        sudo service docker start
                    </p>
                </li>
                <li>
                    <strong>*install docker compose</strong>
                    <p>
                        DOCKER_CONFIG=${"{"}DOCKER_CONFIG:-$HOME/.docker{"}"}<br/>
                        mkdir -p $DOCKER_CONFIG/cli-plugins<br/>
                        curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64 \<br/>
                        -o $DOCKER_CONFIG/cli-plugins/docker-compose<br/>
                        chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
                    </p>
                </li>
                <li>
                    <strong>*add docker permission to ec2-user</strong>
                    <p>
                        sudo usermod -a -G docker ec2-user
                    </p>
                    <div className="note-box">
                        <strong>Note:</strong>
                        {" "} Exit and then SSH back in, might need to run "sudo service docker start" again, i dont remember
                    </div>
                </li>
                <li>
                    <strong>*install git and pull</strong>
                    <p>
                        sudo yum install git -y<br/>
                        git clone https://github.com/Koala118th/Study-Web-AWS
                    </p>
                    <div className="note-box">
                        <strong>Note:</strong>
                        {" "} This command only works for public repos, private repos need to end with .git, and requires username and password of the Github user
                    </div>
                </li>
                <li>
                    <strong>*run</strong>
                    <p>
                        DOCKER_BUILDKIT=0 docker compose up
                    </p>
                    <div className="note-box">
                        <strong>Note:</strong>
                        {" "} Open public ip adress of EC2 and port 5173. Example: 13.212.176.122:5173
                    </div>
                </li>
            </ol>
        </div>
    )
}

export function TaskCard4(){
    return(
        <div className="section-card">
            <h2>How to set up in EC2 to be able to run the S3 demonstration</h2>
            <ol>
                <li>
                    <strong>After using git clone go get the project, make a .env file using GNU NANO</strong>
                    <p>
                        nano .env
                    </p>
                    <strong>This opens up the NANO GUI, copy the S3_BUCKET_REGION and S3_BUCKET_NAME like this format</strong>
                    <p>
                        S3_BUCKET_REGION=ap-southeast-1<br/>
                        S3_BUCKET_NAME=my-bucket
                    </p>
                    <strong>After you finish writing, ctrl x to exit, press y to agree to save, enter to confirm</strong>
                </li>
                <li>
                    <strong>Extend network hop limit to 2</strong><br/>
                    <label>When an application runs directly on EC2, the AWS SDK automatically queries the Instance Metadata Service (IMDS) at 169.254.169.254 to get temporary credentials from the attached IAM role. By default, EC2 instances use IMDSv2 with a hop limit of 1. Docker containers add a network hop, so the TTL expires before the metadata request reaches IMDS. Run this command to extend the hop limit to 2</label><br/>
                    <p>
                        aws ec2 modify-instance-metadata-options \<br/>
                            --instance-id i-0abc1234def56789 \ <br/>
                            --http-put-response-hop-limit 2 \<br/>
                            --http-endpoint enabled \<br/>
                            --region ap-southeast-1
                    </p>
                    <div className="note-box">
                        <strong>Note:</strong>
                        {" "} adjust to your instance id and region
                    </div>
                </li>
            </ol>
        </div>
    )
}