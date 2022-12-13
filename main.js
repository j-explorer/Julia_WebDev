

//Certificate button to change color on mouseover/out. 

const changeColor = document.getElementById('certificates');

changeColor.addEventListener('mouseover', newColor)

function newColor(event){
  if(event){
  document.getElementById('certificates').style.backgroundColor= 'white';
  document.getElementById('certificates_title').style.color = 'black';
  } 
}

const originalColor = document.getElementById('certificates');

originalColor.addEventListener('mouseout', color)

function color(event){
  if(event){
  document.getElementById('certificates').style.backgroundColor= '';
  document.getElementById('certificates_title').style.color = '';
  } 
}