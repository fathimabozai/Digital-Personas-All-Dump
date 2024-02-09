var table1, tableRowForm1, tableDataForm1;
var submitButton1;
var customerPayload={}, customerPayloadLength ;
var arrayOfCustomerPayload=[]; 
var cells;
var rowIndexForm1 = null;
var currentRowForm1 = null;
//identifies which edit button in multiple rows is clicked
var selectedButtonForm1 = null;
var customerNameInput, customerMobileInput, customerPanInput, customerGenderInput, customerCityInput, customerStateInput, customerPaymentModeInput;
var customerNameValue="", customerMobileValue="", customerPanValue="", customerGenderValue="", customerCityValue="", customerStateValue="", customerPaymentModeValue="";
var editCustomerNameInput, editCustomerMobileInput, editCustomerPanInput, editCustomerGenderInput, editCustomerCityInput, editCustomerStateInput, editCustomerPaymentModeInput;
var editCustomerNameValue="", editCustomerMobileValue="", editCustomerPanValue="", editCustomerGenderValue="", editCustomerCityValue="", editCustomerStateValue="", editCustomerPaymentModeValue="";
var customerGenderMaleInput, customerGenderFemaleInput, customerGenderOthersInput, customerPaymentModeCardInput, customerPaymentModeCODInput, customerPaymentModeUPIInput;
var regExpName = /^[A-Za-z]+$/;
var regExpMobile = /[6-9]{1}[0-9]{9}/;
var regExpPan = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
var regExpCity = /^[\bA-za-z]+$/;
// var regExpState = /^[A-Za-z\s]+$/;
var editButtonform1;

//get table and button IDs
table1 = document.getElementById("table1");
submitButton1 = document.getElementById("button_Form1Submit");

//initially table should be invisible & submit-button should be disabled
table1.hidden = true;
submitButton1.hidden = true;      
             
