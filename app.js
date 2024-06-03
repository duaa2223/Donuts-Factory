
let name = prompt("Please enter your name:");

// الخطوة 2: طلب جنس المستخدم
let gender = prompt("Please enter your gender (male or female):");

// الخطوة 3: عرض رسالة ترحيب بناءً على جنس المستخدم
if (gender.toLowerCase() === "male") {
  alert("Welcome Mr " + name + "!");
} else if (gender.toLowerCase() === "female") {
  alert("Welcome Ms " + name + "!");
} else {
  alert("Welcome " + name + "!");
}

// الخطوة 4: طلب نوع الطلب
let orderType = prompt("What would you like to order? (Donut, Coffee, Ice cream, Bakery)");

// الخطوة 5: طلب اسم الطلب
let orderName = prompt("Please enter the name of the " + orderType + " you want to order:");

// الخطوة 6: عرض رسالة تجهيز الطلب
alert("Your order is getting prepared!");

// الخطوة 7: طباعة تفاصيل الطلب في وحدة التحكم
console.log(name + " has ordered a " + orderType + " named " + orderName + ".");


