

//////////////////////navnext start here////////////////////////////////////

function navNext10()
{

document.getElementById("canvas10").style.visibility="hidden";

document.getElementById("canvas11").style.visibility="visible";

}

function navNext11()
{

document.getElementById("canvas11").style.visibility="hidden";

document.getElementById("canvas12").style.visibility="visible";

}

function navNext12()
{

document.getElementById("canvas12").style.visibility="hidden";

document.getElementById("canvas13").style.visibility="visible";

setTimeout(function()
{

document.getElementById("state1_can13").style.visibility="hidden";
document.getElementById("concrete1_can13").style.visibility="hidden";

document.getElementById("state2_can13").style.visibility="visible";
document.getElementById("concrete2_can13").style.visibility="visible";

},2000);

setTimeout(function()
{

document.getElementById("state2_can13").style.visibility="hidden";
document.getElementById("concrete2_can13").style.visibility="hidden";

document.getElementById("state3_can13").style.visibility="visible";
document.getElementById("concrete3_can13").style.visibility="visible";

},4000);

setTimeout(function()
{

document.getElementById("arrow13").style.visibility="visible";
document.getElementById("nextButton13").style.visibility="visible";

},5500);


}

function navNext13()
{

document.getElementById("canvas13").style.visibility="hidden";

document.getElementById("canvas14").style.visibility="visible";

}

function navNext14()
{

document.getElementById("canvas14").style.visibility="hidden";

document.getElementById("canvas15").style.visibility="visible";

}


function add_empty_tank()

{

document.getElementById("addtank_can10").style.visibility="hidden";
document.getElementById("arw1_can10").style.visibility="hidden";

document.getElementById("tank_can10").style.visibility="visible";
document.getElementById("tank_can10").style.animation="tank_can10 1s forwards"; 

setTimeout(function()
{

document.getElementById("tb_tank_can10").style.visibility="visible";
document.getElementById("arwtb_tank_can10").style.visibility="visible";

document.getElementById("step1_can10").style.visibility="hidden";
document.getElementById("step2_can10").style.visibility="visible";

},1500);
}


function tank_plc()
{
document.getElementById("tb_tank_can10").style.visibility="hidden";
document.getElementById("arwtb_tank_can10").style.visibility="hidden";

document.getElementById("tank_can10").style.animation="tanksift_can10 1.5s forwards";

setTimeout(function()
{

document.getElementById("tankup_can10").style.visibility="visible";

document.getElementById("arw6_can10").style.visibility="visible";
document.getElementById("addsolution_can10").style.visibility="visible";

document.getElementById("step2_can10").style.visibility="hidden";
document.getElementById("step3_can10").style.visibility="visible";
},1500);
}

function add_iron_2can10()
{
document.getElementById("arw2_can10").style.visibility="hidden";
document.getElementById("add_iron_can10").style.visibility="hidden";

document.getElementById("iron_can10").style.visibility="visible";
document.getElementById("iron_can10").style.animation="bare_rebar_canvas10 1.5s forwards"; 

setTimeout(function()
{

document.getElementById("tb_iron_can10").style.visibility="visible";
document.getElementById("arwtb_iron_can10").style.visibility="visible";

document.getElementById("step5_can10").style.visibility="hidden";
document.getElementById("step6_can10").style.visibility="visible";
},1500);
}

function iron_plccan10()
{
document.getElementById("tb_iron_can10").style.visibility="hidden";
document.getElementById("arwtb_iron_can10").style.visibility="hidden";

document.getElementById("tb_iron_can10").style.visibility="hidden";
document.getElementById("iron_can10").style.animation="ironshift_can10 2.5s forwards";

setTimeout(function()
{
document.getElementById("arw4_can10").style.visibility="visible";
document.getElementById("add_stand_can10").style.visibility="visible";

document.getElementById("step6_can10").style.visibility="hidden";
document.getElementById("step7_can10").style.visibility="visible";

},2500);
}

