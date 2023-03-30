// A program to showcase a restaurant's special based on the day of the week


const menu = {
    _meal: "",
    _price: 0,

    set meal(mealToCheck) {
        if (typeof mealToCheck === "string") {
            return (this._meal = mealToCheck);
        }
    },

    set price(priceToCheck) {
        if (typeof priceToCheck === "number") {
            return (this._price = priceToCheck);
        }
    },

    todaysSpecial(dayOfWeek) {
        let meal, price;

        switch (dayOfWeek) {
            case "Sunday":
                meal = "Sunday Football Pizza Night";
                price = 10.99;
                break;
            case "Monday":
                meal = "Marinara Monday - Signature Pasta";
                price = 7.99;
                break;
            case "Tuesday":
                meal = "Fish Taco Tuesday";
                price = 2.99;
                break;
            case "Wednesday":
                meal = " HAppys Wednesday - All appetizers ";
                price = 9.99;
                break;
            case "Thursday":
                meal = " Wingback Thursday - 1 lb of wings ";
                price = 5.99;
                break;
            case "Friday":
                meal = "Cheesy Fryday - Cheeseburger and fries";
                price = 9.99;
                break;
            case "Saturday":
                meal = " Sushi Saturday - Taco Sushi ";
                price = 7.99;
                break;
            default:
                return "Invalid day of the week";
        }

        return `Today's special is ${meal} for ${price}`;
    },
};
// Input the day of the week to get the menu item on special and its price.

console.log(menu.todaysSpecial("Monday"));
