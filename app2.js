function slider(anything){
  document.querySelector('.competance').src = anything; 
  setTimeout(function () {
    resetImage();
  }, 10000);

}
function resetImage() {
  document.querySelector('.competance').src = './image/competance/illustration.jpg';
}
