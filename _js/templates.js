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
        {
            name: "Levi's",
            icon: "levis",
            iconWidth: "40%",
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
                            title: 'Cool Person YOYO',
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
    ]
};

var blocksData = {
    title: "<div class='block title' style='background:{{bgColor}}'><div class='container'><div class='client'>{{client}}</div><div class='appname'>{{app}}</div><div class='icons'><div class='device-container'>{{#each devices}}<div class='device'><span class='icon icon-{{device}}'></span></div>{{/each}}</div>{{#if os}}<div class='os-container'>{{#each os}}<div class='device'><span class='icon icon-{{platform}}'></span></div>{{/each}}</div>{{/if}}<div class='clearfix'></div></div><div class='description'>{{description}} <div class='readmore'>Read More</div></div></div></div>",
    facts: "<div class='block project-facts' style='background:{{bgColor}}'><div class='facts-title'>Project Facts</div><div class='geography'><div class='text'><span class='span-title'>Geography /</span>{{#each geography}}<span class='amp'>&</span><span>{{country}}</span>{{/each}}</div><div class='countries'><div class='country-container'>{{#each geography}}<div class='country-img {{countryAb}}' style='background:url(_img/{{countryAb}}.png) 30% no-repeat; background-size:100%;'></div>{{/each}}</div></div><div class='facts-section'>{{#each facts}}<div class='section'><span class='span-title'>{{title}}</span>{{#each listItem}}<div class='list-fact'>{{#if sub}}{{fact}}:<span class='sub'>{{sub}}</span>{{else}}{{fact}}{{/if}}</div>{{/each}}</div>{{/each}}<div class='clearfix'></div></div></div>",
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

function activateListeners(li) {

    console.log('activating listeners');

    $('#app-detail .block.meet-the-team').on({
        mouseenter: function(e) {
            var width = $('.member-img').outerWidth();
            TweenMax.to($(e.currentTarget).find('.member-overlay'),0,{height:width+'px', width:width+'px', onComplete:function(){
                TweenMax.to($(e.currentTarget).find('.member-overlay'),0.5,{opacity:'0.8'});
            }});
        },
        mouseleave: function(e) {
            TweenMax.to($(e.currentTarget).find('.member-overlay'),0.5,{opacity:'0'});
        }
    }, '.member');

}

function blockSetup(){
    setup('#app-detail .title');
    setup('#app-detail .geography');

    var pad = 115 - ($('#apps ul').outerWidth()*0.02); // thinking that this wont change
    var width = $(window).outerWidth() - $('#nav').outerWidth() - pad;

    TweenMax.to($('#app-detail'),0,{marginLeft:$('.app-list').outerWidth()+'px',width:width+'px'});
    if(!$('#app-detail').hasClass('busy')){
        $('#app-detail').addClass('busy');
        TweenMax.to($('#static'), 0.75, {left:'-100%'}); 
        TweenMax.to($('#app-detail'), 0.4, {left: 0, onComplete:function(){
            $('#app-detail').removeClass('busy');
        }}); 
    }
    else{
        if(!$('#app-detail').hasClass('hover')){
            setTimeout(function(){
                TweenMax.to($('#app-detail'), 0.4, {left: '0%'}); 
                TweenMax.to($('#static'), 0.75, {left: '-100%'});
                $('#app-detail').removeClass('busy');
            }, 250);  
        }
    }
}

function peekApp(li) {
    var num = $(li).index();
    selectedApp = appData.apps[num];

    var appDetail = document.getElementById('app-detail-template').innerHTML;
    var appDetailTemplate = Handlebars.compile(appDetail);
    document.getElementById('app-detail').innerHTML = appDetailTemplate(selectedApp);

    blockSetup();
}//end of peekApp

function endPeek(){
    if(!$('#app-detail').hasClass('busy') && !$('#app-detail').hasClass('hover')){
        TweenMax.to($('#app-detail'), 0.75, {left: '100%'}); 
        TweenMax.to($('#static'), 0.4, {left: '0'});
    }
    else{
        if(!$('#app-detail').hasClass('hover')){
            setTimeout(function(){
                TweenMax.to($('#app-detail'), 0.75, {left: '100%'}); 
                TweenMax.to($('#static'), 0.4, {left: '0'});
                $('#app-detail').removeClass('busy');
            }, 250);  
        }
    }
}








