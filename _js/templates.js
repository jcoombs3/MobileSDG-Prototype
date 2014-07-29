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
            devices: [
                {
                    device: 'Android'
                }, 
                {
                    device: 'iPad'
                }, 
                {
                    device: 'iPhone'
                }, 
                {
                device: 'Kiosk'
            }],
            blocks: [
                {
                    type: 'title',
                    bgColor: '#fff',
                    client: "Levi's",
                    app: "Denim Discovery In-Store Experience",
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
                        {
                            device: 'kiosk'
                        }
                    ],
                    os: [
                        {
                            platform: 'ios',
                        },
                        {
                            platform: 'android',
                        }
                    ],
                    description: "We worked in partnership with Levi's to create a Macy's 'store within a store' concept that brings digital brand experiences to the physical space in connected ways. We worked with architects, merchandisers, brand and marketing creative, store operators and outside agencies to develop the creative, strategy, and overall evolution.",
                    moreContent: [
                        {
                            type: 'text',
                            text: 'This is text when we have more content to show. There will also be the ability to post pictures with descriptions on the sides at a later release.'
                        }
                    ],
                },
                {
                    type: 'imgSlider',
                    bgColor: '#21addd',
                    imgs: [
                        {
                            folder: 'levis',
                            img: 'levis_indevice2.png'
                        },
                        {
                            folder: 'levis',
                            img: 'levis_indevice2.png'
                        },
                        {
                            folder: 'levis',
                            img: 'levis_indevice2.png'
                        },
                    ]
                },
                {
                    type: 'facts',
                    bgColor: '#fff',
                    geography: [
                        {
                            country: 'North America',
                            countryAb: 'NA'
                        },
                        {
                            country: 'India',
                            countryAb: 'India'
                        },
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
                            name: 'Aram Yang',
                            title: 'Program Management',
                            img: 'Aram_Yang'
                        },
                        {
                            name: 'Brian Daviadoff',
                            title: 'Developer',
                            img: 'Brian_Daviadoff'
                        },
                        {
                            name: 'Aram Yang',
                            title: 'Program Management',
                            img: 'Aram_Yang'
                        },
                        {
                            name: 'Brian Daviadoff',
                            title: 'Developer',
                            img: 'Brian_Daviadoff'
                        },
                        {
                            name: 'Aram Yang',
                            title: 'Program Management',
                            img: 'Aram_Yang'
                        },
                        {
                            name: 'Brian Daviadoff',
                            title: 'Developer',
                            img: 'Brian_Daviadoff'
                        },
                        {
                            name: 'Aram Yang',
                            title: 'Program Management',
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
            appSummary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            devices: [
                {
                    device: 'Android'
                }, 
                {
                    device: 'iPad'
                }, 
                {
                    device: 'iPhone'
                }, 
                {
                device: 'Kiosk'
            }],
            blocks: [
                {
                    type: 'intGrid',
                    grid: 'int-grid-container',
                },
                {
                    type: 'intThumbnail',
                    thumbnail1: 'text',
                    thumbnail2: 'text',
                    thumbnail3: 'int-grid-container'
                }
            ]
        },
        {
            name: "Hartford",
            icon: "hartford",
            iconWidth: "38%",
            appSummary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            devices: [
                {
                    device: 'Android'
                }, 
                {
                    device: 'iPad'
                }, 
                {
                    device: 'iPhone'
                }, 
                {
                device: 'Kiosk'
            }],
            blocks: [
                {
                    type: 'intGrid',
                    grid: 'int-grid-container',
                },
                {
                    type: 'intThumbnail',
                    thumbnail1: 'text',
                    thumbnail2: 'text',
                    thumbnail3: 'int-grid-container'
                }
            ]
        },
        {
            name: "Bed Bath and Beyond",
            icon: "bbb",
            iconWidth: "55%",
            appSummary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            devices: [
                {
                    device: 'Android'
                }, 
                {
                    device: 'iPad'
                }, 
                {
                    device: 'iPhone'
                }, 
                {
                device: 'Kiosk'
            }],
            blocks: [
                {
                    type: 'intGrid',
                    grid: 'int-grid-container',
                },
                {
                    type: 'intThumbnail',
                    thumbnail1: 'text',
                    thumbnail2: 'text',
                    thumbnail3: 'int-grid-container'
                }
            ]
        },
    ]
};

var blocksData = {
    title: "<div class='block title' style='background:{{bgColor}}'><div class='container'><div class='client'>{{client}}</div><div class='appname'>{{app}}</div><div class='icons'><div class='device-container'>{{#each devices}}<div class='device'><table><tr><td><span class='icon icon-{{device}}'></span></td></tr></table></div>{{/each}}</div>{{#if os}}<div class='os-container'>{{#each os}}<div class='device'><table><tr><td><span class='icon icon-{{platform}}'></span></td></tr></table></div>{{/each}}</div>{{/if}}<div class='clearfix'></div></div><div class='description'>{{description}}</div>{{#if moreContent}}<div class='readmore'>Read More</div>{{#each moreContent}}<div class='more-content'>{{text}}</div>{{/each}}{{/if}}</div></div>",
    imgSlider: "<div class='block img-slider' style='background:{{bgColor}}'><div class='slider-container'><ul>{{#each imgs}}<li><table><tr><td><img src='_img/apps-images/{{folder}}/{{img}}'></td></tr></table></li>{{/each}}<div class='clearfix'></div></ul><div class='arrow arrow-left'><img src='_img/slider-arrow-left.png'></div><div class='arrow arrow-right'><img src='_img/slider-arrow-right.png'></div></div></div>",
    facts: "<div class='block project-facts' style='background:{{bgColor}}'><div class='facts-title'>Project Facts</div><div class='geography'><div class='text'><div class='geo-title'><span class='span-title'>Geography /</span></div>{{#each geography}}<span class='amp'>&</span><span>{{country}}</span>{{/each}}</div><div class='countries'><div class='country-container'>{{#each geography}}<div class='country-img {{countryAb}}' style='background:url(_img/{{countryAb}}.png) 30% no-repeat; background-size:100%;'></div>{{/each}}</div></div><div class='facts-section'>{{#each facts}}<div class='section'><span class='span-title'>{{title}}</span>{{#each listItem}}<div class='list-fact'>{{#if sub}}{{fact}}:<span class='sub'>{{sub}}</span>{{else}}{{fact}}{{/if}}</div>{{/each}}</div>{{/each}}<div class='clearfix'></div></div></div></div>",

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

    TweenMax.to($('#app-detail'),0,{width:width+'px'});

    setup('#app-detail .title');
    setup('#app-detail .img-slider');
    setup('#app-detail .geography');
    setup('#app-detail .meet-the-team');
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










