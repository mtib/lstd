function newHowl(name) {
    return new Howl({
        src: ['scenes/'+name+'.ogg','scenes/'+name+'.mp3'],
        loop: true,
        volume: 0.4,
    }
)};

function img(file) { return "img/"+file+".png" }
function sprarr(dir,pre,max) {
    arr = []
    for (var i = 0; i <= max; i++) {
        arr[i] = "img/" + dir + "/" + pre + "_" + max + ".png"
    }
    return arr
}

function rinr(min, max){
    return min + Math.random()*(max-min);
}
