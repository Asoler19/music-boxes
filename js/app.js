var notes = {
    c: document.querySelector('#cAudio'),
    d: document.querySelector('#dAudio'),
    e: document.querySelector('#eAudio'),
    f: document.querySelector('#fAudio'),
    g: document.querySelector('#gAudio'),
    a: document.querySelector('#aAudio'),
    b: document.querySelector('#bAudio'),
}

function playNote(letter){
    notes[letter].currentTime = 0
    notes[letter].play();
}

document.querySelectorAll('.box').forEach(function(box){
    box.addEventListener('mousedown', function(){
        playNote(box.getAttribute('id'))
    })
})

document.addEventListener('keydown', function(event){
    //console.log(event);
    //finish this by adding the appropriate keyCode
    if(event.keyCode == 67){
        playNote('c')
    }
    if(event.keyCode == 68){
        playNote('d')
    }
    if(event.keyCode == 69){
        playNote('e')
    }
    if(event.keyCode == 70){
        playNote('f')
    }
    if(event.keyCode == 71){
        playNote('g')
    }
    if(event.keyCode == 65){
        playNote('a')
    }
    if(event.keyCode == 66){
        playNote('b')
    }
})

//document.querySelector('.box').addEventListener('mousedown', function(){
//    playNote(this.getAttribute('id'))
// })