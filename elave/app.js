function alternate(s) {
    let min = 0;
    let max = 1;
    let m;


    for (let i in s) {
        for (let j in s) {
            if (s[i] == s[j]) {
                max += s[i].length;
                if (s[i].length>=min) {
                    min+=s[i].length
                
                }

            }

        }
        return min
    }


}
console.log(alternate('beabeefeab'));


// let alen = s.match(/a/g, "")
// let clen = s.match(/c/g, "")