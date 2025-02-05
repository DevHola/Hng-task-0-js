const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const response = {
    email: "connectola@yahoo.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/DevHola/hng-level-0-task.git"
};

app.use(cors({
    origin: '*',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'Content-Type'],
    maxAge: 12 * 60 * 60 
}));

// task 1
app.get('/', (req, res) => {
    res.json(response);
});

// task 2
const fun_Fact = async(num) => {
    const response = await axios.get(`http://numbersapi.com/${num}/math?json`)
    return response.data.text
}

app.get('/api/classify-number',async (req, res)=> {
    const number = parseInt(req.query.number)
    if (isNaN(number)) {
        return res.status(400).json({
            number: req.query.number,
            error: true
        });
    }
    let data = {
        number: number,
        is_prime: checkIsPrime(number),
        is_perfect: CheckPerfect(number),
        properties: [],
        digit_sum: digitSum(number),
        fun_fact: ''
    }        
        if(checkArmstrong(data.number)) data.properties.push("armstrong")
        if(checkOdd(data.number)) data.properties.push("odd")
        else data.properties.push("even")
    data.fun_fact = await fun_Fact(number)
    return res.status(200).json(
        data
    )
})
const digitSum = (num) => {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit),0)
}
const CheckPerfect = (num) => {
    const figure = num
    let temp = 0;
    for (let i = 1; i <= figure / 2; i++){
        if(figure % i === 0){
            temp += i;
        }
    }
    if(temp === figure && temp !== 0){
        return true
    } else {
        return false
    }

}
const checkOdd = (num) => {
    const figure = num
    return (figure % 2 != 0) ?  'odd' : 'even'
}
const checkIsPrime = (num) => {
    const figure = num
    let isprime = true
    if(figure === 1){
        return false
    } else if (figure > 1){
        for(let i = 2; i <= num / 2; i++ ){
            if(num % i == 0){
                isprime = false
                break;
            }
        }
        return isprime
    }
}
const checkArmstrong = (num) => {
    const figure = num
    let sum  = 0;
    let temp = figure
    while (temp > 0) {
        let reminder = temp % 10;
        sum += reminder * reminder * reminder
        temp = parseInt(temp / 10)
    }
    if(sum == figure){
        return true
    } else {
        return false
    }

}

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
