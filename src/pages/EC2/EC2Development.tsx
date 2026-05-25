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