function stand_vis_can10()
{
document.getElementById("arw4_can10").style.visibility="hidden";
document.getElementById("add_stand_can10").style.visibility="hidden";

document.getElementById("stand_can10").style.visibility="visible";
document.getElementById("stand_can10").style.animation="stans_plccan10 2.5s forwards"; 

setTimeout(function()
{
document.getElementById("stand_can10").style.visibility="hidden";
document.getElementById("stand_sdw_can10").style.visibility="visible";
document.getElementById("arw5_can10").style.visibility="visible";
document.getElementById("addrod_can10").style.visibility="visible";

document.getElementById("step7_can10").style.visibility="hidden";
document.getElementById("step8_can10").style.visibility="visible";

},2500);
}


function rodvis_can10()
{

document.getElementById("arw5_can10").style.visibility="hidden";
document.getElementById("addrod_can10").style.visibility="hidden";

document.getElementById("rod_can10").style.visibility="visible";
document.getElementById("rod_can10").style.animation="roddwn_can10 1.5s forwards"; 

setTimeout(function()
{

document.getElementById("tb_rodcan10").style.visibility="visible";
document.getElementById("arwtb_rodcan10").style.visibility="visible";

document.getElementById("step8_can10").style.visibility="hidden";
document.getElementById("step9_can10").style.visibility="visible";
},1500);

}

function rod_plccan10()
{

document.getElementById("tb_rodcan10").style.visibility="hidden";
document.getElementById("arwtb_rodcan10").style.visibility="hidden";
document.getElementById("rod_can10").style.animation="rod_fixcan10 4s forwards"; 

setTimeout(function()
{

document.getElementById("arrow11").style.visibility="visible";
document.getElementById("nextButton11").style.visibility="visible";

document.getElementById("step9_can10").style.visibility="hidden";
document.getElementById("step10_can10").style.visibility="visible";
},4000);

}

function addsolution_can10()
{

document.getElementById("arw6_can10").style.visibility="hidden";
document.getElementById("addsolution_can10").style.visibility="hidden";
document.getElementById("solution_can10").style.visibility="visible";
document.getElementById("solution_can10").style.animation="solution_can10 1.5s forwards";

setTimeout(function()
{

document.getElementById("tb_solutioncan10").style.visibility="visible";
document.getElementById("arwtb_solutioncan10").style.visibility="visible";

document.getElementById("step3_can10").style.visibility="hidden";
document.getElementById("step4_can10").style.visibility="visible";

},1500); 

}

function solution_plccan10()
{

document.getElementById("tb_solutioncan10").style.visibility="hidden";
document.getElementById("arwtb_solutioncan10").style.visibility="hidden";
document.getElementById("solution_can10").style.animation="solutionfill_can10 1s forwards";

setTimeout(function()
{

document.getElementById("soltiltless_can10").style.visibility="visible";

document.getElementById("soltiltless_can10").style.animation="solless_rotate_can10 0.2s forwards";
document.getElementById("solution_can10").style.visibility="hidden";

},1000);

setTimeout(function()
{

document.getElementById("soltiltless_can10").style.visibility="hidden";
document.getElementById("soltiltmore_can10").style.visibility="visible";
document.getElementById("solutionline_can10").style.visibility="visible";
document.getElementById("solutionline_can10").style.animation="solutionline_can10 1s forwards";

},1150);

setTimeout(function()
{

document.getElementById("solutionline_can10").style.visibility="hidden";
document.getElementById("solutionline2_can10").style.visibility="visible";
document.getElementById("solutionline2_can10").style.animation="solutionline_bbcan10 0.5s infinite";

},2150); 


setTimeout(function()
{

document.getElementById("solutionwtr_can10").style.visibility="visible";
document.getElementById("solutionwtr_can10").style.animation="solutionwtr_upcan10 2s forwards";

$( "#beaker_can10" ).fadeIn(2500);

$( "#soltiltmore_can10" ).fadeOut(2500);

},2300);

setTimeout(function()
{

document.getElementById("solutionline2_can10").style.visibility="hidden";
document.getElementById("beaker_can10").style.animation="beakerback_can10 3s forwards";
},4300);

setTimeout(function()
{

document.getElementById("beaker_can10").style.visibility="hidden";
document.getElementById("arw2_can10").style.visibility="visible";
document.getElementById("add_iron_can10").style.visibility="visible";

document.getElementById("step4_can10").style.visibility="hidden";
document.getElementById("step5_can10").style.visibility="visible";

},7300);

}

