text_1 = 'Hello Mr';
text_2 = 'Welcome to the BMW ShowRoom';

show_name = prompt('Enter your name', '');
document.write( "<h2 class='name_show'>"+text_1 + " " + show_name + " " + text_2+ "</h2>");

function myFunction(x) {
    // 
    // alert(x);
    if(x == 'performance')
    {
      var obj;

      obj = {
          "msrp":"$158,500",
          "rpm": "590 ft-lb @3000 rpm",
          "speed":"8-Speed A/T" ,
          "drive" : "All Wheel Drive" 
      };
      document.getElementById("perf_1").innerHTML = obj.msrp;
      document.getElementById("perf_2").innerHTML = obj.rpm;
      document.getElementById("perf_3").innerHTML = obj.speed;
      document.getElementById("perf_4").innerHTML = obj.drive;
    }
    else if(x  == 'exterior') 
    {
      var obj_ex;

      obj_ex = {
          "length":"206.7",
          "bodywidth": "74.9",
          "bodyheight":"58.7" ,
          "wheelbase" : "126.4" 
      };
      document.getElementById("ex_1").innerHTML = obj_ex.length;
      document.getElementById("ex_2").innerHTML = obj_ex.bodywidth;
      document.getElementById("ex_3").innerHTML = obj_ex.bodyheight;
      document.getElementById("ex_4").innerHTML = obj_ex.wheelbase;
    }
    else if (x == 'entertainment')
    {
      var obj_en;
      obj_en = {
        "mp3_play":"Optional"
      };
      document.getElementById("en_1").innerHTML = obj_en.mp3_play;
    }
    else if (x == 'interior') 
    {
      var obj_in;
      obj_in = {
        "sst":"Optional"
      };
      document.getElementById("in_1").innerHTML = obj_in.sst;
    }
  }
