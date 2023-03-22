// function cal(){

//     //to unhide the result
//     var unhide = document.getElementById("unhide").style.display="block";
    
//     //volume of wall
//     var n1,n2,n3,ans;
//     n1=parseFloat(document.getElementById("wall_length").value);
//     n2=parseFloat(document.getElementById("wall_height").value);
//     n3=parseFloat(document.getElementById("wall_thick").value);
//     ans=n1*n2*(n3*0.01);
//     /*n3=document.getElementById('WalThick').value;
//     if(n3==='2'){
//         ans=n1*n2*(10*0.01);
//     }
//     if(n3==='3'){
//         ans=n1*n2*(23*0.01);
//     }
//     if(n3==='4'){
//         ans=n1*n2*(34*0.01);
//     }   
//     if(n3==='5'){
//         ans=n1*n2*(46*0.01);
//     }*/

//     //volume of brick
//     var b1,b2,b3,ansB;
//     b1=parseFloat(document.getElementById("Brick_length").value);
//     b2=parseFloat(document.getElementById("Brick_width").value);
//     b3=parseFloat(document.getElementById("Brick_height").value);
//     ansB=[(b1*0.01)+0.01] * [(b2*0.01)+0.01] * [(b3*0.01)+0.01];

//     //no. of bricks
//     var nob;
//     nob=parseInt(ans/ansB);
//     document.getElementById("Total_Brick").value=nob;

//     //no of bags of cement and sand
//     var brick = (b1*0.01) * (b2*0.01) * (b3*0.01); //volume of brick without mortar
//     var volume = [ans-(nob*brick)]*1.33;  //dry volume of cement

//     var bg =document.getElementById('input').value;
//     var cement_ratio=0,sand_ratio=0;
//     if(bg === '1'){
//         cement_ratio = [(volume*1*1440)/4]/50;
//         sand_ratio = (volume*3)/4
//     }
//     if(bg === '2'){
//         cement_ratio = [(volume*1*1440)/5]/50;
//         sand_ratio = (volume*4)/5
//     }
//     if(bg === '3'){
//         cement_ratio = [(volume*1*1440)/6]/50;
//         sand_ratio = (volume*5)/6
//     }
//     if(bg === '4'){
//         cement_ratio = [(volume*1*1440)/7]/50;
//         sand_ratio = (volume*6)/7
//     }
//     if(bg === '5'){
//         cement_ratio = [(volume*1*1440)/8]/50;
//         sand_ratio = (volume*7)/8
//     }
//     if(bg === '6'){
//         cement_ratio = [(volume*1*1440)/9]/50;
//         sand_ratio = (volume*8)/9
//     }
//     if(bg === '7'){
//         cement_ratio = [(volume*1*1440)/10]/50;
//         sand_ratio = (volume*9)/10
//     }
//     document.getElementById("Total_Cement").value=cement_ratio;
//     document.getElementById("Total_Sand").value=sand_ratio*333;
// }

function cal()
{
    var unhide = document.getElementById("unhide").style.display="block";

    var n1,n2,n3,ans;
    var b1,b2,b3,ansB;    
    if(document.getElementById('convert').checked == false) {
        document.getElementById("length_indication").innerHTML='meter';
        //volume of wall
        n1=parseFloat(document.getElementsByName("w_length")[0].value); 
        n2=parseFloat(document.getElementsByName("w_width")[0].value);
        n3=parseFloat(document.getElementsByName("w_thick")[0].value);
        ans=n1*n2*(n3*0.01);
    
        //volume of brick
        
        b1=parseFloat(document.getElementsByName("b_length")[0].value);
        b2=parseFloat(document.getElementsByName("b_width")[0].value);
        b3=parseFloat(document.getElementsByName("b_height")[0].value);
        ansB=[(b1*0.01)+0.01] * [(b2*0.01)+0.01] * [(b3*0.01)+0.01];
    } 
    else 
    {
        //volume of wall
        n1=parseFloat(document.getElementsByName("w_length")[0].value);
        n2=parseFloat(document.getElementsByName("w_width")[0].value);
        n3=parseFloat(document.getElementsByName("w_thick")[0].value);
        // n1=(n1*12)+((n1-n1.parseInt()))
        ans=(n1*0.3048)*(n2*0.3048)*(n3*0.01);
        
        //volume of brick
        b1=parseFloat(document.getElementsByName("b_length")[0].value);
        b2=parseFloat(document.getElementsByName("b_width")[0].value);
        b3=parseFloat(document.getElementsByName("b_height")[0].value);
        ansB=[(b1*0.01)+0.01] * [(b2*0.01)+0.01] * [(b3*0.01)+0.01];
    }

    var nob;
    nob =Math.round(ans/ansB);
    document.getElementById("total_brick").value=nob;
    //no of bags of cement and sand
    var brick = (b1*0.01) * (b2*0.01) * (b3*0.01); //volume of brick without mortar
    var volume1 = ans-(nob*brick);
    var volume2 = volume1 + (volume1*0.15); //15 % wastage

    //this is 👇👇 dry volume
    var FinalVolume = volume2 + (volume2*0.25); // 25% dry volume wastage


    var bg =document.getElementById('input').value;
    var cement_ratio=0,sand_ratio=0;
    if(bg === '1'){
        cement_ratio = [(FinalVolume)/4];
        sand_ratio = (FinalVolume*3)/4
    }
    if(bg === '2'){
        cement_ratio = [(FinalVolume)/5];
        sand_ratio = (FinalVolume*4)/5
    }
    if(bg === '3'){
        cement_ratio = [(FinalVolume)/6];
        sand_ratio = (FinalVolume*5)/6
    }
    if(bg === '4'){
        cement_ratio = [(FinalVolume)/7];
        sand_ratio = (FinalVolume*6)/7
    }
    if(bg === '5'){
        cement_ratio = [(FinalVolume)/8];
        sand_ratio = (FinalVolume*7)/8
    }
    if(bg === '6'){
        cement_ratio = [(FinalVolume)/9];
        sand_ratio = (FinalVolume*8)/9
    }
    if(bg === '7'){
        cement_ratio = [(FinalVolume)/10];
        sand_ratio = (FinalVolume*9)/10
    }
   
    cement_ratio = cement_ratio/0.035;
    sand_ratio = sand_ratio*1500*0.001;
    
    document.getElementById("cement_amount").value=parseInt(cement_ratio+1);
    document.getElementById("sand_amount").value=parseFloat(sand_ratio).toFixed(2);
}

//this is for reset button
var resetButton = document.getElementById('reset');
    var inputs = [document.getElementById('w_length'), 
                document.getElementById('w_width'), 
                document.getElementById('w_thick'),
                document.getElementById('b_length'),
                document.getElementById('b_width'),
                document.getElementById('b_height'),
                document.getElementById('total_brick'),
                document.getElementById('cement_amount'),
                document.getElementById('sand_amount')];

    resetButton.addEventListener('click', function() {
        for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        }
        // reset the select option to C.M 1:4
        document.getElementById('input').selectedIndex = 1;
        var unhide = document.getElementById("unhide");
        unhide.style.display="none";
    });