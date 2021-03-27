

//////////////////////navnext start here////////////////////////////////////

function navNext0()
{
document.getElementById("canvas0").style.visibility="hidden";

document.getElementById("canvas1").style.visibility="visible";

}

function navNext1()
{
document.getElementById("canvas1").style.visibility="hidden";

document.getElementById("canvas2").style.visibility="visible";

}

function navNext2()
{
document.getElementById("canvas2").style.visibility="hidden";

document.getElementById("canvas3").style.visibility="visible";

}



function add_empty_tank()

{

document.getElementById("add_blank_tank").style.visibility="hidden";
document.getElementById("arw1").style.visibility="hidden";

document.getElementById("blank_tank_canvas1").style.visibility="visible";
document.getElementById("blank_tank_canvas1").style.animation="blank_tank_canvas1 1s forwards"; 
document.getElementById("canvas1").style.cursor="none";
setTimeout(function()
{
document.getElementById("transbox_blank_tank_canvas1").style.visibility="visible";
document.getElementById("canvas1").style.cursor="auto";
document.getElementById("ar1_canvas1").style.visibility="visible";
document.getElementById("s1_1").style.visibility="hidden";
document.getElementById("s1_2").style.visibility="visible";
},1500);
}



function transbox_blank_tank_canvas1()
{
document.getElementById("transbox_blank_tank_canvas1").style.visibility="hidden";
document.getElementById("ar1_canvas1").style.visibility="hidden";
document.getElementById("blank_tank_canvas1").style.animation="blank_tank_canvas1_pos 1s forwards"; 
document.getElementById("canvas1").style.cursor="none";
setTimeout(function()
{
document.getElementById("s1_2").style.visibility="hidden";
document.getElementById("s1_3").style.visibility="visible";

document.getElementById("canvas1").style.cursor="auto";
document.getElementById("arw6").style.visibility="visible";
document.getElementById("add_solution").style.visibility="visible";

},1000);
}


function add_solution()
{
document.getElementById("tank_upper_layer_canvas1").style.visibility="visible";
document.getElementById("arw6").style.visibility="hidden";
document.getElementById("add_solution").style.visibility="hidden";

document.getElementById("brine_solution_canvas1").style.visibility="visible";
document.getElementById("brine_solution_canvas1").style.animation="brine_solution_canvas1 1s forwards"; 
document.getElementById("canvas1").style.cursor="none";
setTimeout(function()
{
document.getElementById("transbox_solution_canvas1").style.visibility="visible";
document.getElementById("canvas1").style.cursor="auto";
document.getElementById("ar2_canvas1").style.visibility="visible";
document.getElementById("s1_3").style.visibility="hidden";
document.getElementById("s1_4").style.visibility="visible";
},1000);
}

function transbox_solution_canvas1()
{
document.getElementById("transbox_solution_canvas1").style.visibility="hidden";
document.getElementById("ar2_canvas1").style.visibility="hidden";
document.getElementById("brine_solution_canvas1").style.animation="brine_solution_rotate_canvas1 1s forwards";
document.getElementById("canvas1").style.cursor="none";
setTimeout(function()
{
document.getElementById("brine_solution_canvas1").style.visibility="hidden";
document.getElementById("brine_solution_tilt_canvas1").style.visibility="visible";
document.getElementById("brine_solution_tilt_canvas1").style.animation="brine_solution_tilt_canvas1 0.2s forwards";
setTimeout(function()
{
document.getElementById("brine_solution_tilt_canvas1").style.visibility="hidden";
document.getElementById("brine_solution_more_tilt_canvas1").style.visibility="visible";
document.getElementById("solution_flow_canvas1").style.visibility="visible";
document.getElementById("solution_flow_canvas1").style.animation="solution_flow_canvas1  1s forwards";
setTimeout(function()
{
document.getElementById("solution_flow_canvas1").style.visibility="hidden";
document.getElementById("solution_flow2_canvas1").style.visibility="visible";
document.getElementById("solution_flow2_canvas1").style.animation="solution_flow2_canvas1  0.5s infinite";
document.getElementById("brine_solution_color_canvas1").style.visibility="visible";
document.getElementById("brine_solution_color_canvas1").style.animation="brine_solution_color_canvas1  2s forwards";
$( "#beaker_can10" ).fadeIn(2500);
$( "#brine_solution_more_tilt_canvas1" ).fadeOut(2800);
setTimeout(function()
{
document.getElementById("solution_flow2_canvas1").style.visibility="hidden";
setTimeout(function()
{
document.getElementById("beaker_can10").style.animation="beaker_can10_rotate  2s forwards";
setTimeout(function()
{
document.getElementById("canvas1").style.cursor="auto";
document.getElementById("s1_4").style.visibility="hidden";
document.getElementById("s1_5").style.visibility="visible";

document.getElementById("arw2").style.visibility="visible";
document.getElementById("add_bare_stand").style.visibility="visible";
document.getElementById("beaker_can10").style.visibility="hidden";
},2000);

},200);
},1750); 
},1000); 
},150); 
},1000); 
}


