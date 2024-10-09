// Task -2:
// Find the friend with the smallest name.
// const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// _______________________
// function diye korle : ||
// ----------------------------------------------
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getSmallestFriendName(friends){
    let smallestFriend = friends[0];
    for(let i = 1; i < friends.length; i++){
        if(friends[i].length < smallestFriend.length){
            smallestFriend = friends[i];
        }
    }
    return smallestFriend;
}
const smallestFriend = getSmallestFriendName(friends);
console.log(smallestFriend);
/** ______________________
 * without function: ||
 * ------------------------------------------------------------------------
 * const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
/
// let smallestName = friends[0];
// for(let i = 1; i < friends.length; i++){
//     if(friends[i].length < smallestName.length){
//         smallestName = friends[i];
//     }
// }
// console.log(smallestName);

