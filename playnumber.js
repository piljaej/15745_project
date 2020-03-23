
//모두 직접 제작한 코드 입니다.
var rand =  (Math.floor(Math.random() * 10) + 1)%9;
var count=5;
var str;

function numplay(num){

  if(rand==num&&count>1){
    str='정답입니다! 초기화 합니다.';
    rand =  (Math.floor(Math.random() * 10) + 1)%9;
    count=5;
    sendstr();
  }

else if(rand!=num&&count>1){
  count=count-1;
  str='틀렸습니다. 남은 기회= '+ count;
  sendstr();
}

else{
  str='모든 기회를 다쓰셨습니다. 정답은'+rand+"입니다. 게임을 다시 시작합니다.";
  rand =  (Math.floor(Math.random() * 10) + 1)%9;
  count=5;
  sendstr();
}
}

function sendstr(){
  document.getElementById("text_1").innerHTML = str;
}


function button1(){

  var num = document.getElementById('input1').value;
  j=numplay(num);
  return j;
}
function button2(){

  var num = document.getElementById('input2').value;
  j=numplay(num);
  return j;

}
function button3(){

  var num = document.getElementById('input3').value;
  j=numplay(num);
  return j;
}
function button4(){

  var num = document.getElementById('input4').value;
  j=numplay(num);
  return j;
}
function button5(){

  var num = document.getElementById('input5').value;
  j=numplay(num);
  return j;
}
function button6(){

  var num = document.getElementById('input6').value;
  j=numplay(num);
  return j;
}
function button7(){

  var num = document.getElementById('input7').value;
  j=numplay(num);
  return j;
}
function button8(){

  var num = document.getElementById('input8').value;
  j=numplay(num);
  return j;
}
function button9(){

  var num = document.getElementById('input9').value;
  j=numplay(num);
  return j;
}
