$(document).ready(function(){
    $('ul.accordion').accordion({
        autoheight: false,
        header: ".opener",
        active: '.selected',
        selectedClass: 'active',
        alwaysOpen: false,
        event: "click"
    });
});