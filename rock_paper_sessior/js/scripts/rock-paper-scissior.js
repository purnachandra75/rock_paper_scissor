
function restart(){
    
    score.Win=0;
    score.Loss=0,
    score.Tie=0
    document.querySelector('.result1').innerHTML=''
    document.querySelector('.result2').innerHTML=''
    printresult()
    localStorage.removeItem('score')
}
let isAutoplaying = false;
let Intervaid
    
    function autoplay(){
        if(!isAutoplaying){
            Intervaid= setInterval(function(){
                const playermove=pickcomputermove()
                playgame(playermove)
            },2000)
            isAutoplaying = true 
        }else{
            clearInterval(Intervaid)
            isAutoplaying = false
        }
       
    }



const score=JSON.parse(localStorage.getItem('score'))||{
    Win:0,
    Loss:0,
    Tie:0
    

}
document.querySelector('.result').innerHTML=`
Win: ${score.Win} Loss: ${score.Loss} Tie: ${score.Tie}`

function playgame(playermove){
    console.log(playermove)

    computermove=pickcomputermove()
    console.log(computermove)
    let result=''
    if(playermove === 'rock'){
        if(computermove === 'rock'){
            result='Tie'
        }
        else if(computermove === 'paper'){
            result='YOU WIN'
        }
        else if(computermove === 'scissior'){
            result='YOU LOST'
        }
    }
    if(playermove === 'paper'){
        if(computermove === 'rock'){
            result='YOU WIN'
        }
        if(computermove === 'paper'){
            result='Tie'
        }
        if(computermove === 'scissior'){
            result='YOU LOST'
        }
    }
    if(playermove === 'scissior'){
        if(computermove === 'rock'){
            result='YOU LOST'
        }
        if(computermove === 'paper'){
            result='YOU WIN'
        }
        if(computermove === 'scissior'){
            result='Tie'
        }
    }
    
    if (result === 'YOU WIN'){
        score.Win+=1
    }
    if (result === 'YOU LOST'){
        score.Loss+=1
    }
    if (result === 'Tie'){
        score.Tie+=1
    }
    console.log(result)
    console.log(score)
    localStorage.setItem('score',JSON.stringify(score))
    document.querySelector('.result1').innerHTML=result
    document.querySelector('.result2').innerHTML=`You:
    <img src="images/${playermove}.png" class="move-icon moves">computer:<img src="images/${computermove}.png" class="move-icon moves">`
    printresult()
   }
function printresult(){
    document.querySelector('.result').innerHTML=`
    Win: ${score.Win} Loss: ${score.Loss} Tie: ${score.Tie}`
    
}
function pickcomputermove(){
    const move=Math.random()
    let computermove;
    if (move>=0&&move<1/3){
        computermove='rock'
    }
    if (move>=1/3&&move<2/3){
        computermove='paper'
    }
    if (move>=2/3&&move<=1){
        computermove='scissior'
    }
    return computermove
}