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
            icon: "ganassi.png",
            iconWidth: "100%",
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
            icon: "hartford.png",
            iconWidth: "80%",
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
            icon: "bbb.png",
            iconWidth: "100%",
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
            icon: "levis.png",
            iconWidth: "70%",
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
                    description: "We worked in partnership with Levi's to create a Macy's 'store within a store' concept that brings digital brand experiences to the physical space in connected ways. We worked with architects, merchandisers, brand and marketing creative, store operators and outside agencies to develop the creative, strategy, and overall evolution.",
                },
                {
                    type: 'facts',
                    bgColor: '#fff',
                    geography: [
                        {
                            country: 'India',
                            countryAb: 'India'
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
                            name: 'John Coombs',
                            title: 'Developer',
                            img: 'John_Coombs'
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
    title: "<div class='title' style='background:{{bgColor}}'><div class='container'><div class='client'>{{client}}</div><div class='appname'>{{app}}</div><div class='icons'></div><div class='description'>{{description}} <div class='readmore'>Read More</div></div></div></div>",
    facts: "<div class='project-facts' style='background:{{bgColor}}'><div class='facts-title'>Project Facts</div><div class='geography'><div class='text'><span class='span-title'>Geography /</span>{{#each geography}}<span class='amp'>&</span><span>{{country}}</span>{{/each}}</div><div class='countries'><div class='country-container'>{{#each geography}}<div class='country-img {{countryAb}}' style='background:url(_img/{{countryAb}}.png) 30% no-repeat; background-size:100%;'></div>{{/each}}</div></div><div class='facts-section'>{{#each facts}}<div class='section'><span class='span-title'>{{title}}</span>{{#each listItem}}<div class='list-fact'>{{#if sub}}{{fact}}:<span class='sub'>{{sub}}</span>{{else}}{{fact}}{{/if}}</div>{{/each}}</div>{{/each}}<div class='clearfix'></div></div></div>",
    meetTeam: "<div class='meet-the-team'><div class='team-title'>Meet the Team</div><div class='team-container'>{{#each team}}<div class='member'><div class='member-img'><img src='_img/sapient-employees/{{img}}.jpg'></div><div class='member-overlay'><table><tr><td><div class='member-title'>{{title}}</div><div class='member-name'>{{name}}</div></td></tr></table></div></div>{{/each}}<div class='clearfix'></div></div></div>",
    intGrid: "<div class='block grid-block'><ul><li class='double'><div class='sec'><div class='{{grid}}'></div></div><div class='clearfix'></div></li></ul></div>",
    intGridBS: "<div class='block grid-block'><ul><li class='single'><div class='sec big'><div class='{{gridB}}'></div></div><div class='sec small'><div class='{{gridS}}''></div></div><div class='clearfix'></div></li></ul></div>",
    intGridSB: "<div class='block grid-block'><ul><li class='single'><div class='sec small'><div class='int-grid-container'></div></div><div class='sec big'><div class='int-grid-container'></div></div><div class='clearfix'></div></li></ul></div>",
    intThumbnail: "<div class='block grid-block'><ul><li class='thumbnail'><div class='sec'><div class='{{thumbnail1}}'></div></div><div class='sec'><div class='{{thumbnail2}}'></div></div><div class='sec'><div class='{{thumbnail3}}'></div></div><div class='clearfix'></div></li></ul></div>",
};

var selectedApp = {
            name: "Ganassi Timeline",
            icon: "icon-ganassi.jpg",
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

            // intGrid BS SB
            // grid gridB gridS

            // intThumbnail 
            // thumbnail1 2 3

                {
                    type: 'intThumbnail',
                    thumbnail1: 'int-grid-container',
                    thumbnail2: 'text',
                    thumbnail3: 'int-grid-container'
                },
                {
                    type: 'intGrid',
                    grid: 'int-grid-container',
                },
            ]
};

// Process Template with Data
document.getElementById('app-selection').innerHTML = appTemplate(appData);

function loadAppSummary(li) {
    var num = $(li).index();
    selectedApp = appData.apps[num];

    // var newAppSummary = document.getElementById('app-summary-template').innerHTML;
    // var newAppSummaryTemplate = Handlebars.compile(newAppSummary);
    // document.getElementById('app-summary').innerHTML = newAppSummaryTemplate(selectedApp);

    centerDevices();

    // var appDetail = document.getElementById('app-detail-template').innerHTML;
    // var appDetailTemplate = Handlebars.compile(appDetail);
    // document.getElementById('app-detail').innerHTML = appDetailTemplate(selectedApp);

}

function peekApp(li) {
    var num = $(li).index();
    selectedApp = appData.apps[num];

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
    

    var appDetail = document.getElementById('app-detail-template').innerHTML;
    var appDetailTemplate = Handlebars.compile(appDetail);
    document.getElementById('app-detail').innerHTML = appDetailTemplate(selectedApp);
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








