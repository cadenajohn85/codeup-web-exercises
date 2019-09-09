"use strict";

{
    const wait = timeInMS => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (1 + 1 === 2) {
                    resolve();
                } else {
                    reject();
                }
            }, timeInMS);
        });
    };

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



}