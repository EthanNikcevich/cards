/**
 * Created by h205p3 on 4/21/17.
 */
$(document).ready(function() {
    stack=0;
    deck =
        ["#ac","#2c","#3c","#4c","#5c","#6c","#7c","#8c","#9c","#10c","#jc","#qc","#kc",
            "#ah","#2h","#3h","#4h","#5h","#6h","#7h","#8h","#9h","#10h","#jh","#qh","#kh",
            "#as","#2s","#3s","#4s","#5s", "#6s","#7s","#8s","#9s","#10s","#js","#qs","#ks",
            "#ad","#2d","#3d","#4d","#5d","#6d","#7d","#8d", "#9d","#10d","#jd","#qd","#kd"];

    for(i=0;i<deck.length;i++){
        $(deck[i]).css('height',180);
        //console.log(i);
        $(deck[i]).draggable();
    }
    $(document).click(function(event) {
        //console.log(event.target.id);
        document.getElementById(event.target.id).style.zIndex = stack+1;
        stack=stack+1;
        //console.log(event.target.style.zIndex);
    });

    $(document).dblclick(function(event) {
        //console.log(event.target.id);
        card = document.getElementById(event.target.id);
        if (card.src.length==112) {
            card.src="https://thecardsoflife.com/wp-content/images/cod-"+event.target.id+".jpg";
        }
        else {
            card.src = "https://us.123rf.com/450wm/bobyramone/bobyramone1401/bobyramone140100003/24827367-spielkarte-r-ckseite.jpg?ver=6";
            card.width = "128";
            card.height = "180";
        }
        //console.log("bye")
    });
});

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    console.log(array);
    for(i=0;i<deck.length;i++) {
        $(deck[i]).css('top',0);
        $(deck[i]).css('left',0);
        $(deck[i]).css('zIndex',stack+1);
        stack = stack + 1;
        deck[i]=deck[i].replace('#','');
        console.log(document.getElementById(deck[i]).src);
        if(document.getElementById(deck[i]).src!="https://us.123rf.com/450wm/bobyramone/bobyramone1401/bobyramone140100003/24827367-spielkarte-r-ckseite.jpg?ver=6"){
            $('#'+deck[i]).dblclick();
        }
        deck[i]='#'+deck[i];
        console.log(deck[i])
    }
}

function solitaire() {
    var counter=1;
    for(var i=1;i<7;i++) {
        eval("var ypos" + i + "=200");
    }
    for(i=0;i<deck.length;i++) {
        if(counter==1) {
            xpos=0;
            $(deck[i]).css('top',ypos1);
            $(deck[i]).css('left',xpos);
            counter++
        }else if(counter>1 && counter<4) {
            xpos=150;
            $(deck[i]).css('top', ypos1);
            $(deck[i]).css('left', xpos);
            ypos1 += 50;
            counter++
        }else if(counter>3 && counter<7) {
            xpos=300;
            $(deck[i]).css('top',ypos2);
            $(deck[i]).css('left',xpos);
            ypos2 += 50;
            counter++
        }else if(counter>6 && counter<11) {
            xpos=450;
            $(deck[i]).css('top',ypos3);
            $(deck[i]).css('left',xpos);
            ypos3 += 50;
            counter++
        }else if(counter>10 && counter<16) {
            xpos=600;
            $(deck[i]).css('top',ypos4);
            $(deck[i]).css('left',xpos);
            ypos4 += 50;
            counter++
        }else if(counter>15 && counter<22) {
            xpos=750;
            $(deck[i]).css('top',ypos5);
            $(deck[i]).css('left',xpos);
            ypos5 += 50;
            counter++
        }else if(counter>21 && counter<29) {
            xpos=900;
            $(deck[i]).css('top',ypos6);
            $(deck[i]).css('left',xpos);
            ypos6 += 50;
            counter++
        }
    }
}