function add_bare_stand()
{
document.getElementById("arw2").style.visibility="hidden";
document.getElementById("add_bare_stand").style.visibility="hidden";

document.getElementById("bare_holder_stand_canvas1").style.visibility="visible";
document.getElementById("bare_holder_stand_canvas1").style.animation="bare_holder_stand_canvas1 1s forwards"; 
document.getElementById("canvas1").style.cursor="none";

setTimeout(function()
{
document.getElementById("bare_holder_stand_canvas1").style.visibility="hidden";
document.getElementById("bare_holder_stand_shadow_canvas1").style.visibility="visible";

document.getElementById("s1_5").style.visibility="hidden";
document.getElementById("s1_6").style.visibility="visible";

document.getElementById("canvas1").style.cursor="auto";

document.getElementById("arw3").style.visibility="visible";
document.getElementById("add_iron").style.visibility="visible";
},1000);
}


function add_iron()
{
document.getElementById("arw3").style.visibility="hidden";
document.getElementById("add_iron").style.visibility="hidden";

document.getElementById("bare_rebar_canvas1").style.visibility="visible";
document.getElementById("bare_rebar_canvas1").style.animation="bare_rebar_canvas1 1.5s forwards"; 
document.getElementById("canvas1").style.cursor="none";

setTimeout(function()
{

document.getElementById("transbox_iron_with_shadow_canvas1").style.visibility="visible";
document.getElementById("canvas1").style.cursor="auto";
document.getElementById("ar3_canvas1").style.visibility="visible";
document.getElementById("s1_6").style.visibility="hidden";
document.getElementById("s1_7").style.visibility="visible";
},1400);
}

function transbox_iron_with_shadow_canvas1()
{
document.getElementById("transbox_iron_with_shadow_canvas1").style.visibility="hidden";
document.getElementById("ar3_canvas1").style.visibility="hidden";

document.getElementById("bare_rebar_canvas1").style.animation="bare_rebar_canvas1_pos 1s forwards"; 
document.getElementById("canvas1").style.cursor="none";
setTimeout(function()
{

document.getElementById("bare_rebar_canvas1").style.animation="bare_rebar_canvas1_pos_fix 2.8s forwards";
setTimeout(function()
{
document.getElementById("s1_7").style.visibility="hidden";
document.getElementById("s1_8").style.visibility="visible";

document.getElementById("canvas1").style.cursor="auto";

document.getElementById("arw4").style.visibility="visible";
document.getElementById("add_copper_stand").style.visibility="visible";

},2800);
},1000);
}

function add_copper_stand()
{
document.getElementById("arw4").style.visibility="hidden";
document.getElementById("add_copper_stand").style.visibility="hidden";

document.getElementById("copper_rod_stand_canvas1").style.visibility="visible";
document.getElementById("copper_rod_stand_canvas1").style.animation="copper_rod_stand_canvas1 1.5s forwards";
document.getElementById("canvas1").style.cursor="none"; 

setTimeout(function()
{
document.getElementById("copper_rod_stand_canvas1").style.visibility="hidden";
document.getElementById("copper_holder_stand_shadow_canvas1").style.visibility="visible";

document.getElementById("s1_8").style.visibility="hidden";
document.getElementById("s1_9").style.visibility="visible";

document.getElementById("canvas1").style.cursor="auto";

document.getElementById("arw5").style.visibility="visible";
document.getElementById("add_copper_rod").style.visibility="visible";
},1500);
}


