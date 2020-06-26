// This is client-side JavaScript
(function () {
    let tasks = []

    const promise = fetch('http://localhost:3000/tasks');
    // promise.then(function(response) {

    // });
    promise.then((response) => {
        // Try a deserialize the JSON text that is on the
        // body of the response
        return response.json();
    }).then((data) => {
        // Log the now in-memory JSON (deserialized by the)
        // previous handler/function to the console
        console.log(data)
        tasks = data;
        generateTaskList(data);
    });

    function generateTaskList(tasks) {
        const container = document.getElementById('task-list');
        container.innerHTML = "";

        const ul = document.createElement('ul');
        for (let i = 0; i < tasks.length; i++) {
            const li = document.createElement('li');
            li.innerText = tasks[i];
            ul.append(li);
        }

        container.append(ul);
    }

    const form = document.getElementById('task-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        console.log('Hit the submit event')
        // Grab the values from the input elements
        const taskName = form.elements['task'].value;
        console.log(taskName);
        const task = {
            name: taskName
        };
        saveTask(task);
    });

    function saveTask(task) {
        fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        }).then((response) => {
            console.log('The status code was: ' + response.status);
            console.log('Task was saved successfully!');

            tasks.push(task.name);
            generateTaskList(tasks);
        });
    }
})();