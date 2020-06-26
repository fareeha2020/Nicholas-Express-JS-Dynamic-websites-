//This is client side Java script,USE FETCH API as fetch(url) returns a promise,fetch JSON from that promise and log the DATA
const promise = fetch('http://localhost:3000/tasks');
promise.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data)
});
function generateTaskList(tasks) {
    e.preventDeafault();
    const container = document.getElementById('task-list');
    const ul = document.createElement('ul');
    //display as HTML on our browser
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement('li');
        li.innerText = tasks[i];
        ul.append(li);
    }
    container.append(ul);
}
const formData=documnet.getElementById('task-form');
formData.addEventListener('submit',function(e){
const taskName=form.elements['task'].value;
//console.log(taskName);
const task={
    name:taskName
};
saveTask(task);

//getting values of input element
});
function saveTask(task) {
    //so when form is posted ,save
    fetch('http://localhost:3000/tasks', {
        method: 'POST',//or'PUT
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(task),
    })
    .then(response) =>
     {
        console.log('the staus cose was '+response.statuscode);
        tasks.push();
    };
}