function add_copper_rod()
{
document.getElementById("arw5").style.visibility="hidden";
document.getElementById("add_copper_rod").style.visibility="hidden";

document.getElementById("copper_rod_canvas1").style.visibility="visible";
document.getElementById("copper_rod_canvas1").style.animation="copper_rod_canvas1 2s forwards";
document.getElementById("canvas1").style.cursor="none";
setTimeout(function()
{
document.getElementById("s1_9").style.visibility="hidden";
document.getElementById("s1_10").style.visibility="visible";
document.getElementById("transbox_copper_with_shadow_canvas1").style.visibility="visible";
document.getElementById("canvas1").style.cursor="auto";
document.getElementById("ar4_canvas1").style.visibility="visible";
},2000);
}

function transbox_copper_with_shadow_canvas1()
{
document.getElementById("transbox_copper_with_shadow_canvas1").style.visibility="hidden";
document.getElementById("ar4_canvas1").style.visibility="hidden";
document.getElementById("copper_rod_canvas1").style.animation="copper_rod_canvas1_pos 1s forwards";
document.getElementById("canvas1").style.cursor="none"; 
setTimeout(function()
{
document.getElementById("copper_rod_canvas1").style.animation="copper_rod_canvas1_pos_fix 2.8s forwards";
setTimeout(function()
{
document.getElementById("s1_10").style.visibility="hidden";
document.getElementById("s1_11").style.visibility="visible";
document.getElementById("canvas1").style.cursor="auto";
$('#arrow1').show();
$('#nextButton1').show();
},2800);
},1000);
}

function copper_animation_canvas2()
{
document.getElementById("copper_animation_canvas2").style.visibility="hidden";
document.getElementById("ar1_canvas2").style.visibility="hidden";
document.getElementById("canvas2").style.cursor="none";
document.getElementById("black").style.animation="black 1s forwards"; 
document.getElementById("blackclipclose_canvas2").style.animation="blackclipclose_canvas2 1s forwards"; 
setTimeout(function()
{
document.getElementById("blackclipclose_canvas2").style.visibility="hidden";
document.getElementById("blackclipopen_canvas2").style.visibility="visible";
document.getElementById("black").style.animation="black_again 1s forwards"; 
document.getElementById("blackclipopen_canvas2").style.animation="blackclipopen_canvas2 1s forwards"; 

setTimeout(function()
{
document.getElementById("blackclipopen_canvas2").style.visibility="hidden";
document.getElementById("blackclipclose1_canvas2").style.visibility="visible";
document.getElementById("iron_animation_canvas2").style.visibility="visible";
document.getElementById("canvas2").style.cursor="auto";

document.getElementById("s2_1").style.visibility="hidden";
document.getElementById("s2_2").style.visibility="visible";
document.getElementById("ar2_canvas2").style.visibility="visible";
},1000);
},1000);
}