function validateCustomerName(){
    debugger;     
    customerNameInput = document.getElementById("input_F1_CustomerName");
    customerNameValue = customerNameInput.value;       
    if(customerNameValue.match(regExpName)){
        customerNameInput.style.borderColor = "Green";
        validateAllValuesForm1(); 
    }else{
        customerNameInput.style.borderColor = "Red";
        alert("Incorrect Customer Name");
        validateAllValuesForm1();
    }
    
}
function validateCustomerMobile(){
    debugger;  
    customerMobileInput = document.getElementById("input_F1_CustomerMobile");
    customerMobileValue = customerMobileInput.value;

    if(customerMobileValue.match(regExpMobile)){
        customerMobileInput.style.borderColor = "Green";
        validateAllValuesForm1(); 
    }else{
        customerMobileInput.style.borderColor = "Red";
        alert("Incorrect Customer Mobile No");
        validateAllValuesForm1();
    } 
}
function validateCustomerPan(){
    debugger; 
    customerPanInput = document.getElementById("input_F1_CustomerPanNo");
    customerPanValue = customerPanInput.value; 
    if(customerPanValue.match(regExpPan)){
        customerPanInput.style.borderColor = "Green";
        validateAllValuesForm1(); 
    }else{
        customerPanInput.style.borderColor = "Red";
        setTimeout(()=>{
            alert("Incorrect customer PAN No");
        }, 2000);
        // alert("Incorrect Customer PAN No");
        validateAllValuesForm1(); 
    } 
}
function validateCustomerGender(){
    debugger;
    // customerGenderInput = document.getElementsByName("radio_Gender");
    customerGenderMaleInput = document.getElementById("radio_F1_CustomerGender_Male");
    customerGenderFemaleInput = document.getElementById("radio_F1_CustomerGender_Female"); 
    customerGenderOthersInput = document.getElementById("radio_F1_CustomerGender_Others");
    
    if(customerGenderMaleInput.checked == true){
        customerGenderValue = customerGenderMaleInput.value;
    }else if(customerGenderFemaleInput.checked == true){
        customerGenderValue = customerGenderFemaleInput.value;
    }else if(customerGenderOthersInput.checked == true){
        customerGenderValue = customerGenderOthersInput.value;
    }
    
    if(!customerGenderValue == ""){
        console.log("Gender Validate Successfull");
        validateAllValuesForm1(); 
    }else{
        alert("Please Select Gender");
        validateAllValuesForm1();
        
    } 
}
function validateCustomerCity(){
    debugger; 
    customerCityInput = document.getElementById("input_F1_CustomerCity");
    customerCityValue = customerCityInput.value;
    if(customerCityValue.match(regExpCity)){
        customerCityInput.style.borderColor = "Green";
        validateAllValuesForm1(); 
    }else{
        customerCityInput.style.borderColor = "Red";
        alert("Incorrect Customer City");
        validateAllValuesForm1();
    } 
}
function validateCustomerState(){
    debugger; 
    customerStateInput = document.getElementById("select_F1_State");
    customerStateValue = customerStateInput.value;
    if(!customerStateValue == " "){
        customerStateInput.style.borderColor = "Green";
        validateAllValuesForm1(); 
    }else {
        customerStateInput.style.borderColor = "Red";
        alert("Please Choose a State");
        validateAllValuesForm1();
    }
}
function validateCustomerPaymentMode(){
    debugger;           
    customerPaymentModeCardInput =  document.getElementById("checkbox_F1_PaymentMode_Card");
    customerPaymentModeCODInput =  document.getElementById("checkbox_F1_PaymentMode_COD");
    customerPaymentModeUPIInput =  document.getElementById("checkbox_F1_PaymentMode_UPI");

    if(customerPaymentModeCardInput.checked == true){
        customerPaymentModeValue = customerPaymentModeCardInput.value;
        // submitButton1.hidden = false
    }if(customerPaymentModeCODInput.checked == true){
        customerPaymentModeValue = customerPaymentModeCODInput.value;
        // submitButton1.hidden = false;
    }if(customerPaymentModeUPIInput.checked == true){
        customerPaymentModeValue = customerPaymentModeUPIInput.value;
        // submitButton1.hidden = false;
    }
    //1,2
    if(customerPaymentModeCardInput.checked == true && customerPaymentModeCODInput.checked == true){
        customerPaymentModeValue = customerPaymentModeCardInput.value +" , "+customerPaymentModeCODInput.value;
    }
    //1,3
    if(customerPaymentModeCardInput.checked == true && customerPaymentModeUPIInput.checked == true){
        customerPaymentModeValue = customerPaymentModeCardInput.value +" , "+customerPaymentModeUPIInput.value;
    }
    //2,3
    if(customerPaymentModeCODInput.checked == true && customerPaymentModeUPIInput.checked == true){
        customerPaymentModeValue = customerPaymentModeCODInput.value +" , "+customerPaymentModeUPIInput.value;
    }//1,2,3
    if(customerPaymentModeCardInput.checked == true && customerPaymentModeCODInput.checked == true && customerPaymentModeUPIInput.checked == true){
        customerPaymentModeValue = customerPaymentModeCardInput.value +" , "+customerPaymentModeCODInput.value+" , "+customerPaymentModeUPIInput.value;;
    }
    else if(customerPaymentModeCardInput.checked == false && customerPaymentModeCODInput.checked == false && customerPaymentModeUPIInput.checked == false ){
        customerPaymentModeValue = "";
        submitButton1.hidden = true;
    }
    if(customerPaymentModeValue == ""){
        alert("Please choose atleast one checkbox")
        validateAllValuesForm1(); 
    }else{
        validateAllValuesForm1(); 
    }    
}
function validateAllValuesForm1(){
    debugger;
    if(customerNameValue.match(regExpName) && customerMobileValue.match(regExpMobile) && customerPanValue.match(regExpPan)
    && !customerGenderValue == "" && customerCityValue.match(regExpCity) && !customerStateValue == " " && !customerPaymentModeValue == ""){
       
        submitButton1.hidden = false;
        submitButton1.disabled = false;

        //store form data in payload
        customerPayload = {
            "Name" : customerNameValue,
            "Mobile" : customerMobileValue,
            "Pan" : customerPanValue,
            "Gender" : customerGenderValue,
            "City" : customerCityValue,
            "State" : customerStateValue,
            "PaymentMode" : customerPaymentModeValue
        }

    }else{
        submitButton1.hidden = true;
        submitButton1.disabled = true;
    }
}
function addRowForm1(){
    debugger;

    //make table1 visible
    table1.hidden = false;   

    //submit table data here
    if(rowIndexForm1 == null){       
         //storing object in array
        arrayOfCustomerPayload.push(customerPayload);

        //creating Table Row
        tableRowForm1 = table1.insertRow();

        //finds object length by accessing keys
        customerPayloadLength = Object.keys(customerPayload).length;

        //creates 8 empty tds-columns dynamically based on object's length(7)    
        for(var i=0; i<=customerPayloadLength; i++){               
            tableDataForm1 = tableRowForm1.insertCell(i);        
        }
        //creates Action Column
        tableDataForm1 = tableRowForm1.insertCell(i);     //i will be 8 (9th cell)    

        //counts the total cells in a row
        cells= tableRowForm1.cells;

        //to put data into tds/cells    j-cell's index 
        for(var j=0;j<customerPayloadLength;j++){
            //s.no - auto generated
            tableRowForm1.cells[j].innerHTML = arrayOfCustomerPayload.length;
            //reads each property in object
            for(var x in customerPayload){                 
                tableRowForm1.cells[j+1].innerHTML = customerPayload[x];
                j++; //to access cells on the right
            }                         
        }
        createActionsForm1();

        //append table row to table1
        table1.appendChild(tableRowForm1);
        document.getElementById("form1_CustomerRegistration").reset();
        customerNameInput.style.borderColor = "Gray";
        customerMobileInput.style.borderColor = "Gray";
        customerPanInput.style.borderColor = "Gray";
        customerCityInput.style.borderColor = "Gray";
        customerStateInput.style.borderColor = "Gray";

        //clear values from variables
        clearValuesForm1();
        //disable Submit Button
        submitButton1.disabled = true;
    }else{
        //edit table data here
        customerPayload = {
            "Name" : editCustomerNameValue,
            "Mobile" : editCustomerMobileValue,
            "Pan" : editCustomerPanValue,
            "Gender" : editCustomerGenderValue,
            "City" : editCustomerCityValue,
            "State" : editCustomerStateValue,
            "PaymentMode" : editCustomerPaymentModeValue
        }
        //replace old object in array with new based on rowindex
        arrayOfCustomerPayload[rowIndexForm1-1] = customerPayload;
        //capture row based on button        
        //counts the total cells in a row
        cells= currentRowForm1.cells;

        //to put data into tds/cells    j-cells index 
        for(var j=0;j<customerPayloadLength;j++){
            currentRowForm1.cells[j].innerHTML = rowIndexForm1;
            //reads each property in object
            for(var x in customerPayload){                 
                currentRowForm1.cells[j+1].innerHTML = customerPayload[x];
                j++; //to access cells on the right
            }                         
        }
        rowIndexForm1 = null;
        selectedButtonForm1.innerHTML = "Edit";
    }
    
}
function createActionsForm1(){
    debugger;
    // var cells= tableRowForm1.cells;

    var editButton = "<button type='submit' id='button_Edit_F1' value='submit' onclick='editRowForm1(this)'>Edit</button>&nbsp;"
    var deleteButton = "<button type='submit' id='button_Delete_F1' value='submit' onclick='deleteRowForm1(this)'><i class='fa fa-trash'></i> Delete</button>&nbsp";
    tableRowForm1.cells[cells.length-1].innerHTML = editButton+" "+deleteButton;
}
function editRowForm1(button){
    debugger;
    
    editButtonform1 = document.getElementById("button_Edit_F1");

    //Identifies specific Edit button in which row is clicked
    selectedButtonForm1 = button; 

    //identifies the row number when Edit/Save button is clicked 
    rowIndexForm1 = button.parentNode.parentNode.rowIndex;

    //gives current row
    currentRowForm1 = button.parentNode.parentNode;

    //EDIT Button is clicked
    if(selectedButtonForm1.innerHTML == "Edit"){
        //change text to input 
        //var currentRowCells = currentRowForm1.cells;
        currentRowForm1.cells[1].innerHTML = '<input type="text" id="input_F1_EditCustomerName" required style="width:70px">'
        document.getElementById("input_F1_EditCustomerName").value = arrayOfCustomerPayload[rowIndexForm1-1].Name;
       
        currentRowForm1.cells[2].innerHTML = '<input type="text" id="input_F1_EditCustomerMobile"  required style="width:100px">'
        document.getElementById("input_F1_EditCustomerMobile").value = arrayOfCustomerPayload[rowIndexForm1-1].Mobile;
        
        currentRowForm1.cells[3].innerHTML = '<input type="text" id="input_F1_EditCustomerPanNo"  required style="width:100px">'
        document.getElementById("input_F1_EditCustomerPanNo").value = arrayOfCustomerPayload[rowIndexForm1-1].Pan;
       
        currentRowForm1.cells[4].innerHTML = '<select id="select_F1_EditCustomerGender" name="select_F1_EditCustomerGender" required style="width:70px; border: 2px solid"><option value="Female">Female</option><option value="Male">Male</option><option value="Others">Others</option></select>'
        document.getElementById("select_F1_EditCustomerGender").value = arrayOfCustomerPayload[rowIndexForm1-1].Gender;
       
        currentRowForm1.cells[5].innerHTML = '<input type="text" id="input_F1_EditCustomerCity" required style="width:100px">';
        document.getElementById("input_F1_EditCustomerCity").value = arrayOfCustomerPayload[rowIndexForm1-1].City;

        currentRowForm1.cells[6].innerHTML = '<select id="select_F1_EditCustomerState"  required style="width:200px; border: 2px solid"><option value="Andhra Pradesh">Andhra Pradesh</option><option value="Arunachal Pradesh">Arunachal Pradesh</option><option value="Maharashtra">Maharashtra</option><option value="Telangana">Telangana</option><option value="West Bengal">West Bengal</option></select>'
        document.getElementById("select_F1_EditCustomerState").value = arrayOfCustomerPayload[rowIndexForm1-1].State;

        currentRowForm1.cells[7].innerHTML = '<select id="select_F1_EditCustomerPaymentMode" required style="width:150px; border: 2px solid"><option value="Credit/Debit Card">Credit/Debit Card</option><option value="Cash On Delivery">Cash On Delivery</option><option value="UPI Payment">UPI Payment</option></select>'
        document.getElementById("select_F1_EditCustomerPaymentMode").value = arrayOfCustomerPayload[rowIndexForm1-1].PaymentMode;

        //change EDIT TO SAVE
        selectedButtonForm1.innerHTML = "Save";
        // editButtonform1.disabled = true;
    }
    //SAVE Button is clicked
    else if(selectedButtonForm1.innerHTML == "Save"){
        //storing "Editted" Form data into Object
        editCustomerNameInput = document.getElementById("input_F1_EditCustomerName");
        editCustomerNameValue = editCustomerNameInput.value;   
        editCustomerMobileInput = document.getElementById("input_F1_EditCustomerMobile");
        editCustomerMobileValue = editCustomerMobileInput.value;
        editCustomerPanInput = document.getElementById("input_F1_EditCustomerPanNo");
        editCustomerPanValue = editCustomerPanInput.value;
        editCustomerGenderInput = document.getElementById("select_F1_EditCustomerGender");
        editCustomerGenderValue = editCustomerGenderInput.value; 
        editCustomerCityInput = document.getElementById("input_F1_EditCustomerCity");
        editCustomerCityValue = editCustomerCityInput.value;
        editCustomerStateInput = document.getElementById("select_F1_EditCustomerState");
        editCustomerStateValue = editCustomerStateInput.value;
        editCustomerPaymentModeInput = document.getElementById("select_F1_EditCustomerPaymentMode");
        editCustomerPaymentModeValue = editCustomerPaymentModeInput.value;

        if(editCustomerNameValue.match(regExpName)){
            editCustomerNameInput.style.borderColor = "Green";
        }else{
            editCustomerNameInput.style.borderColor = "Red";
        }
        if(editCustomerMobileValue.match(regExpMobile)){
            editCustomerMobileInput.style.borderColor = "Green";
        }else{
            editCustomerMobileInput.style.borderColor = "Red";
        }
        if(editCustomerPanValue.match(regExpPan)){
            editCustomerPanInput.style.borderColor = "Green";
        }else{
            editCustomerPanInput.style.borderColor = "Red";
        }
        if(!editCustomerGenderValue == ""){
            console.log("Edit Gender Validate Successfull");
            editCustomerGenderInput.style.borderColor = "Green";
        }else{
            editCustomerGenderInput.style.borderColor = "Red";
            // alert("Please select Gender");
        }
        if(editCustomerCityValue.match(regExpCity)){
            editCustomerCityInput.style.borderColor = "Green";
        }else{
            editCustomerCityInput.style.borderColor = "Red";
        }
        if(!editCustomerStateValue == ""){
            editCustomerStateInput.style.borderColor = "Green";
        }else {
            editCustomerStateInput.style.borderColor = "Red";
        }
        if(!editCustomerPaymentModeValue == ""){
            editCustomerPaymentModeInput.style.borderColor = "Green";
        }else {
            editCustomerPaymentModeInput.style.borderColor = "Red";
        }
        if(editCustomerNameValue.match(regExpName) && editCustomerMobileValue.match(regExpMobile) &&
            editCustomerPanValue.match(regExpPan) && !editCustomerGenderValue == "" && editCustomerCityValue.match(regExpCity)
            && !editCustomerStateValue == "" && !editCustomerPaymentModeValue == ""
        ){
           alert("Validation Successfull !!");
            
        }
        //update input to data
        addRowForm1();  
    }
}

