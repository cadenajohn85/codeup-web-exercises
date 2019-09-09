"use strict";

{
    // Exercise 1: Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    // Exercise 2: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

    const threeOrMoreLangs = users.filter(user => user.languages.length >=3);
        // console.log(threeOrMoreLangs);

    // Exercise 3: Use .map to create an array of strings where each element is a user's email address.

    const userEmails = users.map(user => user.email);
        // console.log(userEmails);

    // Exercise 4: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

    const totalYearsOfExperience = users.reduce((total, user) => {
        return total + user.yearsOfExperience;
    }, 0);
    const averageYearsOfExperience = totalYearsOfExperience / users.length;
        // console.log(totalYearsOfExperience);
        // console.log(averageYearsOfExperience);

    // Exercise 5: Use .reduce to get the longest email from the list of users.

    const longestUserEmail = users.reduce((longestEmail, user) => {
        if (user.email.length > longestEmail.length) {
            longestEmail = user.email;
        }
        return longestEmail;
    }, "");
        // console.log(longestUserEmail);

    // Exercise 6: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

    let userCount = 1;
    const userNamesString = users.reduce((nameString, user) => {
        if (userCount < users.length) {
            nameString += `${user.name}, `;
            userCount++;
        } else {
            nameString += `${user.name}.`;
        }
        return nameString;
    }, "Your instructors are: ");
        // console.log(userNamesString);

    // Bonus: Use .reduce to get the unique list of languages from the list of users.

    const uniqueListOfLangs = users.reduce((listOfLangs, user) => {
        for (const lang of user.languages) {
            if (listOfLangs.indexOf(lang) === -1) {
                listOfLangs.push(lang);
            }
        }

        return listOfLangs;
    }, []);
        // console.log(uniqueListOfLangs);
        // console.log(uniqueListOfLangs.sort());

}