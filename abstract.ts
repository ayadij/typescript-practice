abstract class People {
    displayDate() {
        console.log("data");
    }
}
class Kids extends People{}

let KidsClass = new Kids;
KidsClass.displayDate();