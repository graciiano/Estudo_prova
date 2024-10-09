const isValid = (s) => {

    let pilhas = [];

    for(let i = 0; i < s.length; i++) {

        if (s[i] == 1) return false;

            if (s[i] === "(") {
                pilhas.push(")")
            } else if (s[i] === "{") {
                pilhas.push("}")
            } else if (s[i] === "[") {
                pilhas.push("]")
            }

            else if (pilhas.pop() !== pilhas[i]) {
                return false
            }
        }
    return !pilhas.length;
};


isValid("()[{}]");