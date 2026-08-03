// ANS-C01 Domain 1: Network Design, Implementation & Security (100%)
const D = "ans-d1", DN = "Domain 1: Network Design, Implementation & Security";
export default [
{d:D,dn:DN,qt:"single",s:"A network architect is designing a multi-region VPC routing topology connecting 100 VPCs to a corporate data center via a 10 Gbps AWS Direct Connect Dedicated Connection. Which component provides scalable multi-region Transit Gateway routing over Direct Connect?",
o:["Direct Connect Gateway attached to regional AWS Transit Gateways","VPC Peering full mesh","Virtual Private Gateway with BGP active-passive","AWS VPN CloudHub"],
c:["A"],e:"Direct Connect Gateway allows a Direct Connect location to connect to AWS Transit Gateways across any AWS region, providing scalable multi-region hybrid networking.",df:"Challenging",u:"https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways.html"},

{d:D,dn:DN,qt:"single",s:"An enterprise requires 100 Gbps network bandwidth between specialized EC2 instances running in a single Availability Zone for high-performance computing (HPC) workloads. Which network technology enables low-latency OS bypass RDMA communication?",
o:["Elastic Fabric Adapter (EFA)","Elastic Network Adapter (ENA)","Virtual Private Gateway","VPC Gateway Endpoint"],
c:["A"],e:"Elastic Fabric Adapter (EFA) is a network interface for EC2 instances that provides OS-bypass capability, enabling HPC applications to achieve ultra-low latency RDMA communication.",df:"Challenging",u:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html"},

{d:D,dn:DN,qt:"single",s:"A network engineer needs to establish dynamic BGP routing over an AWS Site-to-Site IPsec VPN connection between an on-premises router and an AWS Transit Gateway. How many IPsec tunnels does a standard AWS Site-to-Site VPN provide for high availability?",
o:["Two active IPsec tunnels per VPN connection","One single tunnel","Four passive tunnels","Eight redundant tunnels"],
c:["A"],e:"An AWS Site-to-Site VPN connection consists of two redundant IPsec tunnels configured with separate endpoint IP addresses for high availability.",df:"Standard",u:"https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html"},

{d:D,dn:DN,qt:"single",s:"A network administrator needs to capture raw packet payloads and TCP header flags from ENIs in a private subnet and stream them to an out-of-band network monitoring virtual appliance in another VPC. Which feature enables this?",
o:["VPC Traffic Mirroring","VPC Flow Logs","Amazon CloudWatch Logs","AWS CloudTrail"],
c:["A"],e:"VPC Traffic Mirroring allows copying raw network traffic (L2-L4 payloads) from elastic network interfaces and forwarding it to in-line monitoring or security tools.",df:"Challenging",u:"https://docs.aws.amazon.com/vpc/latest/mirroring/what-is-traffic-mirroring.html"},

{d:D,dn:DN,qt:"single",s:"An application hosted on EC2 in us-east-1 requires static IP addresses to whitelist with client firewalls, while routing incoming user traffic across multiple AWS regions over the AWS global network backbone with lowest latency. Which service satisfies this?",
o:["AWS Global Accelerator","Amazon Route 53 Geolocation Routing","Amazon CloudFront","AWS Direct Connect"],
c:["A"],e:"AWS Global Accelerator provides two static Anycast IP addresses that serve as a fixed entry point and route incoming traffic over the AWS global network to optimal regional endpoints.",df:"Standard",u:"https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html"},

{d:D,dn:DN,qt:"multiple",s:"A company needs to configure private DNS resolution between on-premises Active Directory DNS servers and Route 53 Private Hosted Zones in an AWS VPC. Which TWO Route 53 Resolver components are required? (Select TWO.)",
o:["Route 53 Resolver Inbound Endpoint (receives DNS queries from on-premises)","Route 53 Resolver Outbound Endpoint (forwards VPC DNS queries to on-premises)","Route 53 Traffic Flow","Route 53 Latency Routing Policy","CloudFront Origin Group"],
c:["A","B"],e:"Inbound Resolver Endpoints allow on-prem DNS servers to resolve AWS Private Hosted Zones. Outbound Resolver Endpoints forward VPC DNS queries to on-premises DNS servers.",df:"Challenging",u:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html"},

{d:D,dn:DN,qt:"single",s:"A network engineer needs to connect a private application in VPC A to a database in VPC B. Both VPCs have overlapping IPv4 CIDR blocks (`10.0.0.0/16`). VPC Peering cannot be established due to CIDR overlap. What is the MOST effective solution?",
o:["Expose the database via an AWS PrivateLink (VPC Endpoint Service) behind a Network Load Balancer","Force VPC Peering with NAT translation rules","Migrate all subnets to public IPv4 space","Re-create the entire AWS account"],
c:["A"],e:"AWS PrivateLink uses Network Load Balancers and Interface VPC Endpoints to route traffic privately across overlapping CIDRs without needing network-level IP peering.",df:"Challenging",u:"https://docs.aws.amazon.com/vpc/latest/privatelink/endpoint-service-overview.html"},

{d:D,dn:DN,qt:"single",s:"Which Network Load Balancer (NLB) feature preserves the original client IP address in TCP packet headers forwarded to backend EC2 targets without requiring HTTP headers?",
o:["Target Group Client IP Preservation setting","Proxy Protocol v2","Route 53 Alias Record","AWS Global Accelerator Anycast"],
c:["A"],e:"NLBs natively preserve client IP addresses for targets registered by instance ID, allowing backend servers to see true source client IPs without Proxy Protocol.",df:"Standard",u:"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#client-ip-preservation"},

{d:D,dn:DN,qt:"single",s:"An enterprise requires a dedicated 10 Gbps physical link to AWS. The network team needs maximum security against eavesdropping by encrypting all traffic over the physical Direct Connect circuit at Layer 2. Which technology provides Layer 2 encryption?",
o:["MACsec (Media Access Control Security)","IPsec VPN over Direct Connect","TLS 1.3 over HTTPS","SSL VPN"],
c:["A"],e:"MACsec (IEEE 802.1AE) provides point-to-point Layer 2 encryption over dedicated 10 Gbps and 100 Gbps AWS Direct Connect connections.",df:"Challenging",u:"https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-macsec.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to route outgoing internet traffic from 50 private VPC subnets through a centralized inspection VPC containing a fleet of third-party firewall appliances. Which feature routes traffic seamlessly through virtual appliances?",
o:["AWS Gateway Load Balancer (GWLB) with Transit Gateway appliance VPC routing","VPC Peering mesh","Route 53 Resolver","NAT Gateway in every private subnet"],
c:["A"],e:"Gateway Load Balancer (GWLB) simplifies deploying, scaling, and managing third-party virtual appliances by combining a transparent network gateway and load balancer.",df:"Challenging",u:"https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html"},
];
