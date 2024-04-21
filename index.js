import inquirer from "inquirer";
//Asking Question from Users through Inquirer
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one Operater to perform the Operations ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subraction", "Multiplication", "Division"],
    },
]);
// Conditional Statements if-else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invaild Input");
}
