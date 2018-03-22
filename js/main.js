document.addEventListener("DOMContentLoaded", function(event) {

    const list = document.getElementById('listItems');

    document.querySelector('.submit').addEventListener('click', function(e) {

        const itemValue = document.getElementById('itemValue').value;

        let entry = document.createElement('li');
        entry.appendChild(document.createTextNode(itemValue));
        list.appendChild(entry);

        document.getElementById('itemValue').value = "";

    });

    list.addEventListener('click', function(e) {

        e.target.parentNode.removeChild(e.target);

    });


});
