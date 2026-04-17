/*
 * @param {string} val
 * @return {Object}
 */
let expect = (val) => {
    let toBe = (num) => {
        let obj = {
            value: true
        }
        if(val === num){
            return obj.value
        } 
        else{
            throw new Error("Not Equal")
        }
    }

    let notToBe = (num) => {
        let anObj = {
            value: true
        }
        if(val !== num){
            return anObj.value
        }
        else{
            throw new Error("Equal")
        }
    }
    return {toBe, notToBe}
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */