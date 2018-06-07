document.addEventListener('keypress',function(ev){
console.log(ev.keyCode);
if (ev.keyCode === 97){
    document.querySelector('.a').classList.add('light');
    document.querySelector('.clap').play();
    setTimeout(()=>{document.querySelector('.a').classList.remove('light')},50);
}
if (ev.keyCode === 115){
    document.querySelector('.s').classList.add('light');
    document.querySelector('.hihat').play();
    setTimeout(()=>{document.querySelector('.s').classList.remove('light')},50);
}
if (ev.keyCode === 100)
{
    document.querySelector('.d').classList.add('light');
    document.querySelector('.kick').play();
    setTimeout(()=>{document.querySelector('.d').classList.remove('light')},50);
}
if (ev.keyCode === 102){
    document.querySelector('.f').classList.add('light');
    document.querySelector('.openhat').play();
    setTimeout(()=>{document.querySelector('.f').classList.remove('light')},50);
}

if (ev.keyCode === 103){
    document.querySelector('.g').classList.add('light');
    document.querySelector('.boom').play();
    setTimeout(()=>{document.querySelector('.g').classList.remove('light')},50);
}
if (ev.keyCode === 104){
    document.querySelector('.h').classList.add('light');
    document.querySelector('.ride').play();
    setTimeout(()=>{document.querySelector('.h').classList.remove('light')},50);
}
if (ev.keyCode === 106){
    document.querySelector('.j').classList.add('light');
    document.querySelector('.snare').play();
    setTimeout(()=>{document.querySelector('.j').classList.remove('light')},50);
}
if (ev.keyCode === 107){
    document.querySelector('.k').classList.add('light');
    document.querySelector('.tom').play();
    setTimeout(()=>{document.querySelector('.k').classList.remove('light')},50);
}
if (ev.keyCode === 108){
    document.querySelector('.l').classList.add('light');
    document.querySelector('.tink').play();
    setTimeout(()=>{document.querySelector('.l').classList.remove('light')},50);
}

});