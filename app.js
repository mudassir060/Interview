var page = 1;
var firstName = '';
var lastName = '';
var phoneNo = '';
var emailId = '';
var Job = '';
var uniqueID = '';
pageload();
function NextPage() {
    console.log(page);
    if (page >= 1 == page < 5) {
        page = page + 1;
        pageload();
        document.getElementById("input").value = "";
    }
}
function PreviousPage() {
    console.log(page);
    if (page > 1 == page <= 5) {
        page = page - 1;
        pageload();
        document.getElementById("input").value = "";
    }
}
function pageload() {
    var input = document.getElementById("input");
    var mainhading = document.getElementById("mainhading");
    if (page == 1) {
        mainhading.innerHTML = "First Name";
        if (firstName == '') {
            input.placeholder = "First Name";
            firstName = input.value;
        } else {
            input.value = firstName;
        }
    }
    if (page == 2) {
        mainhading.innerHTML = "Last Name";
        if (lastName == '') {
            input.placeholder = "First Name";
            lastName = input.value;
        } else {
            input.value = lastName;
        }
    }
    if (page == 3) {
        mainhading.innerHTML = "Phone Number";
        if (phoneNo == '') {
            input.placeholder = "Phone Number";
            phoneNo = input.value;
        } else {
            input.value = phoneNo;
        }
    }
    if (page == 4) {
        mainhading.innerHTML = "Email Id";
        if (emailId == '') {
            input.placeholder = "Email Id";
            emailId = input.value;
        } else {
            input.value = emailId;
        }
    }
    if (page == 5) {
        mainhading.innerHTML = "Job";
        if (Job == '') {
            input.placeholder = "job";
            Job = input.value;
        } else {
            input.value = Job;
        }
    }
    console.log(firstName, lastName, phoneNo, emailId, Job)
}


