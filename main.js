function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    if (weight === "" || height === "") {
        alert("Please fill in both weight and height fields.");
        return;
    }

    const heightInMeters = height / 100; // Convert height to meters
    const bmi = weight / (heightInMeters * heightInMeters); // BMI formula

    let bmiCategory = "";

    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obesity";
    }

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory})`;
}
