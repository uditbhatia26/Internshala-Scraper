const fs = require('fs');


json_data = {
    data: [
      {
        Company: 'Nindo Education LLP',
        Role: 'Backend Development',
        Link: 'https://internshala.com/internship/details/work-from-home-backend-development-internship-at-nindo-education-llp1721206662',
        Location: 'Work from home',
        Stipend: '₹ 16,000 /month',
        Posted: 'Just now'
      },
      {
        Company: 'Sports For All',
        Role: 'Information Technology',
        Link: 'https://internshala.com/internship/details/information-technology-internship-in-mumbai-at-sports-for-all1721196643',
        Location: 'Mumbai',
        Stipend: '₹ 10,000-15,000 /month',
        Posted: 'Few hours ago'
      },
      {
        Company: 'Codefeast',
        Role: 'DSA+MERN Mentor',
        Link: 'https://internshala.com/internship/details/work-from-home-dsa-mern-mentor-internship-at-codefeast1721199160',
        Location: 'Work from home',
        Stipend: '₹ 5,000-20,000 /month',
        Posted: 'Few hours ago'
      },
      {
        Company: 'Novacred-TommyandFurry',
        Role: 'PHP Development',
        Link: 'https://internshala.com/internship/details/php-development-internship-in-pune-at-novacred-tommyandfurry1721129577',
        Location: 'Pune',
        Stipend: '₹ 8,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'Edgemap Softwares Private Limited',
        Role: 'GIS Engineering',
        Link: 'https://internshala.com/internship/details/gis-engineering-internship-in-bangalore-at-edgemap-softwares-private-limited1721131381',
        Location: 'Bangalore',
        Stipend: '₹ 6,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'Radiantly',
        Role: 'Reactjs Development',
        Link: 'https://internshala.com/internship/detail/work-from-home-reactjs-development-internship-at-radiantly1721207675',
        Location: 'Work from home',
        Stipend: '₹ 4,000-6,000 /month',
        Posted: 'Just now'
      },
      {
        Company: 'Panacee Software Solutions',
        Role: 'Web Development',
        Link: 'https://internshala.com/internship/details/web-development-internship-in-delhi-at-panacee-software-solutions1721205884',
        Location: 'Delhi',
        Stipend: '₹ 10,000 /month +  Incentives',
        Posted: 'Just now'
      },
      {
        Company: 'Shiva Bihani',
        Role: 'Web Development',
        Link: 'https://internshala.com/internship/details/work-from-home-web-development-internship-at-shiva-bihani1721203939',
        Location: 'Work from home',
        Stipend: '₹ 12,000-18,000 /month',
        Posted: 'Just now'
      },
      {
        Company: 'Salesqueen Software Solutions',
        Role: 'WordPress Development',
        Link: 'https://internshala.com/internship/detail/work-from-home-wordpress-development-internship-at-salesqueen-software-solutions1721196426',
        Location: 'Work from home',
        Stipend: '₹ 2,000 /month',
        Posted: 'Just now'
      },
      {
        Company: 'Cure And Care Wellness Private Limited',
        Role: 'Node.js Development',
        Link: 'https://internshala.com/internship/details/nodejs-development-internship-in-bangalore-at-cure-and-care-wellness-private-limited1721196194',
        Location: 'Bangalore',
        Stipend: '₹ 25,000 /month',
        Posted: 'Just now'
      },
      {
        Company: 'Trumio',
        Role: 'Full Stack Development',
        Link: 'https://internshala.com/internship/details/work-from-home-full-stack-development-internship-at-trumio1721201546',
        Location: 'Work from home',
        Stipend: '₹ 10,000-30,000 /month',
        Posted: 'Just now'
      },
      {
        Company: 'Heaven Gate Funeral Care',
        Role: 'Web Development',
        Link: 'https://internshala.com/internship/details/web-development-internship-in-jaipur-at-heaven-gate-funeral-care1721201365',
        Location: 'Jaipur',
        Stipend: '₹ 4,500-10,000 /month',
        Posted: 'Just now'
      },
      {
        Company: 'Search Digitally',
        Role: 'Web Development',
        Link: 'https://internshala.com/internship/detail/web-development-internship-in-mumbai-at-search-digitally1721193790',
        Location: 'Mumbai',
        Stipend: '₹ 5,000-6,000 /month',
        Posted: 'Just now'
      },
      {
        Company: 'Rupeeflo',
        Role: 'Python Development',
        Link: 'https://internshala.com/internship/details/work-from-home-part-time-python-development-internship-at-rupeeflo1721199810',
        Location: 'Work from home',
        Stipend: '₹ 20,000 /month',
        Posted: 'Few hours ago'
      },
      {
        Company: 'Coding Raja Technlogies',
        Role: 'Full Stack Web development Trainer',
        Link: 'https://internshala.com/internship/detail/work-from-home-part-time-full-stack-web-development-trainer-internship-at-coding-raja-technlogies1721199396',
        Location: 'Work from home',
        Stipend: '₹ 1,000 /month',
        Posted: 'Few hours ago'
      },
      {
        Company: 'Code Tikki',
        Role: 'Node.js Development',
        Link: 'https://internshala.com/internship/details/work-from-home-nodejs-development-internship-at-code-tikki1721190467',
        Location: 'Work from home',
        Stipend: '₹ 1,000 /month',
        Posted: 'Few hours ago'
      },
      {
        Company: 'Smart Prepper',
        Role: 'Reactjs Development',
        Link: 'https://internshala.com/internship/details/work-from-home-reactjs-development-internship-at-smart-prepper1721196613',
        Location: 'Work from home',
        Stipend: '₹ 5,000-10,000 /month',
        Posted: 'Few hours ago'
      },
      {
        Company: 'Zikrabyte Solutions',
        Role: 'Web Development',
        Link: 'https://internshala.com/internship/details/web-development-internship-in-bangalore-at-zikrabyte-solutions1721197074',
        Location: 'Bangalore',
        Stipend: '₹ 5,000 /month +  Incentives',
        Posted: 'Few hours ago'
      },
      {
        Company: 'Quytech',
        Role: 'Blockchain Development',
        Link: 'https://internshala.com/internship/details/blockchain-development-internship-in-gurgaon-at-quytech1721194696',
        Location: 'Gurgaon',
        Stipend: '₹ 10,000 /month',
        Posted: 'Few hours ago'
      },
      {
        Company: 'AV Square Technologies',
        Role: 'Web/WordPress Development',
        Link: 'https://internshala.com/internship/detail/web-wordpress-development-internship-in-chennai-at-av-square-technologies1721191498',
        Location: 'Chennai',
        Stipend: '₹ 2,000 /month +  Incentives',
        Posted: 'Few hours ago'
      },
      {
        Company: 'Systemic Altruism',
        Role: 'Web Developer',
        Link: 'https://internshala.com/internship/detail/work-from-home-part-time-web-developer-internship-at-systemic-altruism1721190541',
        Location: 'Work from home',
        Stipend: 'Unpaid',
        Posted: 'Few hours ago'
      },
      {
        Company: 'Verdant Info Comm Systems',
        Role: 'Node.js Development',
        Link: 'https://internshala.com/internship/details/work-from-home-nodejs-development-internship-at-verdant-info-comm-systems1721189098',
        Location: 'Work from home',
        Stipend: '₹ 7,000 /month',
        Posted: 'Few hours ago'
      },
      {
        Company: 'Social Agni',
        Role: 'PHP Development',
        Link: 'https://internshala.com/internship/details/work-from-home-php-development-internship-at-social-agni1721134405',
        Location: 'Work from home',
        Stipend: '₹ 10,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'CodeInterns',
        Role: 'Python Development',
        Link: 'https://internshala.com/internship/detail/work-from-home-part-time-python-development-internship-at-codeinterns1721140491',
        Location: 'Work from home',
        Stipend: '₹ 1,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'TradeHike Consulting',
        Role: 'Reactjs Development',
        Link: 'https://internshala.com/internship/details/reactjs-development-internship-in-delhi-at-tradehike-consulting1721139637',
        Location: 'Delhi                                                            (Hybrid)',
        Stipend: '₹ 6,000-10,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'Soham Renewable Energy India Private Limited',
        Role: 'WordPress Development',
        Link: 'https://internshala.com/internship/details/wordpress-development-internship-in-bangalore-at-soham-renewable-energy-india-private-limited1721131199',
        Location: 'Bangalore',
        Stipend: '₹ 10,000-25,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'CodeInterns',
        Role: 'Java Development',
        Link: 'https://internshala.com/internship/detail/work-from-home-part-time-java-development-internship-at-codeinterns1721135231',
        Location: 'Work from home',
        Stipend: '₹ 1,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'Jetsetr',
        Role: 'Web Development',
        Link: 'https://internshala.com/internship/detail/web-development-internship-in-bangalore-at-jetsetr1721135148',
        Location: 'Bangalore                                                            (Hybrid)',
        Stipend: '₹ 5,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'Agrosperity Tech Solutions Private Limited (KiVi)',
        Role: 'Java Development',
        Link: 'https://internshala.com/internship/details/java-development-internship-in-chennai-at-agrosperity-tech-solutions-private-limited-kivi1721134857',
        Location: 'Chennai',
        Stipend: '₹ 15,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'CodeInterns',
        Role: 'Front End Development',
        Link: 'https://internshala.com/internship/detail/work-from-home-part-time-front-end-development-internship-at-codeinterns1721134768',
        Location: 'Work from home',
        Stipend: '₹ 1,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'Madrocket Technologies & Media',
        Role: 'Front End Development',
        Link: 'https://internshala.com/internship/details/work-from-home-front-end-development-internship-at-madrocket-technologies-media1721134640',
        Location: 'Work from home',
        Stipend: '₹ 3,000-5,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'Alakmalak Technologies Private Limited',
        Role: 'PHP Development',
        Link: 'https://internshala.com/internship/detail/php-development-internship-in-ahmedabad-at-alakmalak-technologies-private-limited1721134519',
        Location: 'Ahmedabad',
        Stipend: '₹ 5,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'Techmind Softwares',
        Role: 'Front End Development',
        Link: 'https://internshala.com/internship/detail/front-end-development-internship-in-multiple-locations-at-techmind-softwares1721132960',
        Location: 'Zirakpur, Punjab, Himachal Pradesh',
        Stipend: '₹ 2,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'Plutonic Services Private Limited',
        Role: 'Flutter Development',
        Link: 'https://internshala.com/internship/details/flutter-development-internship-in-noida-at-plutonic-services-private-limited1721132053',
        Location: 'Noida                                                            (Hybrid)',
        Stipend: '₹ 8,000-10,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'HOLISTIC NOURISHMENT',
        Role: 'Backend Development',
        Link: 'https://internshala.com/internship/details/backend-development-internship-in-delhi-at-holistic-nourishment1721131449',
        Location: 'Delhi',
        Stipend: '₹ 5,000-10,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'Codeoly Solutions Private Limited',
        Role: 'PHP Development',
        Link: 'https://internshala.com/internship/details/php-development-internship-in-kolkata-at-codeoly-solutions-private-limited1721130031',
        Location: 'Kolkata                                                            (Hybrid)',
        Stipend: '₹ 5,000-7,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'Experiences.digital',
        Role: 'Reactjs Development',
        Link: 'https://internshala.com/internship/detail/work-from-home-reactjs-development-internship-at-experiencesdigital1721129953',
        Location: 'Work from home',
        Stipend: '₹ 5,000 /month',
        Posted: 'Today'
      },
      {
        Company: 'Alphabt',
        Role: 'Full Stack Development',
        Link: 'https://internshala.com/internship/details/work-from-home-full-stack-development-internship-at-alphabt1721129836',
        Location: 'Work from home',
        Stipend: '₹ 15,000 /month',
        Posted: 'Today'
      }
    ],
    message: 'Internships are now fetched'
  }


fs.writeFileSync('data.json', JSON.stringify(json_data, null, "\t"));