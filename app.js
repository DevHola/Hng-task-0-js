const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors({
    origin: '*',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'Content-Type'],
    maxAge: 12 * 60 * 60 
}));

const digitSum = (num) => {
    return Math.abs(num).toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
};

const checkPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i; 
        }
    }
    return sum === num && num !== 1;
};


const checkIsPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true; 
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
};


const checkArmstrong = (num) => {
    const numStr = num.toString();
    const numDigits = numStr.length; 
    const sum = numStr.split('').reduce((acc, digit) => acc + Math.pow(parseInt(digit), numDigits), 0);
    return sum === num;
};

const funFact = async (num) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
        return response.data.text;
    } catch (error) {
        console.error('Error fetching fun fact:', error);
        return 'No fun fact available.';
    }
};

app.get('/api/classify-number', async (req, res) => {
    const number = parseInt(req.query.number);
    
    if (isNaN(number)) {
        return res.status(400).json({
            number: req.query.number,
            error: true
        });
    }

    const properties = [];

    const isPrime = checkIsPrime(number);
    const isPerfect = checkPerfect(number);
    const isArmstrong = checkArmstrong(Math.abs(number));
    const evenOrOdd = number % 2 === 0 ? 'even' : 'odd';
    
    if (isArmstrong) properties.push('armstrong');
    if (isPrime) properties.push('prime');
    if (isPerfect) properties.push('perfect');
    
    const fact = await funFact(number);

    const response = {
        number,
        is_prime: isPrime,
        is_perfect: isPerfect,
        properties: [...properties, evenOrOdd],
        digit_sum: digitSum(number),
        fun_fact: fact
    };

    return res.status(200).json(response);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
