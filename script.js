function firstNonRepeatedChar(str) {
   let count = {};
	for(let char of str)
		{
			count = (count[char]||0) + 1;
		}
	for(let char of str)
		{
			if (count(char) === 1)
			{
				return char;
			}
		}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
