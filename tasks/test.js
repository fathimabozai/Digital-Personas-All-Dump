

        











        var name, age, mobile, email;
        var employee;
        var submitButton = document.getElementById("button_Submit");
        submitButton.addEventListener("click", employee);
        function employee(){
            var transferData = readData();
            insertData(transferData);
            reset();
        }
        function readData(){  
            employee = {};         
            name = document.getElementById("input_Name").value;
            age = document.getElementById("input_Age").value;
            mobile = document.getElementById("input_Mobile").value;
            email = document.getElementById("input_EMail").value;
            return employee;
        }
        function insertData(){

        }
        function resetFormData(){
            document.getElementById("input_Name").value = "";
            document.getElementById("input_Age").value = "";
            document.getElementById("input_Mobile").value = "";
            document.getElementById("input_EMail").value = "";
        }