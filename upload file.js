window.addEventListener("load",function(e){
	var submit=document.getElementById("submit");
	submit.addEventListener("click",handleupload);
});

var handleupload=function(e){
	e.preventDefault();
	var fileinput=document.getElementById("file");
	var data= new FormData();
	//alert(fileinput.files.length)
	for(var i=0;fileinput.files.length;i++)
		{
			data.append("file[]",fileinput.files[i]);
		}
	var request=new XMLHttpRequest();
	request.upload.addEventListener("progress",function(event){
		if(event.lengthcomputable)
			{
				var percent=event.loaded/event.total;
				var result=Math.floor(percent*100);
				var r=Document.getElementById("result");
				r.innerHTML=result+"%";
			}
	});
	request.upload.addEventListener("load",function(event){});
	request.upload.addEventListener("error",function(event){alert("there is an error");});
	
	request.open("POST","html.html");
	request.setRequestHeader("chache-control","no-chache");
	request.send(data);
}