function formatMessage(users,fields){
    let usersList = `Spisok enter your person => name and email: \n`;
    
    for(let i = 0;i<users.length;i++){
        for(let j = 0;j<fields.length;j++){
            usersList = usersList + `${users[i][j]}` // ???????

            usersList = `\n`;// new stroka
        }
    }
     return usersList
}

function createNewUser(fields){
    let newUser = [];//massiv new users

    for(let i = 0; i< fields.length;i++){
        do{
            const fieldValue = prompt(fields[i]); // fieldValue == enter person text

            if(fieldValue){ // if fildValue !== "" =>
                newUser.push(fieldValue) // add in massiv newUser name and email
                break;//break == end 
            }
            users.push(newUser);// add in massiv newUser
            newUser = []; // create new massiv
            fieldValue = ""; // remove text in fieldValue
        }while(true);
    }
}

function init(){
    const users = [];

    const fields = ["Enter name", "Enter email"];//create phrase

    let isCreateYesOrNo; // letaer or chanel for person

    do{
        isCreateYesOrNo = confirm("Do you want create new person?")

        if(!isCreateYesOrNo) break;  // if isCReateYesOrNo == false => break

        const newUser = createNewUser(fields); // create new peremen for hranit value person

        users.push(newUser);
    }while(true)
        // Добавляем в массив users 

    alert(formatMessage(users,fields));

}
init();
