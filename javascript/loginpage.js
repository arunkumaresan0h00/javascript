
    var akp = 
    [
        {
            username : 'arun',
            password : '12345'
        },
        {
            username : 'kumar',
            password : 'arun'
        },
        {
            username : 'jaya',
            password : 'kumar'
        },
        {
            username : 'jay',
            password : 'raj'
        }
    ]
        var val1 = document.getElementById("value1");
       var val2 = document.getElementById("value2");
       var val3 = document.getElementById("button1");

       //===================   click  ====================
       

    val3.addEventListener('click',function(event)
       {
          if(val1.value != "" && val2.value != "")
                  {
                      if(akp.indexOf(val1.value) == -1 && akp.indexOf(val2.value) == -1 )
                      {

                        for(i=0;i<akp.length;i++)
                     {
                          
                  if(akp[i].username == val1.value && akp[i].password == val2.value)
                  {
                       
                      location.href = "file:///F:/design_page/javascript/Formpage.html";
                         //break;
                    } 
                
                     }
                      }
                      else
                      {
                          alert("incorrect value");
                      }
                      
                    
                }
                else
                {
                   
                  // var ds = document.getElementById("demo").innerHTML = "Enter the value fully";
                    alert("Enter the value fully");
                  }
                
  
       })


       


    //========== LOCAL STORAGE ==========
   // localStorage.clear();
      var c = JSON. stringify(akp);
      localStorage.setItem("username",c);
     
//       setTimeout(function myGreeting() {

//   var d = JSON.stringify(val1.value);
//       //console.log(d);
//       localStorage.setItem("users",d);
// }, 3000);
function value_one() {
    setTimeout(function myGreeting() {

          var d = JSON.stringify(val1.value);
              //console.log(d);
              localStorage.setItem("users",d);
              //alert(d);
        }, 2500);
}
    
      //===============\\
      
