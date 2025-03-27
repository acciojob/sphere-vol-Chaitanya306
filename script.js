function volume_sphere() {
    //Write your code here
	  let ans=""
	  const radiusElement=document.getElementById("radius").textConent;
	  const volumeElement=document.getElementById("volume");	
	  const radius=radiusElement/1
	  if(radius===NaN || radius<0) 	ans=NaN
	  else{
		  ans=(4/3)*Math.PI*(radius**3)
	  }
	  volumeElement.textContent=ans		
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
