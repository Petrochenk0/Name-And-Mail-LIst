function Users({name, email}){
    this.name = name
    this.email = email
}

Users.prototype.printInfo = function(){
    return `${this.name} ${this.email}`
}

function formatMessage(users,fields){
    let usersList = `Spisok enter your person => name and email: \n`;
    
    for(let i = 0;i<users.length;i++){
        
        usersList = `${users[i].printInfo()}\n`;// new stroka
        
    }
     return usersList
}

function createNewUser(fields){
    let newUser = {};//massiv new users // теперь объект :)

    for(let i = 0; i< fields.length;i++){
        do{
            const fieldValue = prompt(fields[i].message); // fieldValue == enter person text //2.Образаемся к нашему текущему объекту поля

            if(fieldValue){ // if fildValue !== "" =>
                newUser[fieldValue[i].key] == fieldValue // add in massiv newUser name and email
                break;//break == end 
            }
            users.push(newUser);// add in massiv newUser
            newUser = []; // create new massiv
            fieldValue = ""; // remove text in fieldValue
        }while(true);
    }
    return new Users(newUser.name, newUser.email)
}

function init(){
    const users = [];

    const fields = [ // создали массив из объектов для удобства

    {key:"name", message:"Enter name"},
    {key:"email", message:"Enter email"}    
        
    ];//create phrase

    let isCreateYesOrNo; // letaer or chanel for person

    do{
        isCreateYesOrNo = confirm("Do you want create new person?")

        if(!isCreateYesOrNo) break;  // if isCReateYesOrNo == false => break

        const newUser = createNewUser(fields); // create new peremen for hranit value person

        users.push(newUser); // Добавляем в массив users 
    }while(true)
        

    alert(formatMessage({users,fields}));

}
init();
