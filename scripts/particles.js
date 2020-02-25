let threshold = 50;
let points = [];

document.addEventListener('DOMContentLoaded', init, false);

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let width = canvas.getWidth;
let height = canvas.getHeight;

function init() {

    window.setInterval(thing, 250);

}

function thing() {
    
    // console.log('doing thing')
    
    let q = {
        x: Math.random()*width,
        y: Math.random()*height
    }

    // console.log('created q')
    
    if (points.length > 0) {
        console.log('points has something in it')
        for (let p of points) {
            if ((((p.x - q.x)**2) + ((p.y - q.y)**2))**0.5 < threshold) {
                draw(p, q);
            }    
        }
    }
    // console.log('pushing to points')
    points.push(q)
    // console.log('pushed to points')
}

function draw(p, q) {
    // console.log('drawing something');
    context.strokeStyle = 'white';
    context.lineWidth = 5/(((p.x - q.x)**2) + ((p.y - q.y)**2))**0.5;
    context.beginPath();
    context.moveTo(p.x, p.y);
    context.lineTo(q.x, q.y);
    context.stroke();
    
}