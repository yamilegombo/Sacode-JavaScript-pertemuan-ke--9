function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const walkDog = true;

            if(walkDog){
                resolve("You walk the dog 🐕");
            }else{
                reject("You DIDN'T walk the dog 🐕");
            }

            
        }, 1500);
    });

}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const cleanKitchen = true;

            if(cleanKitchen){
                resolve("You clean the kitchen 🧹");
            }else{
                reject("You DIDN'T clean the kitchen 🧹");
            }
            
        }, 2500);
    });

}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const takeOutTrash = true;

            if(takeOutTrash){
                resolve("You take out the trash ♻️");
            }else{
                reject("You DIDN'T take out the trash ♻️");
            }

        }, 500);
    });

}

// Async function
async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    }
    catch(error){
        console.error(error);
    }
    

}

doChores();