function iron_animation_canvas2()
{
document.getElementById("iron_animation_canvas2").style.visibility="hidden";
document.getElementById("ar2_canvas2").style.visibility="hidden";
document.getElementById("red").style.animation="red 1s forwards"; 
document.getElementById("redclipclose_canvas2").style.animation="redclipclose_canvas2 1s forwards"; 
document.getElementById("canvas2").style.cursor="none";

setTimeout(function()
{
document.getElementById("redclipclose_canvas2").style.visibility="hidden";
document.getElementById("redclipopen_canvas2").style.visibility="visible";
document.getElementById("red").style.animation="red_again 1s forwards"; 
document.getElementById("redclipopen_canvas2").style.animation="redclipopen_canvas2 1s forwards"; 

setTimeout(function()
{
document.getElementById("redclipopen_canvas2").style.visibility="hidden";
document.getElementById("redclipclose1_canvas2").style.visibility="visible";
document.getElementById("on_canvas2").style.visibility="visible";
document.getElementById("canvas2").style.cursor="auto";
// document.getElementById("s2_2").style.visibility="hidden";
// document.getElementById("s2_3").style.visibility="visible";
// document.getElementById("ar3_canvas2").style.visibility="visible";
},1000);
},1000);
// }

// function on_canvas2()
// {
// document.getElementById("on_canvas2").style.visibility="hidden";
// document.getElementById("ar3_canvas2").style.visibility="hidden";
// document.getElementById("offscr_canvas2").style.visibility="hidden";
setTimeout(function()
{
    document.getElementById("canvas2").style.cursor="none";

$( "#bubles1_can11" ).fadeIn(1000);
$( "#bubles2_can11" ).fadeIn(1000);
$( "#fog2_tripple_can11" ).fadeIn(1000);
$( "#fog1_can11" ).fadeIn(1000);


document.getElementById("a1").style.visibility="visible";
document.getElementById("a1").style.animation="a1 1s infinite";
setTimeout(function()
{
document.getElementById("a2").style.visibility="visible";
document.getElementById("a2").style.animation="a2 1s infinite";
setTimeout(function()
{
document.getElementById("a3").style.visibility="visible";
document.getElementById("a3").style.animation="a3 1s infinite";
setTimeout(function()
{
document.getElementById("a4").style.visibility="visible";
document.getElementById("a4").style.animation="a4 1s infinite";
setTimeout(function()
{
document.getElementById("a5").style.visibility="visible";
document.getElementById("a5").style.animation="a5 1s infinite";
setTimeout(function()
{
document.getElementById("a6").style.visibility="visible";
document.getElementById("a6").style.animation="a6 1s infinite";
setTimeout(function()
{
document.getElementById("a7").style.visibility="visible";
document.getElementById("a7").style.animation="a7 1s infinite";
setTimeout(function()
{
document.getElementById("a8").style.visibility="visible";
document.getElementById("a8").style.animation="a8 1s infinite";
setTimeout(function()
{
document.getElementById("a9").style.visibility="visible";
document.getElementById("a9").style.animation="a9 1s infinite";
setTimeout(function()
{
document.getElementById("a10").style.visibility="visible";
document.getElementById("a10").style.animation="a10 1s infinite";
setTimeout(function()
{
document.getElementById("a11").style.visibility="visible";
document.getElementById("a11").style.animation="a11 1s infinite";
setTimeout(function()
{
document.getElementById("a12").style.visibility="visible";
document.getElementById("a12").style.animation="a12 1s infinite";
setTimeout(function()
{
document.getElementById("a13").style.visibility="visible";
document.getElementById("a13").style.animation="a13 1s infinite";
setTimeout(function()
{
document.getElementById("a14").style.visibility="visible";
document.getElementById("a14").style.animation="a14 1s infinite";
},900);

},900);

},900);

},900);

},900);
},900);

},900);
},900);
},900);
},900);

},900);
},900);
},900);
},1100);
setTimeout(function()
{
document.getElementById("bubles1_can111").style.animation="bubles1_can111 1s forwards";
document.getElementById("bubles2_can111").style.animation="bubles1_can111 1s forwards";
$( "#bubles1_can111" ).fadeOut(1000);
$( "#bubles2_can111" ).fadeOut(1000);
$( "#bubles3_can111" ).fadeIn(1300);
$( "#bubles4_can111" ).fadeIn(1300);
setTimeout(function()
{
document.getElementById("fog1_can111").style.animation="fog1_can111 1s forwards";
document.getElementById("fog2_tripple_can111").style.animation="fog2_tripple_can111 1s forwards";
$( "#fog1_can111" ).fadeOut(600);
$( "#fog2_tripple_can111" ).fadeOut(600);
$( "#fog3_can111" ).fadeIn(1300);
$( "#fog4_tripple_can111" ).fadeIn(1300);
},500);
},800);
setTimeout(function()
{
document.getElementById("bubles3_can111").style.animation="bubles2_can111 1s forwards";
document.getElementById("bubles4_can111").style.animation="bubles2_can111 1s forwards";
$( "#bubles3_can111" ).fadeOut(1000);
$( "#bubles4_can111" ).fadeOut(1000);
$( "#bubles5_can111" ).fadeIn(2000);
$( "#bubles6_can111" ).fadeIn(2000);
setTimeout(function()
{
document.getElementById("fog3_can111").style.animation="fog1_can111 1s forwards";
document.getElementById("fog4_tripple_can111").style.animation="fog2_tripple_can111 1s forwards";
$( "#fog3_can111" ).fadeOut(600);
$( "#fog4_tripple_can111" ).fadeOut(600);
$( "#fog5_can111" ).fadeIn(2000);
$( "#fog6_tripple_can111" ).fadeIn(2000);
},500);
},1700);
setTimeout(function()
{
document.getElementById("bubles5_can111").style.animation="bubles1_can111 1s forwards";
document.getElementById("bubles6_can111").style.animation="bubles1_can111 1s forwards";
$( "#bubles5_can111" ).fadeOut(1000);
$( "#bubles6_can111" ).fadeOut(1000);
$( "#bubles7_can111" ).fadeIn(3500);
$( "#bubles8_can111" ).fadeIn(3500);
setTimeout(function()
{
document.getElementById("fog5_can111").style.animation="fog1_can111 1s forwards";
document.getElementById("fog6_tripple_can111").style.animation="fog2_tripple_can111 1s forwards";
$( "#fog5_can111" ).fadeOut(600);
$( "#fog6_tripple_can111" ).fadeOut(600);
$( "#fog7_can111" ).fadeIn(3500);
$( "#fog8_tripple_can111" ).fadeIn(3500);
},500);
},2500);
setTimeout(function()
{
document.getElementById("bubles7_can111").style.animation="agnbubles2_can111 2s forwards";
document.getElementById("bubles8_can111").style.animation="agnbubles2_can111 2s forwards";
$( "#bubles7_can111" ).fadeOut(1000);
$( "#bubles8_can111" ).fadeOut(1000);
$( "#bubles9_can111" ).fadeIn(4800);
$( "#bubles10_can111" ).fadeIn(4800);
setTimeout(function()
{
document.getElementById("fog7_can111").style.animation="fog1_can111 1s forwards";
document.getElementById("fog8_tripple_can111").style.animation="fog2_tripple_can111 1s forwards";
$( "#fog7_can111" ).fadeOut(600);
$( "#fog8_tripple_can111" ).fadeOut(600);
$( "#fog9_can111" ).fadeIn(3500);
$( "#fog10_tripple_can111" ).fadeIn(3500);
},500);
},4000);
setTimeout(function()
{
document.getElementById("bubles9_can111").style.animation="bubles1_can111 2s forwards";
document.getElementById("bubles10_can111").style.animation="bubles1_can111 2s forwards";
$( "#bubles9_can111" ).fadeOut(1000);
$( "#bubles10_can111" ).fadeOut(1000);
$( "#bubles1_can111" ).fadeIn(1000);
$( "#bubles2_can111" ).fadeIn(1000);
setTimeout(function()
{
document.getElementById("fog9_can111").style.animation="fog1_can111 1s forwards";
document.getElementById("fog10_tripple_can111").style.animation="fog2_tripple_can111 1s forwards";
$( "#fog9_can111" ).fadeOut(600);
$( "#fog10_tripple_can111" ).fadeOut(600);
$( "#fog1_can111" ).fadeIn(1000);
$( "#fog2_tripple_can111" ).fadeIn(1000);
},500);
},6000);
setTimeout(function()
{
setTimeout(function()
{
document.getElementById("bubles1_can111").style.animation="agnbubles1_can111 1s forwards";
document.getElementById("bubles2_can111").style.animation="agnbubles1_can111 1s forwards";
$( "#bubles1_can111" ).fadeOut(800);
$( "#bubles2_can111" ).fadeOut(800);
$( "#bubles3_can111" ).fadeIn(1300);
$( "#bubles4_can111" ).fadeIn(1300);
setTimeout(function()
{
document.getElementById("fog1_can111").style.animation="agnfog1_can111 1s forwards";
document.getElementById("fog2_tripple_can111").style.animation="agnfog2_tripple_can111 1s forwards";
$( "#fog1_can111" ).fadeOut(600);
$( "#fog2_tripple_can111" ).fadeOut(600);
$( "#fog3_can111" ).fadeIn(1300);
$( "#fog4_tripple_can111" ).fadeIn(1300);
},500);
},800);
setTimeout(function()
{
document.getElementById("bubles3_can111").style.animation="agnbubles2_can111 1s forwards";
document.getElementById("bubles4_can111").style.animation="agnbubles2_can111 1s forwards";
$( "#bubles3_can111" ).fadeOut(1000);
$( "#bubles4_can111" ).fadeOut(1000);
$( "#bubles5_can111" ).fadeIn(2000);
$( "#bubles6_can111" ).fadeIn(2000);
setTimeout(function()
{
document.getElementById("fog3_can111").style.animation="agnfog1_can111 1s forwards";
document.getElementById("fog4_tripple_can111").style.animation="agnfog2_tripple_can111 1s forwards";
$( "#fog3_can111" ).fadeOut(600);
$( "#fog4_tripple_can111" ).fadeOut(600);
$( "#fog5_can111" ).fadeIn(2000);
$( "#fog6_tripple_can111" ).fadeIn(2000);
},500);
},1700);
setTimeout(function()
{
document.getElementById("bubles5_can111").style.animation="agnbubles1_can111 1s forwards";
document.getElementById("bubles6_can111").style.animation="agnbubles1_can111 1s forwards";
$( "#bubles5_can111" ).fadeOut(1000);
$( "#bubles6_can111" ).fadeOut(1000);
$( "#bubles7_can111" ).fadeIn(3500);
$( "#bubles8_can111" ).fadeIn(3500);
setTimeout(function()
{
document.getElementById("fog5_can111").style.animation="agnfog1_can111 1s forwards";
document.getElementById("fog6_tripple_can111").style.animation="agnfog2_tripple_can111 1s forwards";
$( "#fog5_can111" ).fadeOut(600);
$( "#fog6_tripple_can111" ).fadeOut(600);
$( "#fog7_can111" ).fadeIn(3500);
$( "#fog8_tripple_can111" ).fadeIn(3500);
},500);
},2500);
setTimeout(function()
{
document.getElementById("bubles7_can111").style.animation="bubles2_can111 2s forwards";
document.getElementById("bubles8_can111").style.animation="bubles2_can111 2s forwards";
$( "#bubles7_can111" ).fadeOut(1000);
$( "#bubles8_can111" ).fadeOut(1000);
$( "#bubles9_can111" ).fadeIn(4800);
$( "#bubles10_can111" ).fadeIn(4800);
setTimeout(function()
{
document.getElementById("fog7_can111").style.animation="agnfog1_can111 1s forwards";
document.getElementById("fog8_tripple_can111").style.animation="agnfog2_tripple_can111 1s forwards";
$( "#fog7_can111" ).fadeOut(600);
$( "#fog8_tripple_can111" ).fadeOut(600);
$( "#fog9_can111" ).fadeIn(3500);
$( "#fog10_tripple_can111" ).fadeIn(3500);
},500);
},4000);
setTimeout(function()
{
document.getElementById("bubles9_can111").style.animation="agnbubles1_can111 2s forwards";
document.getElementById("bubles10_can111").style.animation="agnbubles1_can111 2s forwards";
$( "#bubles9_can111" ).fadeOut(1000);
$( "#bubles10_can111" ).fadeOut(1000);
setTimeout(function()
{
document.getElementById("fog9_can111").style.animation="agnfog1_can111 1s forwards";
document.getElementById("fog10_tripple_can111").style.animation="agnfog2_tripple_can111 1s forwards";
$( "#fog9_can111" ).fadeOut(600);
$( "#fog10_tripple_can111" ).fadeOut(600);
document.getElementById("s2_2").style.visibility="hidden";
document.getElementById("s2_3").style.visibility="visible";
document.getElementById("canvas2").style.cursor="auto";
$('#arrow2').show();
$('#nextButton2').show();

},500);
},6000);
},8000);
}

