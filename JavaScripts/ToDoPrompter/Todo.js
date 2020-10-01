var toDoList=[];

var operation="";

//Get the operation that user needs to perform, Allows ujser to work on the to do until user clicks quit
//Self calling inline function
(function() {
     while(operation !== "quit" )
     {
        operation = prompt("Enter the operation name ex. \"add\" or \"1\"");
        operation = operation.toLowerCase();
        if(operation=="quit"){
            alert("Thank you!");
            break;
        }
        else{
            selectOperation(operation);
        }
    }
}());

function selectOperation(operation){
    if(operation === "add" || operation === "1"){
        addNewItem();
    }
    else if (operation === "delete" || operation === "2"){
        deleteSelectedItem();
    }
    else if (operation === "update" || operation === "3"){
        updateSelectedItem();
    }
    else if (operation === "clear" || operation === "4"){
        clearList();
    }
    else if (operation === "list" || operation === "5"){
        listAll();
    }
    else 
    alert ("OOPS!!!! Invalid operation! \nCheckout the screen for operation menu, Click \"ok\" to continue");
}

function listAll(){
    console.log("-----------------------------ToDo-----------------------------");
    toDoList.forEach((element,index) => {
        console.log((index+1)+"."+element);
    });
}

function addNewItem(){
    var currentItem = prompt("Enter the new Todo");
    toDoList.push(currentItem);
    listAll();
}

function deleteSelectedItem(){
    var postion = prompt("Enter the Number of the to-do delete");
    toDoList.splice((postion-1),1)
    listAll();
}

function updateSelectedItem(){
    var postion = prompt("Enter the Number of the update");
    var newItem = prompt("Enter the item to update instead of the item \""+postion+"."+toDoList[postion-1]+"\"");
    toDoList[postion-1]=newItem;
    listAll();
}

function clearList(){
    toDoList=[];
}

