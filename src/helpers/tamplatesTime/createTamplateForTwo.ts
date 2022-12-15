export const createTamplateForTwo = () => {
    let result = [];
    let minutes = 0;

    for (let i = 0; i < 31; i++) {
        let positionTimer = 0;
        positionTimer = i % 2 === 0 ? 0 : 1;
        result.push({
            position: positionTimer,
            time: {
                from: minutes
            }
        });

        minutes += 2;
    };
    
    return result;
};


