var selectedBlock = {
};

Handlebars.registerHelper("xif", function (type, block) {
    selectedBlock = block;

    document.getElementById('block-template').innerHTML = blocksData[type];
    var blockDetail = document.getElementById('block-template').innerHTML;
    var blockDetailTemplate = Handlebars.compile(blockDetail);
    var txt = blockDetailTemplate(selectedBlock);
    
    return txt;
});

// Grab the HTML source that needs to be compiled
var appSource = document.getElementById('app-selection-template').innerHTML;

// Compiles the source
var appTemplate = Handlebars.compile(appSource);

//Data that will replace the handlebars expressions in our template
var appData = {
    apps: [
        {
            name: "Levi's",
            icon: "levis",
            iconWidth: "40%",
            blocks: [
                {
                    type: 'title',
                    bgColor: '#fff',
                    gradient: {
                        start: '#fff',
                        finish: '#dedede'
                    },
                    client: "Levi's",
                    app: "Denim Discovery In-Store Experience",
                    devices: [
                        {
                            device: 'kiosk'
                        }
                    ],
                    description: "We worked in partnership with Levi's to create a Macy's 'store within a store' concept that brings digital brand experiences to the physical space in connected ways. We worked with architects, merchandisers, brand and marketing creative, store operators and outside agencies to develop the creative, strategy, and overall evolution.",
                    moreContent: [
                        {
                            type: 'text',
                            text: 'At the core of this concept is a large, touch experience titled "Denim Discovery". We designed and built this experience to complete 2 tasks; serve as a merchandising, storytelling tool and as a utility and education for associates and customers.'
                        },
                        {
                            type: 'text',
                            text: "Some highlights are 'Fit Finder', an interactive way to find the fit that suits you, or 'Fit Compare', a way to evaluate fit details and engage in side-by-side comparisons. It has ways for consumers to shop by color, fabric, learn about the Levi's brand, and can serve as a clienteling and educational tool for associates."
                        },
                        {
                            type: 'text',
                            text: "We also worked with the clients to design a new way to market themselves. We encourage customers to submit the way they wear their Levi's through a hashtag campaign that then gets used on product detail pages. We created broadcast channels at the fixture level that are used to help inspire and connect the product to the campaign. We re-imagined the product and brand expression in-store in an integrated way."
                        },
                        {
                            type: 'text',
                            text: "We did all of this on shoestring budget with a crack-team of specialists with no issues."
                        }
                    ],
                },
                {
                    type: 'imgSlider',
                    bgColor: '#dedede',
                    imgs: [
                        {
                            folder: 'levis',
                            img: 'levis_inDevice1.png'
                        },
                        {
                            folder: 'levis',
                            img: 'levis_inDevice2.png'
                        },
                        {
                            folder: 'levis',
                            img: 'levis_inDevice3.png'
                        },
                        {
                            folder: 'levis',
                            img: 'levis_inDevice4.png'
                        },
                        {
                            folder: 'levis',
                            img: 'levis_inDevice5.png'
                        },
                        {
                            folder: 'levis',
                            img: 'levis_inDevice6.png'
                        },
                        {
                            folder: 'levis',
                            img: 'levis_inDevice7.png'
                        }
                    ]
                },
                {
                    type: 'facts',
                    bgColor: '#fff',
                    geography: [
                        {
                            country: 'North America',
                            countryAb: 'NA'
                        }
                    ],
                    facts: [
                        {
                            title: 'Service Offerings',
                            listItem: [
                                {
                                    fact: 'Design',
                                },
                                {
                                    fact: 'Development',
                                },
                                {
                                    fact: 'Deployment',
                                }
                            ]
                        },
                        {
                            title: 'Development Platform',
                            listItem: [
                                {
                                    fact: 'Flex',
                                }
                            ]
                        },
                        {
                            title: 'Partner Roles',
                            listItem: [
                                {
                                    fact: 'Iron Creative',
                                    sub: 'Assets'
                                }
                            ]
                        },
                    ]
                },
                {
                    type: 'meetTeam',
                    team: [
                        {
                            name: 'Brian Daviadoff',
                            title: 'Developer',
                            img: 'Brian_Daviadoff'
                        },
                        {
                            name: 'John Coombs',
                            title: 'Developer',
                            img: 'John_Coombs'
                        },
                        {
                            name: 'Aram Yang',
                            title: 'Program Manager',
                            img: 'Aram_Yang'
                        },
                    ]
                }
            ]
        },
        {
            name: "Ganassi Timeline",
            icon: "ganassi",
            iconWidth: "55%",
            blocks: [
                {
                    type: 'title',
                    bgColor: '#1d1d1d',
                    gradient: {
                        start: '#0d0d0d',
                        finish: '#1d1d1d'
                    },
                    txtColor: '#DfE5E6',
                    borderColor: '#ffffff',
                    client: "Chip Ganassi Racing",
                    app: "Chip Ganassi Racing - Mobile App",
                    devices: [
                        {
                            device: 'phone'
                        }
                    ],
                    os: [
                        {
                            platform: 'ios'
                        }
                    ],
                    description: "Originally created by SapientNitro in 2011, the app is now available for the first time to Android and iOS users and offers fans the ability to access the latest CGRT news and driver standings, while also tracking information such as driver bios, points and top finishes. One key element of the improved app is the seamless integration of social media, in which fans can follow the minute-by-minute conversations and photos of their favorite drivers before and after a race.",
                    moreContent: [
                        {
                            type: 'text',
                            text: 'The evolved digital experience has many enhanced features designed to further engage dedicated fans and reach a new generation of race enthusiasts, including:'
                        },
                        {
                            type: 'list',
                            bullet: "Up close and personal information about all of the CGRT drivers including: bios, stats, photos and racing resumes"
                        },
                        {
                            type: 'list',
                            bullet: "Real-time breaking news straight from the team"
                        },
                        {
                            type: 'list',
                            bullet: "Aggregated Twitter feeds from CGRT drivers, live tweets from the track and links to the official team and driver Facebook and Instagram pages"
                        },
                        {
                            type: 'list',
                            bullet: "Behind-the-scenes video on Ganassi TV and photography from race tracks, interviews and special eventsSocial media integration"
                        },
                        {
                            type: 'list',
                            bullet: "Upcoming race event details including series calendars, event dates and locales"
                        },
                        {
                            type: 'list',
                            bullet: "Current driver statistics and points standings after every race"
                        }
                    ],
                },
                {
                    type: 'facts',
                    bgColor: '#1d1d1d',
                    txtColor: '#fff',
                    geography: [
                        {
                            country: 'North America',
                            countryAb: 'NA'
                        }
                    ],
                    facts: [
                        {
                            title: 'Project Type',
                            listItem: [
                                {
                                    fact: 'Mobile App',
                                },
                                {
                                    fact: 'Interactive Display',
                                },
                                {
                                    fact: 'Digital Signage',
                                }
                            ]
                        },
                        {
                            title: 'Service Offerings',
                            listItem: [
                                {
                                    fact: 'Design',
                                },
                                {
                                    fact: 'Development',
                                },
                            ]
                        },
                        {
                            title: 'Development Platform',
                            listItem: [
                                {
                                    fact: 'PhoneGap',
                                }
                            ]
                        },
                    ]
                },
                {
                    type: 'imgSlider',
                    bgColor: '#000',
                    imgs: [
                        {
                            folder: 'ganassi',
                            img: 'ganassi_1.png'
                        },
                        {
                            folder: 'ganassi',
                            img: 'ganassi_2.jpg'
                        },
                        {
                            folder: 'ganassi',
                            img: 'ganassi_3.jpg'
                        }
                    ]
                },
                {
                    type: 'meetTeam',
                    team: [
                        {
                            name: 'Alli Shepard',
                            title: 'Developer',
                            img: 'Alli_Shepard'
                        },
                        {
                            name: 'John Coombs',
                            title: 'Developer',
                            img: 'John_Coombs'
                        },
                        {
                            name: 'Aram Yang',
                            title: 'Program Manager',
                            img: 'Aram_Yang'
                        },
                    ]
                }
            ]
        },
        {
            name: "Maybelline",
            icon: "maybelline",
            iconWidth: "75%",
            blocks: [
                {
                    type: 'title',
                    bgColor: '#613769',
                    gradient: {
                        start: '#7b3f86',
                        finish: '#613769'
                    },
                    txtColor: '#DfE5E6',
                    client: "Maybelline",
                    app: "Maybelline NY Mobile Website",
                    devices: [
                        {
                            device: 'phone'
                        }, 
                        {
                            device: 'tablet'
                        }, 
                        {
                            device: 'laptop'
                        }, 
                    ],
                    description: "Maybelline New York wanted to extend their brand experience and product offerings to their on-the-go customers, who are growing in numbers, by making the Maybelline brand present and available anywhere, anytime. The newly launched site is the first phase of a two-phase project and represents Maybelline’s first foray into mobile.",
                    moreContent: [
                        {
                            type: 'text',
                            text: 'The delivery includes product browse, product lessons and how-to videos.  The visual brand was persistent and consistent with their website, and provided a top-notch mobile resence, not just an out of the box mobile experience. With development and implementation on the Netbiscuits platform, the site promotes the latest in technology on all smart phones (Android and iOS) and majority of mobile phones.'
                        },
                        {
                            type: 'text',
                            text: 'The mobile experience is a further extension of the current web experience and strategically provides a subset of the web content that is most be relevant on-the-go: product information and lessons/how-to videos.'
                        },
                        {
                            type: 'list',
                            bullet: "Ability to offer the same level of product assortment to the customer, either by shopping through a specific brand or by browsing the product categories.",
                            borderColor: '#eee'
                        },
                        {
                            type: 'list',
                            bullet: "Elevate more of the on-the-go functionality of mobile and make it easier to quickly search for products.",
                            borderColor: '#eee'
                        },
                        {
                            type: 'list',
                            bullet: "Leveraged the existing UX and Visual system of the main website to minimize effort and provide a consistent experience for the customer in both channels.",
                            borderColor: '#eee'
                        },
                        {
                            type: 'list',
                            bullet: "Devised a solution within a Product Detail page where the products shine through rich imagery and the canvas of shade options are showcased prominently within each product, including textured shade swatches that allows user to digitally feel the product through their phones.",
                            borderColor: '#eee'
                        }
                    ],
                },
                {
                    type: 'facts',
                    geography: [
                        {
                            country: 'North America',
                            countryAb: 'NA'
                        }
                    ],
                    facts: [
                        {
                            title: 'Service Offerings',
                            listItem: [
                                {
                                    fact: 'Mobile Strategy',
                                },
                                {
                                    fact: 'Mobile Design',
                                },
                            ]
                        },
                        {
                            title: 'Development Platform',
                            listItem: [
                                {
                                    fact: 'Netbiscuits',
                                }
                            ]
                        },
                        {
                            title: 'Partner Roles',
                            listItem: [
                                {
                                    fact: 'Netbiscuits',
                                    sub: 'Development & Deployment'
                                }
                            ]
                        },
                    ]
                },
                {
                    type: 'meetTeam',
                    team: [
                        {
                            name: 'Jon Mittelbronn',
                            title: 'Technical Legend',
                            img: 'Jon_Mittelbronn'
                        },
                        {
                            name: 'John Coombs',
                            title: 'Developer',
                            img: 'John_Coombs'
                        },
                        {
                            name: 'Aram Yang',
                            title: 'Program Manager',
                            img: 'Aram_Yang'
                        },
                    ]
                }
            ]
        },
        {
            name: "dweller",
            icon: "dweller",
            iconWidth: "45%",
            blocks: [
                {
                    type: 'title',
                    bgColor: '#E8583E',
                    gradient: {
                        start:'#f14729',
                        finish:'#E8583E'
                    },
                    txtColor: '#fff',
                    client: "United States Census Bureau",
                    app: "dweller",
                    devices: [
                        {
                            device: 'phone'
                        },
                    ],
                    os: [
                        {
                            platform: 'ios'
                        },
                        {
                            platform: 'android'
                        }
                    ],
                    description: "dwellr is one of the ways the Census Bureau is working to make its statistics more available anywhere, anytime, and in any place in line with the Digital Government Strategy. Powered by the American Community Survey statistics, the users are introduced to a wealth of information, which provides estimates for every neighborhood in the nation on topics ranging from education to commuting.",
                    moreContent: [
                        {
                            type: 'text',
                            text: 'In 2010, the United States Census Bureau began a multi-year, multi-phase program (the Web Transformation Project) to bring a renewed focus on what the Bureau does and how consumers can utilize the wealth of data the Census collects, measures, and monitors.  Everyone knows what the Bureau does once every 10 years, but did you know they also track over a dozen economic indicators that measure the health of the US Economy?  The Census Bureau partnered with Sapient to help take this message to the public in the form of several mobile apps, the second of which is called "dwellr"'
                        },
                        {
                            type: 'text',
                            text: "After completing a fusion workshop in January 2012, the Census decided to move forward with 3 mobile apps. The second of these, dwellr, lets the user explore American Community Survey statistics about communities that fit his or her preferences and interests. Through a series of questions, dwellr can determine each user’s ideal location. It will then show them statistics about their location as well as anywhere else they visit. The app matches more than 200 American Community Survey data points with thousands of places across the nation to create a list of top 25 locations matching the user’s preferences."
                        }
                    ],
                },
                {
                    type: 'imgSlider',
                    bgColor: '#E8583E',
                    imgs: [
                        {
                            folder: 'dweller',
                            img: 'dweller_5.jpeg'
                        },
                        {
                            folder: 'dweller',
                            img: 'dweller_1.jpeg'
                        },
                        {
                            folder: 'dweller',
                            img: 'dweller_2.jpeg'
                        },
                        {
                            folder: 'dweller',
                            img: 'dweller_3.jpeg'
                        },
                        {
                            folder: 'dweller',
                            img: 'dweller_5.jpeg'
                        },
                    ]
                },
                {
                    type: 'facts',
                    geography: [
                        {
                            country: 'North America',
                            countryAb: 'NA'
                        }
                    ],
                    facts: [
                        {
                            title: 'Engagement Model',
                            listItem: [
                                {
                                    fact: 'T&M'
                                }
                            ]
                        },
                        {
                            title: 'Development Platform',
                            listItem: [
                                {
                                    fact: 'Flex'
                                }
                            ]
                        },
                        {
                            title: 'Industry',
                            listItem: [
                                {
                                    fact: 'Education'
                                }
                            ]
                        },
                        {
                            title: 'Service Offerings',
                            listItem: [
                                {
                                    fact: 'Mobile Strategy',
                                },
                                {
                                    fact: 'In Store Strategy',
                                },
                                {
                                    fact: 'Design',
                                },
                                {
                                    fact: 'Development',
                                },
                                {
                                    fact: 'Support',
                                }
                            ]
                        },
                        {
                            title: 'Project Information',
                            listItem: [
                                {
                                    fact: 'US Census',
                                },
                                {
                                    fact: '3+ Years',
                                },
                                {
                                    fact: 'Date of Execution: 04/11',
                                }
                            ]
                        },
                        {
                            title: 'Partner Roles',
                            listItem: [
                                {
                                    fact: 'US Census'
                                }
                            ]
                        },
                    ]
                },
                {
                    type: 'meetTeam',
                    team: [
                        {
                            name: 'Matt Mills',
                            title: 'Program Manager',
                            img: 'Matt_Mills'
                        },
                        {
                            name: 'Alice Jankowski',
                            title: 'Copywriter',
                            img: 'Alice_Jankowski'
                        },
                        {
                            name: 'Jae Lingberg Shah',
                            title: 'Senior Manager Technology',
                            img: 'Jae_Shah'
                        },
                    ]
                }
            ]
        },
        {
            name: "Hartford",
            icon: "hartford",
            iconWidth: "33%",
            blocks: [
                {
                    type: 'title',
                    bgColor: '#F5FAFC',
                    txtColor: '#9A123B',
                    client: "Hartford",
                    app: "The Hartford iOS and Android Phone Apps",
                    devices: [
                        {
                            device: 'phone'
                        },
                        {
                            device: 'tablet'
                        }
                    ],
                    os: [
                        {
                            platform: 'ios'
                        },
                        {
                            platform: 'android'
                        }
                    ],
                    description: "SapientNitro was tasked by The Hartford Consumer and Commercial lines of business to develop iOS and Android Phone Apps retaining the Brand’s unique character and pedigree. The mobile Apps help serve Customers across both platforms (iOS and Android) ensuring the same quality experience they have come to expect from traditional channels.",
                    moreContent: [
                        {
                            type: 'text',
                            text: 'The Hartford, is a leading Insurance and Investment company with  200+ year legacy specializing in Auto, Home and Life Insurance along with other financial and investment services. Along with other Digital Assets, The Hartford had Native iOS and Android Apps for Consumer and Commercial Lines (earlier created by Sapient in 2011). While the Mobile Web had been extended with a lot of utilities, it was time to revamp the Mobile App experience too.'
                        },
                        {
                            type: 'list',
                            bullet: "SapientNitro proposed the solution through simplification of UX and addressing core customer needs.",
                            borderColor: '#1d1d1d'
                        },
                        {
                            type: 'list',
                            bullet: "Engagement Objectives included: Broadening and deepening customer engagement, help support customers with managing their insurance accounts, payments, accident reporting, roadside assistance and claims, etc. and unify products and services experience.",
                            borderColor: '#1d1d1d'
                        }
                    ],
                },
                {
                    type: 'imgSlider',
                    bgColor: '#9A123B',
                    imgs: [
                        {
                            folder: 'hartford',
                            img: 'hartford_1.png'
                        },
                        {
                            folder: 'hartford',
                            img: 'hartford_2.png'
                        },
                        {
                            folder: 'hartford',
                            img: 'hartford_3.png'
                        },
                        {
                            folder: 'hartford',
                            img: 'hartford_4.png'
                        },
                        {
                            folder: 'hartford',
                            img: 'hartford_5.png'
                        },
                    ]
                },
                {
                    type: 'facts',
                    geography: [
                        {
                            country: 'North America',
                            countryAb: 'NA'
                        }
                    ],
                    facts: [
                        {
                            title: 'Service Offerings',
                            listItem: [
                                {
                                    fact: 'Design',
                                },
                                {
                                    fact: 'Development',
                                },
                                {
                                    fact: 'Deployment',
                                },
                                {
                                    fact: 'Mobile Strategy',
                                },
                                {
                                    fact: 'Support',
                                },
                                {
                                    fact: 'Analytics',
                                },
                            ]
                        },
                        {
                            title: 'Engagement Model',
                            listItem: [
                                {
                                    fact: 'FTFP'
                                }
                            ]
                        },
                        {
                            title: 'Development Platform',
                            listItem: [
                                {
                                    fact: 'iOS Phone (also compatible with iPad)'
                                },
                                {
                                    fact: 'Android Phone'
                                },
                            ]
                        }
                    ]
                },
                {
                    type: 'meetTeam',
                    team: [
                        {
                            name: 'Brian Daviadoff',
                            title: 'Developer',
                            img: 'Brian_Daviadoff'
                        },
                        {
                            name: 'John Coombs',
                            title: 'Developer',
                            img: 'John_Coombs'
                        },
                        {
                            name: 'Aram Yang',
                            title: 'Program Manager',
                            img: 'Aram_Yang'
                        },
                    ]
                }
            ]
        },
        {
            name: "bbb",
            icon: "bbb",
            iconWidth: "55%",
            blocks: [
                {
                    type: 'title',
                    bgColor: '#2E3E8E',
                    gradient: {
                        start:'#243cb2',
                        finish:'#2E3E8E'
                    },
                    txtColor: '#fff',
                    client: "Bed Bath and Beyond",
                    app: "Bed Bath and Beyond Mobile Application",
                    devices: [
                        {
                            device: 'tablet'
                        },
                        {
                            device: 'kiosk'
                        },
                    ],
                    os: [
                        {
                            platform: 'ios'
                        }
                    ],
                    description: 'SapientNitro was tasked by Bed Bath and Beyond (1000+ retail store across the US and Canada) to develop a unique and one of a kind in-store associate-customer engagement experience. The experience is divided between two form factors where the smaller version runs on an iPad and larger version runs on a 42" inches kiosk screen. The purpose of these B2C apps to provide unique buying experience to customers right on their finger tips without even making them to move around the store to hunt for a product they want.',
                    moreContent: [
                        {
                            type: 'text',
                            text: 'The app is a unique experience that was implemented by any retail store chains like Bed Bath and Beyond therefore the first and foremost challenge to us was to put the design together in a manner so it should fulfill all business requirements while considering the technological limitations. The design team and tech team work together to come up with best possible design, which could be developed using Flex and Titanium for different form factors. Mobile SCG has done many projects in Flex so that part was covered but Titanium was relatively new to us therefore we had to build that expertise with in the team so we could deliver the project. A small team was built and told to start learning Titanium. The biggest challenge here was time to get ramped up on this new technology because the team had only a weak to start with development activities. To overcome this we came up with a minimalistic but mandatory training program in Titanium that helped them to learn it on a fast pace.'
                        },
                        {
                            type: 'list',
                            bullet: "In both the form factors the imagery is heavy therefore performance of the app was to be considered as the app with heavy images running 24x7 could break the app to come down. Therefore we came up with two level of caching strategy where all big images will be cached in local folders on device and images related to products will be cached on caching server as a result the download process became so fast that a user could hardly see a lag or delay in loading the content. "
                        },
                        {
                            type: 'list',
                            bullet: "Bed Bath and Beyond has a plan to expand this app to various platforms later on therefore while deciding development technologies we made sure that we were covered from that perspective so in future if BBB would want these apps to go to platforms like OSx, Linux, Android etc. we should be able to use same code base and deploy the app. "
                        },
                        {
                            type: 'list',
                            bullet: "One of the biggest challenges we have faced in integrating this app with radio link hardware devices so a call could be made to associates on their walkie-talkie devices. To provide a solution on this first Sapient had to work collaboratively with Motorola (the RLS provider) to find out the way the app could talk to these devices, BBB infra team was also heavily involved in designing this solution from network perspective. As development team was setup in India therefore we had to setup this complete hardware in India and that was proved as right decision to make it possible to let app talk to these devices. "
                        },
                        {
                            type: 'list',
                            bullet: "One of the important objectives was to speed up the selling process without much hassle for a customer. Recently one of the feedbacks came from a customer “Very helpful. I am purchasing something different than what I thought I wanted but better” itself says how effectively the system was able to cater their needs and reduced the amount of effort they were spending to finding out a product in the store. "
                        },
                    ],
                },
                {
                    type: 'facts',
                    bgColor: '#2E3E8E',
                    txtColor: '#fff',
                    geography: [
                        {
                            country: 'North America',
                            countryAb: 'NA'
                        }
                    ],
                    facts: [
                        {
                            title: 'Service Offerings',
                            listItem: [
                                {
                                    fact: 'Design'
                                },
                                {
                                    fact: 'Development'
                                },
                                {
                                    fact: 'Mobile Strategy'
                                },
                                {
                                    fact: 'In-Store Strategy'
                                },
                                {
                                    fact: 'Support'
                                },
                                {
                                    fact: 'Commerce'
                                }
                            ]
                        },
                        {
                            title: 'Development Platform',
                            listItem: [
                                {
                                    fact: 'iOS iPad'
                                },
                                {
                                    fact: 'Flex'
                                },
                                {
                                    fact: 'Titanium'
                                },
                            ]
                        },
                        {
                            title: 'Engagement Model',
                            listItem: [
                                {
                                    fact: 'FTFP'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    ]
};

var blocksData = {
    title: "<div class='block title' style='{{#if gradient}}background-image: -webkit-linear-gradient(bottom, {{gradient.finish}} 0%, {{gradient.start}} 100%);background-image: -o-linear-gradient(bottom, {{gradient.finish}} 0%, {{gradient.start}} 100%);background-image: -moz-linear-gradient(bottom, {{gradient.finish}} 0%, {{gradient.start}} 100%);background-image: -ms-linear-gradient(bottom, {{gradient.finish}} 0%, {{gradient.start}} 100%);background-image: linear-gradient(to bottom, {{gradient.start}} 0%, {{gradient.finish}} 100%);{{else}}{{#if bgColor}}background:{{bgColor}};{{/if}}{{/if}}{{#if txtColor}}color:{{txtColor}};{{/if}}'><div class='container'><div class='client'>{{client}}</div><div class='appname'>{{app}}</div><div class='icons'><div class='device-container'>{{#each devices}}<div class='device {{device}}-container'><table><tr><td><span class='icon icon-{{device}}'></span></td></tr></table></div>{{/each}}</div>{{#if os}}<div class='os-container'>{{#each os}}<div class='device' {{#if ../../txtColor}}style='border-color:{{../../txtColor}}'{{/if}}><table><tr><td><span class='icon icon-{{platform}}'></span></td></tr></table></div>{{/each}}</div>{{/if}}<div class='clearfix'></div></div><div class='description'>{{description}}</div>{{#if moreContent}}<div class='readmore'>Read More</div>{{#each moreContent}}<div class='more-content'>{{#if text}}<p>{{text}}</p>{{/if}}{{#if bullet}}<div class='bullet' {{#if borderColor}}style='border-color:{{borderColor}}'{{/if}}>{{bullet}}</div>{{/if}}</div>{{/each}}{{/if}}</div></div>",
    imgSlider: "<div class='block img-slider' style='{{#if gradient}}background-image: -webkit-linear-gradient(bottom, {{gradient.finish}} 0%, {{gradient.start}} 100%);background-image: -o-linear-gradient(bottom, {{gradient.finish}} 0%, {{gradient.start}} 100%);background-image: -moz-linear-gradient(bottom, {{gradient.finish}} 0%, {{gradient.start}} 100%);background-image: -ms-linear-gradient(bottom, {{gradient.finish}} 0%, {{gradient.start}} 100%);background-image: linear-gradient(to bottom, {{gradient.start}} 0%, {{gradient.finish}} 100%);{{else}}{{#if bgColor}}background:{{bgColor}};{{/if}}{{/if}}{{#if txtColor}}color:{{txtColor}};{{/if}}''><div class='slider-container'><ul>{{#each imgs}}<li><table><tr><td><img src='_img/apps-images/{{folder}}/{{img}}'></td></tr></table></li>{{/each}}<div class='clearfix'></div></ul><div class='arrow arrow-left'><img src='_img/slider-arrow-left.png'></div><div class='arrow arrow-right'><img src='_img/slider-arrow-right.png'></div></div></div>",
    facts: "<div class='block project-facts' style='{{#if gradient}}background-image: -webkit-linear-gradient(bottom, {{gradient.finish}} 0%, {{gradient.start}} 100%);background-image: -o-linear-gradient(bottom, {{gradient.finish}} 0%, {{gradient.start}} 100%);background-image: -moz-linear-gradient(bottom, {{gradient.finish}} 0%, {{gradient.start}} 100%);background-image: -ms-linear-gradient(bottom, {{gradient.finish}} 0%, {{gradient.start}} 100%);background-image: linear-gradient(to bottom, {{gradient.start}} 0%, {{gradient.finish}} 100%);{{else}}{{#if bgColor}}background:{{bgColor}};{{/if}}{{/if}}{{#if txtColor}}color:{{txtColor}};{{/if}}''><div class='facts-title'>Project Facts</div><div class='geography'><div class='text'><div class='geo-title'><span class='span-title'>Geography</span></div>{{#each geography}}<span class='amp'>&</span><span>{{country}}</span>{{/each}}</div><div class='countries'><div class='country-container'>{{#each geography}}<div class='country-img {{countryAb}}' style='background:url(_img/{{countryAb}}.png) 30% no-repeat; background-size:100%;'></div>{{/each}}</div></div><div class='facts-section'>{{#each facts}}<div class='section'><span class='span-title'>{{title}}</span>{{#each listItem}}<div class='list-fact'>{{#if sub}}{{fact}}:<span class='sub'>{{sub}}</span>{{else}}{{fact}}{{/if}}</div>{{/each}}</div>{{/each}}<div class='clearfix'></div></div></div></div>",
    meetTeam: "<div class='block meet-the-team'><div class='team-title'>Meet the Team</div><div class='team-container'>{{#each team}}<div class='member'><div class='member-img'><img src='_img/sapient-employees/{{img}}.jpg'></div><div class='member-overlay'><table><tr><td><div class='member-title'>{{title}}</div><div class='member-name'>{{name}}</div></td></tr></table></div></div>{{/each}}<div class='clearfix'></div></div></div>",
    intGrid: "<div class='block grid-block'><ul><li class='double'><div class='sec'><div class='{{grid}}'></div></div><div class='clearfix'></div></li></ul></div>",
    intGridBS: "<div class='block grid-block'><ul><li class='single'><div class='sec big'><div class='{{gridB}}'></div></div><div class='sec small'><div class='{{gridS}}''></div></div><div class='clearfix'></div></li></ul></div>",
    intGridSB: "<div class='block grid-block'><ul><li class='single'><div class='sec small'><div class='int-grid-container'></div></div><div class='sec big'><div class='int-grid-container'></div></div><div class='clearfix'></div></li></ul></div>",
    intThumbnail: "<div class='block grid-block'><ul><li class='thumbnail'><div class='sec'><div class='{{thumbnail1}}'></div></div><div class='sec'><div class='{{thumbnail2}}'></div></div><div class='sec'><div class='{{thumbnail3}}'></div></div><div class='clearfix'></div></li></ul></div>",
};

var selectedApp = {
};

// Process Template with Data
document.getElementById('app-selection').innerHTML = appTemplate(appData);



function blockSetup(){
    var pad = 115 - ($('#apps ul').outerWidth()*0.02); // thinking that this wont change

    if($(window).outerWidth() <= 480){
        var width = $(window).outerWidth()*0.85;
    }
    else {
        var width = $(window).outerWidth() - $('#nav').outerWidth() - pad;
    }

    TweenMax.to($('#app-detail'),0,{width:width+'px', onComplete:function(){
        setup('#app-detail .title');
        setup('#app-detail .img-slider');
        setup('#app-detail .geography');
        setup('#app-detail .meet-the-team');
    }});
}

function detailCheck(li) {
    if($('#app-frame').hasClass('unpacking')){
        closeDetail(li);
    }
    else {
        peekApp(li);
    }
}

function peekApp(li) {
    var num = $(li).index();
    selectedApp = appData.apps[num];

    var appDetail = document.getElementById('app-detail-template').innerHTML;
    var appDetailTemplate = Handlebars.compile(appDetail);
    document.getElementById('app-detail').innerHTML = appDetailTemplate(selectedApp);

    blockSetup();

    $('#app-frame').addClass('unpacking');

    var shift = $('#static').outerWidth() - $('#app-selection').outerWidth();
    TweenMax.to($('#app-frame'), 0.3, {left: '-' + shift}); 
}//end of peekApp

function endPeek(){
    TweenMax.to($('#app-frame'), 0.3, {left: '0px'}); 
}

function closeDetail(li) {
    TweenMax.to($('#app-frame'), 0.3, {left: '0px', onComplete:function(){
        $('#app-frame').removeClass('unpacking');
        peekApp(li);
    }}); 
}










