var p=$("#player");
var p2=$("#player2");
function place(p,p2){
    var ptl=p.offset();
    var ptr=p.offset().left + p.width();
    var pbl=p.offset().top + p.height();
    var pbr=p.offset.top + p.height();
    
}



var isCollided = function collided(el1, el2) {
  var position1 = el1.offset();
  var height1 = el1.height();
  var width1 = el1.width();
  var position2 = el2.offset();
  var height2 = el2.height();
  var width2 = el2.width();
  
  return position1.left < position2.left + width2 &&
    position1.left + width1 > position2.left &&
    position1.top < position2.top + height2 &&
    position1.top + height1 > position2.top;
};
var explode = function (el) {
  el.hide( "explode", {pieces: 32}, 1000 );  
};

var implode = function (el) {
  el.show( "explode", {pieces: 32}, 1000 ); 
  el.show();
};

























$(document).ready(function(){
    var player={top:0 , left:0, width:$("#p1").width(),height:$("#p1").height()};
    var player2={bottom:0,right:0, width:$("#p2").width(),height:$("#p2").height()};
    var windowHeight= $(window).height();
    var windowWidth= $(window).width();
    console.log('windowHeight : ', windowHeight);
    console.log('windowWidth : ', windowWidth);
    
    checkPlayer1 = function () {
        var playerOffset1 = $('#p1').offset();
        console.log('player 1 offset : ', playerOffset1);
    };
    
    checkPlayer2 = function () {
        var playerOffset2 = $('#p2').offset();
        console.log('player 2 offset : ', playerOffset2);
    };
    
    
    $("body").keydown(function(event){
        var collided = isCollided($("#p1"),$("#p2"));
        if(collided){
            explode($("#p1"));
            explode($("#p2"));
            $("#p1").css("top",0);
            $("#p1").css("left",0);
            $("#p2").css("bottom",0);
            $("#p2").css("right",0);
            
            
            player.top=0;
            player.left=0;
            player2.bottom=0;
            player2.right=0;
            
            var hahahahaha=alert("XD");
            
            implode($("#p1"));
            implode($("#p2"));
            
            return;
            //return;


        }
        
        
        
        
        
        
        
        
        
        
        
        
        if (event.keyCode == 65){
            if(player.left > 0){
                player.left = player.left - 20;
                $("#p1").css("left", player.left);
            }
            checkPlayer2();
        }else if(event.keyCode == 87){
          if(player.top > 0){
            player.top = player.top - 20;
            $("#p1").css("top", player.top);
          }
          checkPlayer2();
        }else if(event.keyCode == 68){
            if(player.left < windowWidth - player.width){
                player.left = player.left + 20;
                $("#p1").css("left", player.left);
            }
            checkPlayer2();
          }else if(event.keyCode == 83){
            if(player.top < windowHeight - player.height){
                player.top = player.top + 20;
                $("#p1").css("top", player.top);
            }
            checkPlayer2();
        }
            
        if (event.keyCode == 37){
            if(player2.right < windowWidth - player2.width){
                player2.right = player2.right + 40;
                $("#p2").css("right", player2.right);
            }
            checkPlayer1();
        } else if(event.keyCode == 38){
            if(player2.bottom < windowHeight - player2.height){
                player2.bottom = player2.bottom + 40;
                $("#p2").css("bottom", player2.bottom);
            }
            checkPlayer1();
        } else if(event.keyCode == 39){
            if(player2.right > 0){
                player2.right = player2.right - 40;
                $("#p2").css("right", player2.right);
            }
            checkPlayer1();
        } else if(event.keyCode == 40){
            if(player2.bottom > 0){
                player2.bottom = player2.bottom - 40;
                $("#p2").css("bottom", player2.bottom);
            }
            checkPlayer1();
        }
    });
});