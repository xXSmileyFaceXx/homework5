function primenumber() {
    var first = parseInt(document.getElementById("fname").value);
    var second = parseInt(document.getElementById("lname").value);
    var primetab = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    if ((first > 100 || first < 2) || (second > 100 || second < 2)) {
        document.getElementById('erroranswer').innerHTML = "Invalid input, please try again.";
    }
    else {
        var min, max;
        var answer = [];
        if (first < second) {
            min = first;
            max = second;
        } else {
            min = second;
            max = first;
        }
        for (i = 0; i < primetab.length; i++) {
            if (primetab[i] >= min && primetab[i] <= max) {
                answer.push(primetab[i]);
            }
        }
        document.getElementById('numberanswer').innerHTML = `There are ${answer.length} prime numbers.`
        if (answer.length > 0)
            document.getElementById('erroranswer').innerHTML = answer.toString();
    }

}