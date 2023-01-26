function fname(){
    var v1 = document.getElementById("name").value;
    if(v1.length==0){
        document.getElementById("error").innerHTML="This Field can't be left empty!";
    }
}

function Echeck(){
    var v2 = document.getElementById("email").value;
    var ep=/^\w+[0-9]*[#.]?[a-z0-9]+(@)[a-z]+(.com|.in|.edu.in)$/;
				console.log(ep.test("v2"))
				if(ep.test(v2))
				{
					document.getElementById("error").style.color="Green";
				}
                else{
                    document.getElementById("error1").innerHTML="Kindly enter a valid email id"
                }
}

function pcheck(){
    var v3 = document.getElementById("pass").value;
    var p1=/[A-Z]+/;
				var p2=/[a-z]+/;
				var p3=/[0-9]+/;
				var p4=/[!@#$%^&*]/;
				var l=v3.length;

				if(p1.test(v3) && p2.test(v3) && p3.test(v3) && p4.test(v3) && 6<=l && l<=20)
				{
                    console.log("ff");
				}
				else
				{
					document.getElementById("error2").innerHTML="Kindly fullfill the password requirements!";
                    return "False";
                } 

}


function pConfirm(){
    var a= document.getElementById("pass").value;
    var b= document.getElementById("c-pass").value;
    
    if(a!=b){
        document.getElementById("error3").innerHTML="Passwords don't match!";
    }
}