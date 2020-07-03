function myFunction() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "");
    x.setAttribute("id", "inputs");
    x.setAttribute("class", "form-control");
    x.setAttribute("style", "width:600px;margin:auto;");
    document.body.appendChild(x);


    var y = document.createElement("INPUT");
    y.setAttribute("type", "submit");
    y.setAttribute("value", "send");
    y.setAttribute("id", "buttons");
    y.setAttribute("onclick", "button1()");
    y.setAttribute("class", "btn btn-info");
    y.setAttribute("style", "width:100px;margin-left:400px;margin-top:40px");
    document.body.appendChild(y);
 
    var d = 
    document.createElement("INPUT");
    d.setAttribute("type", "submit");
    d.setAttribute("value", "Delete");
    d.setAttribute("id", "buttons2");
    d.setAttribute("onclick", "button2()");
    d.setAttribute("class", "btn btn-warning");
    d.setAttribute("style", "width:100px;margin-top:40px");
    document.body.appendChild(d);

} 

   
    
function button1(){
    
    var z = '';
    var z = document.getElementById("inputs").value;
    var n = (z.length);

    function factorialize(num) {
        var result = num;
        if (num === 0 || num === 1) 
            return 1; 
            while (num > 1) { 
                num--;
                result *= num;
            }
        return result;
    }
    var fact = (factorialize(n));
    console.log(fact)

    
    var spl = z.split('').sort();
    
    var array = spl;
    var results = [];
    

    for (var i = 0; i < array.length-1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            for (var k = j + 1; k < array.length; k++) {
                for (var l = k + 1; l < array.length; l++) {
                    results.push(array[i] + ' ' + array[j] + ' ' + array[k] + ' ' + array[l]);
                }
            }
        }
    }
    
    console.log(results);
    
    var li = document.createElement("li");
    li.setAttribute("value", ""); 
    li.setAttribute("id", "list"); 
    li.setAttribute("style", "width:600px;margin:auto;margin-top:40px; margin-bottom:40px;");
    document.body.appendChild(li).innerHTML = spl;
    document.createElement("div");
    document.body.appendChild(li).innerHTML = results;


}



function button2(){

    document.getElementById("inputs").value = "";

}




