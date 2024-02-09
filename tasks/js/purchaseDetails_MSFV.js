var table2, tableRowForm2, tableDataForm2;
var submitButton2;
var purchasePayload={}, purchasePayloadLength;
var arrayOfPurchasePayload=[];
var cells_pd;
var rowIndexForm2 = null;
var currentRowForm2 = null;
var selectedButtonForm2 = null;

var productIdInput, productNameInput, productTypeInput, productPriceInput, productQuantityInput, productTotalAmountInput, productDeliveryStatusInput;
var productIdValue="", productNameValue="", productTypeValue="", productPriceValue="", productQuantityValue="", productTotalAmountValue="", productDeliveryStatusValue="";
var editProductIdInput, editProductNameInput, editProductTypeInput, editProductPriceInput, editProductQuantityInput, editProductTotalAmountInput, editProductDeliveryStatusInput;
var editProductIdValue="", editProductNameValue="", editProductTypeValue="", editProductPriceValue="", editProductQuantityValue="", editProductTotalAmountValue="", editProductDeliveryStatusValue="";
var productType_GoodsInput, productType_MerchandiseInput, productType_GroceriesInput, productDeliveryStatus_PartiallyDeliveredInput, productDeliveryStatus_DeliveredInput;

var regExpPId=/[P]{1}-[0-9]{4}$/;
var regExpPName = /^[A-Za-z\s]+$/;
var regExpPPrice = /[0-9]$/;
var editButtonForm2;
//get table and button IDs
table2 = document.getElementById("table2");
submitButton2 = document.getElementById("button_Form2Submit");

//initially table should be invisible & submit-button should be disabled
table2.hidden = true;
submitButton2.hidden = true;

