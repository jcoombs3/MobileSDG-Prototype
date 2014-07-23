Handlebars.registerHelper("xif", function (type) {

    var xtype = type; // title

    return blocksData.intThumbnailX00;
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
                    type: 'title',
                    name: 'name'
                }
            ]
        }
    ]
};

var blocksData = {
    title: "<div class='block title'></div>",
    intBS: "<div class='block grid-block'><ul><li class='single'><div class='sec big'><div class='int-grid-container'></div></div><div class='sec small'><div class='int-grid-container'></div></div><div class='clearfix'></div></li></ul></div>",
    intSB: "<div class='block grid-block'><ul><li class='single'><div class='sec small'><div class='int-grid-container'></div></div><div class='sec big'><div class='int-grid-container'></div></div><div class='clearfix'></div></li></ul></div>",
    intLeftB: "<div class='block grid-block'><ul><li class='single'><div class='sec big'><div class='int-grid-container'></div></div><div class='sec small'></div><div class='clearfix'></div></li></ul></div>",
    intLeftS: "<div class='block grid-block'><ul><li class='single'><div class='sec small'><div class='int-grid-container'></div></div><div class='sec big'></div><div class='clearfix'></div></li></ul></div>",
    intRightB: "<div class='block grid-block'><ul><li class='single'><div class='sec small'></div><div class='sec big'><div class='int-grid-container'></div></div><div class='clearfix'></div></li></ul></div>",
    intRightS: "<div class='block grid-block'><ul><li class='single'><div class='sec big'></div><div class='sec small'><div class='int-grid-container'></div></div><div class='clearfix'></div></li></ul></div>",
    intThumbnail: "<div class='block grid-block'><ul><li class='thumbnail'><div class='sec'><div class='int-grid-container'></div></div><div class='sec'><div class='int-grid-container'></div></div><div class='sec'><div class='int-grid-container'></div></div><div class='clearfix'></div></li></ul></div>",
    intThumbnail0XX: "<div class='block grid-block'><ul><li class='thumbnail'><div class='sec'></div><div class='sec'><div class='int-grid-container'></div></div><div class='sec'><div class='int-grid-container'></div></div><div class='clearfix'></div></li></ul></div>",
    intThumbnailX0X: "<div class='block grid-block'><ul><li class='thumbnail'><div class='sec'><div class='int-grid-container'></div></div><div class='sec'></div><div class='sec'><div class='int-grid-container'></div></div><div class='clearfix'></div></li></ul></div>",
    intThumbnailXX0: "<div class='block grid-block'><ul><li class='thumbnail'><div class='sec'><div class='int-grid-container'></div></div><div class='sec'><div class='int-grid-container'></div></div><div class='sec'></div><div class='clearfix'></div></li></ul></div>",
    intThumbnailX00: "<div class='block grid-block'><ul><li class='thumbnail'><div class='sec'><div class='int-grid-container'></div></div><div class='sec'></div><div class='sec'></div><div class='clearfix'></div></li></ul></div>",
    intThumbnailX00: "<div class='block grid-block'><ul><li class='thumbnail'><div class='sec'><div class='int-grid-container'></div></div><div class='sec'></div><div class='sec'></div><div class='clearfix'></div></li></ul></div>",
    intThumbnailX00: "<div class='block grid-block'><ul><li class='thumbnail'><div class='sec'></div><div class='sec'></div><div class='sec'><div class='int-grid-container'></div></div><div class='clearfix'></div></li></ul></div>",
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
                {
                    type: 'picBlock'
                }
            ]
};

// Process Template with Data
document.getElementById('app-selection').innerHTML = appTemplate(appData);

function loadAppSummary(li) {
    var num = $(li).index();
    selectedApp = appData.apps[num];

    var newAppSummary = document.getElementById('app-summary-template').innerHTML;
    var newAppSummaryTemplate = Handlebars.compile(newAppSummary);
    document.getElementById('app-summary').innerHTML = newAppSummaryTemplate(selectedApp);

    centerDevices();

    // code goes here

}



    var appDetail = document.getElementById('app-detail-template').innerHTML;
    var appDetailTemplate = Handlebars.compile(appDetail);
    document.getElementById('app-detail').innerHTML = appDetailTemplate(selectedApp);







