$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});
$('#note').hide();
$('#d').hide();
$('#tasksdiv').hide();


function mytasks() {
	$('#hello').hide();
	$("#mytasks").addClass("active");
	$("#myday").removeClass("active");
	$("#mynote").removeClass("active");
    $('#tasksdiv').show();
    $('.input-group').show();
    $('#note').hide();
    display();
    $('#d').show();
}


var array =[];
$('#task').click(function () {
	array.push({"value" : $('.taskinput').val(), "date": $('#date').val()});
	$('.taskinput').val('');
	display();

});
var taskdone = [];
function done(id) {
	taskdone.push(array[id]);
	console.log(taskdone);
	array.splice(id,1);
		display();
		displaydone();
		$('#hello').hide();
		$('#d').show();
}

$(document).ready(function(){
    		userName = localStorage.getItem("user");
    		var $name1=$('<span >'+ userName+'"</span>')
    		$("#user").append($name1);
   });



function myday(){
	$('#hello').hide();
	$("#mytasks").removeClass("active");
	$("#mynote").removeClass("active");
	$("#myday").addClass("active");
		$('#taskslist').html('');
		$('.input-group').hide();
		$('#note').hide();
		$('#d').hide();

    		 console.log('hhh');
    		 var d = new Date();
    		 var dm = d.getMonth() +1;
    		 var newdate =  d.getFullYear() + "-" +0+ dm + "-" +d.getDate();
    		 console.log(newdate)
        var index = array.length - 1;
        while(index >= 0){
          var $taskslist = $('#taskslist');
          if (array[index]["date"] === newdate) {
          var task = array[index]["value"];
          var $task = $('<li class="list-group-item"></li>');
          $task.text(task);
          $taskslist.prepend($task);
          }
          index -= 1;
        }

      };

function display() {
	$('#taskslist').html('')
		var index = array.length - 1;
        while(index >= 0){
          var $taskslist = $('#taskslist');
          var task = array[index]["value"];
          var $task = $('<li class="list-group-item" value='+task+' id="'+index+'"></li>');
          $task.text(task);
          $task.prepend($('<div class="input-group-prepend input-group mb-3"><button class="done" onclick="done(this.id)" id="'+index+'"  type="button"><i class="fas fa-check"></i></button></div>'));
          $taskslist.prepend($task);
          index -= 1;
        }
}
function displaydone() {
	$('#taskdone').html('')
		var index = taskdone.length - 1;
        while(index >= 0){
          var $taskdone = $('#taskdone');
          var task = taskdone[index]["value"];
          var $task = $('<li class="list-group-item" value='+task+' id="'+index+'"></li>');
          $task.text(task);
          $taskdone.prepend($task);
          index -= 1;
        }
}
var notes=[];
function mynote(){
	console.log('h');
	$('#taskslist').html('');
		$('.input-group').hide();
	$("#mytasks").removeClass("active");
	$("#myday").removeClass("active");
	$("#mynote").addClass("active")
	$('#note').show();
	$('#d').hide();
	$('#hello').hide();
}

function addnote() {
	      var $addnote = $('#notea');
          var $note = $('<textarea placeholder="Your note..."></textarea>');
          $addnote.append($note);
}
///////////////////////////////////////////////////
var userName = localStorage.getItem("user");
	var users= [{name : 'yasmine' ,  email : 'yasmine.52130008@gmail.com', password : '1', avatar : 'hh'}, {name : 'Amine' ,  email : 'amine@gmail.com', password : '111111', avatar : 'hh'}];
	$('#p').hide()

	$('#log').click(function () {
    	var count = 0 ; 
    		for (var i = 0; i < users.length; i++) {
    		if($('#username').val() === users[i]['name'] && $('#password').val()=== users[i]['password']){
    			 count++;
    			 localStorage.setItem("user", users[i]['name']);
    			 
    		}
    	}
    	if(count>0){
    		window.open("index.html","_self");
    	}else{
    			alert("Your username or password are incorrect");
    	}
    	
    })