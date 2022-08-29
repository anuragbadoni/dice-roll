
// function move()
// {

//     const elem=document.getElementsByClassName("dice")[0];
//     let time=elem.style.animationDuration;
// if(elem.style.animationPlayState=='running')
// {
//     elem.style.animationPlayState='paused';
// }
// else
// {

//     elem.style.animationDuration='time';
// elem.style.animationPlayState='running';
// }
// }

function move2()
{
  
    const eleme=document.getElementsByClassName("temp")[0];

const number=document.getElementsByClassName("result")[0];


if(eleme.style.animationPlayState=='paused')
{

eleme.style.top="10%";
    const one=document.getElementsByClassName("one")[0];
const two=document.getElementsByClassName("two")[0];
const three=document.getElementsByClassName("three")[0];
const four=document.getElementsByClassName("four")[0];
const five=document.getElementsByClassName("five")[0];
const six=document.getElementsByClassName("six")[0];
const seven=document.getElementsByClassName("seven")[0];

    one.style.backgroundColor="black";
    two.style.backgroundColor="black";
    three.style.backgroundColor="black";
five.style.backgroundColor="black";
    six.style.backgroundColor="black";
    seven.style.backgroundColor="black";
four.style.backgroundColor="black";

const peri=document.getElementsByClassName("btn")[0];
peri.innerHTML="<h2>STOP</h2>";

number.style.display="none";
    eleme.style.animationPlayState='running';

}
else
{
    eleme.style.top="50%";

    var a=Math.floor(Math.random() * 6)+1;
    

    
const one=document.getElementsByClassName("one")[0];
const two=document.getElementsByClassName("two")[0];
const three=document.getElementsByClassName("three")[0];
const four=document.getElementsByClassName("four")[0];
const five=document.getElementsByClassName("five")[0];
const six=document.getElementsByClassName("six")[0];
const seven=document.getElementsByClassName("seven")[0];


if(a==1)
{
    one.style.backgroundColor="transparent";
    two.style.backgroundColor="transparent";
    three.style.backgroundColor="transparent";
five.style.backgroundColor="transparent";
    six.style.backgroundColor="transparent";
    seven.style.backgroundColor="transparent";
}
else if(a==2)
{

    two.style.backgroundColor="transparent";
    three.style.backgroundColor="transparent";
five.style.backgroundColor="transparent";
    six.style.backgroundColor="transparent";
four.style.backgroundColor="transparent";
}
else if(a==3)
{
    two.style.backgroundColor="transparent";
    three.style.backgroundColor="transparent";
five.style.backgroundColor="transparent";
    six.style.backgroundColor="transparent";

}
else if(a==4)
{


    three.style.backgroundColor="transparent";
five.style.backgroundColor="transparent";
    four.style.backgroundColor="transparent";
}
else if(a==5)
{



    three.style.backgroundColor="transparent";
five.style.backgroundColor="transparent";



}
else
{
    four.style.backgroundColor="transparent";
}





const peri=document.getElementsByClassName("btn")[0];
peri.innerHTML="<h2>ROLL</h2>";

    eleme.style.animationPlayState='paused';
    
    number.style.display="block";
    number.innerHTML=a;
}


}