function fnReady() {
   
};

function fnStart() {
    api.closeFrameGroup({
        name: 'welcome_group'
    });
};

// open overlay
function openCreateOverlay(){
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

function closeSearch(){
    api.closeWin({
        });
};

function openWin(name){
    var delay = 0;
    if(api.systemType != 'ios'){
        delay = 30;
    }
    api.openWin({
        name: ''+name+'',
        url: ''+name+'.html',
        bounces:false,
        delay: delay,
        slidBackEnabled:true,
        vScrollBarEnabled:false
    });
}

// open frame
function openFrame(name){
    api.openFrame({
        name: ''+name+'',
        url: ''+name+'.html',
        scrollEnabled: true,
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        },
        index: 1,
    });
};

// remove removeRecommend()
function removeRecommend(tag){
    var recommendContent = $api.closest(tag, '.js-recommend');
    $api.remove(recommendContent);
} 
