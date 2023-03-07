function handleMarkSheet (){
    let subjectsInfo = {
        english : parseFloat(document.getElementById("english").value),
        urdu : parseFloat(document.getElementById("urdu").value),
        math : parseFloat(document.getElementById("math").value),
    }
    
    let sum = subjectsInfo.english + subjectsInfo.urdu + subjectsInfo.math


    document.getElementById("englishMark").innerText = subjectsInfo.english
    document.getElementById("urduMark").innerText = subjectsInfo.urdu
    document.getElementById("mathMark").innerText = subjectsInfo.math
    document.getElementById("showTable").style.display = "inline";
    
    
    let percentage = (sum/300)*100 ;
    
    document.getElementById("grade").innerText =percentage.toFixed(3)

    console.log("Result", percentage)
}