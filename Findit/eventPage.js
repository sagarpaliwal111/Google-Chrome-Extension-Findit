var menuItem = {
    "id": "findit",
    "title": "Find It",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str) {
    var regex = /(?:https?:\/\/)?(?:www\.)?(?:[\da-z-]+\.)+[a-z]{2,10}(?:\/[^\s/]+)*\/?\s/gi;
    return encodeURI(str).replace(regex).replace(regex);
}

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "findit" && clickData.selectionText){   
         
        var finditUrl = "https://developersdome.com/" + fixedEncodeURI(clickData.selectionText);
        var createData = {
            "url": finditUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };              
        chrome.windows.create(createData, function(){});        
    }
});

