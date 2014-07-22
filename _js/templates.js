// Grab the HTML source that needs to be compiled
var appSource = document.getElementById( 'app-selection-template' ).innerHTML;

// Compiles the source
var appTemplate = Handlebars.compile( appSource );

//Data that will replace the handlebars expressions in our template
var appData = {
    apps: [
        {   name: "Ganassi Timeline",
            icon: "icon-ganassi.jpg",
            appSummary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", 
            devices: [
                { device: 'Android' },
                { device: 'iPad' },
                { device: 'iPhone' },
                { device: 'Kiosk' }
            ]
        }
    ]
};

var selectedApp = {};

// Process Template with Data
document.getElementById( 'app-selection' ).innerHTML = appTemplate( appData );

function loadAppSummary(li){
    var num = $(li.currentTarget).index();
    selectedApp = appData.apps[num];

    var newAppSummary = document.getElementById( 'app-summary-template' ).innerHTML;
    var newAppSummaryTemplate = Handlebars.compile( newAppSummary );
    document.getElementById( 'app-summary' ).innerHTML = newAppSummaryTemplate( selectedApp );

    centerDevices();
}