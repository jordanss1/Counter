// Create a simple counter

/*
1. Initialised the p elements and buttons as well as the "counter" to their own variables globally because they will be used across many 
functions. Counter is defined outside of the event listeners, otherwise it will stay at 0

2. Created a global if condition that disables the minus button, so that when the page loads the minus button is disabled, to keep
our counter between 1-10

3. Called an event listener on each button with the click event and a function on each button. Added an increment and decrement to
the corresponding buttons so onclick we increment/decrement and used innerText on my p element to display "counter". Created if 
conditions that ensure while each button is used we do not go over ten or under zero, thus the buttons are disabled beforehand
and enabled when required.

4. Because of the vast styling and requirements, I opted for the switch/case syntax for all the possible values of "counter" which are
held in "changeOnClick" function. Defined variables "body" along with one arrays which will only be used locally to style the page when
"counter" is equal to certain values. Appended .style to the elements that needed minimal styling but used the setAttribute method on "counterP"
because of the different styling used for each case, to clean the code up.

5. "changeOnClick" is then called on each decrement/increment in the original two functions to reduce unnecessary code, making the background 
brighter/darker depending on the vaule of "counter"
*/

const counterP = document.getElementsByTagName('p')[0];

const buttonMinus = document.getElementById("button1");

const buttonPlus = document.getElementById("button2");

let counter = 0; 

if (counter === 0) {
	buttonMinus.disabled = true;
};


buttonPlus.addEventListener("click", e => {
	counter++;
	counterP.innerText = counter;
	if (counter === 10) {
		buttonPlus.disabled = true;
	} else if (counter > 0) {
		buttonMinus.disabled = false;
		buttonPlus.disabled = false;
	}
	changeOnClick();
});	



buttonMinus.addEventListener("click", e => {
	counter--;
	counterP.innerText = counter;
	if (counter === 0) {
		buttonMinus.disabled = true;
		buttonPlus.disabled = false; 
	} else if (counter > 0) {
		buttonMinus.disabled = false;
		buttonPlus.disabled = false;
	}
	changeOnClick();
});

const changeOnClick = () => {
	const body = document.querySelector("body");

	const arrayOfColors = ["Black", "rgb(13, 13, 13)", "rgb(26, 26, 26)", "rgb(51, 51, 51)", "rgb(77, 77, 77)", "rgb(102, 102, 102)", "Gray", "rgb(153, 153, 153)", "rgb(179, 179, 179)", "rgb(204, 204, 204)", "White"];


	switch (counter) {
		case 0:
			body.style.backgroundColor = arrayOfColors[0];
			counterP.style.display = "none";
			buttonMinus.style.color = arrayOfColors[10];
			buttonPlus.style.color = arrayOfColors[10];
			break;
		case 1:
			body.style.backgroundColor = arrayOfColors[1];
			counterP.setAttribute("style", "color:white;display:block;position:static;");
			buttonMinus.style.color = arrayOfColors[10];
			buttonPlus.style.color = arrayOfColors[10];
			break;
		case 2:
			body.style.backgroundColor = arrayOfColors[2];
			counterP.setAttribute("style", "color:white;display:block;position:relative;bottom:60px;");
			buttonMinus.style.color = arrayOfColors[10];
			buttonPlus.style.color = arrayOfColors[10];
			break;
		case 3:
			body.style.backgroundColor = arrayOfColors[3];
			counterP.setAttribute("style", "color:white;display:block;position:relative;bottom:120px;");
			buttonMinus.style.color = arrayOfColors[10];
			buttonPlus.style.color = arrayOfColors[10];
			break;
		case 4:
			body.style.backgroundColor = arrayOfColors[4];
			counterP.setAttribute("style", "color:white;display:block;position:relative;bottom:180px;");
			buttonMinus.style.color = arrayOfColors[10];
			buttonPlus.style.color = arrayOfColors[10];
			break;
		case 5: 
			body.style.backgroundColor = arrayOfColors[5];
			counterP.setAttribute("style", "color:white;display:block;position:relative;bottom:240px;");
			buttonMinus.style.color = arrayOfColors[10];
			buttonPlus.style.color = arrayOfColors[10];
			break;
		case 6:
			body.style.backgroundColor = arrayOfColors[6];
			counterP.setAttribute("style", "color:white;display:block;position:relative;bottom:300px;");			
			buttonMinus.style.color = arrayOfColors[10];
			buttonPlus.style.color = arrayOfColors[10];
			break;
		case 7:
			body.style.backgroundColor = arrayOfColors[7];
			counterP.setAttribute("style", "color:white;display:block;position:relative;bottom:360px;");
			buttonMinus.style.color = arrayOfColors[10];
			buttonPlus.style.color = arrayOfColors[10];
			break;
		case 8:
			body.style.backgroundColor = arrayOfColors[8];
			counterP.setAttribute("style", "color:white;display:block;position:relative;bottom:420px;");
			buttonMinus.style.color = arrayOfColors[10];
			buttonPlus.style.color = arrayOfColors[10];
			break;
		case 9:
			body.style.backgroundColor = arrayOfColors[9];
			counterP.setAttribute("style", "color:black;display:block;position:relative;bottom:480px;");
			buttonMinus.style.color = arrayOfColors[0];
			buttonPlus.style.color = arrayOfColors[0];
			break;
		case 10:
			body.style.backgroundColor = arrayOfColors[10]
			counterP.setAttribute("style", "color:black;display:block;position:relative;bottom:540px;");
			buttonMinus.style.color = arrayOfColors[0];
			buttonPlus.style.color = arrayOfColors[0];
			break;
	}
};
