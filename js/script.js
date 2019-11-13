
// Javascript document

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Glemt kodeord

  function checkForm()
   {
    var oldP=document.getElementById("oldP").value;
    var newP=document.getElementById("newP").value;
    var confirmP =document.getElementById("confirmP").value;

    if(oldP!=""&&newP!=""&&confirmP!="")
    {
      if(oldP!=newP)
      {
        if(newP==confirmP)
         {
          return true;
         }
         else
          {
            alert("Confirm password is not same as you new password.");
            return false;
          }
      }
      else
     {
      alert(" This Is Your Old Password,Please Provide A New Password");
      return false;
     }
    }
    else
    {
     alert("All Fields Are Required");
     return false;
    }
}

function resetForm()
{
        var oldP=document.getElementById("oldP").value="";
        var newP=document.getElementById("newP").value="";
        var confirmP =document.getElementById("confirmP").value="";
}

$([name=Submit]).on('click', function(e) {

   if (($('#oldPassword').val() == "")||($('#newPassword').val() == "")||($('#confirmPassword').val() == "")) {//check 2
       e.preventDefault();
  }
  if ($('#oldPassword').val() == $('#newPassword').val()) {//check 1
       e.preventDefault();
   }
   if ($('#newPassword').val() != $('#confirmPassword').val()) {//check 3
       e.preventDefault();
   }
}
                    
function Function() {
        var oldpasswprd = document.getElementById('oldPassword').value;
        var newpassword = document.getElementById('newPassword').value;
        var confirmpassword = document.getElementById('confirmPassword').value;
        if (oldPassword == "" || newpassword == "" || confirmpassword == "") {
            alert('Please fill all the details');
        }
        else if (oldpasswprd == newpassword) {
            alert("Old password and New Password cannot be same");
        }
        else if (newpassword != confirmpassword) {
            alert("password mismatch");
        }
    }