function validateProductId(){
    debugger;
    productIdInput = document.getElementById("input_F2_ProductId");
    productIdValue = productIdInput.value;
    if(productIdValue.match(regExpPId)){
        productIdInput.style.borderColor = "Green";
        validateAllValuesForm2();  
    }else{
        productIdInput.style.borderColor = "Red" 
        alert("Incorrect ID.\nSample ID Format is: P-1001");
        validateAllValuesForm2();
    }
}
function validateProductName(){
    debugger;
    productNameInput = document.getElementById("input_F2_ProductName");
    productNameValue = productNameInput.value;
    if(productNameValue.match(regExpPName)){
        productNameInput.style.borderColor = "Green";
        validateAllValuesForm2();    
    }else{
        productNameInput.style.borderColor = "Red";
        alert("Incorrect Product Name");
        validateAllValuesForm2();
    }
}
function validateProductType(){
    debugger;
    // productTypeInput = document.getElementsByName("checkbox_F2");
    // for(i=0;i<productTypeInput.length;i++){
    //     if(productTypeInput[i].checked == true){
    //         productTypeValue = productTypeInput[i].value;
    //     }
    // }
    productType_GoodsInput = document.getElementById("checkbox_F2_ProductType_Goods");
    productType_MerchandiseInput = document.getElementById("checkbox_F2_ProductType_Merchandise");
    productType_GroceriesInput = document.getElementById("checkbox_F2_ProductType_Groceries");
    if(productType_GoodsInput.checked == true){
        productTypeValue = productType_GoodsInput.value;
    }
    if(productType_MerchandiseInput.checked  == true){
        productTypeValue = productType_MerchandiseInput.value;
    }
    if(productType_GroceriesInput.checked  == true){
        productTypeValue = productType_GroceriesInput.value;
    }
    //1,2
    if(productType_GoodsInput.checked == true && productType_MerchandiseInput == true){
        productTypeValue = productType_GoodsInput.value+" , "+productType_MerchandiseInput.value;
    }//1,3
    if(productType_GoodsInput.checked == true && productType_GroceriesInput == true){
        productTypeValue = productType_GoodsInput.value+" , "+productType_GroceriesInput.value;
    }
    //2,3
    if(productType_MerchandiseInput.checked == true && productType_GroceriesInput.checked == true ){
        productTypeValue = productType_MerchandiseInput.value+" , "+productType_GroceriesInput.value;
    }
    //1,2,3
    if(productType_GoodsInput.checked == true && productType_MerchandiseInput.checked == true && productType_GroceriesInput.checked == true ){
        productTypeValue = productType_GoodsInput.value+" , "+productType_MerchandiseInput.value+" , "+productType_GroceriesInput.value;
    }
    //none
    else if(productType_GoodsInput.checked == false && productType_MerchandiseInput.checked == false && productType_GroceriesInput.checked == false ){
        productTypeValue = "";
        submitButton2.hidden = true
    }  
    if(productTypeValue == ""){
        alert("Please check atleast one box");
        validateAllValuesForm2();
    }else{
        validateAllValuesForm2(); 
    }
}
function validateProductPrice(){
    debugger;
    productPriceInput = document.getElementById("input_F2_ProductPrice");
    productPriceValue = productPriceInput.value;
    if(productPriceValue.match(regExpPPrice)){
        productPriceInput.style.borderColor = "Green"; 
        validateAllValuesForm2();   
    }else{
        productPriceInput.style.borderColor = "Red";
        alert("Incorrect Product Price");
        validateAllValuesForm2();
    }
}
function validateProductQuantity(){
    debugger;
    productQuantityInput = document.getElementById("select_F2_ProductQuantity");
    productQuantityValue = productQuantityInput.value;
    if(!productQuantityValue == ""){
        productQuantityInput.style.borderColor = "Green";
        validateAllValuesForm2(); 
    }else{
        productQuantityInput.style.borderColor = "Red";
        alert("Please choose a quantity");
        validateAllValuesForm2();
    }
}
function validateProductTotalAmount(){
    debugger;
    productTotalAmountInput = document.getElementById("input_F2_ProductAmount");
    if(productPriceValue == "" && productQuantityValue == ""){
        productTotalAmountInput.value = null
    }else{
        productTotalAmountInput.value = parseInt(productPriceValue) * parseInt(productQuantityValue);
        productTotalAmountValue = productTotalAmountInput.value;
    }
    if(!productTotalAmountValue.match(regExpPPrice) || productTotalAmountValue == ""){
        productTotalAmountInput.style.borderColor = "Red";  
        alert("Incorrect Total Name");
        validateAllValuesForm2(); 
    }else{
        productTotalAmountInput.style.borderColor = "Green";
        validateAllValuesForm2();
    }    
}
function validateProductDeliveryStatus(){
    debugger;
    // productDeliveryStatusInput = document.getElementsByName("radio_DeliveryStatus");
    // for(i=0;i<productDeliveryStatusInput.length; i++){
    //     if(productDeliveryStatusInput[i].checked == true){
    //         productDeliveryStatusValue = productDeliveryStatusInput[i].value;
    //     }
    // }
    productDeliveryStatus_PartiallyDeliveredInput = document.getElementById("radio_F2_PurchaseDeliveryStatus_PD");
    productDeliveryStatus_DeliveredInput = document.getElementById("radio_F2_PurchaseDeliveryStatus_D");
    if(productDeliveryStatus_PartiallyDeliveredInput.checked == true){
        productDeliveryStatusValue = productDeliveryStatus_PartiallyDeliveredInput.value;
    }else if(productDeliveryStatus_DeliveredInput.checked = true){
        productDeliveryStatusValue = productDeliveryStatus_DeliveredInput.value;
    }
    if(!productDeliveryStatusValue == ""){
        validateAllValuesForm2();
        console.log("Product Delivery Status Validate Successfull");
    }else{
        alert("Please Select Delivery Status");
        validateAllValuesForm2();
    }
}
function validateAllValuesForm2(){
    debugger;
    if(productIdValue.match(regExpPId) && productNameValue.match(regExpPName) && !productTypeValue == ""
    && productPriceValue.match(regExpPPrice) && !productQuantityValue == "" && productTotalAmountValue.match(regExpPPrice) 
    && !productDeliveryStatusValue == ""){

        submitButton2.hidden = false;
        submitButton2.disabled = false;

        //store form data in payload
        purchasePayload = {
        "PId" : productIdValue,
        "PName" : productNameValue,
        "PType" : productTypeValue,
        "PPrice" : productPriceValue,
        "PQuantity" : productQuantityValue,
        "PAmount" : productTotalAmountValue,
        "PDeliveryStatus" : productDeliveryStatusValue,
    }

    }else{
        submitButton2.hidden = true;
        submitButton2.disabled = true;
    }
}
function addRowForm2(){
    debugger;
    //make table1 visible
    table2.hidden = false;

    //submit table data here
    if(rowIndexForm2 == null){
        //store form data in payload
        purchasePayload = {
            "PId" : productIdValue,
            "PName" : productNameValue,
            "PType" : productTypeValue,
            "PPrice" : productPriceValue,
            "PQuantity" : productQuantityValue,
            "PAmount" : productTotalAmountValue,
            "PDeliveryStatus" : productDeliveryStatusValue,
        }
        //return purchasePayload; 

        //storing object in array
        arrayOfPurchasePayload.push(purchasePayload);

        //creating Table Row
        tableRowForm2 = table2.insertRow();

        //finds object length by accessing keys
        purchasePayloadLength = Object.keys(purchasePayload).length;

        //creates 8 empty tds-columns dynamically based on object's length(7)    
        for(var i=0; i<=purchasePayloadLength; i++){
            tableDataForm2 = tableRowForm2.insertCell(i);
        }
        //creates Action Column
        tableDataForm2 = tableRowForm2.insertCell(i) //i will be 8 (9th cell)

        //counts the total cells in a row
        cells_pd = tableRowForm2.cells;

        //to put data into tds/cells    j-cells index 
        for(var j=0;j<purchasePayloadLength;j++){
            tableRowForm2.cells[j].innerHTML = arrayOfPurchasePayload.length;
            //reads each property in object
            for(var y in purchasePayload){                 
                tableRowForm2.cells[j+1].innerHTML = purchasePayload[y];
                j++; //to access cells on the right
            }                         
        }
        createActionsForm2();

        //append table row to table2
        table2.appendChild(tableRowForm2);
        //clears form data
        document.getElementById("form2_PurchaseDetails").reset();
        //adds gray color to remove validation
        productIdInput.style.borderColor = "Gray";
        productNameInput.style.borderColor = "Gray";
        productPriceInput.style.borderColor = "Gray";
        productQuantityInput.style.borderColor = "Gray";
        productTotalAmountInput.style.borderColor = "Gray";    

        //clear values from variables
        clearValuesForm2();

        //disable Submit Button
        submitButton2.disabled = true;
    }else{
        //edit table data here
        //replace old object in array with new based on rowindex
        arrayOfPurchasePayload[rowIndexForm2-1] = purchasePayload;

        //capture row based on button        
        //counts the total cells in a row
        cells_pd= currentRowForm2.cells;
        //to put data into tds/cells    j-cells index 
        for(var j=0;j<purchasePayloadLength;j++){
            currentRowForm2.cells[j].innerHTML = rowIndexForm2;
            //reads each property in object
            for(var y in purchasePayload){                 
                currentRowForm2.cells[j+1].innerHTML = purchasePayload[y];
                j++; //to access cells on the right
            }                         
        }
        rowIndexForm2 = null;
        selectedButtonForm2.innerHTML = "Edit";
    }
    
}
function createActionsForm2(){
    debugger;
    cells_pd= tableRowForm2.cells;

    var editButton = "<button type='submit' id='button_Edit_F2' value='submit' onclick='editRowForm2(this)'>Edit</button>&nbsp;"
    var deleteButton = "<button type='submit' id='button_Delete_F2' value='submit' onclick='deleteRowForm2(this)'><i class='fa fa-trash'></i> Delete</button>&nbsp";
    tableRowForm2.cells[cells_pd.length-1].innerHTML = editButton+" "+deleteButton;
}

