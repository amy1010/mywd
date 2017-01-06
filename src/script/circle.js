(function(){
	window.addEventListener("load",drawCircle);
	window.drawCircle=drawCircle;
	function drawCircle(){
		var elems=document.querySelectorAll("*[data-precent]");
		for(var i=0;i<elems.length;i++){
			var canvas=document.createElement("canvas");
			var ew=elems[i].offsetWidth;
			var eh=elems[i].offsetHeight
			if(ew<=70){ew=70};
			if(eh<=70){eh=70};
			var pre=parseFloat(elems[i].getAttribute("data-precent"));
			canvas.setAttribute("width",ew);
			canvas.setAttribute("height",eh);
			elems[i].innerHTML="";
			elems[i].appendChild(canvas);
			var ctx=canvas.getContext("2d");
			drawColor(ctx,ew,eh,pre)
		}
		function drawColor(ctx,ew,eh,pre){
			for(var i=0;i<=pre;i++){
				(function(){
					var j=i;
					setTimeout(function(){
						drawAnimate(ctx,ew,eh,j);
					},j*20)
				})()
			}
		}
		function drawBasic(ctx,ew,eh){
			ctx.beginPath();
			ctx.lineWidth=2;
			ctx.lineCap="round";
			ctx.strokeStyle="#eee";
			ctx.arc(ew/2,ew/2,ew/2-2*2,0,Math.PI*2);
			ctx.stroke();
		}
		function drawAnimate(ctx,ew,eh,j){
			ctx.clearRect(0,0,ew,eh);
			drawBasic(ctx,ew,eh)
			ctx.beginPath();
			ctx.lineWidth=2;
			ctx.lineCap="round";
			ctx.strokeStyle="#ff6331";
			ctx.arc(ew/2,ew/2,ew/2-2*2,0,Math.PI*2/100*j);
			ctx.stroke();
			ctx.fillStyle="#333";
			ctx.font="16px Aril";
			ctx.textAlign="center";
			ctx.fillText(j+"%",ew/2,ew/2);
		}
	}
})()



















