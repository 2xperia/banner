(function(){
    //节点制造
    var box = document.getElementById('box');
	var div = document.createElement('div');
    div.setAttribute('class','slider');
    div.style.left = 0+'px';
	div.setAttribute('id','slider');
	box.appendChild(div);
	var div1 = document.getElementById('slider');
	for (let i = 0; i < 3; i++) {
		var lii = document.createElement('div');
		lii.setAttribute('class','slide1');
		lii.setAttribute('id','slide');
		div1.appendChild(lii);
		var img = document.getElementsByClassName('slide1');
		var img1 = document.createElement('img');
		var j = i+1;
		var src = 'img/b'+j+'.png'
		img1.setAttribute('src',src);
		img[i].appendChild(img1)
		
    }
    for (let i = 0; i < 3; i++) {
		var lii = document.createElement('div');
		lii.setAttribute('class','slide2');
		lii.setAttribute('id','slide');
		div1.appendChild(lii);
		var img = document.getElementsByClassName('slide2');
		var img1 = document.createElement('img');
		var j = i+1;
		var src = 'img/b'+j+'.png'
		img1.setAttribute('src',src);
		img[i].appendChild(img1)
		
	}
	var div2 = document.createElement('div');
	div2.setAttribute('class','prev');
    div2.setAttribute('id','prev');
    div2.innerHTML = '<'
	box.appendChild(div2);
	var div3 = document.createElement('div');
	div3.setAttribute('class','next');
    div3.setAttribute('id','next');
    div3.innerHTML = '>'
	box.appendChild(div3);

	var ull = document.createElement('ul');
	ull.setAttribute('class','nav')
	ull.setAttribute('id','navs');
	box.appendChild(ull);
	var ulll = document.getElementById('navs');
	for (let i = 0; i < 5; i++) {
        var lii = document.createElement('li');
        if(i == 0){
            lii.setAttribute('class','on');
        }
		lii.innerHTML = i+1;
		ulll.appendChild(lii);
	}

    //组件实现
    var slider = document.querySelector('.slider');
    var next = document.querySelector('.next')
    var prev = document.querySelector('.prev');
    var index = 0;var timer = null;
    var dots = document.getElementsByTagName("li");
    var container = document.querySelector(".box");
    container.onmouseenter = function(){
        clearInterval(timer);
        console.log('enter')
    }
    container.onmouseleave = function(){
        auto();
        console.log('leave')
    }
    function show(){
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = ""
            console.log('show')
            
        }
        dots[index].className = "on"
    }
    function prev_(){
        index--;
        if (index<0) {
            index = 4;
        }
        show();
        var left;
        if(slider.style.left === '0px'){
            left = -2400;
        }else{
            left = parseInt(slider.style.left)-1200;
        }
        slider.style.left = left +"px";
        console.log("prev"+index)
    };
    function next_(){
        index++;
        if(index>4){
            index = 0;
        }
        show();
        var left;
        if(slider.style.left === '-4800px'){
            slider.style.transform = 'translate3d(' + 0 + 'px, 0, 0)'; 
            slider.style.transition = 'transform 1s ease-out'; 
            slider.style.left = "0px";
            console.log("transform1234")
        }else if(slider.style.left === '0px'){
            console.log(left);
            
            slider.style.transform = 'translate3d(-' + 1200 + 'px, 0, 0)'; 
            slider.style.transition = 'transform 1s ease-out';
            console.log("transform1");left = slider.offsetLeft-1200;
            slider.style.left = left +"px";
        }
        else if(slider.style.left === '-1200px'){
            console.log(left);
            slider.style.transform = 'translate3d(-' + 2400 + 'px, 0, 0)'; 
            slider.style.transition = 'transform 1s ease-out';
            console.log("transform1");
            left = slider.offsetLeft-1200;
            slider.style.left = left +"px";
        }
        else if(slider.style.left === '-2400px'){
            console.log(left);
            slider.style.transform = 'translate3d(-' + 3600 + 'px, 0, 0)'; 
            slider.style.transition = 'transform 1s ease-out';
            console.log("transform1");
            left = slider.offsetLeft-1200;
            slider.style.left = left +"px";
        }
        else if(slider.style.left === '-3600px'){
            console.log(left);
            slider.style.transform = 'translate3d(-' + 4800 + 'px, 0, 0)'; 
            slider.style.transition = 'transform 1s ease-out';
            console.log("transform1");
            left = slider.offsetLeft-1200;
            slider.style.left = left +"px";
        }
    };
    for (let i = 0; i < dots.length; i++) {
        (function(i){
            dots[i].onclick = function(){
                var dis = index - i;
                if(index == 4 && parseInt(slider.style.left)!==-1200){
                    dis = dis - 5;
                }
                if(index == 0 && parseInt(slider.style.left)!==-3600){
                    dis = 5+dis;
                }
                slider.style.left = (parseInt(slider.style.left) - dis*1200)+"px";
                index = 1;
                show();
            }
        })(i);
        
    }
    function auto(){
        timer = setInterval(function(){
            next_();
        },2000)
    };
    auto();
    prev.onclick = function(){
        prev_();
    }
    next.onclick = function () {
        next_();
    }



})();