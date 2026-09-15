/* ============================================================
   TEAM DATA
   University students can edit this file to update member info
   ============================================================ */

const teamData = [
  /* ---------- MEMBER 1: MD MAZID HOSSAIN ---------- */
  {
    slug: 'mazid',
    name: 'MD MAZID HOSSAIN',
    id: '12-232-0028',
    role: 'DevOps Engineer & IT Executive',
    color: 'blue',
    initials: 'MH',
    photo: 'assets/images/mazid.jpg',
    location: 'Dhaka, Bangladesh',
    phone: '+8801739365972',
    email: 'mazid.info67@gmail.com',
    github: 'https://github.com/mazid-dev',
    linkedin: 'https://linkedin.com/in/md-mazid-hossain-293561227',
    shortBio: 'DevOps Engineer with 4+ years of experience in AWS, Kubernetes, Docker, and Terraform. Building automated, scalable cloud infrastructure.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Helm', 'GitHub Actions', 'Linux', 'MikroTik'],
  },

  /* ---------- MEMBER 2: MD. ABU SAYED ---------- */
  {
    slug: 'abusayed',
    name: 'MD. ABU SAYED',
    id: '12-232-0029',
    role: 'Network Engineer',
    color: 'green',
    initials: 'AS',
    photo: 'assets/images/abusayed.jpg',
    location: 'Dhaka, Bangladesh',
    phone: '+8801700000002',
    email: 'abusayed@akmu.edu',
    github: 'https://github.com/abusayed',
    linkedin: 'https://linkedin.com/in/abusayed',
    shortBio: 'CCNA and MTCNA certified Network Engineer with 4+ years of experience in Cisco routing & switching, MikroTik, and enterprise infrastructure.',
    skills: ['Cisco IOS', 'OSPF', 'BGP', 'VLAN', 'MikroTik', 'VPN', 'DHCP', 'Wireshark'],
  },

  /* ---------- MEMBER 3: MD ROICH UDDIN ---------- */
  {
    slug: 'roich',
    name: 'MD ROICH UDDIN',
    id: '12-232-0042',
    role: 'Network Security Engineer',
    color: 'red',
    initials: 'RU',
    photo: 'assets/images/roich.jpg',
    location: 'Dhaka, Bangladesh',
    phone: '+8801700000003',
    email: 'roich@akmu.edu',
    github: 'https://github.com/roich',
    linkedin: 'https://linkedin.com/in/roich',
    shortBio: 'Network Security Engineer with 4+ years in firewall administration, IDS/IPS, SIEM, and vulnerability assessment. Palo Alto & Fortinet specialist.',
    skills: ['Palo Alto', 'Fortinet', 'IDS/IPS', 'SIEM', 'Nessus', 'Wazuh', 'VPN', 'Firewall'],
  },

  /* ---------- MEMBER 4: MD LOKMAN HOSSAIN ---------- */
  {
    slug: 'lokman',
    name: 'MD LOKMAN HOSSAIN',
    id: '12-232-0043',
    role: 'Network Support Engineer',
    color: 'orange',
    initials: 'LH',
    photo: 'assets/images/lokman.jpg',
    location: 'Dhaka, Bangladesh',
    phone: '+8801700000004',
    email: 'lokman@akmu.edu',
    github: 'https://github.com/lokman',
    linkedin: 'https://linkedin.com/in/lokman',
    shortBio: 'Network Support Engineer with 3+ years in MPLS, BGP, OSPF, and network monitoring. Cisco and MikroTik certified professional.',
    skills: ['BGP', 'OSPF', 'MPLS', 'VLAN', 'Zabbix', 'SNMP', 'Cisco', 'MikroTik'],
  },
];

/* ============================================================
   PROJECTS DATA
   ============================================================ */
const projectsData = [
  {
    title: 'Production Kubernetes Cluster',
    desc: 'Deployed a 3-node Kubernetes cluster on VMware with Calico CNI, Nginx Ingress, HPA auto-scaling, and Prometheus + Grafana monitoring.',
    tags: ['Kubernetes', 'Calico', 'Prometheus'],
    author: 'Md Mazid Hossain',
    github: 'https://github.com/mazid-dev/production-ready-nodejs-k8s-helm',
  },
  {
    title: 'Enterprise Firewall & IDS/IPS',
    desc: 'Deployed Palo Alto PA-820 and FortiGate 100F with security zones, App-ID policies, and integrated Wazuh SIEM across 50+ devices.',
    tags: ['Palo Alto', 'Fortinet', 'Wazuh'],
    author: 'Md Roich Uddin',
    github: '#',
  },
  {
    title: 'MPLS L3VPN for ISP',
    desc: 'Designed and implemented MPLS L3VPN for a regional ISP serving 500+ clients with PE-CE routing via OSPF and BGP.',
    tags: ['MPLS', 'BGP', 'OSPF'],
    author: 'Md Lokman Hossain',
    github: '#',
  },
  {
    title: 'Enterprise Campus Network',
    desc: '3-layer hierarchical network (Core, Distribution, Access) with VLANs, inter-VLAN routing, OSPF, and EtherChannel for 200-user campus.',
    tags: ['Cisco', 'VLAN', 'OSPF'],
    author: 'Md. Abu Sayed',
    github: '#',
  },
];

/* ============================================================
   SKILLS CLOUD
   ============================================================ */
const allSkills = [
  'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Helm', 'CI/CD',
  'Linux', 'Ansible', 'GitHub Actions', 'Prometheus', 'Grafana',
  'Cisco IOS', 'MikroTik', 'CCNA', 'MTCNA', 'OSPF', 'BGP', 'MPLS',
  'VLAN', 'VPN', 'Routing & Switching',
  'Palo Alto', 'Fortinet', 'IDS/IPS', 'SIEM', 'Wazuh', 'Nessus',
  'Firewall', 'Network Security', 'Zabbix', 'SNMP',
];