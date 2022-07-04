
let node   = `
            <div class="icons">
            <i class="fa-solid fa-circle-check check" onclick="done(event)"></i>
            <i class="fa-solid fa-pen-to-square edit"onclick="edit(event)"></i>
            <i class="fa-solid fa-eraser delate"onclick="delate(event)"></i>
            </div>`;
let error = document.querySelector( ".error-massage" );
let input = document.querySelector( '.input' );
let output = document.querySelector( ".output" );
let counter = 0;



function mainFun(){
    if ( input.value.length < 1 )
    {
        ShowErrorMassage();
    } else
    {
        
        HideErrorMassage()
        output.appendChild( createNewItem() );
        addText();
    }
} 
function addText()
{   
    let item = output.firstChild;
    console.log( item );
    for ( let i = 1; i <=counter; i++ )
    {
        item=item.nextSibling  ;
    }
    let x = document.createElement( "div" );
    x.className = "itemText";
    x.textContent = input.value;
    item.appendChild( x ); 
    input.value = "";
}
function createNewItem()
{   
    let a = document.createElement( "div" );
    a.className="item"
    a.innerHTML = node;
    output.appendChild( a );
    counter++;
    return a;
} 

document.querySelector(".clear").onclick =function() {
        ClearAll();
    }

function inputfocus( obj )
{
    input.style.outline = "none";
    if ( error.style.display === "block" )
    {
        error.style.display = "none";
    }
}
function ShowErrorMassage()
{
    error.textContent = "Please Enter Valid Value";
    error.style.display = "block";
}
function HideErrorMassage(){
        if ( error.style.display === "block" )
        {
            error.style.display = "none";
        }
} 
function ClearAll() {
        let e = document.querySelector(".output");
        let child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        } 
        counter = 0;
} 
let i = 0;
function done( event )
{ 
    
    let target = event.target;
    let parent = target.parentElement;
    if ( i === 0 )
    {
        parent.nextSibling.id = "muted";
        i = 1;
    } else
    {
        parent.nextSibling.id = "";
        i = 0;
    }
}
function edit( event )
{
    let target = event.target;
    let text = target.parentElement.nextSibling;
    let item = text.parentElement;
    input.value = text.textContent;
    item.remove();
    counter--;
}
function delate( event ){
    let target = event.target;
    let parent = target.parentElement.parentElement;
    parent.remove();
    counter--;
}
