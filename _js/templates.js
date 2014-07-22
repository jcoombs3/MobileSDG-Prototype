// Grab the HTML source that needs to be compiled
var appSource = document.getElementById( 'app-selection-template' ).innerHTML;

// Compiles the source
var appTemplate = Handlebars.compile( appSource );

//Data that will replace the handlebars expressions in our template
var appData = {
    apps: [
        {   name: "Ganassi Timeline",
            appSummary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" },
        {   name: "Levi’s: Denim Discovery",
            appSummary: "this is a summary2" },
        {   name: "Maybelline - NY Mobile Website",
            appSummary: "this is a summary3" },
        { name: "App 4" },
        { name: "App 5" },
        { name: "App 6" },
        { name: "App 7" },
        { name: "App 8" }
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