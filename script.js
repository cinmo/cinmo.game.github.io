function ins(){
  window.alert("Instructions: \n Use the up, down, left, and right arrows to move around. There are various hidden walls that may get in your way, but don't let that stop you! In this current level, there are four entrances you must reach in total! Good luck~")
}
var w = window.innerWidth;
var h = window.innerHeight;
var posx = w/2;
var posy = h/2;

var player;
var hit = false;
var hit2 = false;
var r = false;
var x = 0
var entrance;
var walls;

var choose = [
  //top right
  {"x1": w/6.5 + 260, "y1": h/6.5+7, "x2": w/6.5 + 330, "y2": h/6.5+7},
  //top left
  {"x1": w/6.5 + 1150, "y1": h/6.5 + 30, "x2": w/6.5 + 1150, "y2": h/6.5 + 80},
  //right down
  {"x1": w/6.5 + 1150, "y1": h/6.5 + 380, "x2": w/6.5 + 1150, "y2": h/6.5 + 430},
  //bottom left
  {"x1":  w/6.5 + 200, "y1": h/6.5 + 548, "x2":  w/6.5 + 260, "y2": h/6.5 + 548}
]


function setup(){
  createCanvas(w,h)
  player = new player()
  entrance = new entrance()
  walls = new walls()
}

function draw(){
  clear() 
  fill(22, 26, 71)
  stroke(color('grey'))
  rect(w/6.5, h/6.5, w*0.721875, 0.67110036275*h)
  player.show()
  player.update()
  entrance.show()
  entrance.update()
  walls.show()
  walls.update()
}

function player(){
  this.x = posx
  this.y = posy-30

  this.show = function(){
    var c = "white"
    stroke(color(c))
    noFill()
    strokeWeight(2)
    circle(this.x,this.y,15)
  }

  this.update = function(){
    if((keyIsDown(38)) && (this.y > h/6.5 + 12)){
      this.y = this.y -= 1.5
    }
    if((keyIsDown(40)) && (this.y < h/6.5 + 540)){
      this.y = this.y += 1.5
    }
    if((keyIsDown(39)) && (this.x < w/6.5+1141)){
      this.x = this.x += 1.5
    }
    if((keyIsDown(37)) && (this.x > w/6.5+14)){
      this.x = this.x -= 1.5
    }
  }
}


function entrance(){
  this.show = function(){
    stroke(color('red'))
    line(choose[x].x1, choose[x].y1, choose[x].x2, choose[x].y2)
  }

  this.update = function(){
    hit = collideLineCircle(choose[x].x1, choose[x].y1, choose[x].x2, choose[x].y2, player.x, player.y, 20)

    if((hit === true) && ( x < 3)){
      console.log("true")
      x = x += 1
      window.alert("Found one! Onto the next one!")
    }

    hit2 = collideLineCircle(choose[3].x1, choose[3].y1, choose[3].x2, choose[3].y2, player.x, player.y, 20)
    if(hit2 === true){
      console.log("pass")
      window.alert("Game: Level Demo Finished. Thank you for playing!")
      noLoop()
    }
  }
}

