const button = document.getElementById("convert-btn");

const romani = () =>{
  const input = document.getElementById("number").value;
  const output = document.getElementById("output");
  if(input===""){
    console.log("ifcase1working");
    output.innerText="Please enter a valid number";
  return;
  } 
  else if (input<0){
    console.log("ifcase2working");
    output.innerText="Please enter a number greater than or equal to 1";
    return;
  }
  else if (input>3999){
    console.log("ifcase3working");
    output.innerText="Please enter a number less than or equal to 3999";
    return;
  }
  else {
    console.log("elsecaseworking");
    const array1= input.split("").map(Number);
    const array2= array1.slice().reverse();
    output.innerHTML = array2;
    let stringout="";
    let stringout1="";
    let stringout2="";
    let stringout3="";
    for(let i=0;i<array2.length;i++){
      switch(i){
        // Ones
        case 0:{
          console.log('array2[i]:', array2[i]);
          if(array2[0]<4){
            for(let j=1;j<=array2[0];j++){
              stringout+="I";
              console.log(stringout);
            }
          }
          else if(array2[0]===4){
            stringout+="IV";
            console.log(stringout);
          }
          else if(array2[0]===5){
            stringout+="V";
            console.log(stringout);
          } 
          else if(array2[0]>5 && array2[0]<9){
            stringout+="V";
            for(let j=6;j<=array2[0];j++){
              stringout+="I";
              console.log(stringout);  
            }
          }
          else if(array2[0]===9){
            stringout+="IX";
            console.log(stringout);  
          }
        break;
        }
        // Tens
        case 1:{
          console.log('array2[i]:', array2[i]);
          if(array2[i]<4){
            for(let j=1;j<=array2[i];j++){
              stringout1+="X";
              console.log(stringout1);
            }
          }
          else if(array2[i]===4){
            stringout1+="XL";
            console.log(stringout1);
          }
          else if(array2[i]===5){
            stringout1+="L";
            console.log(stringout1);
          } 
          else if(array2[i]>5 && array2[i]<9){
            stringout1+="L";
            for(let j=6;j<=array2[i];j++){
              stringout1+="X";
              console.log(stringout1);  }
          }
          else if(array2[i]===9){
            stringout1+="XC";
          }
        break;
        }
        //Hundreds
        case 2: {
          console.log('array2[i]:', array2[i]);
          if(array2[i]<4){
            for(let j=1;j<=array2[i];j++){
              stringout2+="C";
              console.log(stringout2);
            }
          }
          else if(array2[i]===4){
            stringout2+="CD";
            console.log(stringout2);
          }
          else if(array2[i]===5){
            stringout2+="D";
            console.log(stringout2);
          } 
          else if(array2[i]>5 && array2[i]<9){
            stringout2+="D";
            for(let j=6;j<=array2[i];j++){
              stringout2+="C";
              console.log(stringout2);  }
          }
          else if(array2[i]===9){
            stringout2+="CM";
          }
        break;
        }
        //Thousands
        case 3: {
          console.log('array2[i]:', array2[i]);
          if(array2[i]<4){
            for(let j=1;j<=array2[i];j++){
              stringout3+="M";
              console.log(stringout3);
            }
          }
        break;
        }
      }
    }
    console.log("FinalOutput: "+stringout3+stringout2+stringout1+stringout);
    output.innerText = stringout3+stringout2+stringout1+stringout;
  }
}

button.addEventListener("click"||"keydown",romani);
document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    romani();
  }
});


