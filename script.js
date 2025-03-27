function volume_sphere() {
    //Write your code here
	  let ans=""
	  const radiusElement=document.getElementById("radius").value;
	  const volumeElement=document.getElementById("volume");	
	  const radius=radiusElement/1
	  if(isNaN(radius) || radius<0) 	ans=NaN
	  else{
		  ans=(4/3)*Math.PI*(radius**3)
		  ans=ans.toFixed(4)
	  }
	  volumeElement.value=ans		
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
