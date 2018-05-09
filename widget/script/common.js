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
    frames.push({
        name: 'overlay-create',
        url: './html/overlay-create.html',
        bounces: false,
    });
    api.openFrameGroup({
        name: 'overlay-create',
        scrollEnabled: true,
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        },
        index: 1,
        frames: frames
    });
};

// close overlay
function closeCreateOverlay(){
    api.closeFrameGroup({
        name: 'overlay-create'
    });
};