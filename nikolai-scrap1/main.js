const renderList = () => {
    const myList = document.getElementById('my-list');

    let list = `
    <ul>
        <li>thing 1</li>
        <li>thing 2</li>
        <li>thing 3</li>
        <li>thing 4</li>
        <li>thing 5</li>
    </ul>
   `;

    myList.innerHTML = list;
}