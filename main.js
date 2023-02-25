


const btEIlist = document.querySelectorAll('.bt');

btEIlist.forEach(btnEl =>{
	btnEl.addEventListener('click',()=>{
		document.querySelector('.activess')?.classList.remove('activess');
		btnEl.classList.add('activess');
	})
});

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
var current = document.getElementsByClassName("active");
console.log(current);
current[0].className = current[0].className.replace(" active", "");
this.className += " active";
});
}

  
  function currentSlide(n) {
	showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "flex";
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
  };





  (function(window){
    let defineLibrary = () =>({
        init : function(galleryId){
            let container = document.querySelector(galleryId);

            if(! container){
                return;
            }

            let fristImg = container.querySelector('.small-preview');
            let imgZoom = container.querySelector('.zoom-image');
            if(! imgZoom){
                return;
            }
            if(! fristImg){
                return;
            }
            imgZoom.style.backgroundImage = `url(${fristImg.src})`
            container.addEventListener('click' , function(e){
                let ele = e.target;
                if(ele.classList.contains('small-preview')){
                    imgZoom.style.backgroundImage = `url(${ele.src})`
                    
                    
                }
            })
            imgZoom.addEventListener('mouseenter', function(){
              this.style.backgroundSize = '250%';
            })
            imgZoom.addEventListener('mousemove', function(e){

                let dimentions = this.getBoundingClientRect()

                let x = e.clientX-dimentions.left
                let y = e.clientY-dimentions.top

                x = Math.round(100/(dimentions.width/x));
                y = Math.round(100/(dimentions.height/y));

                this.style.backgroundPosition =`${x}% ${y}%`
            })
            imgZoom.addEventListener('mouseleave',function(){
                this.style.backgroundSize = 'cover';
                this.style.backgroundPosition = 'center'
            })
        }
    })
    


    if(typeof(positiveZoom) == 'undefined'){
        window.positiveZoom = defineLibrary();
    }else{
        console.log('library already defined.')
    }
})(window)






function openModal() {
	document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
	document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
	showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
	showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "flex";
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
  }


