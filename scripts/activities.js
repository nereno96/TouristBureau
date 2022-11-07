"use strict";

let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine Tastings", "Other"];

let activities = [
   {
        category: "Adventures", 
        id: "A101", 
        name: "Valley Hot Air Balloons", 
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.", 
        location: "121 S. Main Street",
        price: 265.00 
   },
   {
        category: "Adventures", 
        id: "A102", 
        name: "River Runners: Float Trip", 
        description: "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.", 
        location: "145 FM 103",
        price: 65.00 
    },
    {
        category: "Adventures", 
        id: "A103", 
        name: "River Runners: Ride the Rapids", 
        description: "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!", 
        location: "145 FM 103",
        price: 145.00 
    },     
    {
        category: "Arts & Crafts", 
        id: "AC101", 
        name: "Painting with a Twist : Oils", 
        description: "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.", 
        location: "1991 Paint Drive",
        price: 40.00 
    },
    {
        category: "Arts & Crafts", 
        id: "AC102", 
        name: "Painting with a Twist : Watercolor", 
        description: "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.", 
        location: "1991 Paint Drive",
        price: 40.00 
    },   
    {
        category: "Museums", 
        id: "M101", 
        name: "Bravings Airship Museum", 
        description: "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.", 
        location: "101 Airfield Drive",
        price: 10.00
    },   
    {
        category: "Museums", 
        id: "M102", 
        name: "Forks and Spoons Museum", 
        description: "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!", 
        location: "1056 Lost Knives Court",
        price: 3.00
    },  
    {
        category: "Museums", 
        id: "M103", 
        name: "Steenges Computing Museum", 
        description: "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.", 
        location: "103 Technology Way",
        price: 0.00 
    },  
    {
        category: "Wine Tastings", 
        id: "WT-101", 
        name: "Hastings Winery Tours and Tastings", 
        description: "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.", 
        location: "10987 FM 1187",
        price: 12.00 
    },   
    {
        category: "Wine Tastings", 
        id: "WT-102", 
        name: "Lone Oak Winery", 
        description: "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.", 
        location: "121 Burleson Court",
        price: 0.00 
    },   
    {
        category: "Other", 
        id: "OTH101", 
        name: "Fire Department: Ride Along", 
        description: "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!", 
        location: "10 Redline Drive",
        price: 25.00 
    },   
    {
        category: "Other", 
        id: "OTH102", 
        name: "Homes For Our Neighbors", 
        description: "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!", 
        location: "Call (555) 555-5555",
        price: 0.00 
    }
];

// created variables to access the two lists
const categoriesList = document.getElementById("categoriesList");
const activitiesList = document.getElementById("activitiesList");
const purchaseTicketsForm = document.getElementById("purchaseTicketsForm");
const purchaseBtn = document.getElementById("purchaseBtn");
const resetBtn = document.getElementById("resetBtn");
// creates select one option and adds it to category list
let chooseCategory = new Option("Select one", "select");
categoriesList.appendChild(chooseCategory);

// hides activities list
activitiesList.style.display = "none"

window.onload = function () {
    initCategoriesList();
    categoriesList.onchange = initActivitiesList; 
    activitiesList.onchange = initInfo;
    purchaseTicketsForm.style.display = "none"; // hides form when page loads
    purchaseBtn.onclick = purchaseBtnClicked;
    resetBtn.onclick = resetBtnClicked;
}

// adds values to categories list onload
function initCategoriesList() {
    for (let value of categories) {
        let option = new Option(value, value);
        categoriesList.appendChild(option);
    }
}

