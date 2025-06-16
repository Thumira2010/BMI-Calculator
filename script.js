const bmiForm = document.getElementById('bmiForm');
    const resultBox = document.getElementById('result');
    const bmiValueText = document.getElementById('bmiValue');
    const bmiCategoryText = document.getElementById('bmiCategory');
    const resetBtn = document.getElementById('resetBtn');

    bmiForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const weight = parseFloat(document.getElementById('weight').value);
      const height = parseFloat(document.getElementById('height').value);

      if (!weight || !height || weight <= 0 || height <= 0) {
        alert('Please enter a valid weight and height.');
        return;
      }

      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      const roundedBMI = bmi.toFixed(1);

      let category = '';
      let className = '';

      if (bmi < 18.5) {
        category = 'Underweight';
        className = 'result-underweight';
      } else if (bmi < 25) {
        category = 'Normal';
        className = 'result-normal';
      } else if (bmi < 30) {
        category = 'Overweight';
        className = 'result-overweight';
      } else {
        category = 'Obese';
        className = 'result-obese';
      }

      bmiValueText.textContent = `Your BMI is ${roundedBMI}`;
      bmiCategoryText.textContent = `Category: ${category}`;

      resultBox.className = ''; // reset
      resultBox.classList.add('visible', className);
    });

    resetBtn.addEventListener('click', () => {
      document.getElementById('weight').value = '';
      document.getElementById('height').value = '';
      resultBox.className = 'hidden';
      resultBox.style.opacity = '0';
    });