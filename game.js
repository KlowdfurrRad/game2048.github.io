let unitsize = 110;
let canvaswidth = 477;

function startup(){
    var c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(120,0);
    ctx.lineTo(120,canvaswidth);
    ctx.moveTo(240,0);
    ctx.lineTo(240,canvaswidth);
    ctx.moveTo(360,0);
    ctx.lineTo(360,canvaswidth);
    ctx.moveTo(0,120);
    ctx.lineTo(canvaswidth,120);
    ctx.moveTo(0,240);
    ctx.lineTo(canvaswidth,240);
    ctx.moveTo(0,360);
    ctx.lineTo(canvaswidth,360);
    ctx.lineWidth=5;
    ctx.strokeStyle="#d3d3d3";
    ctx.stroke();
    document.addEventListener("keydown",keyPush);
    allPositions = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    allValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    score=0;
    highscore=0;
    /*ctx.fill.Style="white";
    ctx.fillRect(random()*120+5,random()*120+5,100,100);
    ctx.font = "30px Arial";
    ctx.fillText("2",random()*120+55,random()*120+55)*/
    randomtwo();
    }
    
    function randomonlytwo(){
    var rt = Math.floor(Math.random()*4);
    return (rt)
    }
    
    function random(){
    var x = Math.floor(Math.random()*4);
    return (x)
    }
    
    function randomtwo(){  //actually 2 and 4
    var m = random();
    var y = random();
    if (allPositions[y*4+m]==1){
    randomtwo();
    }else{
    if (randomonlytwo()<3){
    ctx.fillStyle="#fcf0ff";
    ctx.fillRect(m*120+5,y*120+5,unitsize,unitsize);
    ctx.fillStyle="black";
    ctx.font = "30px Arial";
    ctx.fillText("2",m*120+52,y*120+70);
    allPositions[y*4+m]=1;
    allValues[y*4+m]=2;
    }else{
    ctx.fillStyle="#f5cffe";
    ctx.fillRect(m*120+5,y*120+5,unitsize,unitsize);
    ctx.fillStyle="black";
    ctx.font = "30px Arial";
    ctx.fillText("4",m*120+52,y*120+70);
    allPositions[y*4+m]=1;
    allValues[y*4+m]=4;
    }
    }
    }
    
    function helperforupdown(){   //everything actually
    for(var x=0;x<4;x++){
    for(var y=0;y<4;y++){
    if (allPositions[y*4+x]==0){
    ctx.clearRect(x*120+5,y*120+5,unitsize,unitsize)
    }else{
    switch(allValues[y*4+x]){
    case 0:
    break;
    case 2:
      ctx.fillStyle="#fcf0ff";
      ctx.fillRect(x*120+5,y*120+5,unitsize,unitsize);
      ctx.fillStyle="black";
      ctx.font = "30px Arial";
      ctx.fillText("2",x*120+52,y*120+70);
      break;
    case 4:          //tester ,remove later
      ctx.fillStyle="#f5cffe";
      ctx.fillRect(x*120+5,y*120+5,unitsize,unitsize);
      ctx.fillStyle="black";
      ctx.font = "30px Arial";
      ctx.fillText("4",x*120+52,y*120+70);
      break;
    case 8:          //tester ,remove later
      ctx.fillStyle="#eeb0fc";
      ctx.fillRect(x*120+5,y*120+5,unitsize,unitsize);
      ctx.fillStyle="black";
       ctx.font = "30px Arial";
       ctx.fillText("8",x*120+52,y*120+70);
      break;
    case 16:          //tester ,remove later
        ctx.fillStyle="#ea98fd";
        ctx.fillRect(x*120+5,y*120+5,unitsize,unitsize);
        ctx.fillStyle="black";
        ctx.font = "30px Arial";
        ctx.fillText("16",x*120+42,y*120+70);
      break;
      case 32:          //tester ,remove later
          ctx.fillStyle="#e57dfe";
          ctx.fillRect(x*120+5,y*120+5,unitsize,unitsize);
          ctx.fillStyle="black";
          ctx.font = "30px Arial";
          ctx.fillText("32",x*120+43,y*120+70);
      break;
      case 64:          //tester ,remove later
          ctx.fillStyle="#e164ff";
          ctx.fillRect(x*120+5,y*120+5,unitsize,unitsize);
          ctx.fillStyle="black";
          ctx.font = "30px Arial";
          ctx.fillText("64",x*120+43,y*120+70);
      break;
      case 128:          //tester ,remove later
            ctx.fillStyle="#db4dfd";
            ctx.fillRect(x*120+5,y*120+5,unitsize,unitsize);
            ctx.fillStyle="black";
            ctx.font = "30px Arial";
            ctx.fillText("128",x*120+36,y*120+70);
      break;
      case 256:          //tester ,remove later
            ctx.fillStyle="#d736fe";
            ctx.fillRect(x*120+5,y*120+5,unitsize,unitsize);
            ctx.fillStyle="black";
            ctx.font = "30px Arial";
            ctx.fillText("256",x*120+35,y*120+70);
      break;
      case 512:          //tester ,remove later
            ctx.fillStyle="#d013fe";
            ctx.fillRect(x*120+5,y*120+5,unitsize,unitsize);
            ctx.fillStyle="black";
            ctx.font = "30px Arial";
            ctx.fillText("512",x*120+35,y*120+70);
      break;
      case 1024:          //tester ,remove later
            ctx.fillStyle="#9d04ef";
            ctx.fillRect(x*120+5,y*120+5,unitsize,unitsize);
            ctx.fillStyle="black";
            ctx.font = "30px Arial";
            ctx.fillText("1024",x*120+28,y*120+70);
      break;
      case 2048:          //tester ,remove later
            ctx.fillStyle="#8f06d8";
            ctx.fillRect(x*120+5,y*120+5,unitsize,unitsize);
            ctx.fillStyle="black";
            ctx.font = "30px Arial";
            ctx.fillText("2048",x*120+27,y*120+70);
      break;
      }
    //later,put the required text of 2,4,8,16 etc. and also combine like ones  too
    }
    }
    }
    }
    
    function gravityuparrays(){
    for(var x=0;x<4;x++){
    var c = 6;
    var b = 0;
    for(var y=0;y<4;y++){
    if(allPositions[y*4+x]==1){
    allPositions[y*4+x]=0;
    allPositions[b*4+x]=1;
    var gist=allValues[y*4+x];
    allValues[y*4+x]=0;
    allValues[b*4+x]=gist;
    b++;
    }else {
    c++;
    }
    }
    }
    }
    
    function mergerup(){
    var c=8;
    for(var x=0;x<4;x++){
    for(var y=0;y<3;y++){
    if(allValues[y*4+x]==allValues[y*4+4+x]){
    allValues[y*4+x]=(2*allValues[y*4+x]);
    score+=(2*allValues[y*4+x]);
    document.getElementById("demo").innerHTML = score;
    allValues[y*4+4+x]=0;
    allPositions[y*4+4+x]=0;
    gravityuparrays();
    }else{
    c++;
    }
    }
    }
    }
    
    function gravityup(){
    var tek=0;
    checker=allPositions.slice(0);
    gravityuparrays();
    mergerup();
    helperforupdown();
    gameovercheck();
    if(arrayequalcheck(checker,allPositions)!=16){
    randomtwo();
    }else{tek++}
    }
    
    function gravitydownarrays(){
    for(var x=3;x>-1;x--){
    var c= 6;
    var b=3;
    for(var y=3;y>-1;y--){
    if(allPositions[y*4+x]==1){
    allPositions[y*4+x]=0;
    allPositions[b*4+x]=1;
    var gist=allValues[y*4+x];
    allValues[y*4+x]=0;
    allValues[b*4+x]=gist;
    b--;
    }else{
    c++;
    }
    }
    }
    }
    
    function mergerdown(){
    var c=22;
    for(var x=3;x>-1;x--){
    for(var y=2;y>-1;y--){
    if(allValues[y*4+x]==allValues[y*4+4+x]){
    allValues[y*4+x]=(2*allValues[y*4+x]);
    score+=(2*allValues[y*4+x]);
    document.getElementById("demo").innerHTML = score;
    allValues[y*4+4+x]=0;
    allPositions[y*4+4+x]=0;
    gravitydownarrays();
    }else{
    c++;
    }
    }
    }
    }
    
    function gravitydown(){
    var tek=0;
    checker=allPositions.slice(0);
    gravitydownarrays();
    mergerdown();
    helperforupdown();
    gameovercheck();
    if(arrayequalcheck(checker,allPositions)!=16){
    randomtwo();
    }else{tek++}
    }
    
    function gravityrightarrays(){
    for(var y=0;y<4;y++){
    var c=66;
    var b=3;
    for(var x=3;x>-1;x--){
    if (allPositions[y*4+x]==1){
    allPositions[y*4+x]=0;
    allPositions[y*4+b]=1;
    var gist = allValues[y*4+x];
    allValues[y*4+x]=0;
    allValues[y*4+b]=gist;
    b--;
    }else{
    c++;
    }
    }
    }
    }
    
    function gravityleftarrays(){
    for(var y=0;y<4;y++){
    var c=66;
    var b=0;
    for(var x=0;x<4;x++){
    if (allPositions[y*4+x]==1){
    allPositions[y*4+x]=0;
    allPositions[y*4+b]=1;
    var gist = allValues[y*4+x];
    allValues[y*4+x]=0;
    allValues[y*4+b]=gist;
    b++;
    }else{
    c++;
    }
    }
    }
    }
    
    function mergerleft(){
    var c=99;
    for(var y=0;y<4;y++){
    for(var x=0;x<3;x++){
    if(allValues[y*4+x]==allValues[y*4+x+1]){
    allValues[y*4+x]=(2*allValues[y*4+x]);
    score+=(2*allValues[y*4+x]);
    document.getElementById("demo").innerHTML = score;
    allValues[y*4+x+1]=0;
    allPositions[y*4+x+1]=0;
    gravityleftarrays();
    }else{
    c++;
    }
    }
    }
    }
    
    function reset(){
    allPositions = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    allValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    helperforupdown();
    randomtwo();
    highscorecheck();
    score=0;
    document.getElementById("demo").innerHTML = score;
    }
    
    function mergerright(){
    var c=55;
    for(var y=0;y<4;y++){
    for(var x=3;x>0;x--){
    if(allValues[y*4+x]==allValues[y*4+x-1]){
    allValues[y*4+x]=(2*allValues[y*4+x]);
    score+=(2*allValues[y*4+x]);
    document.getElementById("demo").innerHTML = score;
    allValues[y*4+x-1]=0;
    allPositions[y*4+x-1]=0;
    gravityrightarrays();
    }else{
    c++;
    }
    }
    }
    }
    
    function gravityleft(){
    var tek=0;
    checker=allPositions.slice(0);
    gravityleftarrays();
    mergerleft();
    helperforupdown();
    gameovercheck();
    if(arrayequalcheck(checker,allPositions)!=16){
    randomtwo();
    }else{tek++}
    }
    
    function gravityright(){
    var tek=0;
    checker=allPositions.slice(0);
    gravityrightarrays();
    mergerright();
    helperforupdown();
    gameovercheck();
    if(arrayequalcheck(checker,allPositions)!=16){
    randomtwo();
    }else{tek++}
    }
    
    function keyPush(evt) {
        switch(evt.keyCode) {
            case 37:
                gravityleft();
                break;
            case 38:
                gravityup();
                break;
            case 39:
                gravityright();
                break;
            case 40:
                gravitydown();
                break;
            case 78:
                reset();
                break;
        }
    }
    
    function gameover(){
    window.alert("GAMEOVER. Click 'OK' to start a new game.")
    //document.removeEventListener("keydown",keyPush)
    reset();
    }
    
    function zerocheck(){
    var cont=0;
    var ty=0;
    for(var th=0;th<16;th++){
    if(allPositions[th]==0){
    cont++
    }else{ty++}
    }
    return (cont);
    }
    
    function gameovercheck(){
    var c=5;
    var cot=0;
    for(var x=0;x<3;x++){
    for(var y=0;y<4;y++){
    if(allValues[y*4+x]==allValues[y*4+x+1]){
    cot++
    }else{c++}
    }
    }
    for(var y=0;y<3;y++){
    for(var x=0;x<4;x++){
    if(allValues[y*4+x]==allValues[y*4+4+x]){
    cot++
    }else{c++}
    }
    }
    if(cot==0 && zerocheck()==0){
    gameover();
    }
    }
    
    function highscorecheck(){
    if (score>highscore){
    highscore=score;
    document.getElementById("high").innerHTML = highscore;
    }
    }
    
    function arrayequalcheck(array1,array2){
    var gh=0;
    cek=0;
    for(var h=0;h<16;h++){
    if(array1[h]==array2[h]){
    cek++
    }else{gh++}
    }
    return (cek);
    }
    
    
    //make randompiece()