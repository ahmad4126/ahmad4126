// Main function
function Main(){
//alert(" ❤️  صَلَّی اللّٰہُ عَلٰی مُحَمَّد ");
//getlocation();
rdata();
calc();
cdata();
}
function icalc()
{
cdate=new Date();
cyear=cdate.getFullYear();
cmonth=cdate.getMonth()+1;
cday =cdate.getDate();
chour1= cdate.getHours();
cmin1= cdate.getMinutes();
csec1 = cdate.getSeconds();
cmi = cdate.getMilliseconds();
tzone = cdate.getTimezoneOffset()/-60;
chour= chour1+cmin1/60+(csec1+cmi/1000)/3600;
//setTimeout("icalc()",100);
}
	function rdata()	{
	with(document)	{
cdate=new Date();
cyear=cdate.getFullYear();
cmonth=cdate.getMonth()+1;
cday =cdate.getDate();
chour1= cdate.getHours();
cmin1= cdate.getMinutes();
csec1 = cdate.getSeconds();
cmi = cdate.getMilliseconds();
tzone = cdate.getTimezoneOffset()/-60;
	if( isNaN((InForm.arzb.value)) || isNaN(InForm.toolb.value) || isNaN(InForm.year26.value) || isNaN(InForm.day26.value) ||isNaN(InForm.month26.value)||isNaN(InForm.st1.value) || isNaN(InForm.arzm.value) || isNaN(InForm.toolm.value) || isNaN(InForm.dirp.value) || isNaN(InForm.rat.value) || isNaN(InForm.dect.value) || isNaN(InForm.ho26.value) || isNaN(InForm.mo26.value) || isNaN(InForm.so26.value) )
	 { confirm("صرف نمبر کا درست اندراج کریں"); ms.value="Plz input correct numerical values only"; } else { 
	if(InForm.arzb.value == "")  arzb = 0;
	else arzb = eval(InForm.arzb.value);
	if(InForm.toolb.value == "")  toolb = 0;
	else toolb = eval(InForm.toolb.value);
	if(InForm.st1.value == "")  st1 = tzone;
	else st1 = eval(InForm.st1.value);
	//if(Math.abs(st1-toolb/15)>3) { tz='\r\n'+"Check standard time and longitude are correct values"; alert(tz); }
	//else tz="";
	tz="";
	if(InForm.year26.value == "")  { year26 = cyear;}
	else { year26 = eval(InForm.year26.value); }
	if(InForm.month26.value == "")  month26 = cmonth;
	else month26 = eval(InForm.month26.value);
	if(InForm.day26.value == "")  day26 = cday;
	else day26 = eval(InForm.day26.value);
	if(InForm.ho26.value == "")  ho26 = chour1;
	else ho26 = eval(InForm.ho26.value);
	if(InForm.mo26.value == "")  mo26 = cmin1;
	else mo26 = eval(InForm.mo26.value);
	if(InForm.so26.value == "")  so26 = (csec1+cmi/1000);
	else so26 = eval(InForm.so26.value);
	if(InForm.sm.value == "")  sm = 1;
	else sm = eval(InForm.sm.value);
	if(InForm.dmm.value == "")  dmm = 1;
	else dmm = eval(InForm.dmm.value);
	if(InForm.smm.value == "")  smm = 1;
	else smm = eval(InForm.smm.value);
	if(InForm.dirp.value == "")  dirp = 0;
	else dirp = eval(InForm.dirp.value);
	dirp=loo3(dirp);
	if(InForm.arzm.value == "")  arzm = 0;
	else arzm = eval(InForm.arzm.value);
	if(InForm.toolm.value == "")  toolm = 0;
	else toolm = eval(InForm.toolm.value); 
	if(InForm.rat.value == "")  rat = 0;
	else rat = eval(InForm.rat.value);
	rat=loo3(rat*15)/15;
	if(InForm.dect.value == "")  dect = 0;
	else dect = eval(InForm.dect.value);	
	chour=ho26+mo26/60+so26/3600;
	hr26=12-toolb/15; Tdelta=70;
	if (Math.abs(toolb)>180) toolb=loo(toolb);
	else toolb = toolb;
	}}}
	function calc()	{
	with(Math)	{{
	icalc();
	if (year26==0) {sm=0; mf="Enter year value"+ '\r\n'+ "0 for index"+ '\r\n'+"-1 for star at Qibla direction"+ '\r\n'+"1 for sun at Qibla direction"+ '\r\n'+"2 for moon at Qibla direction"+ '\r\n'+"Once Sun/Moon/Star changed by selecting -1 or 1 or 2 then"+ '\r\n'+"3 for Madina"+ '\r\n'+"4 for Aqsa mosque"+ '\r\n'+"5 for Baghdad Sharif"+ '\r\n'+"6 for Baraliy sharif"+ '\r\n'+"7 for Faizan-e-Madina Karachi"+ '\r\n'+"8 for other Latitude & longitude"+ '\r\n'+"9 for selected direction of Sun/Moon/Star"+ '\r\n'+"10 for Sun/Moon/Star position by time"+ '\r\n'+"11 for Sun/Moon/Star position at current time (Default)"+ '\r\n'+"12 for important message";	
	} else {
	if (year26==1 ) { year26=cyear; sm=1; dmm=1; }
	if (year26==2 ) { year26=cyear; sm=2; dmm=2;}
	if(year26==-1) { year26=cyear; sm=-1; dmm=-1; }
	if (year26==3) { year26=cyear; dmm=3;}
	if (year26==4) { year26=cyear;  dmm=4; }
	if (year26==5) { year26=cyear;  dmm=5; }
	if (year26==6) { year26=cyear; dmm=6; }
	if (year26==7) { year26=cyear; dmm=7; }
	if (year26==8) { year26=cyear; dmm=8;  }
	if( year26==9) { year26=cyear; dmm=9; }
	if(year26==10) { year26=cyear; smm=2;}
	if(year26==11) { year26=cyear; smm=1;}
	if(year26==12) { year26=cyear; dmm=12;}
	
	if( smm==2) chour=ho26+mo26/60+so26/3600;
	else { ho26=chour1; mo26=cmin1; so26=csec1+cmi/1000; }
		
	if(dmm==-1) { arzm=21.4225; toolm=39.826194444444; }
	if(dmm==1) { arzm=21.4225; toolm=39.826194444444; }
	if(dmm==2) { arzm=21.4225; toolm=39.826194444444; }
	if(dmm==3) { arzm=24.467524; toolm=39.611358; }
	if (dmm==4) { arzm=31.7758181; toolm=35.235761; }
	if (dmm==5) { arzm=33.336437; toolm=44.407943; }
	if (dmm==6) { arzm=28.361869; toolm=79.408571; }
	if (dmm==7) { arzm=24.894753; toolm=67.061414; }
	
	qdir =dirp2p(arzm,toolm,arzb,toolb,1);
qdir26= dirp2p2(arzm,toolm,arzb,toolb,1);
	if (year26==9) { year26=cyear; dmm=9; qdir=dirp; }
	if (sm==1) obj="Sun";
	if (sm==2) obj="Moon";
	if (sm==-1) obj="Star";
	if (dmm==1)  dpp="Qibla";
	if (dmm==2) dpp="Qibla";
	if (dmm==-1) dpp="Qibla";	
	if (dmm==3) { dpp="Madina"; }
	if (dmm==4) { dpp="Aqsa mosque";}
	if (dmm==5)  {dpp="Bagdad Sharif"; }
	if (dmm==6) { dpp="Baraliy Sharif";  }
	if (dmm==7) { dpp="Faizan-e-Madina"; }
	if (dmm==8) { dpp="Selected point Latitude: "+OutDec(arzm)+" ,Longitude:"+OutDec(toolm);  }
	if(dmm==9) { qdir=dirp; dpp="Selected Direction: "+OutDec(dirp); }

if(dmm== 8) { document.getElementById("td1").style.display = "block";
document.getElementById("td2").style.display = "block"; 
document.getElementById("arzm").style.display = "block"; 
document.getElementById("toolm").style.display = "block"; }
else {
document.getElementById("td1").style.display = "none";
document.getElementById("td2").style.display = "none"; 
document.getElementById("arzm").style.display = "none"; 
document.getElementById("toolm").style.display = "none"; }

if(dmm== 9) { document.getElementById("dirp").style.display = "block";
document.getElementById("dirp1").style.display = "block"; }
else { document.getElementById("dirp").style.display = "none";
document.getElementById("dirp1").style.display = "none"; }

if(smm!==1) { document.getElementById("td3").style.display = "block";
document.getElementById("td4").style.display = "block";
document.getElementById("td5").style.display = "block";
document.getElementById("td6").style.display = "block";
document.getElementById("td7").style.display = "block";
document.getElementById("td8").style.display = "block"; }
else { document.getElementById("td3").style.display = "none";
document.getElementById("td4").style.display = "none";
document.getElementById("td5").style.display = "none";
document.getElementById("td6").style.display = "none";
document.getElementById("td7").style.display = "none";
document.getElementById("td8").style.display = "none"; }

if(sm==-1) { document.getElementById("td9").style.display = "block";
document.getElementById("td10").style.display = "block";
document.getElementById("td11").style.display = "block";
document.getElementById("td12").style.display = "block"; }
else { document.getElementById("td11").style.display = "none";
document.getElementById("td12").style.display = "none";
document.getElementById("td9").style.display = "none";
document.getElementById("td10").style.display = "none"; }

document.getElementById("h1").innerHTML = dpp+" direction by "+obj;
document.getElementById("t1").innerHTML = dpp+" direction by "+obj;


	if (Math.abs(arzb)>90) { confirm("عرض بلد 90 سے زیادہ ممکن نہیں"); ms.value="Latitud can't greater then 90°"; } else {
if (Math.abs(st1)>14) { confirm("معیاری وقت 14 سے زیادہ ممکن نہیں"); ms.value="Plz enter correct standard time"; } else {
if(sm==-1) m4="Star declination: "+OutDec(dect)+", RA Ascension: "+OutDec(rat)+ '\r\n';
else m4="";

			
// if (navigator.geolocation) {
// navigator.geolocation.getCurrentPosition(function(position) {
//     latitude = position.coords.latitude;
//     longitude = position.coords.longitude;
// });
// } else {
//     latitude = 0;
//     longitude = 0; }

m1=m4+"Direction time calculation for "+dpp+" by "+obj+ '\r\n';
if( (year26!==cyear) || (month26!==cmonth) || (day26!==cday) ) m1+="The entered date is not today"+ '\r\n';
else m1+="";
dataF(year26,month26,day26,hr26,0,0,Tdelta);
//hi=new Date(20230988098888).toLocaleString("ar-SA");
m1+="Date: "+disdt(year26,month26,day26)+ " Standard time: "+st1+'\r\n'+"Latitude: "+OutDec(arzb)+" Longitude: "+OutDec(toolb)+tz+ '\r\n';
hr63 = 12-toolb/15+ EOT25;
zloop(hr26,hr63,12,1,3,0);
zawal = hr41+st1;
dataF(year26,month26,day26,chour-st1,0,0,Tdelta);
sdir = dirp2p(DEC25,GHA25,arzb,toolb,-1);
esun= elv(DEC25,GHA25,arzb,toolb,-1);
{ dd=norf(qdir,sdir); dd1=" (Δd1 "+OutDec(dd)+")"; }
if(Math.abs(dd)>45) {dd=norf(qdir-180,sdir); dd1="(Δd2 "+OutDec(dd)+")"; }
if (Math.abs(dd)>45) {dd=norf(qdir-90,sdir); dd1="(Δd3 "+OutDec(dd)+")";}
if (Math.abs(dd)>45) {dd=norf(qdir+90,sdir); dd1="(Δd4 "+OutDec(dd)+")";}
m1+=dpp+" direction: "+OutDec(qdir)+"("+OutDec(qdir26)+ '\r\n';
m1+="Zawal: "+time(zawal)+ '\r\n';
m1+="Time: "+time(chour)+", "+obj+" Dir: "+OutDec(sdir)+" Elv: "+OutDec(esun)+dd1+ '\r\n';
fdtt(qdir,1);
qdir1s = hr7;
m1+=obj+" at "+dpp+" direction: ";
if (isNaN(hr7)) m1+= '\r\n'+"Not Possible"; else {
eqdir1s= elv(DEC25,GHA25,arzb,toolb,-1);
dirs1 =dirp2p(DEC25,GHA25,arzb,toolb,-1);
m1+=bh(eqdir1s)+ '\r\n'+"Time: "+time(hr7)+", Elevation: "+OutDec(eqdir1s)+" Dir: "+OutDec(dirs1); }
fdtt(qdir,-1);
qdir2s = hr7;
m1+='\r\n'+obj+" at "+dpp+" direction: "
if (isNaN(hr7)) m1+= '\r\n'+"Not Possible"; else {
eqdir2s= elv(DEC25,GHA25,arzb,toolb,-1);
dirs2 =dirp2p(DEC25,GHA25,arzb,toolb,-1);
m1+=bh(eqdir2s)+ '\r\n'+"Time: "+time(hr7)+", Elevation: "+OutDec(eqdir2s)+" Dir: "+OutDec(dirs2); }
fdtt(qdir-90,1);
qdir3s = hr7;
m1+= '\r\n'+obj+" 90° from "+dpp+" direction: ";
if (isNaN(hr7)) m1+= '\r\n'+"Not Possible"; else {
eqdir3s= elv(DEC25,GHA25,arzb,toolb,-1);
dirs3 =dirp2p(DEC25,GHA25,arzb,toolb,-1);
m1+=bh(eqdir3s)+ '\r\n'+"Time: "+time(hr7)+", Elevation: "+OutDec(eqdir3s)+" Dir: "+OutDec(dirs3); }
fdtt(qdir-90,-1);
qdir4s = hr7;
m1+= '\r\n'+obj+" 90° from "+dpp+" direction: ";
if (isNaN(hr7)) m1+= '\r\n'+"Not Possible"; else {
eqdir4s= elv(DEC25,GHA25,arzb,toolb,-1);
dirs4 =dirp2p(DEC25,GHA25,arzb,toolb,-1);
m1+=bh(eqdir4s)+ '\r\n'+"Time: "+time(hr7)+", Elevation: "+OutDec(eqdir4s)+" Dir: "+OutDec(dirs4)+ '\r\n';}
if(dmm!==9) m1+="Distance: "+disp2p(arzm,toolm,arzb,toolb,1)+ '\r\n';
mf=m1+"I love Dawat-E-Islami"+ '\r\n'+"Enter year value 0 for more";
	}} }}}
	}
	function cdata(){
	with(Math){
	rdata();
	calc();}
	with(document)	{
	InForm.arzb.value= arzb;
	InForm.toolb.value= toolb;
	InForm.year26.value= year26;
	InForm.month26.value= month26;
	InForm.day26.value= day26;
	InForm.st1.value= st1;
	InForm.ho26.value= ho26;
	InForm.mo26.value= mo26;
	InForm.so26.value= so26;
	InForm.sm.value= sm;
	InForm.smm.value= smm;
	InForm.dmm.value= dmm;
	InForm.arzm.value= arzm;
	InForm.toolm.value= toolm;
	InForm.rat.value= rat;
	InForm.dect.value= dect ;
	InForm.dirp.value= dirp;
	//document.getElementById("arzb").value = variable1;
	li="https://maps.google.com/?q="+arzm+","+toolm;
	document.getElementById('lik').href = li;
	document.getElementById("lik").innerHTML = dpp+" map";
	lib="https://maps.google.com/?q="+arzb+","+toolb;
	document.getElementById('likb').href = lib;
	document.getElementById("likb").innerHTML = "= "+OutDec(arzb)+" "+OutDec(toolb)+" map";
	m3="Right Ascension can't less than 0 or greater than 24";
	m4= "Star declination can't greater than 90°";
	if(rat<0 || rat>24)	{ confirm(m3); mf=m3;}
	 if (Math.abs(dect)>90) { confirm(m4); mf=m4; }
	 if(dmm==12) mf=" ❤️  صَلَّی اللّٰہُ عَلٰی مُحَمَّد "+ '\r\n'+	 " ❤️  صَلَّی اللّٰہُ عَلٰی مُحَمَّد "+ '\r\n'+	 " ❤️  صَلَّی اللّٰہُ عَلٰی مُحَمَّد "+ '\r\n'+	 " ❤️  صَلَّی اللّٰہُ عَلٰی مُحَمَّد "+ '\r\n'+	 " ❤️  صَلَّی اللّٰہُ عَلٰی مُحَمَّد "+ '\r\n'+	 " ❤️  صَلَّی اللّٰہُ عَلٰی مُحَمَّد "+ '\r\n'+	 " ❤️  صَلَّی اللّٰہُ عَلٰی مُحَمَّد "+ '\r\n'+	 " ❤️  صَلَّی اللّٰہُ عَلٰی مُحَمَّد "+ '\r\n'+	 " ❤️  صَلَّی اللّٰہُ عَلٰی مُحَمَّد "+ '\r\n'+	 " ❤️  صَلَّی اللّٰہُ عَلٰی مُحَمَّد "+ '\r\n'+	 " ❤️  صَلَّی اللّٰہُ عَلٰی مُحَمَّد "+ '\r\n'+	 " ❤️  صَلَّی اللّٰہُ عَلٰی مُحَمَّد "+ '\r\n'	+ '\r\n'+"I love Dawat-E-Islami";
	ms.value=mf;}}