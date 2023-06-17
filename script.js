// Good Luck 💪🏾
function count(num, string) 
{
    let count = 0
    for (let i = 0; i < string.length; i++) 
    {
      if (string[i] == num) 
      {
        count++;
      }
    }
    return count;
  }
let leter = "c"
let sentence = "fikrcamp coding Bootcamps"
let Result = count(leter, sentence)
    console.log(Result);