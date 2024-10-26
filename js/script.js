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
    //console.log(subType);
    
});

var updateSubscriptionDiv = function () {
    var monthlyCost = 5; // for basic plan, default
    if (subType === "standard") {
        monthlyCost = 7;
    } else if (subType === "premium") {
        monthlyCost = 10;
    }
    var total = subDuration * monthlyCost;
    result.innerText = 'You have chosen a ${subDurationElement} month ${subTypeElement} plan for $${total}.'
}

