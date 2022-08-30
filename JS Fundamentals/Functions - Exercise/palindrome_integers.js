function isPalindrome(arr){
    for(let i = 0; i < arr.length; i++){
        let result = false;
        let reversedNumber = Number(String(arr[i]).split('').reverse().join(''))
        if(arr[i] === reversedNumber){
            result = true;
        }
        console.log(result)
    }
}
isPalindrome([123,323,421,121]);
isPalindrome([32,2,232,1010]);