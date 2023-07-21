var givenNumbers = [72, 4, 97, 7, 88, 1, 76, 2, 11, 73];

function FindingMaximumNumberFromGivenArray(numbers)
{
   
    var maximum = numbers[0];                      
    for (var i = 1; i < numbers.length; i++) 
    {
        if (numbers[i] > maximum) 
        {                
            maximum = numbers[i];
        }
    }
    return maximum;                               
}

var maximumNumber = FindingMaximumNumberFromGivenArray(givenNumbers);

console.log(maximumNumber);