export const createTamplateMoreTwo = (arrUsers: any) => {
    let result = [];
    let minutes = 0;
    let positionTimer = 0;
    let len = arrUsers.length;

    for (let i = 0; i < 31; i++) {
        result.push({
            position: positionTimer,
            time: {
                from: minutes
            }
        });
         
        positionTimer += 1;
        if (positionTimer === len) positionTimer = 0;
        minutes += 2;
    };

    return result;
};