function editRowForm2(button){
    debugger;
    editButtonForm2 = document.getElementById("button_Edit_F2");

    selectedButtonForm2 = button;

    //identifies the row number when Edit/Save button is clicked 
    rowIndexForm2 = button.parentNode.parentNode.rowIndex;

    //gives current row
    currentRowForm2 = button.parentNode.parentNode;

    //EDIT Button is clicked
    if(selectedButtonForm2.innerHTML == "Edit"){
        //change text to input
        currentRowForm2.cells[1].innerHTML = '<input type="text" id="input_F2_EditProductId" required style="width: 100px;">'
        document.getElementById("input_F2_EditProductId").value = arrayOfPurchasePayload[rowIndexForm2-1].PId; 

        currentRowForm2.cells[2].innerHTML = '<input type="text" id="input_F2_EditProductName" required style="width: 150px;">'
        document.getElementById("input_F2_EditProductName").value = arrayOfPurchasePayload[rowIndexForm2-1].PName; 

        currentRowForm2.cells[3].innerHTML = '<select id="select_F2_EditPurchaseProductType" name="select_F2_EditPurchaseProductType" required style="width: 150px;"><option value="Goods">Goods</option><option value="Merchandise">Merchandise</option><option value="Groceries">Groceries</option></select>'
        document.getElementById("select_F2_EditPurchaseProductType").value = arrayOfPurchasePayload[rowIndexForm2-1].PType; 

        currentRowForm2.cells[4].innerHTML = '<input type="text" id="input_F2_EditProductPrice" required style="width: 70px;">'
        document.getElementById("input_F2_EditProductPrice").value = arrayOfPurchasePayload[rowIndexForm2-1].PPrice; 

        currentRowForm2.cells[5].innerHTML = '<select  id="select_EditProductQuantity" name="select_EditProductQuantity"  required style="width: 50px;"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>'
        document.getElementById("select_EditProductQuantity").value = arrayOfPurchasePayload[rowIndexForm2-1].PQuantity;

        currentRowForm2.cells[6].innerHTML = '<input type="text" id="input_F2_EditProductAmount" required style="width: 100px;">'
        document.getElementById("input_F2_EditProductAmount").value = arrayOfPurchasePayload[rowIndexForm2-1].PAmount; 

        currentRowForm2.cells[7].innerHTML = '<select id="select_F2_EditPurchaseDeliveryStatus" name="select_F2_EditPurchaseDeliveryStatus"  required style="width: 150px;"><option value="Partially Delivered">Partially Delivered</option><option value="Delivered">Delivered</option></select>'
        document.getElementById("select_F2_EditPurchaseDeliveryStatus").value = arrayOfPurchasePayload[rowIndexForm2-1].PDeliveryStatus; 
        
        //change EDIT TO SAVE
        selectedButtonForm2.innerHTML = "Save";
    }
    //SAVE Button is clicked
    else if(selectedButtonForm2.innerHTML == "Save"){
        //storing "Editted" Form data into Object
        editProductIdInput = document.getElementById("input_F2_EditProductId");
        editProductIdValue = editProductIdInput.value;
        editProductNameInput = document.getElementById("input_F2_EditProductName");
        editProductNameValue = editProductNameInput.value; 
        editProductTypeInput = document.getElementById("select_F2_EditPurchaseProductType");
        editProductTypeValue = editProductTypeInput.value;   
        editProductPriceInput = document.getElementById("input_F2_EditProductPrice");
        editProductPriceValue = editProductPriceInput.value; 
        editProductQuantityInput = document.getElementById("select_EditProductQuantity");
        editProductQuantityValue = editProductQuantityInput.value; 
        editProductTotalAmountInput = document.getElementById("input_F2_EditProductAmount");
        editProductTotalAmountValue = editProductTotalAmountInput.value; 
        editProductDeliveryStatusInput = document.getElementById("select_F2_EditPurchaseDeliveryStatus");
        editProductDeliveryStatusValue = editProductDeliveryStatusInput.value; 

        if (editProductIdValue.match(regExpPId)) {
            editProductIdInput.style.borderColor = "Green";
        } else {
            editProductIdInput.style.borderColor = "Red";
        }
        if (editProductNameValue.match(regExpPName)) {
            editProductNameInput.style.borderColor = "Green";  
        } else {
            editProductNameInput.style.borderColor = "Red";
        }
        if (!editProductTypeValue == "") {
            editProductTypeInput.style.borderColor = "Green";  
        } else {
            editProductTypeInput.style.borderColor = "Red"; 
        }
        if (editProductPriceValue.match(regExpPPrice)) {
            editProductPriceInput.style.borderColor = "Green";  
        } else {
            editProductPriceInput.style.borderColor = "Red"; 
        }
        if (!editProductQuantityValue == "") {
            editProductQuantityInput.style.borderColor = "Green"; 
        } else {
            editProductQuantityInput.style.borderColor = "Red";
        }
        if (editProductTotalAmountValue.match(regExpPPrice)) {
            editProductTotalAmountInput.style.borderColor = "Green"; 
        } else {
            editProductTotalAmountInput.style.borderColor = "Red";
        }
        if (!editProductDeliveryStatusValue == "") {
            editProductDeliveryStatusInput.style.borderColor = "Green"; 
        } else {
            editProductDeliveryStatusInput.style.borderColor = "Red";
        }
        if(editProductIdValue.match(regExpPId) && editProductNameValue.match(regExpPName) && !editProductTypeValue == "" && editProductPriceValue.match(regExpPPrice) 
            && !editProductQuantityValue == "" && editProductTotalAmountValue.match(regExpPPrice) && !editProductDeliveryStatusValue == ""
        ){
            alert("Validation Successfull !!");
            purchasePayload = {
                "PId" : editProductIdValue,
                "PName" : editProductNameValue,
                "PType" : editProductTypeValue,
                "PPrice" : editProductPriceValue,
                "PQuantity" : editProductQuantityValue,
                "PAmount" : editProductTotalAmountValue,
                "PDeliveryStatus" : editProductDeliveryStatusValue,
            }
            //chnage input to data
            addRowForm2(); 
        }
    }
}

