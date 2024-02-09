var table3, tableRowForm3, tableDataForm3;
var submitButton3;
var billingPayLoad={}, billingPayLoadLength;
var arrayOfBillingPayload=[];
var cells_F3;
var rowIndexForm3 = null;
var currentRowForm3 = null;
var selectedButtonForm3 = null;

var billingIdInput, billingDateInput, billingAmountInput, deliveryTypeInput, billingStatusInput, billingToInput, billingPaymentTypeInput;
var billingIdValue="", billingDateValue="", billingAmountValue="", deliveryTypeValue="", billingStatusValue="", billingToValue="", billingPaymentTypeValue="";
var editBillingIdInput, editBillingDateInput, editBillingAmountInput, editDeliveryTypeInput, editBillingStatusInput, editBillingToInput, editBillingPaymentTypeInput;
var editBillingIdValue="", editBillingDateValue="", editBillingAmountValue="", editDeliveryTypeValue="", editBillingStatusValue="", editBillingToValue="", editBillingPaymentTypeValue="";
var billingStatus_OutstandingInput, billingStatus_PaidInput, billingPaymentType_CashInput, billingPaymentType_CardInput;

//date validation variables
var  billingDateValueDay, today, todayDate;

var regExpBId = /[INV]-[0-9]{5}$/;
var regExpBDate;
var regExpBAmount=/^[0-9]+$/;
var regExpBTo = /^[A-za-z,]+[A-Za-z\s,]+[0-9]+$/;
var editButtonForm3;

//get table and button IDs
table3 = document.getElementById("table3");
submitButton3 = document.getElementById("button_Form3Submit");

//initially table should be invisible & submit-button should be disabled
table3.hidden = true;
submitButton3.hidden = true;

