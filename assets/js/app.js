var cl = console.log;

// CRUD >> Create, Read, Update, Delete

const stdForm = document.getElementById("stdForm");
const fnameControl = document.getElementById("fname");
const lnameControl = document.getElementById("lname");
const emailControl = document.getElementById("email");
const contactControl = document.getElementById("contact");
const stdContainer = document.getElementById("stdContainer");
let stdArray = [
    {fname: 'Arshad ', 
    lname: 'sheikh', 
    email: 'arshadsheikh9881@gmail.com', 
    contact: '9970687501'
},
//     {fname: 'sohel', 
//     lname: 'khan', 
//     email: 'sohekhan@gmail.com', 
//     contact: '9325927860'
// },
    // {fname: 'Faizan', 
    // lname: 'Sheikh', 
    // email: 'faizansheikh321@gmail.com', 
    // contact: 7720033008},
];

let result = '';
stdArray.forEach((std, i) =>{
    result += `
                <tr>
                    <td>${i +1}</td>
                    <td>${std.fname}</td>
                    <td>${std.lname}</td>
                    <td>${std.email}</td>
                    <td>${std.contact}</td>
                </tr>
    
    `
})
stdContainer.innerHTML = result;
const onStdSubmit = (eve) =>{
    eve.preventDefault();
    let obj ={
        fname : fnameControl.value,
        lname : lnameControl.value,
        email : emailControl.value,
        contact : contactControl.value,
    }
    stdArray.push(obj)
    cl(stdArray)
    stdForm.reset();
}

stdForm.addEventListener("submit", onStdSubmit);