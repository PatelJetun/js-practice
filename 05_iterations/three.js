//For of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const str = "Jetun Patel"
for (const val of str){
    if( val === " " ) continue;
    // console.log(val);
}

// Maps

const map = new Map()
map.set('IN' , "INDIA")
map.set('USA' , "UNITED STATES OF AMERICA")
map.set('FR' , "FRANCE")

// console.log(map);

for(const [key , val] of map){
        // console.log(key, '=> ', val);
}

const myObj = {
    game1: "NFS",
    game2: "GTA V",
    game3: "Valorant",
    game4: "Spiderman"
}

    // for (const val of myObj) {
    //         console.log(val);
            
    // }
