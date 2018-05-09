function fnReady() {
   
};

function fnStart() {
    api.closeFrameGroup({
        name: 'welcome_group'
    });
};

// open overlay
function openCreateOverlay(){
    var frames = [];
    api.openFrame({
        name: 'overlay-create',
        scrollEnabled: true,
        url: './html/overlay-create.html',
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        },
        index: 1,
        animation : {
	        type : 'movein',
	        subType : 'from_bottom',
	        duration : 300
        },
    });
};

// close overlay
function closeCreateOverlay(){
    api.closeFrame({
        name: 'overlay-create'
    });
};

// todo scan QR 
function openScan(){
	var FNScanner = api.require('FNScanner');
	FNScanner.open({
	    autorotation: true
	}, function(ret, err) {
	    if (ret) {
	        alert(JSON.stringify(ret));
	    } else {
	        alert(JSON.stringify(err));
	    }
	});
}