// adds values to activities list based on their category
function initActivitiesList() {
    if (categoriesList.value == "select"){
        activityInfo.innerHTML = ""; // clears paragraph holding activity info when the value of categories list has changed
        purchaseTicketsForm.style.display = "none"; // hides form when value of categories list has changed
    }
    activitiesList.length = 0; // clears whatever list may be there already
    if (categoriesList.value == "select") {
        activitiesList.style.display = "none"; // hides activities list if "select one" is selected
    }
    else if (categoriesList.value == "Adventures") {
        let chooseActivity = new Option("Select one", "select"); // adds "select one" option to the list of activities (consider writing one of these statements at the top of the function because it is repeated in every contidional) 
        activitiesList.appendChild(chooseActivity); 
        activitiesList.style.display = "block"; // displays activities list
        for (let value of activities) {
            if (value.category == "Adventures") {
                let option = new Option(value.name, value.id); 
                activitiesList.appendChild(option);
            }
        }
    }
    else if (categoriesList.value == "Arts & Crafts") {
        let chooseActivity = new Option("Select one", "select"); // adds "select one" option to the list of activities (consider writing one of these statements at the top of the function because it is repeated in every contidional) 
        activitiesList.appendChild(chooseActivity);
        activitiesList.style.display = "block"; // displays activities list
        for (let value of activities) {
            if (value.category == "Arts & Crafts") {
                let option = new Option(value.name, value.id);
                activitiesList.appendChild(option);
            }
        }
    }
    else if (categoriesList.value == "Museums") {
        let chooseActivity = new Option("Select one", "select"); // adds "select one" option to the list of activities (consider writing one of these statements at the top of the function because it is repeated in every contidional) 
        activitiesList.appendChild(chooseActivity);
        activitiesList.style.display = "block"; // displays activities list
        for (let value of activities) {
            if (value.category == "Museums") {
                let option = new Option(value.name, value.id);
                activitiesList.appendChild(option);
            }
        }
    }
    else if (categoriesList.value == "Wine Tastings") {
        let chooseActivity = new Option("Select one", "select"); // adds "select one" option to the list of activities (consider writing one of these statements at the top of the function because it is repeated in every contidional) 
        activitiesList.appendChild(chooseActivity);
        activitiesList.style.display = "block"; // displays activities list
        for (let value of activities) {
            if (value.category == "Wine Tastings") {
                let option = new Option(value.name, value.id);
                activitiesList.appendChild(option);
            }
        }
    }
    else if (categoriesList.value == "Other") {
        let chooseActivity = new Option("Select one", "select"); // adds "select one" option to the list of activities (consider writing one of these statements at the top of the function because it is repeated in every contidional) 
        activitiesList.appendChild(chooseActivity);
        activitiesList.style.display = "block";
        for (let value of activities) {
            if (value.category == "Other") {
                let option = new Option(value.name, value.id);
                activitiesList.appendChild(option);
            }
        }
    }
}

function initInfo () {
    console.log("initInfo")
    let activityInfo = document.getElementById("activityInfo");
    for (let value of activities) { // goes through elements in activities object
        if (value.id == activitiesList.value) { // matches id of activity with the value of whatever the selected activity is
            activityInfo.innerHTML = "Activity Id: " + value.id + "<br /> Activity Name: " + value.name + "<br /> Activity Description: " + value.description + "<br /> Activity Location: " + value.location + "<br /> Activity Price: $" + value.price.toFixed(2);
        }
        else if (activitiesList.value == "select" || categoriesList.value == "select") {
            activityInfo.innerHTML = "";
            purchaseTicketsForm.style.display = "none";
        }
        if (value.price > 0 && value.id == activitiesList.value) {
            purchaseTicketsForm.style.display = "block";
        }
        else if (value.price == 0 && value.id == activitiesList.value) {
            purchaseTicketsForm.style.display = "none";
        }
    }
}

function purchaseBtnClicked() {  
    let purchaseMessage = document.getElementById("purchaseMessage");
    let numTickets = Number(document.getElementById("ticketField").value);
    let email = document.getElementById("emailField").value;
    for (let value of activities) {
        if (value.id == activitiesList.value){
            purchaseMessage.innerHTML = "Your credit card has been charged $" + (value.price * numTickets).toFixed(2) + " for " + numTickets + " tickets to " + value.name + ". A confirmation email has been sent to " + email + ".";
        }
    }
    return false;
}

function resetBtnClicked() {
    purchaseTicketsForm.reset();
    let purchaseMessage = document.getElementById("purchaseMessage");
    purchaseMessage.innerHTML = "";
}