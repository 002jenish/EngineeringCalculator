function cal(){
    
    //volume of wall
    var n1,n2,n3,ans;
    n1=parseFloat(document.getElementById("wall_length").value);
    n2=parseFloat(document.getElementById("wall_height").value);
    n3=parseFloat(document.getElementById("wall_thick").value);
    ans=n1*n2*(n3*0.01);
    /*n3=document.getElementById('WalThick').value;
    if(n3==='2'){
        ans=n1*n2*(10*0.01);
    }
    if(n3==='3'){
        ans=n1*n2*(23*0.01);
    }
    if(n3==='4'){
        ans=n1*n2*(34*0.01);
    }   
    if(n3==='5'){
        ans=n1*n2*(46*0.01);
    }*/

    //volume of brick
    var b1,b2,b3,ansB;
    b1=parseFloat(document.getElementById("Brick_length").value);
    b2=parseFloat(document.getElementById("Brick_width").value);
    b3=parseFloat(document.getElementById("Brick_height").value);
    ansB=[(b1*0.01)+0.01] * [(b2*0.01)+0.01] * [(b3*0.01)+0.01];

    //no. of bricks
    var nob;
    nob=parseInt(ans/ansB);
    document.getElementById("Total_Brick").value=nob;

    //no of bags of cement and sand
    var brick = (b1*0.01) * (b2*0.01) * (b3*0.01); //volume of brick without mortar
    var volume = [ans-(nob*brick)]*1.33;  //dry volume of cement

    var bg =document.getElementById('input').value;
    var cement_ratio=0,sand_ratio=0;
    if(bg === '1'){
        cement_ratio = [(volume*1*1440)/4]/50;
        sand_ratio = (volume*3)/4
    }
    if(bg === '2'){
        cement_ratio = [(volume*1*1440)/5]/50;
        sand_ratio = (volume*4)/5
    }
    if(bg === '3'){
        cement_ratio = [(volume*1*1440)/6]/50;
        sand_ratio = (volume*5)/6
    }
    if(bg === '4'){
        cement_ratio = [(volume*1*1440)/7]/50;
        sand_ratio = (volume*6)/7
    }
    if(bg === '5'){
        cement_ratio = [(volume*1*1440)/8]/50;
        sand_ratio = (volume*7)/8
    }
    if(bg === '6'){
        cement_ratio = [(volume*1*1440)/9]/50;
        sand_ratio = (volume*8)/9
    }
    if(bg === '7'){
        cement_ratio = [(volume*1*1440)/10]/50;
        sand_ratio = (volume*9)/10
    }
    document.getElementById("Total_Cement").value=cement_ratio;
    document.getElementById("Total_Sand").value=sand_ratio*333;
}