function deleteRowForm1(button){
    debugger;
    if(confirm("Are you sure you want to delete?")){
        //captures row no
        rowIndexForm1 = button.parentNode.parentNode.rowIndex;

        //gives current row
        currentRowForm1 = button.parentNode.parentNode;

        //counts the total cells in a row
        cells= currentRowForm1.cells;

        //delete from table
        table1.deleteRow(rowIndexForm1);

        //delete specific object from array
        var elementToBeDeletedForm1 = arrayOfCustomerPayload[rowIndexForm1-1];
        var objectToBeRemovedAtIndexForm1 = arrayOfCustomerPayload.indexOf(elementToBeDeletedForm1);
        arrayOfCustomerPayload.splice(objectToBeRemovedAtIndexForm1,1);

        var newRowsForm1 = [];
        newRowsForm1 = table1.rows;
        //auto update s.no
        for(i= 1; i<=arrayOfCustomerPayload.length; i++){
           newRowsForm1[i].cells[0].innerHTML = i;
        }
        //no record exists except for header
        if(table1.rows.length < 2){
            table1.hidden = true;
            //otherwise header will be counted and in addrow else block will hit
            rowIndexForm1 = null;
        }
    }else{
        alert("User Cancelled Delete Action.");
    }
}

function clearValuesForm1(){
    customerNameValue = "";
    customerMobileValue = "";
    customerPanValue = "";
    customerGenderValue = "";
    customerCityValue = "";
    customerStateValue = "";
    customerPaymentModeValue = "";
}