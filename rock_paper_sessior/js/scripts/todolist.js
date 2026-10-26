const todolist=[]
display()
function addtodolist(){
    const item=document.querySelector('.js-item').value
    const item2=document.querySelector('.js-date-item').value

    todolist.push({item,item2})
    document.querySelector('.js-item').value=''
    document.querySelector('.js-date-item').value=''
    display()
    
    console.log(todolist)
}

function display(){
    let todolistHTML=''
    for(let i=0;i<todolist.length;i++){
        const todoobject=todolist[i]
        const {item,item2}=todoobject
        const items = `<div>${item}</div><div> ${item2}</div>
        <div><button onclick="todolist.splice(${i},1);display();"
         >delete</button>
        </div>
       `
        todolistHTML+=items
    }
    document.querySelector('.js-display').innerHTML=todolistHTML
    console.log(todolistHTML)

}