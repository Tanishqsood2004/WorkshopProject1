function get_num(){
    playSound();
    num=Math.random()*10+1;
    correct_num=Math.floor(num);
    number=document.getElementById('num').value;
    if(number == correct_num)
    {
        correct.style.display='block';
        incorrect.style.display='none';
    }
    else{
        incorrect.style.display='block';
        correct.style.display='none';
        
    }
}
function playSound(){
    const audio=new Audio('key_press.mp3');
    audio.play();
}