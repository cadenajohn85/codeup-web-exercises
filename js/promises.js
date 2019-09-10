
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
        return fetch(`https://api.github.com/users/${someUsername}/events/public`, {headers: {'Authorization': `token ${gitHubKey}`}})
        // return fetch(`https://api.github.com/users/${someUsername}/events/`, {headers: {'Authorization': `token ${gitHubKey}`}})
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data[0].created_at;
                // return events.filter(event => event.type === "PushEvent")[0].created_at;
        });
    };

    // getLastCommitDate("cadenajohn85");

    console.log(getLastCommitDate("cadenajohn85"));
}


