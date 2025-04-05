function allFunction() {
  var allRegions = document.getElementById("allRegions");
  var surfaceRegions = document.getElementById("surfaceRegions");
  var skyRegions = document.getElementById("skyRegions");
  var depthsRegions = document.getElementById("depthsRegions");

  var surfaceDropdown = document.getElementById('surfaceDropdown');
  var skyDropdown = document.getElementById('skyDropdown');
  var depthsDropdown = document.getElementById('depthsDropdown');

  allRegions.style.backgroundColor = "forestgreen";

  surfaceRegions.style.backgroundColor =  "white";
  skyRegions.style.backgroundColor =  "white";
  depthsRegions.style.backgroundColor = "white";
  
  if(skyDropdown.classList.contains("show")) {
    skyDropdown.classList.toggle("show");
  }
  else if(depthsDropdown.classList.contains("show")){
    depthsDropdown.classList.toggle("show");
  }else if(surfaceDropdown.classList.contains("show")) {
    surfaceDropdown.classList.toggle("show");
  }
}

function myFunction() {
  var surfaceDropdown = document.getElementById('surfaceDropdown');
  var skyDropdown = document.getElementById('skyDropdown');
  var depthsDropdown = document.getElementById('depthsDropdown');

  surfaceDropdown.classList.toggle("show");
  surfaceRegions.style.backgroundColor = "forestgreen";

  allRegions.style.backgroundColor =  "white";
  skyRegions.style.backgroundColor =  "white";
  depthsRegions.style.backgroundColor = "white";

  if(skyDropdown.classList.contains("show")) {
    skyDropdown.classList.toggle("show");
  }
  else if(depthsDropdown.classList.contains("show")){
    depthsDropdown.classList.toggle("show");
 }
}

function skyFunction() {
  var surfaceDropdown = document.getElementById('surfaceDropdown');
  var skyDropdown = document.getElementById('skyDropdown');
  var depthsDropdown = document.getElementById('depthsDropdown');
  
  skyDropdown.classList.toggle("show");
  skyRegions.style.backgroundColor = "forestgreen";

  allRegions.style.backgroundColor =  "white";
  surfaceRegions.style.backgroundColor =  "white";
  depthsRegions.style.backgroundColor = "white";
  
  if(surfaceDropdown.classList.contains("show")) {
    surfaceDropdown.classList.toggle("show");
  } else if(depthsDropdown.classList.contains("show")){
    depthsDropdown.classList.toggle("show");
  }
}
          
function depthsFunction() {
    var surfaceDropdown = document.getElementById('surfaceDropdown');
    var skyDropdown = document.getElementById('skyDropdown');
    var depthsDropdown = document.getElementById('depthsDropdown');
    
    depthsDropdown.classList.toggle("show");
    depthsRegions.style.backgroundColor = "forestgreen";

  allRegions.style.backgroundColor =  "white";
  surfaceRegions.style.backgroundColor =  "white";
  skyRegions.style.backgroundColor = "white";
    
    if(surfaceDropdown.classList.contains("show")) {
      surfaceDropdown.classList.toggle("show");
    } else if(skyDropdown.classList.contains("show")){
      skyDropdown.classList.toggle("show");
    }
}
