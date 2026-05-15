import "./EC2.css";
import EC2Header from "./EC2Header";
export default function S3Overview() {
    return (
        <div>
            <EC2Header></EC2Header>
            <hr/>

            <h2>What is EC2?</h2>
            <h3>Definition</h3>
            <p>
                EC2 or Elastic Compute Cloud, is a compute service that provides resizable compute capacity in the cloud
            </p>

            <h3>Pricing Information</h3>
            <p>
                5 main drivers: instance purchasing option, tenancy, Amazon machine image(AMI), instance type, and storage type and size
            </p>

            <h4>Purchasing option</h4>
            <p>
                EC2 provides 4 main purchasing option to optimize cost
            </p>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>On-demand instance</th>
                        <th>Reserved instance</th>
                        <th>Savings plan instance</th>
                        <th>Spot instance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Use case</th>
                        <td>
                            Short-term, spiky or unpredictable workloads<br/>
                            App development or testing
                        </td>
                        <td>
                            predictable workloads that do not require flexibility<br/>
                            Workloads that lasts longer than a year<br/>
                            Users make upfront payments to reduce total computing cost
                        </td>
                        <td>
                            Long time workloads<br/>
                            Computing needs that might need flexibility over location or power
                        </td>
                        <td>
                            Apps with flexible start and end time<br/>
                            Very low compute prices<br/>
                            Urgent computing needs for large ammount of additional capacity
                        </td>
                    </tr>
                    <tr>
                        <th>Problem solved</th>
                        <td>Need for immediate compute capacity</td>
                        <td>Provides the ability to reserve capacity ahead of time, reducing cost</td>
                        <td>Don't have to coordinate Reserved Instance purchase</td>
                        <td>Low budget workloads completed with low cost instance, if interruptions can be tolerated</td>
                    </tr>
                </tbody>
            </table>

            <h4>Tenancy</h4>
            <p>
                Use the default (Shared tenancy) for normal apps. Dedicated Instances if don't want to share with other AWS accounts (more expensive). Dedicated Hosts if you want a physical server fully dedicated to you(most expensive)
            </p>

            <h4>AMI</h4>
            <p>Use free prebuilt AMIs like Amazon Linux, Ubuntu,... Paid AMIs are from AWS marketplace or when using Windows AMI (license cost)</p>
            
            <h4>Instance type</h4>
            <p>Instance type determines the processing power (CPU), memory (RAM), disk space and type, and network performance</p>
            
            <h4>Storage type and size</h4>
            <p>EC2 instances use Elastic Block Store(EBS) for storage. It is a durable, detachable, high-performance block storage, work like an external hard drive</p>

            <table>
                <thead>
                    <tr>
                        <th>General purpose</th>
                        <th>Provision IOPS</th>
                        <th>Throughput-optimized</th>
                        <th>Cold</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>SSD volume that is balanced in price and performance</td>
                        <td>SSD volume that is highest performance, for mission-critical low-latency or high-throughput workloads</td>
                        <td>HDD that is low-cost, designed for frequent accessed, throughput-intensive workloads</td>
                        <td>HDD that is the lowest cost, designed for less frequently accessed workloads</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}