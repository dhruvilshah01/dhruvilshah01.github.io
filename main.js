
let etch = document.getElementById('etch'); 
let visualizer = document.getElementById('visualizer'); 
let gis = document.getElementById('gis');


etch.onmouseover =  function() {changeProjectMouseOver(etch.id)}; 
etch.onmouseout = function() {changeProjectMouseExit(etch.id)};  

visualizer.onmouseover =  function() {changeProjectMouseOver(visualizer.id)}; 
visualizer.onmouseout = function() {changeProjectMouseExit(visualizer.id)};  

gis.onmouseover =  function() {changeProjectMouseOver(gis.id)}; 
gis.onmouseout = function() {changeProjectMouseExit(gis.id)}; 


//Smooth Scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener("click", function(e) { 
        e.preventDefault(); 
        document.querySelector(this.getAttribute("href")).scrollIntoView({ 
            behavior: "smooth"
        })
    })
})

function changeProjectMouseOver(idName) { 
    if(idName == "etch") {  
        console.log("inside etch");
        let etchdesc = document.getElementById('etchdesc'); 
        etchdesc.textContent = "Built an Etch-A-Sketch game using HTML, CSS and Vanilla JavaScript. First time working with JavaScript and DOM Manipulation"; 
        etchdesc.style.paddingTop = '20px';
    } 

    else if(idName == "visualizer") {  
        console.log("inside etch");
        let visdesc = document.getElementById('visdesc'); 
        visdesc.textContent = "Built a COVID-19 Visualizer that sorts by Race, Age and State using Java. Used csv files given to us as our data. Utilized different data structres and sorting methods"; 
        visdesc.style.paddingTop = '10px';
    } 

    else if(idName == "gis") {  
        console.log("inside etch");
        let gisdesc = document.getElementById('gisdesc'); 
        gisdesc.textContent = "Built a GIS System that allows you to search for regions based on feature name, geographical location and area using Java. Utilized a variety of data structures such as a hashtable, QuadTree and buffer pool.";
        gisdesc.style.paddingTop = '10px';
    }

} 


function changeProjectMouseExit(idName) { 
    if(idName == "etch") {  
        console.log("inside etch");
        let etchdesc = document.getElementById('etchdesc'); 
        etchdesc.textContent = "Etch-A-Sketch"; 
        etchdesc.style.paddingTop = '40px';
    }

    
    else if(idName == "visualizer") {  
        console.log("inside etch");
        let visdesc = document.getElementById('visdesc'); 
        visdesc.textContent = "Covid-19 Visualizer"; 
        visdesc.style.paddingTop = '40px';
    } 

    else if(idName == "gis") {  
        console.log("inside etch");
        let gisdesc = document.getElementById('gisdesc'); 
        gisdesc.textContent = "GIS System"; 
        gisdesc.style.paddingTop = '40px';
    }
}