var thisBubble = document.querySelector(".thisInfoBubble");
			
			var thisBox = document.querySelector(".this");
			
			thisBox.addEventListener("mouseenter" ,function() {
				thisBubble.className = "thisInfoBubble";
			});
			
			thisBox.addEventListener("mouseleave", function() {
				thisBubble.className="thisInfoBubble hide";
			})	
			
			var thatBubble = document.querySelector(".thatInfoBubble");
			
			var thatBox = document.querySelector(".that");
			
			thatBox.addEventListener("mouseenter" ,function() {
				thatBubble.className = "thatInfoBubble";
			});
			
			thatBox.addEventListener("mouseleave", function() {
				thatBubble.className="thatInfoBubble hide";
			})

			var inputs = document.getElementsByTagName("input");
			var inputThis = inputs[0];
			var inputThat = inputs[1];
			var latestComments = document.getElementsByClassName("latestComments");
			var thisComment = latestComments[0];
			var thatComment = latestComments[1];
			var time = document.getElementsByClassName("time");
			var thisTime = time[0];
			var thatTime = time[1];
			var words = document.getElementsByClassName("popWords");
			var thisWord = [words[0], words[1], words[2]];
			var thatWord = [words[3], words[4], words[5]];



			var x = new Date();
			thisTime.innerHTML = x;
			thatTime.innerHTML = x;

			inputThis.addEventListener("blur", function() {
				thisComment.innerHTML = inputThis.value;

				var string = inputThis.value.split(" ");
				var newArray = [];
				for (var i = 0; i<string.length; i++) {
					newArray.push(string[i]);
				}
				thisWord[0].innerHTML = string[0];
				thisWord[1].innerHTML = string[1] || thisWord[1].innerHTML;
				thisWord[2].innerHTML = string[2] || "hello";
				inputThis.value = "";
				var x = new Date();
				thisTime.innerHTML = x;


			})



			inputThat.addEventListener("blur", function() {
				thatComment.innerHTML = inputThat.value;
				var string = inputThat.value.split(" ");
				var newArray = [];
				for (var i = 0; i<string.length; i++) {
					newArray.push(string[i]);
				}
				thatWord[0].innerHTML = string[0];
				thatWord[1].innerHTML = string[1] || thisWord[1].innerHTML;
				thatWord[2].innerHTML = string[2] || "hello";
				inputThat.value = "";
				var x = new Date();
				thatTime.innerHTML = x;
			})
			var columns = document.getElementsByClassName("these");
			

			var aboutUsTab = document.querySelector(".aboutUs");
			var aboutUsDescription = document.querySelector(".aboutUsParagraph");
			aboutUsTab.addEventListener("click", function() {
				aboutUsDescription.className = "aboutUsParagraph";
				columns[0].className = "this these hidden";
				columns[1].className = "this these hidden";
			});