function deleteRowForm2(button){
    debugger;
    if(confirm("Are you sure you want to delete?")){
        //captures row no
        rowIndexForm2 = button.parentNode.parentNode.rowIndex;

        //gives current row
        currentRowForm2 = button.parentNode.parentNode;

        //counts the total cells in a row
        cells_pd= currentRowForm2.cells;

        //delete from table
        table2.deleteRow(rowIndexForm2);

        //delete specific object from array
        var elementToBeDeletedForm2 = arrayOfPurchasePayload[rowIndexForm2-1];
        var objectToBeRemovedAtIndexForm2 = arrayOfPurchasePayload.indexOf(elementToBeDeletedForm2);
        arrayOfPurchasePayload.splice(objectToBeRemovedAtIndexForm2,1);

        //auto update s.no
        var newRowsForm2 = [];
        newRowsForm2 = table2.rows;
        for(i= 1; i<=arrayOfPurchasePayload.length; i++){
            newRowsForm2[i].cells[0].innerHTML = i;
        }
        //no record exists except for header
        if(table2.rows.length < 2){
            table2.hidden = true;
            //otherwise header will be counted and in addrow else block will hit
            rowIndexForm2 = null;
        }
    }else{
        alert("User Cancelled Delete Action.\n No Data deleted");
    }
}

function clearValuesForm2(){
    productIdValueId = "";
    productNameValue = "";
    productTypeValue = "";
    productPriceValue = "";
    productQuantityValue = "";
    productTotalAmountValue = "";
    productDeliveryStatusValue = "";
}