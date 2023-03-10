function ChangeMoney(){
    let a = +document.getElementById("Amount").value;
    let f = +document.getElementById("From Currency").value;
    let t = +document.getElementById("To Currency").value;
    let r = document.getElementById("Result").value;
    if (f=="USD" && t=="VND"){
        r=(a*23000) + " Đ";
    }
    else if (f=="VND" && t=="USD"){
        r=(a/23000) + " $";
    }
    else if (f == "VND") {
        r = a + " Đ"
    } 
    else {
        r = a + " $"
    }    
    document.getElementById("Result").innerHTML = r;
}



