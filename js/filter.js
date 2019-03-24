
function resizeFilters(width) {
    $('#dropdown1_1').ejDropDownList({
        width: width
    });
    $('#dropdown2_1').ejDropDownList({
        width: width
    });
    $('#dropdown3_1').ejDropDownList({
        width: width
    });
    $('#dropdown1_2').ejDropDownList({
        width: width
    });
    $('#dropdown2_2').ejDropDownList({
        width: width
    });
    $('#dropdown3_2').ejDropDownList({
        width: width
    });
}

/// FILTER CREATION ///

// Filter Creation
function createFilters(width) {
    $(function() {
        var items = [{
            text: "ListItem 1",
            value: "item1"
        }, {
            text: "ListItem 2",
            value: "item2"
        }, {
            text: "ListItem 3",
            value: "item3"
        }, {
            text: "ListItem 4",
            value: "item4"
        }, {
            text: "ListItem 5",
            value: "item5"
        }];
        $('#dropdown1_1').ejDropDownList({
            dataSource: items,
            fields: {
                text: "text",
                value: "value"
            },
            showCheckbox: true,
            width: width,
            change: function (args) 
            {
                var obj = $('#dropdown1_1').data("ejDropDownList");
                filter(obj.value, "store");                
            }
        });
    
        var items = [{
            text: "ListItem 1",
            value: "item1"
        }, {
            text: "ListItem 2",
            value: "item2"
        }, {
            text: "ListItem 3",
            value: "item3"
        }, {
            text: "ListItem 4",
            value: "item4"
        }, {
            text: "ListItem 5",
            value: "item5"
        }];
        $('#dropdown2_1').ejDropDownList({
            dataSource: items,
            fields: {
                text: "text",
                value: "value"
            },
            showCheckbox: true,
            width: width,
            change: function (args) 
            {
                var obj = $('#dropdown2_1').data("ejDropDownList");
                filter(obj.value, "sku");                
            }
        });
        
        var items = [{
            text: "ListItem 1",
            value: "item1"
        }, {
            text: "ListItem 2",
            value: "item2"
        }, {
            text: "ListItem 3",
            value: "item3"
        }, {
            text: "ListItem 4",
            value: "item4"
        }, {
            text: "ListItem 5",
            value: "item5"
        }];
        $('#dropdown3_1').ejDropDownList({
            dataSource: items,
            fields: {
                text: "text",
                value: "value"
            },
            showCheckbox: true,
            width: width,
            change: function (args) 
            {
                var obj = $('#dropdown3_1').data("ejDropDownList");
                filter(obj.value, "time");                
            }
        });
        
        var items = [{
            text: "ListItem 1",
            value: "item1"
        }, {
            text: "ListItem 2",
            value: "item2"
        }, {
            text: "ListItem 3",
            value: "item3"
        }, {
            text: "ListItem 4",
            value: "item4"
        }, {
            text: "ListItem 5",
            value: "item5"
        }];
        $('#dropdown1_2').ejDropDownList({
            dataSource: items,
            fields: {
                text: "text",
                value: "value"
            },
            showCheckbox: true,
            width: width,
            change: function (args) 
            {
                var obj = $('#dropdown1_2').data("ejDropDownList");
                filter(obj.value, "store");              
            }
        });
    
        var items = [{
            text: "ListItem 1",
            value: "item1"
        }, {
            text: "ListItem 2",
            value: "item2"
        }, {
            text: "ListItem 3",
            value: "item3"
        }, {
            text: "ListItem 4",
            value: "item4"
        }, {
            text: "ListItem 5",
            value: "item5"
        }];
        $('#dropdown2_2').ejDropDownList({
            dataSource: items,
            fields: {
                text: "text",
                value: "value"
            },
            showCheckbox: true,
            width: width,
            change: function (args) 
            {
                var obj = $('#dropdown2_2').data("ejDropDownList");
                filter(obj.value, "store");              
            }
        });
        
        var items = [{
            text: "ListItem 1",
            value: "item1"
        }, {
            text: "ListItem 2",
            value: "item2"
        }, {
            text: "ListItem 3",
            value: "item3"
        }, {
            text: "ListItem 4",
            value: "item4"
        }, {
            text: "ListItem 5",
            value: "item5"
        }];
        $('#dropdown3_2').ejDropDownList({
            dataSource: items,
            fields: {
                text: "text",
                value: "value"
            },
            showCheckbox: true,
            width: width,
            change: function (args) 
            {
                var obj = $('#dropdown3_2').data("ejDropDownList");
                filter(obj.value, "store");              
            }
        });
    });
}

var filterHidden = false;
function toggleAlternateFilter() {

    var icon = document.getElementById("filterDropdown");

    if(filterHidden == false) {
        $("#box1test").hide();
        filterHidden = !filterHidden;
        icon.className = "fas fa-angle-down moreFilterIcon";
    }
    else {
        $("#box1test").show();
        filterHidden = !filterHidden;
        icon.className = "fas fa-angle-up moreFilterIcon";
    }
}

function testUpdateFilters() {
    console.log($('#dropdown1_1').ejDropDownList());
    $('#dropdown1_1').ejDropDownList().dataSource = [{
        text: "Store 1",
        value: "item1"
    }, {
        text: "Store 2",
        value: "item2"
    }, {
        text: "Store 3",
        value: "item3"
    }];
}

function filter(value, filterType) {
    if (filterType === "store") {
        console.log("here in store");
    } else if (filterType === "sku") {
        console.log("here in sku");
    } else {
        console.log("here in time");
    }
}
