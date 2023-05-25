document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const body = document.querySelector('body');
  const tasks = document.querySelector('#tasks');
  
  //task.style.fontSize = "32";


  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const task = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = " x";
    task.textContent = `${e.target[0].value} `;
    task.append(btn);
    tasks.append(task);
    
    btn.addEventListener('click',(e)=>{
      e.target.parentNode.remove();
    });

  //add eventlistener to delete button


});

});
