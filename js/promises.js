
"use strict";

{
    // const wait = timeInMS => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (1 + 1 === 2) {
    //                 resolve();
    //             } else {
    //                 reject();
    //             }
    //         }, timeInMS);
    //     });
    // };

    // wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    // wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

    // function request() {
    //     fetch("https://swapi.co/api/people/1/")
    //         .then((response) => {
    //             return response.json();
    //         }).then((data) => {
    //         console.log(data);
    //     });
    // }
    // request();

    // fetch("https://swapi.co/api/people/1/")
    //     .then((response) => {
    //         return response.json();
    //     }).then((data) => {
    //     console.log(data);
    // });

    // fetch(url, {headers: {'Authorization': `token ${gitHubKey}`}});

    // fetch('https://api.github.com/users', {headers: {'Authorization': `token ${gitHubKey}`}})
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //     });

    const getLastCommitDate = someUsername => {
        fetch(`https://api.github.com/users/${someUsername}/events/public`, {headers: {'Authorization': `token ${gitHubKey}`}})
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
        });
    };

    getLastCommitDate("cadenajohn85");
}


