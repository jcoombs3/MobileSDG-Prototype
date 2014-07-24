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
                {
                    type: 'intGridSB',
                    gridB: 'int-grid-container',
                    gridS: 'int-grid-container'
                },
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
        },
        {
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

    var pad = 100 - ($('#apps ul').outerWidth()*0.02); // thinking that this wont change
    var width = $(window).outerWidth() - $('#nav').outerWidth() - pad;

    TweenMax.to($('#app-detail'),0,{marginLeft:$('#apps ul').outerWidth()+'px',width:width+'px'});
    TweenMax.to($('.working-title'), 1, {delay: 0.05, left:'-70%'});
    TweenMax.to($('#app-detail'), 0.5, {left: 0}); 
    

    var appDetail = document.getElementById('app-detail-template').innerHTML;
    var appDetailTemplate = Handlebars.compile(appDetail);
    document.getElementById('app-detail').innerHTML = appDetailTemplate(selectedApp);
}








