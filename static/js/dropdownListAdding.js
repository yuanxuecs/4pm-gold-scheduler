// dropdownListAdding.js
// add subject into subject first dropdown list(subject)
function addSubject() {
	var subject1 = document.getElementById("subject");
	for(var j = 0; j<subjectArr.length; j++) {
		var value1 = subjectArr[j];
		var option1 = document.createElement("option");
		var text1 = document.createTextNode(value1);
		option1.appendChild(text1);
		subject1.appendChild(option1);
	}
}

// add courses into second dropdown list(courseID)
function postSubject(val) {
	var val1 = val;
	//alert(val1);
	$.ajax({
		type : "POST",
		url : "/load_ajax",
		data: JSON.stringify(val1, null, '\t'),
		contentType: 'application/json;charset=UTF-8',
		success: function(result) {
			var arr1 = clearData(result);
			//var arr1 = ini.concat(arr2);
			var class1 = document.getElementById("class1");
			var options1 = class1.getElementsByTagName("option");

			for(var m = 0; m<options1.length; m++) {
				var op = options1[m];
				class1.removeChild(op);
				m--;
			}

			for(var j = 0; j<arr1.length; j++) {
				var value1 = arr1[j];
				var option1 = document.createElement("option");
				var text1 = document.createTextNode(value1);
				option1.appendChild(text1);
				class1.appendChild(option1);
			}

			var classValue = arr1[0];
			postSubClass(classValue);

		}
	});
}


// add sections into forth dropdown list(section)
function postSubClass(class1) {
	$.ajax({
		type : "POST",
		url : "/load_ajax2",
		data: JSON.stringify(class1, null, '\t'),
		contentType: 'application/json;charset=UTF-8',
		success: function(result) {
			//alert(result);
			//var ini = ["--Please Choose--"];
			var arr1 = clearData(result);
			//var arr1 = ini.concat(arr1);
			//alert(arr1);
			var teacherLecTime = document.getElementById("teacherLecTime");
			var options1 = teacherLecTime.getElementsByTagName("option");

			for(var m = 0; m<options1.length; m++) {
				var op = options1[m];
				teacherLecTime.removeChild(op);
				m--;
			}

			for(var j = 0; j<arr1.length; j++) {
				var value1 = arr1[j];
				var option1 = document.createElement("option");
				var text1 = document.createTextNode(value1);
				option1.appendChild(text1);
				teacherLecTime.appendChild(option1);
			}
			var lecValue = arr1[0];
			postLectTime(lecValue);
		}
	});
}




// add classes into third dropdown list(classes)
function postLectTime(val) {
	var className = document.getElementById("class1").value;
	var valWithClass = className + "~" + val;
	//alert(valWithClass);
	$.ajax({
		type : "POST",
		url : "/load_ajax3",
		data: JSON.stringify(valWithClass, null, '\t'),
		contentType: 'application/json;charset=UTF-8',
		success: function(result) {
			//var ini = ["--Please Choose--"];
			var arr1 = clearData(result);
			//var arr1 = ini.concat(arr2);
			var section = document.getElementById("section");
			var options1 = section.getElementsByTagName("option");

			for(var m = 0; m<options1.length; m++) {
				var op = options1[m];
				section.removeChild(op);
				m--;
			}

			for(var j = 0; j<arr1.length; j++) {
				var value1 = arr1[j];
				var option1 = document.createElement("option");
				var text1 = document.createTextNode(value1);
				option1.appendChild(text1);
				section.appendChild(option1);
			}
		}
	});
}









// add classes into weekly schedule table
// also add classes into fifth dropdown list(user classeslist)
<<<<<<< HEAD
function addClass(planIndex) {
=======
function addClass() {
>>>>>>> 660e042a593fcc03df352e59e35348c0da591e87
	var sub = document.getElementById("subject").value;
	var classValue = document.getElementById("class1").value;
	var lecValue = document.getElementById("teacherLecTime").value;
	var sectionValue = document.getElementById("section").value;

	var finalData = classValue + "*" + lecValue + "*" + sectionValue;
<<<<<<< HEAD
	var classIn = [];
	for(var i = 0; i < classArr[planIndex].length; i++) {
		var cn = classArr[planIndex][i].split("*");
		classIn.push(cn[0]);
	}
	var contain = classIn.includes(classValue);
=======
	var contain = classArr.includes(finalData);
>>>>>>> 660e042a593fcc03df352e59e35348c0da591e87
	if (contain) {
		alert("The class has been registered!");
	} else {

		var data = finalSplite();
		if (data == "") {
			alert("No time section!");
		} else {
			var className = data[0];
			for (var i = 1; i < data.length; i++) {
				addColor(data[0], data[i], color[colorIndex]);
			}

			colorIndex++;
<<<<<<< HEAD
			classArr[planIndex].push(finalData);

			var arr1 = classArr[planIndex];
=======
			classArr.push(finalData);

			var arr1 = classArr;
>>>>>>> 660e042a593fcc03df352e59e35348c0da591e87


			var classOn = document.getElementById("classOn");


			var options1 = classOn.getElementsByTagName("option");
			for (var m = 0; m < options1.length; m++) {
				var op = options1[m];
				classOn.removeChild(op);
				m--;
			}

			for (var j = 0; j < arr1.length; j++) {
				var value1 = arr1[j];
				var option1 = document.createElement("option");
				var text1 = document.createTextNode(value1);
				option1.appendChild(text1);
				classOn.appendChild(option1);
			}
		}
	}
}