function validateBillingId(){
    debugger;
    billingIdInput = document.getElementById("input_F3_BillingId")
    billingIdValue = billingIdInput.value;

    if(billingIdValue.match(regExpBId)){
        billingIdInput.style.borderColor = "Green";
        validateAllValuesForm3();
    }else{
        billingIdInput.style.borderColor = "Red"
        alert('Incorrect Invoice ID.\nSample Invoice ID is INV-12345');
        validateAllValuesForm3();
    }
}
function validateBillingDate(){
    debugger;
    billingDateInput = document.getElementById("input_F3_BillingDate")
    billingDateValue = billingDateInput.value;
    today = new Date();
    todayDate = today.getFullYear()+"-"+today.getMonth()+1+"-"+today.getDate();

    if(billingDateValue < todayDate){
        billingDateInput.style.borderColor = "Red";
        alert("Past date not allowed");
        validateAllValuesForm3();
        
    }else if(billingDateValue > todayDate || billingDateValue == todayDate){
        billingDateInput.style.borderColor = "Green";
        validateAllValuesForm3();
    }    
}
function validateBillingAmount(){
    debugger;
    billingAmountInput = document.getElementById("input_F3_BillingAmount")
    billingAmountValue = billingAmountInput.value;

    if (billingAmountValue.match(regExpBAmount)) {
        billingAmountInput.style.borderColor = "Green";
        validateAllValuesForm3();
    } else {
        billingAmountInput.style.borderColor = "Red";
        alert("Incorrect Billing Amount");
        validateAllValuesForm3();
    }
}
function validateDeliveryType(){
    debugger;
    deliveryTypeInput = document.getElementById("select_F3_DeliveryType");
    deliveryTypeValue = deliveryTypeInput.value;
    if(!deliveryTypeValue == ""){
        deliveryTypeInput.style.borderColor = "Green";
        validateAllValuesForm3();
    } else {
        deliveryTypeInput.style.borderColor = "Red";
        alert("Incorrect Delivery Type");
        validateAllValuesForm3(); 
    }
}
function validateBillingStatus(){
    debugger;
    // billingStatusInput = document.getElementsByName("radio_BillingStatus");
    // for(i=0;i<billingStatusInput.length;i++){
    //    if(billingStatusInput[i].checked == true){
    //     billingStatusValue = billingStatusInput[i].value;
    //    }
    // }
    billingStatus_OutstandingInput = document.getElementById("radio_BillingStatus_Outstanding"); 
    billingStatus_PaidInput = document.getElementById("radio_BillingStatus_Paid"); 
    if(billingStatus_OutstandingInput.checked == true){
        billingStatusValue = billingStatus_OutstandingInput.value;
    }else if(billingStatus_PaidInput.checked == true){
        billingStatusValue = billingStatus_PaidInput.value;
    }
   if(!billingStatusValue == ""){
        console.log("Billing Status Validate Successfull");
        validateAllValuesForm3();
    }else{
        alert("Please select Billing Status");
        validateAllValuesForm3();
    } 
}
function validateBillingTo(){
    debugger;
    billingToInput = document.getElementById("input_F3_BillingToName")
    billingToValue = billingToInput.value;
    
    if (billingToValue.match(regExpBTo)) {
        billingToInput.style.borderColor = "Green";
        validateAllValuesForm3();
    } else {
        billingToInput.style.borderColor = "Red";
        alert("Incorrect Billing To Address.\nSample Format: Area, City, PinCode");
        validateAllValuesForm3();  
    }
}
function validateBillingPaymentType(){
    debugger;
    // billingPaymentTypeInput = document.getElementsByName("checkbox_F3_PaymentType");
    // for(i=0;i<billingPaymentTypeInput.length;i++){
    //     if(billingPaymentTypeInput[i].checked == true){
    //         billingPaymentTypeValue = billingPaymentTypeInput[i].value;
    //     }
    // }
    billingPaymentType_CashInput = document.getElementById("checkbox_F3_PaymentType_Cash");
    billingPaymentType_CardInput = document.getElementById("checkbox_F3_PaymentType_Card");
    //1
    if(billingPaymentType_CashInput.checked == true){
        billingPaymentTypeValue = billingPaymentType_CashInput.value; 
    }
    //2
    if(billingPaymentType_CardInput.checked == true){
        billingPaymentTypeValue = billingPaymentType_CardInput.value;
    }
    //1,2
    if(billingPaymentType_CashInput.checked == true && billingPaymentType_CardInput.checked == true){
        billingPaymentTypeValue = billingPaymentType_CashInput.value+" , "+billingPaymentType_CardInput.value;
    } 
    //none
    else if(billingPaymentType_CashInput.checked == false && billingPaymentType_CardInput.checked == false){
        billingPaymentTypeValue = "";
    }
    //validation
    if(!billingPaymentTypeValue == ""){
        console.log("Billing Payment Type Validate Successfull");
        validateAllValuesForm3(); 
    }else{
        alert("Please check atleast one box");
        validateAllValuesForm3(); 
    }    
}
function validateAllValuesForm3(){
    debugger;
    if(billingIdValue.match(regExpBId) && (billingDateValue > todayDate || billingDateValue == todayDate) && billingAmountValue.match(regExpBAmount) 
    && !deliveryTypeValue == "" && !billingStatusValue == "" && billingToValue.match(regExpBTo) && !billingPaymentTypeValue == ""){   
        submitButton3.hidden = false;
        submitButton3.disabled = false;

        //storing form data into payload
        billingPayLoad = {
        "BId" : billingIdValue,
        "BDate" : billingDateValue,
        "BAmount" : billingAmountValue,
        "DeliveryType" : deliveryTypeValue,
        "BStatus" : billingStatusValue,
        "BTo" : billingToValue,
        "BPaymentType" : billingPaymentTypeValue
    }
    }else{
        submitButton3.hidden = true;
        submitButton3.disabled = true;
    }
}
function addRowForm3(){
    debugger;

    //make table1 visible
    table3.hidden = false;
    
    //submit table data here
    if(rowIndexForm3 == null){
       
        //storing object in array
        arrayOfBillingPayload.push(billingPayLoad);

        //creating Table Row
        tableRowForm3 = table3.insertRow();

        //finds object length by accessing keys
        billingPayLoadLength = Object.keys(billingPayLoad).length;
        //creates 8 empty tds-columns dynamically based on object's length(7)  
        for(i=0;i<=billingPayLoadLength;i++){
            tableDataForm3 = tableRowForm3.insertCell(i);
        }

        //creates Action Column
        tableDataForm3 = tableRowForm3.insertCell(i) //i will be 8 (9th cell)

        //counts the total cells in a row
        cells_F3 = tableRowForm3.cells;

        //to put data into tds/cells    j-cells index 
        for(j=0; j<billingPayLoadLength; j++){
            //SNO auto population based on array's length
            tableRowForm3.cells[j].innerHTML = arrayOfBillingPayload.length;

            //reads each property in object
            for(z in billingPayLoad){
                tableRowForm3.cells[j+1].innerHTML = billingPayLoad[z];
                j++; //shifts to next column after printing property name
            }
        }
        createActionsForm3();

        //append table row to table3
        table3.appendChild(tableRowForm3);

        //clears form data
        document.getElementById("form3_BillingDetails").reset();
        
        //adds gray color to remove validation
        billingIdInput.style.borderColor = "Gray";
        billingDateInput.style.borderColor = "Gray";
        billingAmountInput.style.borderColor = "Gray";
        deliveryTypeInput.style.borderColor = "Gray";
        billingToInput.style.borderColor = "Gray";    
        
        //clear values from variables
        clearValuesForm3();

        //disable Submit Button
        submitButton3.disabled = true;
    }else{
        //edit table data here
        //replace old object in array with new based on rowindex
        arrayOfBillingPayload[rowIndexForm3-1]=billingPayLoad;

        //capture row based on button is already done in edit function       
        //counts the total cells in a row
        cells_F3= currentRowForm3.cells;

        //to put data into tds/cells    j-cells index 
        for(var j=0;j<billingPayLoadLength;j++){
            currentRowForm3.cells[j].innerHTML = rowIndexForm3;
            //reads each property in object
            for(var y in billingPayLoad){                 
                currentRowForm3.cells[j+1].innerHTML = billingPayLoad[y];
                j++; //to access cells on the right
            }                         
        }
        rowIndexForm3 = null;
        //Save to Edit
        selectedButtonForm3.innerHTML = "Edit"
    }
}
function createActionsForm3(){
    debugger;
    cells_F3= tableRowForm3.cells;

    var editButton = "<button type='submit' id='button_Edit_F3' value='submit' onclick='editRowForm3(this)'>Edit</button>&nbsp;"
    var deleteButton = "<button type='submit' id='button_Delete_F3' value='submit' onclick='deleteRowForm3(this)'><i class='fa fa-trash'></i> Delete</button>&nbsp";
    tableRowForm3.cells[cells_F3.length-1].innerHTML = editButton+" "+deleteButton;
}

