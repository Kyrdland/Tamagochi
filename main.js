let cv = document.getElementById('canvas');
let ctx = cv.getContext('2d');

let face = new Image();
face.src = 'img/face.png';

let eBored = new Image();
eBored.src = 'img/eyes-bored.png';


let eExcited = new Image();
eExcited.src = 'img/eyes-excited.png';


let eHappy = new Image();
eHappy.src = 'img/eyes-happy.png';


let eTired = new Image();
eTired.src = 'img/eyes-tired.png';


let mBored = new Image();
mBored.src = 'img/mouse-bored.png';


let mExited = new Image();
mExited.src = 'img/mouse-excited.png';


let mHappy = new Image();
mHappy.src = 'img/mouse-happy.png';


let mHungry = new Image();
mHungry.src = 'img/mouse-hungry.png';


let thermometer = new Image();
thermometer.src = 'img/thermometer.png';

let bpHungry = document.getElementById('bpHungry');
let bpHealth = document.getElementById('bpHealth');
let bpFun = document.getElementById('bpFun');
let bpEnergy = document.getElementById('bpEnergy');


let hungry = 100;
let health = 100;
let fun = 100;
let energy = 100;

setTimeout(() => {
    ctx.drawImage(face, 0, 0);
    ctx.drawImage(eExcited, 0, 0);
    ctx.drawImage(mExited,0, 0);
    loop();
}, 100);

const loop = timestamp => {
    if (Math.floor(timestamp / (1000 / 60)) % 25 == 0) {
        hungry = hungry > 0 ? hungry - 1 : 0;
        health = health > 0 ? health - 1 : 0;
        fun = fun > 0 ? fun - 1 : 0;
        energy = energy > 0 ? energy - 1 : 0;
    }
    update();
    requestAnimationFrame(loop);
}

bpFun.value = 10;

const update = () => {
    bpHungry.value = hungry;
    bpHealth.value = health;
    bpFun.value = fun;
    bpEnergy.value = energy;


    cv.width = cv.width;
    cv.height = cv.height;

    ctx.drawImage(face, 0, 0);

    if (hungry == 100 && health == 100 && fun == 100 && energy == 100) {
        ctx.drawImage(eExcited, 0, 0);
        ctx.drawImage(mExited, 0, 0);
    }
    else {
        if (energy <= 50){
            ctx.drawImage(eTired, 0, 0);
        }
        else if (fun <= 50){
            ctx.drawImage(eBored, 0, 0);
        }
        else {
            ctx.drawImage(eHappy, 0, 0);
        }

        if (hungry <= 50){
            ctx.drawImage(mHungry, 0, 0);
        }
        else if (fun <= 50){
            ctx.drawImage(mBored, 0, 0);
        }
        else {
            ctx.drawImage(mHappy, 0, 0);
        }
        if (health <= 50){
            ctx.drawImage(thermometer, 0, 0);
        }
    }
}

let btnEat = document.getElementById('btnEat');
let btnPlay = document.getElementById('btnPlay');
let btnSleep = document.getElementById('btnSleep');
let btnHeal = document.getElementById('btnHeal');

btnEat.addEventListener('click', () =>{
    if(hungry < 100){
        hungry += 10;
        health += 2;
        fun = 100;
        energy += 3;
        btnEat.setAttribute('disabled', '');
        setTimeout(() => btnEat.removeAttribute('disabled'), 5000);					
    }
})

btnPlay.addEventListener('click', () =>{
    if(fun < 100){
        health += 2;
        fun += 10;
        energy += 3;
        btnPlay.setAttribute('disabled', '');
        setTimeout(() => btnPlay.removeAttribute('disabled'), 5000);					
    }
})

btnSleep.addEventListener('click', () =>{
    if(energy < 100){
        health += 1;
        fun += 2;
        energy += 10;
        btnSleep.setAttribute('disabled','');
        setTimeout(() => btnSleep.removeAttribute('disabled'), 5000);					
    }
});

btnHeal.addEventListener('click', () =>{
    if(health < 100){
        health += 10;
        fun += 2;
        energy += 3;
        btnHeal.setAttribute('disabled', '');
        setTimeout(() => btnHeal.removeAttribute('disabled'), 5000);					
    }
});