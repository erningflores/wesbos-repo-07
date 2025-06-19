const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

const isAdult1 = people.some(element => {
    const currentYear = (new Date()).getFullYear();
    if((currentYear - element.year) >= 19){
        return true;
    }
});
console.log(isAdult1);

const isAdult2 = people.some(element => ((new Date()).getFullYear()
    - element.year) >= 19);
console.log(isAdult2);

const allAdult1 = people.every(element => ((new Date()).getFullYear()
    - element.year) >= 19);
console.log(allAdult1);

const comment1 = comments.find(element => element.id === 823423);
console.log(comment1);

const comment2 = comments.findIndex(element => element.id === 823423);
console.log(comment2);

const spliceComments = comments.splice(1, 1);
console.log(spliceComments);

const newComments = [
    ...comments.slice(0, comment2),
    ...comments.slice(comment2 + 1)
];
console.log(newComments);