function editRowForm3(button){
    debugger;
    editButtonForm3 = document.getElementById("button_Edit_F3");

    selectedButtonForm3 = button;

    //identifies the row number when Edit/Save button is clicked 
    rowIndexForm3 = button.parentNode.parentNode.rowIndex;

    //gives current row
    currentRowForm3 = button.parentNode.parentNode;
  
    //EDIT Button is clicked
    if (selectedButtonForm3.innerHTML == "Edit") {
        //change text to input
        currentRowForm3.cells[1].innerHTML = '<input type="text" id="input_F3_EditBillingId" required style="width:100px;">'
        document.getElementById("input_F3_EditBillingId").value = arrayOfBillingPayload[rowIndexForm3-1].BId;

        currentRowForm3.cells[2].innerHTML = '<input type="date" id="input_F3_EditBillingDate" required style="width:100px;">'
        document.getElementById("input_F3_EditBillingDate").value = arrayOfBillingPayload[rowIndexForm3-1].BDate;

        currentRowForm3.cells[3].innerHTML = '<input type="text" id="input_F3_EditBillingAmount" required style="width:100px;">'
        document.getElementById("input_F3_EditBillingAmount").value = arrayOfBillingPayload[rowIndexForm3-1].BAmount;

        currentRowForm3.cells[4].innerHTML = '<select id="select_F3_EditDeliveryType" required style="width:110px;"><option value="Home Delivery">Home Delivery</option><option value="Pick Up">Pick Up</option></select>'
        document.getElementById("select_F3_EditDeliveryType").value = arrayOfBillingPayload[rowIndexForm3-1].DeliveryType;

        currentRowForm3.cells[5].innerHTML = '<select id="select_EditBillingStatus" required style="width:100px;"><option value="Outstanding">Outstanding</option><option value="Paid">Paid</option></select>'
        document.getElementById("select_EditBillingStatus").value = arrayOfBillingPayload[rowIndexForm3-1].BStatus;

        currentRowForm3.cells[6].innerHTML = '<input type="text" id="input_F3_EditBillingToName" required style="width:200px;">'
        document.getElementById("input_F3_EditBillingToName").value = arrayOfBillingPayload[rowIndexForm3-1].BTo;

        currentRowForm3.cells[7].innerHTML = '<select id="selectF3_EditBillingPaymentType" required style="width:130px;"><option value="Cash Payment">Cash Payment</option><option value="Card Payment">Card Payment</option></select>'
        document.getElementById("selectF3_EditBillingPaymentType").value = arrayOfBillingPayload[rowIndexForm3-1].BPaymentType;

         //change EDIT TO SAVE
         selectedButtonForm3.innerHTML = "Save"
        
    } else if (selectedButtonForm3.innerHTML == "Save") {
        editBillingIdInput = document.getElementById("input_F3_EditBillingId");
        editBillingIdValue = editBillingIdInput.value;
        editBillingDateInput = document.getElementById("input_F3_EditBillingDate");
        editBillingDateValue = editBillingDateInput.value;
        editBillingAmountInput = document.getElementById("input_F3_EditBillingAmount");
        editBillingAmountValue = editBillingAmountInput.value;
        editDeliveryTypeInput = document.getElementById("select_F3_EditDeliveryType");
        editDeliveryTypeValue = editDeliveryTypeInput.value;
        editBillingStatusInput = document.getElementById("select_EditBillingStatus");
        editBillingStatusValue = editBillingStatusInput.value;
        editBillingToInput = document.getElementById("input_F3_EditBillingToName");
        editBillingToValue= editBillingToInput.value;
        editBillingPaymentTypeInput = document.getElementById("selectF3_EditBillingPaymentType");
        editBillingPaymentTypeValue = editBillingPaymentTypeInput.value;

        if(editBillingIdValue.match(regExpBId)){
            editBillingIdInput.style.borderColor = "Green"
        }else{
            editBillingIdInput.style.borderColor = "Red"
        }
        if(editBillingDateValue > todayDate || editBillingDateValue == todayDate){
            editBillingDateInput.style.borderColor = "Green"
        }else{
            editBillingDateInput.style.borderColor = "Red"
        }
        if(editBillingAmountValue.match(regExpBAmount)){
            editBillingAmountInput.style.borderColor = "Green"    
        }else{
            editBillingAmountInput.style.borderColor = "Red"
        }
        if(!editDeliveryTypeValue == ""){
            editDeliveryTypeInput.style.borderColor = "Green"    
        }else{
            editDeliveryTypeInput.style.borderColor = "Red"
        }
        if(!editBillingStatusValue == ""){
            editBillingStatusInput.style.borderColor = "Green"    
        }else{
            editBillingStatusInput.style.borderColor = "Red"
        }
        if(editBillingToValue.match(regExpBTo)){
            editBillingToInput.style.borderColor = "Green"    
        }else{
            editBillingToInput.style.borderColor = "Red"
        }
        if(!editBillingPaymentTypeValue == ""){
            editBillingPaymentTypeInput.style.borderColor = "Green"    
        }else{
            editBillingPaymentTypeInput.style.borderColor = "Red"
        }
        if(editBillingIdValue.match(regExpBId) && (editBillingDateValue > todayDate || editBillingDateValue == todayDate)
            && editBillingAmountValue.match(regExpBAmount) && !editDeliveryTypeValue == "" && !editBillingStatusValue == "" 
            && editBillingToValue.match(regExpBTo) && !editBillingPaymentTypeValue == ""
        ){
            alert("Validation Successfull !!");
            billingPayLoad = {
                "BId" : editBillingIdValue,
                "BDate" : editBillingDateValue,
                "BAmount" : editBillingAmountValue,
                "DeliveryType" : editDeliveryTypeValue,
                "BStatus" : editBillingStatusValue,
                "BTo" : editBillingToValue,
                "BPaymentType" : editBillingPaymentTypeValue
            }
            //change input to data
            addRowForm3();
        }else{
            alert("Validation Failed !\n Please Enter proper values.");
        }
    }
}
function deleteRowForm3(button){
    debugger;
    if(confirm("Are you sure you want to delete?")){
        //captures row no
        rowIndexForm3 = button.parentNode.parentNode.rowIndex;

        //gives current row
        currentRowForm3 = button.parentNode.parentNode;

        //counts the total cells in a row
        cells_F3= currentRowForm3.cells;

        //delete from table
        table3.deleteRow(rowIndexForm3);

        //delete specific object from array
        var elementToBeDeletedForm3 = arrayOfBillingPayload[rowIndexForm3-1];
        var objectToBeRemovedAtIndexForm3 = arrayOfBillingPayload.indexOf(elementToBeDeletedForm3);
        arrayOfBillingPayload.splice(objectToBeRemovedAtIndexForm3,1);

        //auto update s.no
        var newRowsForm3 = [];
        newRowsForm3 = table3.rows;
        for(i= 1; i<=arrayOfBillingPayload.length; i++){
            newRowsForm3[i].cells[0].innerHTML = i;
        }

        //no record exists except for header
        if(table3.rows.length < 2){
            table3.hidden = true;
            //otherwise header will be counted and in addrow else block will hit
            rowIndexForm3 = null;
        }
    }else{
        alert("User Cancelled Delete Action.");
    }
}

function clearValuesForm3(){
    billingIdValue = "";
    billingDateValue = "";
    billingAmountValue = "";
    deliveryTypeValue = "";
    billingStatusValue = "";
    billingToValue = "";
    billingPaymentTypeValue = "";
}