
//Selector
// const input = document.getElementById('input');
// const button = document.getElementById('insertBtn'); 
// const text = document.getElementById('result');


// //function
// const handleClick = () => {   
//     //const input = document.getElementById('input').value; 
//     // text.textContent = input;
    
//     text.textContent = input.value;
    //alert('Button was clicked');
//}


//TRIGGER:
// document.getElementById('insertBtn').addEventListener('click',handleClick)  // selector (document.getElementById()) and  trigger(addEventListener) in same line

//button.addEventListener('click',handleClick)

const handleClick2 =() => {
    document.getElementById('result').textContent = document.getElementById('input').value;
}

document.getElementById('insertBtn').addEventListener('click',handleClick2);









// const circle = document.getElementById('alert');
// console.log(circle);
// console.log(circle.textContent);

// const paragraph = document.getElementsByTagName('p');
// console.log(paragraph);



// function myfunction (){
//     alert('Hi');
// }

// //myfunction();

// function doNotClickMe(){
//     alert(" I TOLD YOU Don't Click me");
// }

// //doNotClickMe();


