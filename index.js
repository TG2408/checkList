let last = -1;

let x = document.getElementsByClassName('checkbx');
for (let i=0; i<x.length; i++) {
    x[i].addEventListener("click", function(e) {
        if (e.shiftKey && x[i].checked) {
          if (last > -1) {
              if (last < i) {
                for (let j=last; j<=i; j++){
                  x[j].setAttribute("checked", "checked");
                }
                last = -1;
              }
              else {
                for (let j=last; j>=i; j--){
                    x[j].setAttribute("checked", "checked");
                }
                last = -1;
              }
          } else {  
            last = i;
          }
        }
    })
}
