 /* const scores={
    wins:0,
    losses:0,
    ties:0
  };
  */

  let scores=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
      losses:0,
      ties:0 
  };
  /*if(score === null){
    score={
      wins:0,
      losses:0,
      ties:0
  
    };
  }
  */
  update();
  document.querySelector('.para').innerHTML=`
  wins:${scores.wins},losses:${scores.losses},Ties:${scores.ties}
  `;
  
  
  
  
  
  function reset(){
    scores.wins=0;
    scores.losses=0;
    scores.ties=0;
    localStorage.removeItem('scores');
    update();
  }
  
  
  
  
  function pickmove(){
    const randomnumber=Math.random() ;
    console.log(randomnumber);
    
    let comp='';
    if(randomnumber >=0 && randomnumber < 1/3 ){
     comp='rock';
    }else if(randomnumber >=1/3 && randomnumber < 2/3){
     comp='paper';
    }else if(randomnumber >=2/3 && randomnumber < 1){
     comp='scissors';
    }
   return comp;
   
  }
  let isautoplaying=false;
  let intervalid;
  function autoplay(){
    if(!isautoplaying){
    intervalid=setInterval(function() {
      const playermove=pickmove();
      playgame(playermove);
    },1000);
    isautoplaying=true;
  }
  else{
    clearInterval(intervalid);
    isautoplaying=false; 
  }
  }
  document.body.addEventListener('keydown',(event)=>{
  if(event.key === 'r'){
    playgame('rock');
  }
  else if(event.key === 'p'){
    playgame('paper');
  }
  else if(event.key === 's'){
    playgame('scissors');
  }

  });
  function playgame(playermove){
    const comp=pickmove();
    let result=' ';
    if(playermove=== 'rock'){
     
      if(comp === 'rock'){
       result='  Tie';
      }
      else if(comp === 'paper'){
       result='you loose';
      }
      else if(comp === 'scissors'){
       result='you win';
      }
      
    }
    else   if(playermove === 'paper'){
     
      if(comp === 'rock'){
       result='you win';
      }
      else if(comp === 'paper'){
       result='  Tie';
      }
      else if(comp === 'scissors'){
       result='you loose';
      }
      
    }
    else   if(playermove === 'scissors'){
     
      if(comp === 'rock'){
       result='you loose';
      }
      else if(comp === 'paper'){
       result='you win';
      }
      else if(comp === 'scissors'){
       result='  Tie';
      }
      
    }
    if(result === 'you win'){
      scores.wins +=1;
    }else if(result === 'you loose'){
      scores.losses +=1;
    }else if(result === '  Tie'){
      scores.ties +=1;
    }
    localStorage.setItem('score',JSON.stringify(scores));
    update();
    document.querySelector('.result').innerHTML=result;
    document.querySelector('.move').innerHTML=`You <img src="images/${playermove}.png">     <img src="images/${comp}.png"> computer `;
   /* alert(`you picked ${playermove} , computer picked ${comp} , ${result}
    wins:${scores.wins},losses:${scores.losses},Ties:${scores.ties}`);*/
  
  }
  function update(){
    document.querySelector('.para').innerHTML=`
    wins:${scores.wins},losses:${scores.losses},Ties:${scores.ties}
    `;
  }
  