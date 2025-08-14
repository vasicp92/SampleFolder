let userRole = "employee";
let accessLevel;

if (userRole === "employee") {
    accessLevel = "Full access to Dietary Services";
} else if (userRole === "enrroled") {
    accessLevel = "Access to Dietary Services and one-on-one interaction with a dietician";
} else if (userRole === "subscriber") {
    accessLevel = "Limited access to Dietary Services";
} else {
    accessLevel = "You need to enroll or at least subscribe first to avail this facility";
}

console.log("Access Level:", accessLevel);
