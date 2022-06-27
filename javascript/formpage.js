var input = document.getElementsByClassName("button1")[0];
if(input)
{
    
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        myfunction();
    }
  });
}
var object_new, collection = [], can = [], filtered;
var num1, num2, num3, num4, num5;
function myfunction() {
   // num1 = document.querySelector('input[name="gender"]:checked').value;
    num1 = document.getElementById("full_name").value
    num2 = document.getElementById("email").value
    num3 = document.getElementById("password").value
    num4 = document.getElementById("phone_no").value
    num5 = document.getElementById("date").value

    if (num1 != "" && num2 != "" && num3 != "" && num4 != "" && num5 != "") {
        var object_new = { '1': num1, '2': num2, '3': num3, '4': num4, '5': num5};
        let i = (collection.length + 1);
        var n = i;
        while (i == n) {
            collection[i] = object_new;

            i++;
        }

        var filtered = collection.filter(function (el) {
            return el != null;
        })
        //console.log(uniqueChars);
        can = JSON.stringify(filtered);
        localStorage.setItem("nextpage", can);
        can = JSON.parse(can);


        document.getElementById("full_name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
        document.getElementById("phone_no").value = ""
        document.getElementById("date").value = ""

        Swal.fire({
            icon: 'success',
            title: 'Your information store. please check',
            showCancelButton: true,
            showconfirmButton: true,
            confirmButtonText: '<a  href="file:///F:/design_page/javascript/Datapage.html">Ok</a>',
          
          cancelButtonColor: '#d33'

        });
    }
    else{
        alert("enter value fully");
    }
  
}
var a = localStorage.getItem("users");
var b = JSON.parse(a);