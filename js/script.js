// Your JS code here
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
    subType = e.target.value;
    //console.log(subType);

});

subDurationElement.addEventListener("change", function (e) {
    subType = e.target.value;
    console.log(subType);
    
});