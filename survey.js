
const BIRTHDAY = '2002-10-08';
const AGE = ageFromBDay(BIRTHDAY);

function ageFromBDay(str) {
    let date = str.split("-");
    let year = date[0];
    let month = date[1];
    let day = date[2];
    let birthDate = new Date(Number(year), Number(month), Number(day));
    let currentDate = new Date();
    return Math.abs(currentDate - birthDate);
}

function questionaire() {
    let nameFieldChecked = false;
    let ageFieldChecked = false;
    let planet = prompt("What Planet are you on?", ["Earth"]);
    let myname = prompt("What is your name?", ["user"]);
    alert(`Hello, ${myname} from ${planet}!`);
    if (myname != null) {
        nameFieldChecked = true;
    } else {
        return;
    }
    let mybirthday = prompt("What is your birthday?", ["YYYY-MM-dd"]);
    let myage = ageFromBDay(birthday);
    if (myage != null) {
        ageFieldChecked = true;
    } else {
        return;
    }
    alert(`You are ${myage} years old!`);
    if (myage >= 18) {
        alert("You are an adult!")
    } else {
        alert("You are a child!")
    }
    alert( "6" / "2" );
    let value = true;
    alert(typeof value);
    value = String(value);
    alert(typeof value);
    let str1 = "123";
    alert(typeof str1);
    let num = Number(str1);
    alert(typeof num);
}

/* Variables declaration and assignment
Types are implicit not explicitly declared
*/

role = undefined; // not recommended
role = null; // use this instead
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
