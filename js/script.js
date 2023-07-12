let menuHTML = "";
const menuButtons = document.getElementsByClassName("button");

//  menu buttons

for (let i = 0; i < menuButtons.length; i++) {
	menuButtons[i].addEventListener("click", function () {
		for (let j = 0; j < menuButtons.length; j++) {
			menuButtons[j].style = [(backgroundColor = ""), (color = "#fff")];
		}
		this.style.backgroundColor = "#dcdcdc";
		this.style.color = "#333";
	});
}

//menu
function menu() {
	menuHTML = `${breakfastHTML} ${lunchHTML} ${dinnerHTML}`;
	document.querySelector(".categoryHeader h2").innerHTML = "Menu";
	document.querySelector(".menu-container").innerHTML = menuHTML;
}

//breakfast
let breakfastHTML = " ";

breakfastLists.forEach((breakfastLists) => {
	breakfastHTML += `		
  <div class="food-content-details">
    <div class="food-content">
      <img src="${breakfastLists.image}"/>
        <div class="details">
        <h3>${breakfastLists.category}</h3>
          <p class="name limit-text-to-2-lines">${breakfastLists.name}</p>
          <p>&#x20A6;${breakfastLists.price / 100}</p>
          <button><a href="https://wa.me/2348179290343">Chat to Order</a></button>
        </div>
    </div>
  </div>`;
});

function breakfast() {
	document.querySelector(
		".categoryHeader p"
	).innerHTML = `Are you in a hurry to meet up with early morning runs? Don't worry, you can order your breakfast ahead of time to have it delivered the moment you arrive at your destination.`;
	document.querySelector(".categoryHeader h2").innerHTML = "Breakfast";
	document.querySelector(".menu-container").innerHTML = breakfastHTML;
}

//lunch
let lunchHTML = "";

lunchLists.forEach((lunchLists) => {
	lunchHTML += `		
  <div class="food-content-details">
    <div class="food-content">
        <img src="${lunchLists.image}"/>
        <div class="details">
        <h3>${lunchLists.category}</h3>
        <p class="name limit-text-to-2-lines">${lunchLists.name}</p>
        <p>&#x20A6;${lunchLists.price / 100}</p>
        <button><a href="https://wa.me/2348179290343">Chat to Order</a></button>
      </div>
    </div>
  </div>`;
});

function lunch() {
	document.querySelector(
		".categoryHeader p"
	).innerHTML = `From small chops required for small gatherings to the famous Naija Jollof Rice to cater for large events. Oh! We are not forgetting the fact that you need that "swallow" and delicious soup to give you energy to match up the day's work. It's just a chat away.`;
	document.querySelector(".categoryHeader h2").innerHTML = "Lunch";
	document.querySelector(".menu-container").innerHTML = lunchHTML;
}

//dinner

let dinnerHTML = "";

dinnerLists.forEach((dinnerLists) => {
	dinnerHTML += `		
  <div class="food-content-details">
    <div class="food-content">
        <img src="${dinnerLists.image}"/>
        <div class="details">
        <h3>${dinnerLists.category}</h3>
        <p class="name limit-text-to-2-lines">${dinnerLists.name}</p>
        <p>&#x20A6;${dinnerLists.price / 100}</p>
        <button><a href="https://wa.me/2348179290343">Chat to Order</a></button>
      </div>
    </div>
  </div>`;
});

function dinner() {
	document.querySelector(
		".categoryHeader p"
	).innerHTML = `Are you planning a house party, a date or movie night? Small chops, cocktails, Shawama, suya, grilled spicy chicken? We deliver!`;
	document.querySelector(".categoryHeader h2").innerHTML = "Dinner";
	document.querySelector(".menu-container").innerHTML = dinnerHTML;
}

//daily menu update

let todaysMenuHTML = "";

todaysMenuLists.forEach((todaysMenuLists) => {
	todaysMenuHTML += `
      <div class="food-item">
        <img src="${todaysMenuLists.image}" />
        <div class="food-item-details">
          <h4>${todaysMenuLists.category}</h4>
          <p class="limit-text-to-1-line">${todaysMenuLists.name}</p>
          <p>&#x20A6;${todaysMenuLists.price / 100}</p>
          <button><a href="https://wa.me/2348179290343">Chat to Order</a></button>
        </div>      
      </div>
    `;
});

function todaysMenu() {
	document.querySelector(".todays-menu-list").innerHTML = todaysMenuHTML;
}
