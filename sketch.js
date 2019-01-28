var feinstaubvalue = 0;
var feinstaubvalue1 = 0;
var date = new Date();
var n = date.toDateString();
console.log('date:' , n);


function getData() {
  $.getJSON('http://api.luftdaten.info/v1/sensor/767/', function(data) {
      //data is the JSON string
      //feinstaubvalue = int(data[0].sensordatavalues[0].value);
      feinstaubvalue = parseFloat( data[0].sensordatavalues[0].value );
      feinstaubvalue1 = parseFloat( data[0].sensordatavalues[0].value );

      $('#wert').html("Sensor ID: 767 <br> PM10 µg/m³: "+ feinstaubvalue +"<br> PM2.5 µg/m³: "+feinstaubvalue1+"");

      if (feinstaubvalue1 <2) {
      	$("body").css("background-color","grey");
      } else if (feinstaubvalue <5) {
        $("body").css("background-color","lightgreen");
      } else if (feinstaubvalue <8) {
        $("body").css("background-color","blue");
      }else if (feinstaubvalue <10) {
	     	$("body").css("background-color","pink");
      }else if (feinstaubvalue <14) {
        $("body").css("background-color","red");
      } else if (feinstaubvalue <18) {
        $("body").css("background-color","violet");


      }
  });

}

function preload() {
  getData();
  setInterval(getData, 5 * 60 * 1000);
}

function setup() {
  // put setup code here
  var myCanvas = createCanvas(500, 500);
  myCanvas.parent("container");
}

function draw() {
  background(25);
  ellipse(0,0,20,20);
  if (mouseIsPressed) {
    ellipse(mouseX,mouseY,20,20);
  }
}

function keyPressed() {
  if (keyCode === TAB) {
    alert("feinstaubvalue");
  }

 if (key === '1'){
    feinstaubvalue = 30;
  } else if (key === '2'){
    feinstaubvalue = 90;
  }
}

