var user = {
    university:"",
    institute:"",
    branch:"",
    degree:"",
    status:"",
    cgp:"",
    experieance:"",
    website:"",
    doj:"",
    subject: [],

};

function adduser() {
    for (a in user) {
        if (a !== "status" && a !== "subject") {
            user[a] = document.getElementById(a).value;
        } else if (a == "subject") {
            var allcheckboxes = document.getElementsByName("subject");
            allcheckboxes.forEach((element ) => {
        
                if (element.checked) {
                    user.subject.push(element.value);
                }
            });
        } else if (a == "status") {
            var allstatus = document.getElementsByName("status");
            allstatus.forEach((element) => {
                if (element.checked) {
                    user[a] = element.value;
                }
            });
        }
    }
    console.log(user);
}

            