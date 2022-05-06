import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = matatus => {
    // initialize jsPDF
    const doc = new jsPDF();
  
    // define the columns we want and their titles
    const tableColumn = ["#", "Reg No", "From", "To", "Bus Fare", "Driver"];
    // define an empty array of rows
    const tableRows = [];
    let rowNumber = 1;

    matatus.forEach(matatu => { 
      const matatuData = [
        rowNumber,
        matatu.reg,
        matatu.stage,
        matatu.to,
        matatu.fare,
        matatu.driver,
       
      ];
      // push each info into a row
      tableRows.push(matatuData);
      rowNumber++;
    });
  
    // startY is basically margin-top
    doc.autoTable({
        head: [tableColumn], 
        body: tableRows, 
        startY: 20
    });
    const date = Date().split(" ");
    // we use a date string to generate our filename.
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    // Report title. and margin-top + margin-left
    doc.text(`Generated at ${Date()}`, 14, 15);
    // we define the name of our PDF file.
    doc.save(`report_${dateStr}.pdf`);
  };
  
  export default generatePDF;