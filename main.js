//Button to open project
const oxchemistclubButton= document.getElementById('0xchemistclub_button');

oxchemistclubButton.addEventListener('click', openProject);
function openProject (){
  window.open("https://0xchemist.club/", "_self");
}

//Button to open certificates
const certificateButton= document.getElementById('certificate_button');

certificateButton.addEventListener('click', openCertificates);
function openCertificates (){
  window.open("/certificates/index.html", "_self");
}

//CertificateButton to change color on mouseover/out. 
const award= document.getElementById('award');
certificateButton.addEventListener('mouseover', newColor);

function newColor(event){
  if(event)
  {
  certificateButton.style.backgroundColor= 'white';
  certificateButton.style.color= 'black';
  award.style.color='rgb(103, 116, 165)';
  } 
}

certificateButton.addEventListener('mouseout', color)

function color(event){
  if(event){
  certificateButton.style.backgroundColor= '';
  certificateButton.style.color = '';
  award.style.color='white';
  } 
}

