export const randomRoll = ()=>{
    let num = Math.round(Math.random()*10);
    while (num<1 || num>6){
        num = Math.round(Math.random()*10);
    }
    return num;
}

export const determineNum = (num)=>{
    if (num==1)
        return "one.jpg";
    else if (num==2)
        return "two.jpg";
    else if (num==3)
        return "three.jpg";
    else if (num==4)
        return "four.jpg";
    else if (num==5)
        return "five.jpg";
    else
        return "six.jpg";
}

export const decision = (num1,num2)=>{
    if (num1 == num2)
        return "You Win!!"
    else
        return "Hard Luck!"
}