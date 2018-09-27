class myFile{
	// chooseFile(event){
	// 	 var input=event.target;
	// 	 const reader=new FileReader();
	// 	 reader.onload=function(){
	// 		var text = reader.result;
	// 		var text1 = document.getElementById('output');
	// 		text1.textContent = text;
	// 		var text2=text.split('\n')
			
	// 		for (let i=0;i<=text2.length-1;i++)
	// 			{
	// 				var build = '<table border="1" style="border-collapse: collapse" width="100%">\n';
	//                 text2.forEach( function getvalues(thisRow) {
	//                 build += "<tr>\n";
	//                 var columns = thisRow.split(",");
	//                 for(var i=0;i<columns.length;i++){ build += "<td>" + columns[i] + "</td>\n"; }   			
	//                  build += "</tr>\n";
	//                 })
	//                 build += "</table>";
	// 				console.log(text2[i]);
	// 			}
	// 			};
				


			  
	// 		reader.readAsText(input.files[0]);
	// 		   document.getElementById("myBtn").disabled=true;
	// 	};
	// }
//let t=new myFile();
 
 loadFile(o)
  {
      
      var fr = new FileReader();
      fr.onload = function(e)
        {
          sobj.showDataFile(e, o);
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
    document.getElementById("data").innerHTML = html;
    document.getElementById("data").style.color="blue"; 
    document.getElementById("myBtn").disabled=true;

   
}

}
var obj= new GetCSV();
