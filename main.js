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
  window.open("./certificates/certificates.html", "_self");
}

