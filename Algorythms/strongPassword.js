// duzdu

function minimumNumber(n, password) {
    let count = 0;
    let re = /[-!@#$%^&*()+]/;
    if (n > 6) {
        if (password.search(/[A-Z]/g) == -1) {
            count++
        };
        if (password.search(/[a-z]/g) == -1) {
            count++
        };
        if (password.search(/[0-9]/g) == -1) {
            count++
        };
        if (password.search(re) == -1) {
            count++
        }; 
        return count
    } 
    else{
        if (password.search(/[A-Z]/g) == -1) {
            count++
        };
        if (password.search(/[a-z]/g) == -1) {
            count++
        };
        if (password.search(/[0-9]/g) == -1) {
            count++
        };
        if (password.search(re) == -1) {
            count++
        }; 
        if(count>(6-n)){
            return count
        }
        else{
            return 6-n 
        }
      
    }   

}
console.log(minimumNumber());