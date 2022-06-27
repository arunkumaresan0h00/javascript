    
    (async () => {

        const { value: password } = await Swal.fire({
          title: 'Enter your password',
          input: 'password',
          inputLabel: 'Password',
          inputPlaceholder: 'Enter your password',
          inputAttributes: {
            maxlength: 10,
            autocapitalize: 'off',
            autocorrect: 'off'
          }
        })
        
        if (password == 'admin') {
            var nextpage = localStorage.getItem("nextpage");
            var nextpage1 = JSON.parse(nextpage);
            var one = nextpage1.length;
            console.log(one);
            var val1 = nextpage1.length;
        
            nextpage1.map((item, i) => {
                thirdPage(item, i);
            })
            function thirdPage(itemData, i) {
                //if (s != "" && s != undefined) {
                    var ele = document.createElement("ul");
                    ele.classList.add('main-block' + (i+1));
                    var ele2 = document.getElementsByClassName('content')[0];
                    ele2.appendChild(ele);
                for (let key in itemData) {
                    var list = document.createElement("li")
                    var text = document.createTextNode(itemData[key])
                    var name2 = document.getElementsByClassName('main-block' + (i+1))[0];
                    name2.classList.add("mystyle");
                    name2.appendChild(list)
                    list.appendChild(text)
        
                }
            }
        
        
        }
        
        })()