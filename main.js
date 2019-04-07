let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// console.log(itemList);

//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click',removeItem);
//search event
filter.addEventListener('keyup',filterItems);


// Add Item
function addItem(e) {
    e.preventDefault();

    //get input value
    let newItem = document.getElementById('item').value;

    //create new li element
    let li = document.createElement('li');

    //add class
    li.className = 'list-group-item';

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create button element
    let deleteBtn = document.createElement('button');
    //add class
    deleteBtn.className ='btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);

    //appen li to ul
    itemList.appendChild(li);

    //clean input
    document.getElementById('item').value = '';
}

// remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    //conver text  to lowerCase
    let text = e.target.value.toLowerCase();
    //get lis
    let items = itemList.getElementsByTagName('li');

    // convert to array
    Array.from(items).forEach(item => {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display ='block';
        }else{
            item.style.display = 'none';    
        }
    });

}