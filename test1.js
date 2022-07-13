console.log("hi this is test1")
let addUSer = document.getElementById(`addUSer`);
let doubleTheRokda = document.getElementById(`doubleTheRokda`);
let showTheCrorepati = document.getElementById(`showTheCrorepati`);
let sortByRiches = document.getElementById(`sortByRiches`);
let calculateTotalPaisa = document.getElementById(`calculateTotalPaisa`);
let person = document.getElementById(`person`);
let wealth = document.getElementById(`wealth`);
let show1 = document.getElementById(`show1`);
let main = document.getElementById(`main`);
let wealthshow1 = document.getElementById(`wealthshow1`);
let append = document.getElementById(`append`);
let totalpaisaa = document.getElementById(`totalpaisaa`);
let condition = true;
let data = [];
let data2 = [];
 let totalpaisa=0;


//fetch randomuser.me and adding money
function getdata() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(json => {
            let firstname = json.results[0].name.first;
            let lastname = json.results[0].name.last;
            var theRandomNumber1 = Math.floor(Math.random() * 10000000) + 1;
            name1 = `${firstname}` + ` ` + `${lastname}`
            money1 = theRandomNumber1;

            newUser = {
                name: `${name1}`,
                money: `${money1}`
            }
            //console.log(newUser)
            //console.log(data)
            data.push(newUser);
            //console.log(`now after adding object in to data array`)
            //console.log(data);




        })
}


addUSer.addEventListener("click", () => {
    console.log("addthe user")
    getdata();
    /*settimeout is used because fetching takes time and update function run before that
    as a result nothing is updated
    therefore 1000ms is taken so that meanwhile data is fetch and then run updatedom()*/
    setTimeout(() => {
        updatedom();
        
    }, 1000);

    


})

function updatedom() {
    console.log("updating the dom")
    //removing tthe old html element with class show1
    const text = document.querySelectorAll('.show1')
    for (const el of text) {
        el.parentNode.removeChild(el);
    }
    data.forEach(element => {
        console.log(data)
        const elem = document.createElement("div")
        elem.classList.add("show1")
        elem.innerHTML = `<h3>${element.name}</h3><h2>${element.money}/-RS</h2>`
        append.appendChild(elem)

    });
}

/*double the rokda */

doubleTheRokda.addEventListener("click", () => {
    //removing tthe old html element with class show1
    const text = document.querySelectorAll('.show1')
    for (const el of text) {
        el.parentNode.removeChild(el);
    }
    console.log("double the rokda is clicked ")
    data.forEach(element => {
        //console.log(element.money)
        let doubleamt = element.money * 2;
        //console.log(doubleamt)
        newUser2 = {
            name: `${element.name}`,
            money: `${doubleamt}`

        }

        //console.log(newUser2)
        data2.push(newUser2);
        //console.log(data2);

    }
    );
    data2.forEach(element => {
        console.log(element)


        const elem = document.createElement("div")
        elem.classList.add("show1")
        elem.innerHTML = `<h3>${element.name}</h3><h2>${element.money}/-RS</h2>`
        append.appendChild(elem)

    });
    
    doubleTheRokda.style.display = "none"

})


/*show the crorepati */
showTheCrorepati.addEventListener("click", () => {
    alert("it tells us that who have earnd more thean 10lakhs")
    console.log("find the crorepati ")
    console.log(data);
    data.forEach(element => {
        console.log(element.money)
        if (element.money > 1000000) {
            console.log("bigger")
            console.log(element)


        } else {
            console.log("smaller")
            console.log(element)
            let indexx = data.indexOf(element)
            console.log(indexx)
            data.splice(indexx, 1);
            console.log("splicing done")
            console.log(data)
            
            updatedom();
        }

    });

})



/*sort by richest */
sortByRiches.addEventListener("click",()=>{
    console.log("sort by richest")


    //sort method found on stackoverflow 
    data.sort((a, b) => parseFloat(a.money) - parseFloat(b.money));
    console.log("sorting sorting")
    console.log(data)
    updatedom();

})



/*calculate total paisa*/
calculateTotalPaisa.addEventListener("click",()=>{
    console.log("calculaing the total paisa     ")
    data.forEach(element => {
        console.log(element.money)
        console.log(typeof element.money)
        //parseInt(`${element.money}`) is used to convert string money into itegere;
        totalpaisa = totalpaisa+parseInt(`${element.money}`);
        console.log(`the totalpaisa is ${totalpaisa}`)
        //alert(`the total amt is ${totalpaisa} rupees`)

        
        
    });
    totalpaisaa.innerHTML = `<button onclick="goback()">go back</button>
    <p>THE TOTAL AMT IS : ${totalpaisa}</p>`
})

function goback(){
    console.log("goback is clicked ")
    totalpaisaa.style.display = "none"

}
function refresh(){
    console.log("refresh is clicked ")
    location.reload();


}