function blackclip_movecan11()
{
document.getElementById("tb_blackclip_can11").style.visibility="hidden";
document.getElementById("arwtb_blackclip_can11").style.visibility="hidden";
document.getElementById("black_can11").style.animation="black_can11 1s forwards";
document.getElementById("blackclipclose_can11").style.animation="blackclipclose_can11 1s forwards";

setTimeout(function()
{
document.getElementById("blackclipclose_can11").style.visibility="hidden";
document.getElementById("blackclipopen_can11").style.visibility="visible";
document.getElementById("black_can11").style.animation="againblack_can11 0.5s forwards";
document.getElementById("blackclipopen_can11").style.animation="blackclipclose_againcan11 0.5s forwards";

},900);

setTimeout(function()
{
document.getElementById("blackclipopen_can11").style.visibility="hidden";
document.getElementById("blackclipclose2_can11").style.visibility="visible";
document.getElementById("tb_redclip_can11").style.visibility="visible";
document.getElementById("arwtb_redclip_can11").style.visibility="visible";

document.getElementById("step1_can11").style.visibility="hidden";
document.getElementById("step2_can11").style.visibility="visible";

},1400);

}

function redclip_movecan11()
{

document.getElementById("tb_redclip_can11").style.visibility="hidden";
document.getElementById("arwtb_redclip_can11").style.visibility="hidden";
document.getElementById("red_can11").style.animation="red_can11 1.3s forwards";
document.getElementById("redclipclose1_can11").style.animation="redclipclose_can11 1.3s forwards";

setTimeout(function()
{
document.getElementById("redclipclose1_can11").style.visibility="hidden";
document.getElementById("redclipopen_can11").style.visibility="visible";
document.getElementById("red_can11").style.animation="againred_can11 0.5s forwards";
document.getElementById("redclipopen_can11").style.animation="redclipclose_againcan11 0.5s forwards";

},1200);

setTimeout(function()
{
document.getElementById("redclipopen_can11").style.visibility="hidden";
document.getElementById("redclipclose2_can11").style.visibility="visible";
// document.getElementById("tb_meter_can11").style.visibility="visible";
// document.getElementById("arwtb_meter_can11").style.visibility="visible";

// document.getElementById("step2_can11").style.visibility="hidden";
// document.getElementById("step3_can11").style.visibility="visible";

},1700);

// }


// function meteron_can11()
// {
setTimeout(function()
{

document.getElementById("tb_meter_can11").style.visibility="hidden";
document.getElementById("arwtb_meter_can11").style.visibility="hidden";
document.getElementById("offscr_can11").style.visibility="hidden";

$( "#bubles1_can11" ).fadeIn(1000);
$( "#bubles2_can11" ).fadeIn(1000);

$( "#fog2_tripple_can11" ).fadeIn(1000);
$( "#fog1_can11" ).fadeIn(1000);


setTimeout(function()
{

document.getElementById("bubles1_can11").style.animation="bubles1_can11 1s forwards";
document.getElementById("bubles2_can11").style.animation="bubles1_can11 1s forwards";

$( "#bubles1_can11" ).fadeOut(1000);
$( "#bubles2_can11" ).fadeOut(1000);
$( "#bubles3_can11" ).fadeIn(1300);
$( "#bubles4_can11" ).fadeIn(1300);

setTimeout(function()
{

document.getElementById("fog1_can11").style.animation="fog1_can11 1s forwards";
document.getElementById("fog2_tripple_can11").style.animation="fog2_tripple_can11 1s forwards";

$( "#fog1_can11" ).fadeOut(600);
$( "#fog2_tripple_can11" ).fadeOut(600);
$( "#fog3_can11" ).fadeIn(1300);
$( "#fog4_tripple_can11" ).fadeIn(1300);

},500);
},800);

setTimeout(function()
{

document.getElementById("bubles3_can11").style.animation="bubles2_can11 1s forwards";
document.getElementById("bubles4_can11").style.animation="bubles2_can11 1s forwards";
$( "#bubles3_can11" ).fadeOut(1000);
$( "#bubles4_can11" ).fadeOut(1000);
$( "#bubles5_can11" ).fadeIn(2000);
$( "#bubles6_can11" ).fadeIn(2000);

setTimeout(function()
{


document.getElementById("fog3_can11").style.animation="fog1_can11 1s forwards";
document.getElementById("fog4_tripple_can11").style.animation="fog2_tripple_can11 1s forwards";
$( "#fog3_can11" ).fadeOut(600);
$( "#fog4_tripple_can11" ).fadeOut(600);
$( "#fog5_can11" ).fadeIn(2000);
$( "#fog6_tripple_can11" ).fadeIn(2000);

},500);
},1700);

setTimeout(function()
{

document.getElementById("bubles5_can11").style.animation="bubles1_can11 1s forwards";
document.getElementById("bubles6_can11").style.animation="bubles1_can11 1s forwards";
$( "#bubles5_can11" ).fadeOut(1000);
$( "#bubles6_can11" ).fadeOut(1000);
$( "#bubles7_can11" ).fadeIn(3500);
$( "#bubles8_can11" ).fadeIn(3500);

setTimeout(function()
{

document.getElementById("fog5_can11").style.animation="fog1_can11 1s forwards";
document.getElementById("fog6_tripple_can11").style.animation="fog2_tripple_can11 1s forwards";
$( "#fog5_can11" ).fadeOut(600);
$( "#fog6_tripple_can11" ).fadeOut(600);
$( "#fog7_can11" ).fadeIn(3500);
$( "#fog8_tripple_can11" ).fadeIn(3500);

},500);
},2500);

setTimeout(function()
{

document.getElementById("bubles7_can11").style.animation="agnbubles2_can11 2s forwards";
document.getElementById("bubles8_can11").style.animation="agnbubles2_can11 2s forwards";
$( "#bubles7_can11" ).fadeOut(1000);
$( "#bubles8_can11" ).fadeOut(1000);
$( "#bubles9_can11" ).fadeIn(4800);
$( "#bubles10_can11" ).fadeIn(4800);

setTimeout(function()
{

document.getElementById("fog7_can11").style.animation="fog1_can11 1s forwards";
document.getElementById("fog8_tripple_can11").style.animation="fog2_tripple_can11 1s forwards";
$( "#fog7_can11" ).fadeOut(600);
$( "#fog8_tripple_can11" ).fadeOut(600);
$( "#fog9_can11" ).fadeIn(3500);
$( "#fog10_tripple_can11" ).fadeIn(3500);

},500);
},4000);

setTimeout(function()
{

document.getElementById("bubles9_can11").style.animation="bubles1_can11 2s forwards";
document.getElementById("bubles10_can11").style.animation="bubles1_can11 2s forwards";
$( "#bubles9_can11" ).fadeOut(1000);
$( "#bubles10_can11" ).fadeOut(1000);
$( "#bubles1_can11" ).fadeIn(1000);
$( "#bubles2_can11" ).fadeIn(1000);

setTimeout(function()
{

document.getElementById("fog9_can11").style.animation="fog1_can11 1s forwards";
document.getElementById("fog10_tripple_can11").style.animation="fog2_tripple_can11 1s forwards";
$( "#fog9_can11" ).fadeOut(600);
$( "#fog10_tripple_can11" ).fadeOut(600);
$( "#fog1_can11" ).fadeIn(1000);
$( "#fog2_tripple_can11" ).fadeIn(1000);

},500);
},6000);

setTimeout(function()
{


setTimeout(function()
{

document.getElementById("bubles1_can11").style.animation="agnbubles1_can11 1s forwards";
document.getElementById("bubles2_can11").style.animation="agnbubles1_can11 1s forwards";
$( "#bubles1_can11" ).fadeOut(800);
$( "#bubles2_can11" ).fadeOut(800);
$( "#bubles3_can11" ).fadeIn(1300);
$( "#bubles4_can11" ).fadeIn(1300);

setTimeout(function()
{

document.getElementById("fog1_can11").style.animation="agnfog1_can11 1s forwards";
document.getElementById("fog2_tripple_can11").style.animation="agnfog2_tripple_can11 1s forwards";

$( "#fog1_can11" ).fadeOut(600);
$( "#fog2_tripple_can11" ).fadeOut(600);
$( "#fog3_can11" ).fadeIn(1300);
$( "#fog4_tripple_can11" ).fadeIn(1300);

},500);
},800);

setTimeout(function()
{

document.getElementById("bubles3_can11").style.animation="agnbubles2_can11 1s forwards";
document.getElementById("bubles4_can11").style.animation="agnbubles2_can11 1s forwards";
$( "#bubles3_can11" ).fadeOut(1000);
$( "#bubles4_can11" ).fadeOut(1000);
$( "#bubles5_can11" ).fadeIn(2000);
$( "#bubles6_can11" ).fadeIn(2000);

setTimeout(function()
{

document.getElementById("fog3_can11").style.animation="agnfog1_can11 1s forwards";
document.getElementById("fog4_tripple_can11").style.animation="agnfog2_tripple_can11 1s forwards";
$( "#fog3_can11" ).fadeOut(600);
$( "#fog4_tripple_can11" ).fadeOut(600);
$( "#fog5_can11" ).fadeIn(2000);
$( "#fog6_tripple_can11" ).fadeIn(2000);

},500);
},1700);

setTimeout(function()
{

document.getElementById("bubles5_can11").style.animation="agnbubles1_can11 1s forwards";
document.getElementById("bubles6_can11").style.animation="agnbubles1_can11 1s forwards";
$( "#bubles5_can11" ).fadeOut(1000);
$( "#bubles6_can11" ).fadeOut(1000);
$( "#bubles7_can11" ).fadeIn(3500);
$( "#bubles8_can11" ).fadeIn(3500);

setTimeout(function()
{

document.getElementById("fog5_can11").style.animation="agnfog1_can11 1s forwards";
document.getElementById("fog6_tripple_can11").style.animation="agnfog2_tripple_can11 1s forwards";
$( "#fog5_can11" ).fadeOut(600);
$( "#fog6_tripple_can11" ).fadeOut(600);
$( "#fog7_can11" ).fadeIn(3500);
$( "#fog8_tripple_can11" ).fadeIn(3500);

},500);
},2500);

setTimeout(function()
{

document.getElementById("bubles7_can11").style.animation="bubles2_can11 2s forwards";
document.getElementById("bubles8_can11").style.animation="bubles2_can11 2s forwards";
$( "#bubles7_can11" ).fadeOut(1000);
$( "#bubles8_can11" ).fadeOut(1000);
$( "#bubles9_can11" ).fadeIn(4800);
$( "#bubles10_can11" ).fadeIn(4800);

setTimeout(function()
{

document.getElementById("fog7_can11").style.animation="agnfog1_can11 1s forwards";
document.getElementById("fog8_tripple_can11").style.animation="agnfog2_tripple_can11 1s forwards";
$( "#fog7_can11" ).fadeOut(600);
$( "#fog8_tripple_can11" ).fadeOut(600);
$( "#fog9_can11" ).fadeIn(3500);
$( "#fog10_tripple_can11" ).fadeIn(3500);

},500);
},4000);

setTimeout(function()
{

document.getElementById("bubles9_can11").style.animation="agnbubles1_can11 2s forwards";
document.getElementById("bubles10_can11").style.animation="agnbubles1_can11 2s forwards";
$( "#bubles9_can11" ).fadeOut(1000);
$( "#bubles10_can11" ).fadeOut(1000);

setTimeout(function()
{

document.getElementById("fog9_can11").style.animation="agnfog1_can11 1s forwards";
document.getElementById("fog10_tripple_can11").style.animation="agnfog2_tripple_can11 1s forwards";
$( "#fog9_can11" ).fadeOut(600);
$( "#fog10_tripple_can11" ).fadeOut(600);

},500);
},6000);

},8000);

document.getElementById("a1_can11").style.visibility="visible";
document.getElementById("a1_can11").style.animation="a1_can11 1s infinite";
setTimeout(function()
{
document.getElementById("a2_can11").style.visibility="visible";
document.getElementById("a2_can11").style.animation="a2_can11 1s infinite";
setTimeout(function()
{
document.getElementById("a3_can11").style.visibility="visible";
document.getElementById("a3_can11").style.animation="a3_can11 1s infinite";
setTimeout(function()
{
document.getElementById("a4_can11").style.visibility="visible";
document.getElementById("a4_can11").style.animation="a4_can11 1s infinite";
setTimeout(function()
{
document.getElementById("a5_can11").style.visibility="visible";
document.getElementById("a5_can11").style.animation="a5_can11 1s infinite";
setTimeout(function()
{
document.getElementById("a6_can11").style.visibility="visible";
document.getElementById("a6_can11").style.animation="a6_can11 1s infinite";
setTimeout(function()
{
document.getElementById("reda1_can11").style.visibility="visible";
document.getElementById("reda1_can11").style.animation="reda1_can11 1s infinite";
setTimeout(function()
{
document.getElementById("reda2_can11").style.visibility="visible";
document.getElementById("reda2_can11").style.animation="reda2_can11 1s infinite";
setTimeout(function()
{
document.getElementById("reda3_can11").style.visibility="visible";
document.getElementById("reda3_can11").style.animation="reda3_can11 1s infinite";

setTimeout(function()
{
document.getElementById("reda4_can11").style.visibility="visible";
document.getElementById("reda4_can11").style.animation="reda4_can11 1s infinite";

setTimeout(function()
{
document.getElementById("reda5_can11").style.visibility="visible";
document.getElementById("reda5_can11").style.animation="reda5_can11 1s infinite";

setTimeout(function()
{
document.getElementById("reda6_can11").style.visibility="visible";
document.getElementById("reda6_can11").style.animation="reda6_can11 1s infinite";

setTimeout(function()
{
document.getElementById("reda7_can11").style.visibility="visible";
document.getElementById("reda7_can11").style.animation="reda7_can11 1s infinite";

setTimeout(function()
{
document.getElementById("reda8_can11").style.visibility="visible";
document.getElementById("reda8_can11").style.animation="reda8_can11 1s infinite";

setTimeout(function()
{
document.getElementById("arrow12").style.visibility="visible";
document.getElementById("nextButton12").style.visibility="visible";

document.getElementById("step2_can11").style.visibility="hidden";
document.getElementById("step3_can11").style.visibility="visible";

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
},900);
},1700);
}

function reset()
{
    // location.reload();
//     window.open("../simulation1.html");
	window.location = '../index.html';
}

function submit2()
{
var dbtn;

	dbtn = document.getElementById("val_can15").value;

	if (dbtn == "v1_can15") 
	{
		document.getElementById("dtext").innerHTML = "&nbsp;";		
		window.location = 'data/Baseline Signature.xlsx';
	}
	else if (dbtn == "v2_can15") 
	{
		document.getElementById("dtext").innerHTML = "&nbsp;";
		window.location = 'data/Signature after 45 days of corrosion exposure.xlsx';
	}
	else if (dbtn == "v3_can15") 
	{
		document.getElementById("dtext").innerHTML = "&nbsp;";
		window.location = 'data/Signature after 120 days of corrosion exposure.xlsx';
	}
	else if (dbtn == "v4_can15") 
	{
		document.getElementById("dtext").innerHTML = "&nbsp;";
		window.location = 'data/Compare baseline, after 45 days and after 120 days.xlsx';
	}
	else if (dbtn == "v5_can15") 
	{
		document.getElementById("dtext").innerHTML = "&nbsp;";
		// window.location = 'data/Calculation of corrosion rate.docx';
	}
	else if (dbtn == "v6_can15") 
	{
		document.getElementById("dtext").innerHTML = "&nbsp;";
		window.location = 'data/Calculation of corrosion rate.docx';
	}
	else{
		document.getElementById("dtext").innerHTML = "Select Type";
	}

}
