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
  {"x1": w/6.5 + w*0.1625, "y1": h/6.5+h*0.00846432889, "x2": w/6.5 + w*0.20625, "y2": h/6.5+h*0.00846432889},
  //top left
  {"x1": w/6.5 + w*0.71875, "y1": h/6.5 + h*0.03627569528, "x2": w/6.5 + w*0.71875, "y2": h/6.5 + h*0.09673518742},
  //right down
  {"x1": w/6.5 + w*0.71875, "y1": h/6.5 + h*0.45949214026, "x2": w/6.5 + w*0.71875, "y2": h/6.5 + h*0.5199516324},
  //bottom left
  {"x1":  w/6.5 + w*0.125, "y1": h/6.5 + h*0.66263603385, "x2":  w/6.5 + w*0.1625, "y2": h/6.5 + h*0.66263603385}
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
  this.y = posy-h*0.03627569528

  this.show = function(){
    var c = "white"
    stroke(color(c))
    noFill()
    strokeWeight(2)
    circle(this.x,this.y,15)
  }

  this.update = function(){
    if((keyIsDown(38)) && (this.y > h/6.5 + h*0.01451027811)){
      this.y = this.y -= 1.5
    }
    if((keyIsDown(40)) && (this.y < h/6.5 + h*0.65296251511)){
      this.y = this.y += 1.5
    }
    if((keyIsDown(39)) && (this.x < w/6.5+w*0.713125)){
      this.x = this.x += 1.5
    }
    if((keyIsDown(37)) && (this.x > w/6.5+w*0.00875)){
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
  var wl = w*0.721875
  var hl = h*0.67110036275
  rc = "#161a47"
  uc = "#161a47"
  lc = "#161a47"
  dc = "#161a47"

  this.show = function(){
    strokeWeight(7)
    
    //right
    stroke(rc)
    line(s + wl*0.04329004329, t+hl*0.01261261261, s + wl*0.04329004329, t+hl*0.18018018018) //r1
    line(s+wl*0.06926406926,t+hl*0.85585585585,s+wl*0.06926406926,t+hl*0.93693693693) //r2
    line(s+wl*0.14718614718,t+hl*0.73873873873,s+wl*0.14718614718,t+hl*0.89189189189) //r4
    line(s+wl*0.2251082251,t+hl*0.89189189189,s+wl*0.2251082251,t+hl*0.98738738738) //r4p2
    line(s+wl*0.08658008658,t+hl*0.24324324324,s+wl*0.08658008658,t+hl*0.67567567567) //r5
    line(s+wl*0.17316017316,t+hl*0.21621621621,s+wl*0.17316017316,t+hl*0.65765765765) //r6 
    line(s+wl*0.19047619047,t+hl*0.01261261261,s+wl*0.19047619047,t+hl*0.12612612612)  //r8 
    line(s+wl*0.25108225108,t+hl*0.07207207207,s+wl*0.25108225108,t+hl*0.12612612612) //r9 
    line(s+wl*0.31168831168,t+hl*0.01261261261,s+wl*0.31168831168,t+hl*0.25225225225) //r10 
    line(s+wl*0.30303030303,t+hl*0.45045045045,s+wl*0.30303030303,t+hl*0.72072072072) //r11 
    line(s+wl*0.37662337662,t+hl*0.33333333333,s+wl*0.37662337662,t+hl*0.6036036036) //r12 
    line(s+wl*0.39826839826,t+hl*0.7027027027,s+wl*0.39826839826,t+hl*0.9009009009) //r13 
    line(s+wl*0.50216450216,t+hl*0.72072072072,s+wl*0.50216450216,t+hl*0.98738738738) //r14
    line(s+wl*0.45021645021,t+hl*0.52252252252,s+wl*0.45021645021,t+hl*0.59459459459) //r15 
    line(s+wl*0.44155844155,t+hl*0.3063063063,s+wl*0.44155844155,t+hl*0.37837837837) //r16 
    line(s+wl*0.45021645021,t+hl*0.09009009009,s+wl*0.45021645021,t+hl*0.16216216216) //r17
    line(s+wl*0.56277056277,t+hl*0.12612612612,s+wl*0.56277056277,t+hl*0.41441441441) //r18 
    line(s+wl*0.63203463203,t+hl*0.01261261261,s+wl*0.63203463203,t+hl*0.1081081081) //r19
    line(s+wl*0.64069264069,t+hl*0.18018018018,s+wl*0.64069264069,t+hl*0.37837837837) //r20
    line(s+wl*0.77056277056,t+hl*0.04504504504,s+wl*0.77056277056,t+hl*0.12612612612) //r21
    line(s+wl*0.62337662337,t+hl*0.48648648648,s+wl*0.62337662337,t+hl*0.77477477477) //r22
    line(s+wl*0.63203463203,t+hl*0.84684684684,s+wl*0.63203463203,t+hl*0.93693693693) //r23
    line(s+wl*0.77922077922,t+hl*0.43243243243,s+wl*0.77922077922,t+hl*0.54054054054)  //r24
    line(s+wl*0.79653679653,t+hl*0.64864864864,s+wl*0.79653679653,t+hl*0.9009009009) //r25
    line(s+wl*0.91774891774,t+hl*0.84684684684,s+wl*0.91774891774,t+hl*0.98738738738)//r26
    line(s+wl*0.93506493506,t+hl*0.48648648648,s+wl*0.93506493506,t+hl*0.68468468468)//r27
    line(s+wl*0.91774891774,t+hl*0.28828828828,s+wl*0.91774891774,t+hl*0.36036036036)//r28
    line(s+wl*0.90043290043,t+hl*0.05405405405,s+wl*0.90043290043,t+hl*0.23423423423)//r29

    //upper stroke
    stroke(uc)
    line(s+wl*0.04329004329, t+hl*0.18018018018, s+wl*0.14718614718, t+hl*0.18018018018) //u1
    line(s+hl*0.01261261261, t+hl*0.81081081081, s+wl*0.05194805194, t+hl*0.81081081081) //u2
    line(s+wl*0.06926406926,t+hl*0.93693693693,s+wl*0.11255411255,t+hl*0.93693693693) //u3
    line(s+wl*0.14718614718,t+hl*0.89189189189,s+wl*0.32467532467,t+hl*0.89189189189) //u4
    line(s+wl*0.08658008658,t+hl*0.67567567567,s+wl*0.12987012987,t+hl*0.67567567567) //u5
    line(s+wl*0.17316017316,t+hl*0.65765765765,s+wl*0.25974025974,t+hl*0.65765765765)//u6
    line(s+wl*0.19047619047,t+hl*0.12612612612,s+wl*0.2251082251,t+hl*0.12612612612) //u8
    line(s+wl*0.25108225108,t+hl*0.12612612612,s+wl*0.27705627705,t+hl*0.12612612612) //u9 
    line(s+wl*0.31168831168,t+hl*0.25225225225,s+wl*0.40692640692,t+hl*0.25225225225) //u10
    line(s+wl*0.30303030303,t+hl*0.72072072072,s+wl*0.34632034632,t+hl*0.72072072072) //u11
    line(s+wl*0.37662337662,t+hl*0.6036036036,s+wl*0.40692640692,t+hl*0.6036036036) //u12
    line(s+wl*0.39826839826,t+hl*0.9009009009,s+wl*0.45021645021,t+hl*0.9009009009) //u13
    line(s+wl*0.45021645021,t+hl*0.59459459459,s+wl*0.56277056277,t+hl*0.59459459459) //u15
    line(s+wl*0.44155844155,t+hl*0.37837837837,s+wl*0.52813852813,t+hl*0.37837837837) //u16
    line(s+wl*0.45021645021,t+hl*0.16216216216,s+wl*0.51082251082,t+hl*0.16216216216) //u17
    line(s+wl*0.56277056277,t+hl*0.41441441441,s+wl*0.5974025974,t+hl*0.41441441441) //u18
    line(s+wl*0.64069264069,t+hl*0.37837837837,s+wl*0.85714285714,t+hl*0.37837837837) //u20
    line(s+wl*0.77056277056,t+hl*0.04504504504,s+wl*0.81385281385,t+hl*0.04504504504) //u21
    line(s+wl*0.62337662337,t+hl*0.77477477477,s+wl*0.74458874458,t+hl*0.77477477477) //u22
    line(s+wl*0.63203463203,t+hl*0.93693693693,s+wl*0.72727272727,t+hl*0.93693693693) //u23
    line(s+wl*0.77922077922,t+hl*0.54054054054,s+wl*0.89177489177,t+hl*0.54054054054) //u24
    line(s+wl*0.79653679653,t+hl*0.9009009009,s+wl*0.87445887445,t+hl*0.9009009009) //u25
    line(s+wl*0.93506493506,t+hl*0.68468468468,s+wl*0.99393939393,t+hl*0.68468468468)//u27
    line(s+wl*0.91774891774,t+hl*0.36036036036,s+wl*0.96103896103,t+hl*0.36036036036)//u28
    line(s+wl*0.90043290043,t+hl*0.23423423423,s+wl*0.95238095238,t+hl*0.23423423423)//u29

    
    //left
    stroke(lc)
    line(s+wl*0.14718614718, t+hl*0.18018018018, s+wl*0.14718614718, t+hl*0.01261261261) //l1
    line(s+wl*0.27705627705,t+hl*0.89189189189,s+wl*0.27705627705, t+hl*0.98738738738) //l4p2
    line(s+wl*0.12987012987,t+hl*0.67567567567,s+wl*0.12987012987,t+hl*0.24324324324) //l5
    line(s+wl*0.25974025974,t+hl*0.21621621621,s+wl*0.25974025974,t+hl*0.65765765765) //l6
    line(s+wl*0.40692640692,t+hl*0.01261261261,s+wl*0.40692640692,t+hl*0.25225225225) //l10
    line(s+wl*0.40692640692,t+hl*0.33333333333,s+wl*0.40692640692,t+hl*0.6036036036) //l12
    line(s+wl*0.45021645021,t+hl*0.7027027027,s+wl*0.45021645021,t+hl*0.9009009009) //l13
    line(s+wl*0.57142857142,t+hl*0.72072072072,s+wl*0.57142857142,t+hl*0.98738738738) //l14
    line(s+wl*0.56277056277,t+hl*0.52252252252,s+wl*0.56277056277,t+hl*0.59459459459) //l15
    line(s+wl*0.52813852813,t+hl*0.3063063063,s+wl*0.52813852813,t+hl*0.37837837837) //l16
    line(s+wl*0.51082251082,t+hl*0.09009009009,s+wl*0.51082251082,t+hl*0.16216216216) //l17
    line(s+wl*0.5974025974,t+hl*0.12612612612,s+wl*0.5974025974,t+hl*0.41441441441) //l18
    line(s+wl*0.70995670995,t+hl*0.01261261261,s+wl*0.70995670995,t+hl*0.1081081081) //l19
    line(s+wl*0.85714285714,t+hl*0.18018018018,s+wl*0.85714285714,t+hl*0.37837837837) //l20
    line(s+wl*0.74458874458,t+hl*0.48648648648,s+wl*0.74458874458,t+hl*0.77477477477) //l22
    line(s+wl*0.72727272727,t+hl*0.84684684684,s+wl*0.72727272727,t+hl*0.93693693693) //l23
    line(s+wl*0.89177489177,t+hl*0.43243243243,s+wl*0.89177489177,t+hl*0.54054054054) //l24
    line(s+wl*0.87445887445,t+hl*0.64864864864,s+wl*0.87445887445,t+hl*0.9009009009) //l25
    line(s+wl*0.96103896103,t+hl*0.28828828828,s+wl*0.96103896103,t+hl*0.36036036036)//l28
    line(s+wl*0.95238095238,t+hl*0.05405405405,s+wl*0.95238095238,t+hl*0.23423423423)//l29
    line(s+wl*0.81385281385,t+hl*0.04504504504,s+wl*0.81385281385,t+hl*0.12612612612) //l21
    line(s+wl*0.34632034632,t+hl*0.45045045045,s+wl*0.34632034632,t+hl*0.72072072072) //l11
    line(s+wl*0.2251082251,t+hl*0.01261261261,s+wl*0.2251082251,t+hl*0.12612612612) //l8
    line(s+wl*0.27705627705,t+hl*0.07207207207,s+wl*0.27705627705,t+hl*0.12612612612) //l9
    line(s+wl*0.05194805194, t+hl*0.45045045045, s+wl*0.05194805194, t+hl*0.81081081081) //l2
    line(s+wl*0.32467532467,t+hl*0.89189189189,s+wl*0.32467532467,t+hl*0.81081081081) //l4.1    
    line(s+wl*0.11255411255,t+hl*0.85585585585,s+wl*0.11255411255,t+hl*0.93693693693) //l3  
    line(s+wl*0.24242424242,t+hl*0.81081081081,s+wl*0.24242424242,t+hl*0.73873873873) //l4.2    
    
    //down
    stroke(dc)
    line(s+hl*0.01261261261, t+hl*0.45045045045, s+wl*0.05194805194, t+hl*0.45045045045) //d2
    line(s+wl*0.06926406926, t+hl*0.85585585585, s+wl*0.11255411255, t+hl*0.85585585585) //d3
    line(s+wl*0.24242424242,t+hl*0.81081081081,s+wl*0.32467532467,t+hl*0.81081081081) //d4.1
    line(s+wl*0.14718614718,t+hl*0.73873873873,s+wl*0.24242424242,t+hl*0.73873873873) //d4.2
    line(s+wl*0.08658008658,t+hl*0.24324324324,s+wl*0.12987012987,t+hl*0.24324324324) //d5
    line(s+wl*0.17316017316,t+hl*0.21621621621,s+wl*0.25974025974,t+hl*0.21621621621) //d6
    line(s+wl*0.25108225108,t+hl*0.07207207207,s+wl*0.27705627705,t+hl*0.07207207207) //d9
    line(s+wl*0.30303030303,t+hl*0.45045045045,s+wl*0.34632034632,t+hl*0.45045045045) //d11
    line(s+wl*0.37662337662,t+hl*0.33333333333,s+wl*0.40692640692,t+hl*0.33333333333) //d12
    line(s+wl*0.39826839826,t+hl*0.7027027027,s+wl*0.45021645021,t+hl*0.7027027027) //d13
    line(s+wl*0.50216450216,t+hl*0.72072072072,s+wl*0.57142857142,t+hl*0.72072072072) //d14
    line(s+wl*0.45021645021,t+hl*0.52252252252,s+wl*0.56277056277,t+hl*0.52252252252) //d15
    line(s+wl*0.44155844155,t+hl*0.3063063063,s+wl*0.52813852813,t+hl*0.3063063063) //d16
    line(s+wl*0.45021645021,t+hl*0.09009009009,s+wl*0.51082251082,t+hl*0.09009009009) //d17
    line(s+wl*0.56277056277,t+hl*0.12612612612,s+wl*0.5974025974,t+hl*0.12612612612) //d18
    line(s+wl*0.63203463203,t+hl*0.1081081081,s+wl*0.70995670995,t+hl*0.1081081081) //d19
    line(s+wl*0.64069264069,t+hl*0.18018018018,s+wl*0.85714285714,t+hl*0.18018018018) //d20
    line(s+wl*0.77056277056,t+hl*0.12612612612,s+wl*0.81385281385,t+hl*0.12612612612) //d21
    line(s+wl*0.62337662337,t+hl*0.48648648648,s+wl*0.74458874458,t+hl*0.48648648648) //d22
    line(s+wl*0.63203463203,t+hl*0.84684684684,s+wl*0.72727272727,t+hl*0.84684684684) //d23
    line(s+wl*0.77922077922,t+hl*0.43243243243,s+wl*0.89177489177,t+hl*0.43243243243) //d24
    line(s+wl*0.79653679653,t+hl*0.64864864864,s+wl*0.87445887445,t+hl*0.64864864864) //d25
    line(s+wl*0.91774891774,t+hl*0.84684684684,s+wl*0.99393939393,t+hl*0.84684684684)//d26
    line(s+wl*0.93506493506,t+hl*0.48648648648,s+wl*0.99393939393,t+hl*0.48648648648)//d27
    line(s+wl*0.91774891774,t+hl*0.28828828828,s+wl*0.96103896103,t+hl*0.28828828828)//d28
    line(s+wl*0.90043290043,t+hl*0.05405405405,s+wl*0.95238095238,t+hl*0.05405405405)//d29


  }

  this.update = function(){

    //right
    r = collideLineCircle(s+wl*0.04329004329, t+hl*0.01261261261, s+wl*0.04329004329, t+hl*0.18018018018,player.x,player.y,25)
    r1 = collideLineCircle(s+wl*0.14718614718,t+hl*0.73873873873,s+wl*0.14718614718,t+hl*0.89189189189,player.x,player.y,25)
    r2 = collideLineCircle(s+wl*0.2251082251,t+hl*0.89189189189,s+wl*0.2251082251,t+hl*0.98738738738,player.x,player.y,25)
    r3 = collideLineCircle(s+wl*0.08658008658,t+hl*0.24324324324,s+wl*0.08658008658,t+hl*0.67567567567,player.x,player.y,25)
    r4 = collideLineCircle(s+wl*0.19047619047,t+hl*0.01261261261,s+wl*0.19047619047,t+hl*0.12612612612,player.x,player.y,25)
    r5 = collideLineCircle(s+wl*0.31168831168,t+hl*0.01261261261,s+wl*0.31168831168,t+hl*0.25225225225,player.x,player.y,25)
    r6 = collideLineCircle(s+wl*0.30303030303,t+hl*0.45045045045,s+wl*0.30303030303,t+hl*0.72072072072,player.x,player.y,25)
    r7 = collideLineCircle(s+wl*0.37662337662,t+hl*0.33333333333,s+wl*0.37662337662,t+hl*0.6036036036,player.x,player.y,25)
    r8 = collideLineCircle(s+wl*0.39826839826,t+hl*0.7027027027,s+wl*0.39826839826,t+hl*0.9009009009,player.x,player.y,25)
    r9 = collideLineCircle(s+wl*0.50216450216,t+hl*0.72072072072,s+wl*0.50216450216,t+hl*0.98738738738,player.x,player.y,25)
    r10 = collideLineCircle(s+wl*0.45021645021,t+hl*0.52252252252,s+wl*0.45021645021,t+hl*0.59459459459,player.x,player.y,25)
    r11 = collideLineCircle(s+wl*0.44155844155,t+hl*0.3063063063,s+wl*0.44155844155,t+hl*0.37837837837,player.x,player.y,25)
    r12 = collideLineCircle(s+wl*0.45021645021,t+hl*0.09009009009,s+wl*0.45021645021,t+hl*0.16216216216,player.x,player.y,25)
    r13 = collideLineCircle(s+wl*0.56277056277,t+hl*0.12612612612,s+wl*0.56277056277,t+hl*0.41441441441,player.x,player.y,25)
    r14 = collideLineCircle(s+wl*0.63203463203,t+hl*0.01261261261,s+wl*0.63203463203,t+hl*0.1081081081,player.x,player.y,25)
    r15 = collideLineCircle(s+wl*0.06926406926,t+hl*0.85585585585,s+wl*0.06926406926,t+hl*0.93693693693,player.x,player.y,25)
    r16 = collideLineCircle(s+wl*0.64069264069,t+hl*0.18018018018,s+wl*0.64069264069,t+hl*0.37837837837,player.x,player.y,25)
    r17 = collideLineCircle(s+wl*0.77056277056,t+hl*0.04504504504,s+wl*0.77056277056,t+hl*0.12612612612,player.x,player.y,25)
    r18 = collideLineCircle(s+wl*0.62337662337,t+hl*0.48648648648,s+wl*0.62337662337,t+hl*0.77477477477,player.x,player.y,25)
    r19 = collideLineCircle(s+wl*0.63203463203,t+hl*0.84684684684,s+wl*0.63203463203,t+hl*0.93693693693,player.x,player.y,25)
    r20 = collideLineCircle(s+wl*0.77922077922,t+hl*0.43243243243,s+wl*0.77922077922,t+hl*0.54054054054,player.x,player.y,25)
    r21 = collideLineCircle(s+wl*0.79653679653,t+hl*0.64864864864,s+wl*0.79653679653,t+hl*0.9009009009,player.x,player.y,25)
    r22 = collideLineCircle(s+wl*0.91774891774,t+hl*0.84684684684,s+wl*0.91774891774,t+hl*0.98738738738,player.x,player.y,25)
    r23 = collideLineCircle(s+wl*0.93506493506,t+hl*0.48648648648,s+wl*0.93506493506,t+hl*0.68468468468,player.x,player.y,25)
    r24 = collideLineCircle(s+wl*0.91774891774,t+hl*0.28828828828,s+wl*0.91774891774,t+hl*0.36036036036,player.x,player.y,25)
    r25 = collideLineCircle(s+wl*0.90043290043,t+hl*0.05405405405,s+wl*0.90043290043,t+hl*0.23423423423,player.x,player.y,25)
    r26 = collideLineCircle(s+wl*0.17316017316,t+hl*0.21621621621,s+wl*0.17316017316,t+hl*0.65765765765,player.x,player.y,25)

    if(r || r1 || r2 || r3 || r4 || r5 || r6 || r7 || r8 || r9 || r10 || r11 || r12 || r13 || r14 || r15 || r16 || r17 || r18 || r19 || r20 || r21 || r22 || r23 || r24 || r25 ||r26 === true){
      player.x = player.x -= 1.5
    }

    //upper
    u = collideLineCircle(s+wl*0.04329004329, t+hl*0.18018018018, s+wl*0.14718614718, t+hl*0.18018018018,player.x,player.y,25) 
    u1 = collideLineCircle(s+hl*0.01261261261, t+hl*0.81081081081, s+wl*0.05194805194, t+hl*0.81081081081,player.x,player.y,25) 
    u2 = collideLineCircle(s+wl*0.06926406926,t+hl*0.93693693693,s+wl*0.11255411255,t+hl*0.93693693693,player.x,player.y,25) 
    u3 = collideLineCircle(s+wl*0.14718614718,t+hl*0.89189189189,s+wl*0.32467532467,t+hl*0.89189189189,player.x,player.y,25) 
    u4 = collideLineCircle(s+wl*0.08658008658,t+hl*0.67567567567,s+wl*0.12987012987,t+hl*0.67567567567,player.x,player.y,25) 
    u5 = collideLineCircle(s+wl*0.17316017316,t+hl*0.65765765765,s+wl*0.25974025974,t+hl*0.65765765765,player.x,player.y,25)
    u6 = collideLineCircle(s+wl*0.19047619047,t+hl*0.12612612612,s+wl*0.2251082251,t+hl*0.12612612612,player.x,player.y,25)
    u7 = collideLineCircle(s+wl*0.25108225108,t+hl*0.12612612612,s+wl*0.27705627705,t+hl*0.12612612612,player.x,player.y,25)
    u8 = collideLineCircle(s+wl*0.31168831168,t+hl*0.25225225225,s+wl*0.40692640692,t+hl*0.25225225225,player.x,player.y,25)
    u9 = collideLineCircle(s+wl*0.30303030303,t+hl*0.72072072072,s+wl*0.34632034632,t+hl*0.72072072072,player.x,player.y,25)
    u10 = collideLineCircle(s+wl*0.37662337662,t+hl*0.6036036036,s+wl*0.40692640692,t+hl*0.6036036036,player.x,player.y,25)
    u11 = collideLineCircle(s+wl*0.39826839826,t+hl*0.9009009009,s+wl*0.45021645021,t+hl*0.9009009009,player.x,player.y,25)
    u12 = collideLineCircle(s+wl*0.45021645021,t+hl*0.59459459459,s+wl*0.56277056277,t+hl*0.59459459459,player.x,player.y,25)
    u13 = collideLineCircle(s+wl*0.44155844155,t+hl*0.37837837837,s+wl*0.52813852813,t+hl*0.37837837837,player.x,player.y,25)
    u14 = collideLineCircle(s+wl*0.45021645021,t+hl*0.16216216216,s+wl*0.51082251082,t+hl*0.16216216216,player.x,player.y,25)
    u15 = collideLineCircle(s+wl*0.56277056277,t+hl*0.41441441441,s+wl*0.5974025974,t+hl*0.41441441441,player.x,player.y,25)
    u16 = collideLineCircle(s+wl*0.64069264069,t+hl*0.37837837837,s+wl*0.85714285714,t+hl*0.37837837837,player.x,player.y,25)
    u17 = collideLineCircle(s+wl*0.77056277056,t+hl*0.04504504504,s+wl*0.81385281385,t+hl*0.04504504504,player.x,player.y,25)
    u18 = collideLineCircle(s+wl*0.62337662337,t+hl*0.77477477477,s+wl*0.74458874458,t+hl*0.77477477477,player.x,player.y,25)
    u19 = collideLineCircle(s+wl*0.63203463203,t+hl*0.93693693693,s+wl*0.72727272727,t+hl*0.93693693693,player.x,player.y,25)
    u20 = collideLineCircle(s+wl*0.77922077922,t+hl*0.54054054054,s+wl*0.89177489177,t+hl*0.54054054054,player.x,player.y,25)
    u21 = collideLineCircle(s+wl*0.79653679653,t+hl*0.9009009009,s+wl*0.87445887445,t+hl*0.9009009009,player.x,player.y,25)
    u22 = collideLineCircle(s+wl*0.93506493506,t+hl*0.68468468468,s+wl*0.99393939393,t+hl*0.68468468468,player.x,player.y,25)
    u23 = collideLineCircle(s+wl*0.91774891774,t+hl*0.36036036036,s+wl*0.96103896103,t+hl*0.36036036036,player.x,player.y,25)
    u24 = collideLineCircle(s+wl*0.90043290043,t+hl*0.23423423423,s+wl*0.95238095238,t+hl*0.23423423423,player.x,player.y,25)

    if(u || u1 || u2 || u3 || u4 || u5 || u6 || u7 || u8 || u9 || u10 || u11 || u12 || u13 || u14 || u15 || u16 || u17 || u18 || u19 || u20 || u21 || u22 || u23 || u24 === true){
      player.y = player.y += 1.5
    }

    //left
    l = collideLineCircle(s+wl*0.14718614718, t+hl*0.18018018018, s+wl*0.14718614718, t+hl*0.01261261261,player.x,player.y,25)
    l1 = collideLineCircle(s+wl*0.27705627705,t+hl*0.89189189189,s+wl*0.27705627705, t+hl*0.98738738738,player.x,player.y,25)
    l2 = collideLineCircle(s+wl*0.12987012987,t+hl*0.67567567567,s+wl*0.12987012987,t+hl*0.24324324324,player.x,player.y,25)
    l3 = collideLineCircle(s+wl*0.25974025974,t+hl*0.21621621621,s+wl*0.25974025974,t+hl*0.65765765765,player.x,player.y,25)
    l4 = collideLineCircle(s+wl*0.40692640692,t+hl*0.01261261261,s+wl*0.40692640692,t+hl*0.25225225225,player.x,player.y,25)
    l5 = collideLineCircle(s+wl*0.40692640692,t+hl*0.33333333333,s+wl*0.40692640692,t+hl*0.6036036036,player.x,player.y,25)
    l6 = collideLineCircle(s+wl*0.45021645021,t+hl*0.7027027027,s+wl*0.45021645021,t+hl*0.9009009009,player.x,player.y,25)
    l7 = collideLineCircle(s+wl*0.57142857142,t+hl*0.72072072072,s+wl*0.57142857142,t+hl*0.98738738738,player.x,player.y,25)
    l8 = collideLineCircle(s+wl*0.56277056277,t+hl*0.52252252252,s+wl*0.56277056277,t+hl*0.59459459459,player.x,player.y,25)
    l9 = collideLineCircle(s+wl*0.52813852813,t+hl*0.3063063063,s+wl*0.52813852813,t+hl*0.37837837837,player.x,player.y,25)
    l10 = collideLineCircle(s+wl*0.51082251082,t+hl*0.09009009009,s+wl*0.51082251082,t+hl*0.16216216216,player.x,player.y,25)
    l11 = collideLineCircle(s+wl*0.5974025974,t+hl*0.12612612612,s+wl*0.5974025974,t+hl*0.41441441441,player.x,player.y,25)
    l12 = collideLineCircle(s+wl*0.70995670995,t+hl*0.01261261261,s+wl*0.70995670995,t+hl*0.1081081081,player.x,player.y,25)
    l13 = collideLineCircle(s+wl*0.85714285714,t+hl*0.18018018018,s+wl*0.85714285714,t+hl*0.37837837837,player.x,player.y,25)
    l14 = collideLineCircle(s+wl*0.74458874458,t+hl*0.48648648648,s+wl*0.74458874458,t+hl*0.77477477477,player.x,player.y,25)
    l15 = collideLineCircle(s+wl*0.72727272727,t+hl*0.84684684684,s+wl*0.72727272727,t+hl*0.93693693693,player.x,player.y,25)
    l16 = collideLineCircle(s+wl*0.89177489177,t+hl*0.43243243243,s+wl*0.89177489177,t+hl*0.54054054054,player.x,player.y,25)
    l17 = collideLineCircle(s+wl*0.87445887445,t+hl*0.64864864864,s+wl*0.87445887445,t+hl*0.9009009009,player.x,player.y,25)
    l18 = collideLineCircle(s+wl*0.96103896103,t+hl*0.28828828828,s+wl*0.96103896103,t+hl*0.36036036036,player.x,player.y,25)
    l19 = collideLineCircle(s+wl*0.95238095238,t+hl*0.05405405405,s+wl*0.95238095238,t+hl*0.23423423423,player.x,player.y,25)
    l20 = collideLineCircle(s+wl*0.81385281385,t+hl*0.04504504504,s+wl*0.81385281385,t+hl*0.12612612612,player.x,player.y,25)
    l21 = collideLineCircle(s+wl*0.34632034632,t+hl*0.45045045045,s+wl*0.40692640692,t+hl*0.72072072072,player.x,player.y,25)
    l22 = collideLineCircle(s+wl*0.2251082251,t+hl*0.01261261261,s+wl*0.2251082251,t+hl*0.12612612612,player.x,player.y,25)
    l23 = collideLineCircle(s+wl*0.27705627705,t+hl*0.07207207207,s+wl*0.27705627705,t+hl*0.12612612612,player.x,player.y,25)
    l24 = collideLineCircle(s+wl*0.05194805194, t+hl*0.45045045045, s+wl*0.05194805194, t+hl*0.81081081081,player.x,player.y,25)
    l25 = collideLineCircle(s+wl*0.32467532467,t+hl*0.89189189189,s+wl*0.32467532467,t+hl*0.81081081081,player.x,player.y,25)
    l26 = collideLineCircle(s+wl*0.11255411255,t+hl*0.85585585585,s+wl*0.11255411255,t+hl*0.93693693693,player.x,player.y,25)
    l27 = collideLineCircle(s+wl*0.24242424242,t+hl*0.81081081081,s+wl*0.24242424242,t+hl*0.73873873873,player.x,player.y,25) 

    if(l| l1 || l2 || l3 || l4 || l5 || l6 || l7 || l8 || l9 || l10 || l11 || l12 || l13 || l14 || l15 || l16 || l17 || l18 || l19 || l20 || l21 || l22 || l23 || l24 || l25 || l26 || l27=== true){
      player.x = player.x += 1.5
    }

    //down
    d = collideLineCircle(s+hl*0.01261261261, t+hl*0.45045045045, s+wl*0.05194805194, t+hl*0.45045045045,player.x,player.y,25) 
    d1 = collideLineCircle(s+wl*0.06926406926, t+hl*0.85585585585, s+wl*0.11255411255, t+hl*0.85585585585,player.x,player.y,25)
    d2 = collideLineCircle(s+wl*0.24242424242,t+hl*0.81081081081,s+wl*0.32467532467,t+hl*0.81081081081,player.x,player.y,25)
    d3 = collideLineCircle(s+wl*0.14718614718,t+hl*0.73873873873,s+wl*0.24242424242,t+hl*0.73873873873,player.x,player.y,25)
    d4 = collideLineCircle(s+wl*0.08658008658,t+hl*0.24324324324,s+wl*0.12987012987,t+hl*0.24324324324,player.x,player.y,25)
    d5 = collideLineCircle(s+wl*0.17316017316,t+hl*0.21621621621,s+wl*0.25974025974,t+hl*0.21621621621,player.x,player.y,25)
    d6 = collideLineCircle(s+wl*0.25108225108,t+hl*0.07207207207,s+wl*0.27705627705,t+hl*0.07207207207,player.x,player.y,25)
    d7 = collideLineCircle(s+wl*0.30303030303,t+hl*0.45045045045,s+wl*0.34632034632,t+hl*0.45045045045,player.x,player.y,25)
    d8 = collideLineCircle(s+wl*0.37662337662,t+hl*0.33333333333,s+wl*0.40692640692,t+hl*0.33333333333,player.x,player.y,25)
    d9 = collideLineCircle(s+wl*0.39826839826,t+hl*0.7027027027,s+wl*0.45021645021,t+hl*0.7027027027,player.x,player.y,25)
    d10 = collideLineCircle(s+wl*0.50216450216,t+hl*0.72072072072,s+wl*0.57142857142,t+hl*0.72072072072,player.x,player.y,25)
    d11 = collideLineCircle(s+wl*0.45021645021,t+hl*0.52252252252,s+wl*0.56277056277,t+hl*0.52252252252,player.x,player.y,25)
    d12 = collideLineCircle(s+wl*0.44155844155,t+hl*0.3063063063,s+wl*0.52813852813,t+hl*0.3063063063,player.x,player.y,25)
    d13 = collideLineCircle(s+wl*0.45021645021,t+hl*0.09009009009,s+wl*0.51082251082,t+hl*0.09009009009,player.x,player.y,25)
    d14 = collideLineCircle(s+wl*0.56277056277,t+hl*0.12612612612,s+wl*0.5974025974,t+hl*0.12612612612,player.x,player.y,25)
    d15 = collideLineCircle(s+wl*0.63203463203,t+hl*0.1081081081,s+wl*0.70995670995,t+hl*0.1081081081,player.x,player.y,25)
    d16 = collideLineCircle(s+wl*0.64069264069,t+hl*0.18018018018,s+wl*0.85714285714,t+hl*0.18018018018,player.x,player.y,25)
    d17 = collideLineCircle(s+wl*0.77056277056,t+hl*0.12612612612,s+wl*0.81385281385,t+hl*0.12612612612,player.x,player.y,25)
    d18 = collideLineCircle(s+wl*0.62337662337,t+hl*0.48648648648,s+wl*0.74458874458,t+hl*0.48648648648,player.x,player.y,25)
    d19 = collideLineCircle(s+wl*0.63203463203,t+hl*0.84684684684,s+wl*0.72727272727,t+hl*0.84684684684,player.x,player.y,25)
    d20 = collideLineCircle(s+wl*0.77922077922,t+hl*0.43243243243,s+wl*0.89177489177,t+hl*0.43243243243,player.x,player.y,25)
    d21 = collideLineCircle(s+wl*0.79653679653,t+hl*0.64864864864,s+wl*0.87445887445,t+hl*0.64864864864,player.x,player.y,25)
    d22 = collideLineCircle(s+wl*0.91774891774,t+hl*0.84684684684,s+wl*0.99393939393,t+hl*0.84684684684,player.x,player.y,25)
    d23 = collideLineCircle(s+wl*0.93506493506,t+hl*0.48648648648,s+wl*0.99393939393,t+hl*0.48648648648,player.x,player.y,25)
    d24 = collideLineCircle(s+wl*0.91774891774,t+hl*0.28828828828,s+wl*0.96103896103,t+hl*0.28828828828,player.x,player.y,25)
    d25 = collideLineCircle(s+wl*0.90043290043,t+hl*0.05405405405,s+wl*0.95238095238,t+hl*0.05405405405,player.x,player.y,25)

    if(d| d1 || d2 || d3 || d4 || d5 || d6 || d7 || d8 || d9 || d10 || d11 || d12 || d13 || d14 || d15 || d16 || d17 || d18 || d19 || d20 || d21 || d22 || d23 || d24 === true){
      player.y = player.y -= 1.5
    }
  }
}
