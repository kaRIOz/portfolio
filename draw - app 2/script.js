const canvas = document.querySelector('#canvas')
canvas.width = window.innerWidth - 60
canvas.height = 450

const ctx = canvas.getContext('2d')
let background_start = 'white'
ctx.fillStyle = background_start;
ctx.fillRect(0, 0, canvas.width , canvas.height)

let draw_color = 'black'
let draw_width = '6'
let is_drawing = false

let restore_array = [];
let index = -1;

function change_color(element){
    draw_color = element.style.background;
}

canvas.addEventListener('mousedown' , (e)=>{
    is_drawing = true
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft , e.clientY - canvas.offsetTop)
})

canvas.addEventListener('mousemove' , (e)=>{
    
    if(is_drawing){
        ctx.lineTo(e.clientX - canvas.offsetLeft , e.clientY - canvas.offsetTop)

        ctx.strokeStyle = draw_color
        ctx.lineWidth = draw_width
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.stroke();
    }
})

canvas.addEventListener('mouseup' , (e)=>{
    is_drawing = false

    if(e.type){

        restore_array.push(ctx.getImageData(0, 0, canvas.width , canvas.height));
        index += 1
    
    }
    console.log(restore_array);
})



function clear_canvas(){
    ctx.fillStyle = background_start 
    ctx.clearRect(0, 0, canvas.width , canvas.height)
    ctx.fillRect(0, 0, canvas.width , canvas.height)

    restore_array = []
    index = -1;
}

function undo_last(){
    if(index <= 0){
        clear_canvas()
    }else{
        index -= 1;
        ctx.putImageData(restore_array[index], 0, 0)
        restore_array.pop()
        
    }
}