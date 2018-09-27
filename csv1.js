class GetCSV
{
  loadFile(o)
  {
      
      var fr = new FileReader();
      fr.onload = function(e)
        {
          obj.showDataFile(e, o);
        };
    fr.readAsText(o.files[0]);
  }
 showDataFile(e, o)
 { 
     
      var getCSVData = e.target.result;
      var rows = getCSVData.split("\n");
      var html = '<table border="1">';
      rows.forEach((data, index) => 
      {
            html += "<tr>";
            html += "<td>" + index + "</td>";
            data.split(",").forEach((word,i)=>
            {
              html += "<td>" + word + "</td>";
            });       
       
       html += "</tr>";

      });
    html += '</table>';
    // var button=document.createElement('input');
    // button.setAttribute('type','button');
    // button.setAttribute('value','Read table Data');
    // button.setAttribute('onchange','GetTableValues()');
    // document.getElementById("formSource").appendChild(button);

    document.getElementById("data").innerHTML = html;
    document.getElementById("data").style.color="blue"; 
    document.getElementById("myBtn").disabled=true;    
}

}
var obj= new GetCSV();