function submit()
{
var dbtn;

	dbtn = document.getElementById("val").value;

	if (dbtn == "v1") 
	{
		document.getElementById("dtext").innerHTML = "&nbsp;";		
		window.location = 'data/Baseline Signature.xlsx';
	}
	else if (dbtn == "v2") 
	{
		document.getElementById("dtext").innerHTML = "&nbsp;";
		window.location = 'data/Signature after 8 hours of accelerated corrosion exposure.xlsx';
	}
	else if (dbtn == "v3") 
	{
		document.getElementById("dtext").innerHTML = "&nbsp;";
		window.location = 'data/Compare baseline and corroded signature.xlsx';
	}
	else if (dbtn == "v4") 
	{
		document.getElementById("dtext").innerHTML = "&nbsp;";
		window.location = 'data/Extraction of K and M values.docx';
	}
	else if (dbtn == "v5") 
	{
		document.getElementById("dtext").innerHTML = "&nbsp;";
		window.location = 'data/Calculation of corrosion rate.docx';
	}
	else{
		document.getElementById("dtext").innerHTML = "Select Type";
	}

 // var v1= document.getElementById("submit").value;
 // var value= document.getElementById("val").value;
 // console.log(v1);
 // console.log(value);

 // if (value == v1)
 // {

 // }


}

function restart()
{
    // location.reload();
    window.location = '../index.html';
}