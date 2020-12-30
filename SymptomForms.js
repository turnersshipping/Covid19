var SubmitBtn = document.getElementById("SubmitBtn");

SubmitBtn.addEventListener("click", function submitBtnData(){

	var  Sym1, Sym2, Sym3, Sym4, Sym5, Sym6, Sym7, Sym8, Sym9, Comments;
	if (document.getElementById('Fever_OR_Chills1').checked == true){ Sym1 = "Fever OR Chills:\t\t\t\t No \n"};
	if (document.getElementById('Fever_OR_Chills2').checked == true){ Sym1 = "Fever OR Chills:\t\t\t\t Yes \n"};
	if (document.getElementById('Cough1').checked == true){ Sym2 = "Cough:\t\t\t\t\t No \n"};
	if (document.getElementById('Cough2').checked == true){ Sym2 = "Cough:\t\t\t\t\t Yes \n"};
	if (document.getElementById('Sore_throat1').checked == true){ Sym3 = "Sore throat:\t\t\t\t\t No \n"};
	if (document.getElementById('Sore_throat2').checked == true){ Sym3 = "Sore throat:\t\t\t\t\t No \n"};
	if (document.getElementById('Shortness_of_breath1').checked == true){ Sym4 = "Shortness of breath:\t\t\t No \n"};
	if (document.getElementById('Shortness_of_breath2').checked == true){ Sym4 = "Shortness of breath:\t\t\t Yes \n"};
	if (document.getElementById('Body_aches1').checked == true){ Sym5 = "Body aches:\t\t\t\t\t No \n"};
	if (document.getElementById('Body_aches2').checked == true){ Sym5 = "Body aches:\t\t\t\t\t Yes \n"};
	if (document.getElementById('Redness_of_the_eyes1').checked == true){ Sym6 = "Redness of the eyes:\t\t\t No \n"};
	if (document.getElementById('Redness_of_the_eyes2').checked == true){ Sym6 = "Redness of the eyes:\t\t\t Yes \n"};
	if (document.getElementById('Loss_of_smell_OR_loss_of_taste1').checked == true){ Sym7 = "Loss of smell OR loss of taste:\t\t No \n"};
	if (document.getElementById('Loss_of_smell_OR_loss_of_taste2').checked == true){ Sym7 = "Loss of smell OR loss of taste:\t\t Yes \n"};
	if (document.getElementById('Nausea_OR_vomiting_OR_diarrhea1').checked == true){ Sym8 = "Nausea OR vomiting OR diarrhea:\t No \n"};
	if (document.getElementById('Nausea_OR_vomiting_OR_diarrhea2').checked == true){ Sym8 = "Nausea OR vomiting OR diarrhea:\t Yes \n"};
	if (document.getElementById('Fatigue_OR_weakness1').checked == true){ Sym9 = "Fatigue OR weakness:\t\t\t No \n"};
	if (document.getElementById('Fatigue_OR_weakness2').checked == true){ Sym9 = "Fatigue OR weakness:\t\t\t Yes \n"};
	if (document.getElementById('Comments1').value == ""){Comments = "None"}else{ Comments  = document.getElementById("Comments1").value + "\n" };

var name = document.getElementById("Name").value;
var Contact = document.getElementById("contact").value + "\n";
var DayPostExposure = document.getElementById("DayPostExposure").value + "\n";
if(Sym1 == "" || Sym2 == "" || Sym3 =="" || Sym4 =="" || Sym5 =="" || Sym6 ==""|| Sym7 ==""|| 
	Sym8 ==""|| Sym9 ==""|| Comments ==""|| DayPostExposure ==""|| Contact =="" || name=="" ){
alert("incomplete form!!, Ensure you have fill every information.")}
else{
		var response = "Name and Surnames:\t\t\t " + name + "\n" + "Contact Number is:\t\t\t"+ Contact + "Days post exposure:\t\t\t " + DayPostExposure + Sym1 + Sym2 + Sym3 + Sym4 + Sym5 + Sym6 + Sym7 + Sym8 + Sym9 + "Comments left:\t\t\t\t " + Comments;
		alert("Form Completed, Please Send the Email!");
		var link = "mailto:turnersshipping@gmail.com"+
		            "?cc=Lindani@turnersshipping.co.za"+
		            "&subject=" + escape( name +" Symptom Monitoring Responses")+
		            "&body=" + escape("Hi these are covid19 response from users below:-\n\n" + response);
		 window.location.href = link;
}
});