function walls(){
  var s = w/6.5
  var t = h/6.5
  rc = "#161a47"
  uc = "#161a47"
  lc = "#161a47"
  dc = "#161a47"

  this.show = function(){
    strokeWeight(7)
    
    //right
    stroke(rc)
    line(s + 50, t+7, s + 50, t+100) //r1
    line(s+80,t+475,s+80,t+520) //r2
    line(s+170,t+410,s+170,t+495) //r4
    line(s+260,t+495,s+260,t+548) //r4p2
    line(s+100,t+135,s+100,t+375) //r5
    line(s+200,t+120,s+200,t+365) //r6
    line(s+220,t+7,s+220,t+70)  //r8
    line(s+290,t+40,s+290,t+70) //r9
    line(s+360,t+7,s+360,t+140) //r10
    line(s+350,t+250,s+350,t+400) //r11
    line(s+435,t+185,s+435,t+335) //r12
    line(s+460,t+390,s+460,t+500) //r13
    line(s+580,t+400,s+580,t+548) //r14
    line(s+520,t+290,s+520,t+330) //r15
    line(s+510,t+170,s+510,t+210) //r16
    line(s+520,t+50,s+520,t+90) //r17
    line(s+650,t+70,s+650,t+230) //r18
    line(s+730,t+7,s+730,t+60) //r19
    line(s+740,t+110,s+740,t+210) //r20
    line(s+890,t+25,s+890,t+70) //r21    
    line(s+720,t+270,s+720,t+430) //r22
    line(s+730,t+470,s+730,t+520) //r23
    line(s+900,t+240,s+900,t+300)  //r24
    line(s+920,t+360,s+920,t+500) //r25
    line(s+1060,t+470,s+1060,t+548)//r26
    line(s+1080,t+270,s+1080,t+380)//r27
    line(s+1060,t+160,s+1060,t+200)//r28
    line(s+1040,t+30,s+1040,t+130)//r29

    //upper stroke
    stroke(uc)
    line(s+50, t+100, s+170, t+100) //u1
    line(s+7, t+450, s+60, t+450) //u2
    line(s+80,t+520,s+130,t+520) //u3
    line(s+170,t+495,s+375,t+495) //u4
    line(s+100,t+375,s+150,t+375) //u5
    line(s+200,t+365,s+300,t+365)//u6
    line(s+220,t+70,s+260,t+70) //u8
    line(s+290,t+70,s+320,t+70) //u9
    line(s+360,t+140,s+470,t+140) //u10
    line(s+350,t+400,s+400,t+400) //u11
    line(s+435,t+335,s+470,t+335) //u12
    line(s+460,t+500,s+520,t+500) //u13
    line(s+520,t+330,s+650,t+330) //u15
    line(s+510,t+210,s+610,t+210) //u16
    line(s+520,t+90,s+590,t+90) //u17
    line(s+650,t+230,s+690,t+230) //u18
    line(s+740,t+210,s+990,t+210) //u20
    line(s+890,t+25,s+940,t+25) //u21
    line(s+720,t+430,s+860,t+430) //u22
    line(s+730,t+520,s+840,t+520) //u23
    line(s+900,t+300,s+1030,t+300) //u24
    line(s+920,t+500,s+1010,t+500) //u25
    line(s+1080,t+380,s+1148,t+380)//u27
    line(s+1060,t+200,s+1110,t+200)//u28
    line(s+1040,t+130,s+1100,t+130)//u29

    
    //left
    stroke(lc)
    line(s+170, t+100, s+170, t+7) //l1
    line(s+320,t+495,s+320, t+548) //l4p2
    line(s+150,t+375,s+150,t+135) //l5
    line(s+300,t+120,s+300,t+365) //l6
    line(s+470,t+7,s+470,t+140) //l10
    line(s+470,t+185,s+470,t+335) //l12
    line(s+520,t+390,s+520,t+500) //l13
    line(s+660,t+400,s+660,t+548) //l14
    line(s+650,t+290,s+650,t+330) //l15
    line(s+610,t+170,s+610,t+210) //l16
    line(s+590,t+50,s+590,t+90) //l17
    line(s+690,t+70,s+690,t+230) //l18
    line(s+820,t+7,s+820,t+60) //l19
    line(s+990,t+110,s+990,t+210) //l20
    line(s+860,t+270,s+860,t+430) //l22
    line(s+840,t+470,s+840,t+520) //l23
    line(s+1030,t+240,s+1030,t+300) //l24
    line(s+1010,t+360,s+1010,t+500) //l25
    line(s+1110,t+160,s+1110,t+200)//l28
    line(s+1100,t+30,s+1100,t+130)//l29
    line(s+940,t+25,s+940,t+70) //l21
    line(s+400,t+250,s+400,t+400) //l11
    line(s+260,t+7,s+260,t+70) //l8
    line(s+320,t+40,s+320,t+70) //l9
    line(s+60, t+250, s+60, t+450) //l2
    line(s+375,t+495,s+375,t+450) //l4.1    
    line(s+130,t+475,s+130,t+520) //l3  
    line(s+280,t+450,s+280,t+410) //l4.2    
    
    //down
    stroke(dc)
    line(s+7, t+250, s+60, t+250) //d2
    line(s+80, t+475, s+130, t+475) //d3
    line(s+280,t+450,s+375,t+450) //d4.1
    line(s+170,t+410,s+280,t+410) //d4.2
    line(s+100,t+135,s+150,t+135) //d5
    line(s+200,t+120,s+300,t+120) //d6
    line(s+290,t+40,s+320,t+40) //d9
    line(s+350,t+250,s+400,t+250) //d11
    line(s+435,t+185,s+470,t+185) //d12
    line(s+460,t+390,s+520,t+390) //d13
    line(s+580,t+400,s+660,t+400) //d14
    line(s+520,t+290,s+650,t+290) //d15
    line(s+510,t+170,s+610,t+170) //d16
    line(s+520,t+50,s+590,t+50) //d17
    line(s+650,t+70,s+690,t+70) //d18
    line(s+730,t+60,s+820,t+60) //d19
    line(s+740,t+110,s+990,t+110) //d20
    line(s+890,t+70,s+940,t+70) //d21
    line(s+720,t+270,s+860,t+270) //d22
    line(s+730,t+470,s+840,t+470) //d23
    line(s+900,t+240,s+1030,t+240) //d24
    line(s+920,t+360,s+1010,t+360) //d25
    line(s+1060,t+470,s+1148,t+470)//d26
    line(s+1080,t+270,s+1148,t+270)//d27
    line(s+1060,t+160,s+1110,t+160)//d28
    line(s+1040,t+30,s+1100,t+30)//d29


  }

  this.update = function(){

    //right
    r = collideLineCircle(s+50, t+7, s+50, t+100,player.x,player.y,25)
    r1 = collideLineCircle(s+170,t+410,s+170,t+495,player.x,player.y,25)
    r2 = collideLineCircle(s+260,t+495,s+260,t+548,player.x,player.y,25)
    r3 = collideLineCircle(s+100,t+135,s+100,t+375,player.x,player.y,25)
    r4 = collideLineCircle(s+220,t+7,s+220,t+70,player.x,player.y,25)
    r5 = collideLineCircle(s+360,t+7,s+360,t+140,player.x,player.y,25)
    r6 = collideLineCircle(s+350,t+250,s+350,t+400,player.x,player.y,25)
    r7 = collideLineCircle(s+435,t+185,s+435,t+335,player.x,player.y,25)
    r8 = collideLineCircle(s+460,t+390,s+460,t+500,player.x,player.y,25)
    r9 = collideLineCircle(s+580,t+400,s+580,t+548,player.x,player.y,25)
    r10 = collideLineCircle(s+520,t+290,s+520,t+330,player.x,player.y,25)
    r11 = collideLineCircle(s+510,t+170,s+510,t+210,player.x,player.y,25)
    r12 = collideLineCircle(s+520,t+50,s+520,t+90,player.x,player.y,25)
    r13 = collideLineCircle(s+650,t+70,s+650,t+230,player.x,player.y,25)
    r14 = collideLineCircle(s+730,t+7,s+730,t+60,player.x,player.y,25)
    r15 = collideLineCircle(s+80,t+475,s+80,t+520,player.x,player.y,25)
    r16 = collideLineCircle(s+740,t+110,s+740,t+210,player.x,player.y,25)
    r17 = collideLineCircle(s+890,t+25,s+890,t+70,player.x,player.y,25)
    r18 = collideLineCircle(s+720,t+270,s+720,t+430,player.x,player.y,25)
    r19 = collideLineCircle(s+730,t+470,s+730,t+520,player.x,player.y,25)
    r20 = collideLineCircle(s+900,t+240,s+900,t+300,player.x,player.y,25)
    r21 = collideLineCircle(s+920,t+360,s+920,t+500,player.x,player.y,25)
    r22 = collideLineCircle(s+1060,t+470,s+1060,t+548,player.x,player.y,25)
    r23 = collideLineCircle(s+1080,t+270,s+1080,t+380,player.x,player.y,25)
    r24 = collideLineCircle(s+1060,t+160,s+1060,t+200,player.x,player.y,25)
    r25 = collideLineCircle(s+1040,t+30,s+1040,t+130,player.x,player.y,25)
    r26 = collideLineCircle(s+200,t+120,s+200,t+365,player.x,player.y,25)

    if(r || r1 || r2 || r3 || r4 || r5 || r6 || r7 || r8 || r9 || r10 || r11 || r12 || r13 || r14 || r15 || r16 || r17 || r18 || r19 || r20 || r21 || r22 || r23 || r24 || r25 ||r26 === true){
      player.x = player.x -= 1.5
    }

    //upper
    u = collideLineCircle(s+50, t+100, s+170, t+100,player.x,player.y,25) 
    u1 = collideLineCircle(s+7, t+450, s+60, t+450,player.x,player.y,25) 
    u2 = collideLineCircle(s+80,t+520,s+130,t+520,player.x,player.y,25) 
    u3 = collideLineCircle(s+170,t+495,s+375,t+495,player.x,player.y,25) 
    u4 = collideLineCircle(s+100,t+375,s+150,t+375,player.x,player.y,25) 
    u5 = collideLineCircle(s+200,t+365,s+300,t+365,player.x,player.y,25)
    u6 = collideLineCircle(s+220,t+70,s+260,t+70,player.x,player.y,25)
    u7 = collideLineCircle(s+290,t+70,s+320,t+70,player.x,player.y,25)
    u8 = collideLineCircle(s+360,t+140,s+470,t+140,player.x,player.y,25)
    u9 = collideLineCircle(s+350,t+400,s+400,t+400,player.x,player.y,25)
    u10 = collideLineCircle(s+435,t+335,s+470,t+335,player.x,player.y,25)
    u11 = collideLineCircle(s+460,t+500,s+520,t+500,player.x,player.y,25)
    u12 = collideLineCircle(s+520,t+330,s+650,t+330,player.x,player.y,25)
    u13 = collideLineCircle(s+510,t+210,s+610,t+210,player.x,player.y,25)
    u14 = collideLineCircle(s+520,t+90,s+590,t+90,player.x,player.y,25)
    u15 = collideLineCircle(s+650,t+230,s+690,t+230,player.x,player.y,25)
    u16 = collideLineCircle(s+740,t+210,s+990,t+210,player.x,player.y,25)
    u17 = collideLineCircle(s+890,t+25,s+940,t+25,player.x,player.y,25)
    u18 = collideLineCircle(s+720,t+430,s+860,t+430,player.x,player.y,25)
    u19 = collideLineCircle(s+730,t+520,s+840,t+520,player.x,player.y,25)
    u20 = collideLineCircle(s+900,t+300,s+1030,t+300,player.x,player.y,25)
    u21 = collideLineCircle(s+920,t+500,s+1010,t+500,player.x,player.y,25)
    u22 = collideLineCircle(s+1080,t+380,s+1148,t+380,player.x,player.y,25)
    u23 = collideLineCircle(s+1060,t+200,s+1110,t+200,player.x,player.y,25)
    u24 = collideLineCircle(s+1040,t+130,s+1100,t+130,player.x,player.y,25)

    if(u || u1 || u2 || u3 || u4 || u5 || u6 || u7 || u8 || u9 || u10 || u11 || u12 || u13 || u14 || u15 || u16 || u17 || u18 || u19 || u20 || u21 || u22 || u23 || u24 === true){
      player.y = player.y += 1.5
    }

    //left
    l = collideLineCircle(s+170, t+100, s+170, t+7,player.x,player.y,25)
    l1 = collideLineCircle(s+320,t+495,s+320, t+548,player.x,player.y,25)
    l2 = collideLineCircle(s+150,t+375,s+150,t+135,player.x,player.y,25)
    l3 = collideLineCircle(s+300,t+120,s+300,t+365,player.x,player.y,25)
    l4 = collideLineCircle(s+470,t+7,s+470,t+140,player.x,player.y,25)
    l5 = collideLineCircle(s+470,t+185,s+470,t+335,player.x,player.y,25)
    l6 = collideLineCircle(s+520,t+390,s+520,t+500,player.x,player.y,25)
    l7 = collideLineCircle(s+660,t+400,s+660,t+548,player.x,player.y,25)
    l8 = collideLineCircle(s+650,t+290,s+650,t+330,player.x,player.y,25)
    l9 = collideLineCircle(s+610,t+170,s+610,t+210,player.x,player.y,25)
    l10 = collideLineCircle(s+590,t+50,s+590,t+90,player.x,player.y,25)
    l11 = collideLineCircle(s+690,t+70,s+690,t+230,player.x,player.y,25)
    l12 = collideLineCircle(s+820,t+7,s+820,t+60,player.x,player.y,25)
    l13 = collideLineCircle(s+990,t+110,s+990,t+210,player.x,player.y,25)
    l14 = collideLineCircle(s+860,t+270,s+860,t+430,player.x,player.y,25)
    l15 = collideLineCircle(s+840,t+470,s+840,t+520,player.x,player.y,25)
    l16 = collideLineCircle(s+1030,t+240,s+1030,t+300,player.x,player.y,25)
    l17 = collideLineCircle(s+1010,t+360,s+1010,t+500,player.x,player.y,25)
    l18 = collideLineCircle(s+1110,t+160,s+1110,t+200,player.x,player.y,25)
    l19 = collideLineCircle(s+1100,t+30,s+1100,t+130,player.x,player.y,25)
    l20 = collideLineCircle(s+940,t+25,s+940,t+70,player.x,player.y,25)
    l21 = collideLineCircle(s+400,t+250,s+400,t+400,player.x,player.y,25)
    l22 = collideLineCircle(s+260,t+7,s+260,t+70,player.x,player.y,25)
    l23 = collideLineCircle(s+320,t+40,s+320,t+70,player.x,player.y,25)
    l24 = collideLineCircle(s+60, t+250, s+60, t+450,player.x,player.y,25)
    l25 = collideLineCircle(s+375,t+495,s+375,t+450,player.x,player.y,25)
    l26 = collideLineCircle(s+130,t+475,s+130,t+520,player.x,player.y,25)
    l27 = collideLineCircle(s+280,t+450,s+280,t+410,player.x,player.y,25) 

    if(l| l1 || l2 || l3 || l4 || l5 || l6 || l7 || l8 || l9 || l10 || l11 || l12 || l13 || l14 || l15 || l16 || l17 || l18 || l19 || l20 || l21 || l22 || l23 || l24 || l25 || l26 || l27=== true){
      player.x = player.x += 1.5
    }

    //down
    d = collideLineCircle(s+7, t+250, s+60, t+250,player.x,player.y,25) 
    d1 = collideLineCircle(s+80, t+475, s+130, t+475,player.x,player.y,25)
    d2 = collideLineCircle(s+280,t+450,s+375,t+450,player.x,player.y,25)
    d3 = collideLineCircle(s+170,t+410,s+280,t+410,player.x,player.y,25)
    d4 = collideLineCircle(s+100,t+135,s+150,t+135,player.x,player.y,25)
    d5 = collideLineCircle(s+200,t+120,s+300,t+120,player.x,player.y,25)
    d6 = collideLineCircle(s+290,t+40,s+320,t+40,player.x,player.y,25)
    d7 = collideLineCircle(s+350,t+250,s+400,t+250,player.x,player.y,25)
    d8 = collideLineCircle(s+435,t+185,s+470,t+185,player.x,player.y,25)
    d9 = collideLineCircle(s+460,t+390,s+520,t+390,player.x,player.y,25)
    d10 = collideLineCircle(s+580,t+400,s+660,t+400,player.x,player.y,25)
    d11 = collideLineCircle(s+520,t+290,s+650,t+290,player.x,player.y,25)
    d12 = collideLineCircle(s+510,t+170,s+610,t+170,player.x,player.y,25)
    d13 = collideLineCircle(s+520,t+50,s+590,t+50,player.x,player.y,25)
    d14 = collideLineCircle(s+650,t+70,s+690,t+70,player.x,player.y,25)
    d15 = collideLineCircle(s+730,t+60,s+820,t+60,player.x,player.y,25)
    d16 = collideLineCircle(s+740,t+110,s+990,t+110,player.x,player.y,25)
    d17 = collideLineCircle(s+890,t+70,s+940,t+70,player.x,player.y,25)
    d18 = collideLineCircle(s+720,t+270,s+860,t+270,player.x,player.y,25)
    d19 = collideLineCircle(s+730,t+470,s+840,t+470,player.x,player.y,25)
    d20 = collideLineCircle(s+900,t+240,s+1030,t+240,player.x,player.y,25)
    d21 = collideLineCircle(s+920,t+360,s+1010,t+360,player.x,player.y,25)
    d22 = collideLineCircle(s+1060,t+470,s+1148,t+470,player.x,player.y,25)
    d23 = collideLineCircle(s+1080,t+270,s+1148,t+270,player.x,player.y,25)
    d24 = collideLineCircle(s+1060,t+160,s+1110,t+160,player.x,player.y,25)
    d25 = collideLineCircle(s+1040,t+30,s+1100,t+30,player.x,player.y,25)

    if(d| d1 || d2 || d3 || d4 || d5 || d6 || d7 || d8 || d9 || d10 || d11 || d12 || d13 || d14 || d15 || d16 || d17 || d18 || d19 || d20 || d21 || d22 || d23 || d24 === true){
      player.y = player.y -= 1.5
    }
  }
}
