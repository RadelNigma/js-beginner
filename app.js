// const firstName = 'Radel'
// const lastName = 'Nigma'
// let age = 26
// // name = 'Rad'
//
// console.log('Имя ' + lastName + ' ' + firstName)
//
// const txt = prompt('Введите имя')
// const txt1 = prompt('Введите фамилию')
//
// console.log('Привет ' + txt + ' ' + txt1)
//
// function calcYear (year) {
//     return 2022 - year
// }
// console.log(calcYear(1980))
// console.log(calcYear(1954))
// console.log(calcYear(1987))
// console.log(calcYear(1955))

// function getRandomBetween(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min)
// }
//
// console.log(getRandomBetween(10, 45));
// const person = {
//     name: 'Radel',
//     age: 42,
//     greet() {
//         console.log(this.name)}
// }
// person.greet()

// const interval = setInterval(() => {
//     console.log('Alert timeout')
// },1000)
// clearInterval(interval)

// const heading = document.getElementById('hello')
// // const heading2 = document.getElementsByTagName('h2')[0]
// // const heading2 = document.getElementsByClassName('h2-class')[0]
// // const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('h2')
//
// // const heading3 = heading2.nextElementSibling
// const h2List= document.querySelectorAll('h2')
// const heading3 = h2List[h2List.length-1]
//
// console.log(heading2)
// console.dir(heading.textContent)
// setTimeout(()=>{
//     addStilesTo(heading,'JavaScript')
// },500)
//
// const link = heading3.querySelector('a')
//
// link.addEventListener('click', (event)=>{
//     event.preventDefault()
//     console.log('Click on link', event.target.getAttribute('href'))
//     const url = event.target.getAttribute('href')
//
//     window.location=url
// })
//
// setTimeout(()=>{
//     addStilesTo(link, 'Практикуйся' ,'blue')
// },1000)
//
// setTimeout(()=>{
//     addStilesTo(heading2, 'И всё получится', 'yellow', '2rem')
// },1500)
//
// function  addStilesTo(node, text, color = 'red', fontSize){
//     node.textContent = text
//     node.style.textAlign = 'center'
//     node.style.color = color
//     node.style.backgroundColor = 'black'
//     node.style.padding = '2rem'
//     node.style.display='block'
//     node.style.width='100%'
//     if (fontSize){
//         node.style.fontSize = fontSize
//     }
// }
//
// heading.onclick = () => {
//     if (heading.style.color === "red") {
//         heading.style.color = "#000"
//         heading.style.backgroundColor = '#fff'
//     } else {
//         heading.style.color = "red"
//         heading.style.backgroundColor = '#000'
//     }
//     console.log('click')
//
// }
// heading2.addEventListener('dblclick',() => {
//     if (heading2.style.color === "green") {
//         heading2.style.color = "#000"
//         heading2.style.backgroundColor = '#fff'
//     } else {
//         heading2.style.color = "green"
//         heading2.style.backgroundColor = '#000'
//     }
// })

// const delay = (wait = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, wait)
//     })
//     return promise
// }
//
// delay(2500)
//     .then(() => {
//         console.log('After 2 seconds')
//     })
//     .catch(err => console.error(err))
//     .finally(() => console.log('Finally'))

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })
//
// p.then(data => {
//     const p2 = new Promise((resolve,reject) =>{
//
//     })
// })

// async function f() {
//     return 1;
// }
// f().then(alert)

// async function f() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(()=>resolve('готово!'),1000)
//     })
//     let result = await promise
//     alert(result)
// }
//
// f();

// asunc showAvatar() => {
//     let response = await fetch('')
// }

// const color = document.getElementById('sub-hello')
// const changeStyle = () => {
//     if(color.style.color==='red'){color.style.color='yellow'}
//     else {color.style.color='red'}
// }
// function handler1(){
//     console.log('Спасибо!');
// }
// function handler2(){
//     console.log('Спасибо дважды!');
// }
//
// function coord(event) {
//     console.log(event.type + ' на ' + event.currentTarget)
//     console.log('Координаты: ' + event.clientX + ":" + event.clientY)
// }
//
// function hideText(){
//   const textDiv =  document.getElementById('text')
//     console.dir(textDiv)
//     textDiv.hidden = true
// }
// const button1 = document.getElementById('inbutton')
// button1.onclick = ()=>{changeStyle()}
// button1.addEventListener("click",handler1,{once: true})
// button1.addEventListener("click",handler2)
// button1.addEventListener("click",coord)
//
// // doument.addEventListener("DOMContentLoaded",()=>alert('DOM построен'))
//
// console.dir(button1)
// class Menu {
//     handleEvent(event) {
//         // let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1)
//         this['on' + event.type[0].toUpperCase() + event.type.slice(1)](event)
//     }
//     onMousedown() {
//         button1.value = "Кнопка мыши нажата";
//     }
//
//     onMouseup() {
//         button1.value += "...и отжата.";
//     }
// }
//
// let menu = new Menu();
// button1.addEventListener('mousedown', menu);
// button1.addEventListener('mouseup', menu);
// button1.addEventListener("click",hideText)
// console.log(color.textContent.slice(3,9))

// const delay = ms => {
//     return new Promise(r => setTimeout(() => r(), ms))
// }
//
// const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('Fetch todo started...')
//    return delay(2000)
//        .then(() => fetch(url))
//        .then(response => response.json())
// }
//
// fetchTodos().then(data => {
//     console.log('Data: ', data)
// })
// .catch(e => console.error(e))

// async function fetchAsyncTodos() {
//     console.log('Fetch todo started...')
//     try {
//         await delay(2000)
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log('Data: ', data)
//     } catch (e){
//         console.error(e)
//     } finally {
//         console.log('Complete')
//     }
// }
//
// fetchAsyncTodos()

const url = 'http://localhost:8080/api/users'

const fetchData = fetch(url).then(
        res => {
            res.json().then(
                data => {
                    // console.log(data)
                    if (data.length > 0) {
                        let temp = ""
                        data.forEach((u) => {
                            temp += "<tr>"
                            temp += "<td>" + u.id + "</td>"
                            temp += "<td>" + u.firstName + "</td>"
                            temp += "<td>" + u.lastName + "</td>"
                            temp += "<td>" + u.age + "</td>"
                            temp += "<td>" + u.email + "</td>"
                            let temp1 = ""
                            u.roles.forEach(r => {
                                temp1 += r.name.replace('ROLE_', '') + ' '
                            })
                            temp += "<td>" + temp1 + "</td>"
                            temp += "<td>" +
                                `<button type = "button" class = "btn btn-info btn-sm text-white" data-bs-toggle = "modal" 
                            data-bs-target="#editUserModal">Edit</button>`
                                +"</td>"
                            temp += "<td>" +
                                `<button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal"
                             data-bs-target="#deleteModal">Delete</button>`
                                +"</td>"
                        })
                        document.getElementById('data').innerHTML = temp
                    }
                }
            )
        }
    )

let deleteForm =
     `<div class = "mb-3">
         <label for = "id_delete" class = "label">ID</label>
         <input readOnly type="number" class = "form-control" id = "id_delete" th:value="*{id}" name="id">
      </div>
      <div class="mb-3">
         <label for = "first_name_delete" class = "label">First name</label>
         <input readOnly type="text" class = "form-control" id="first_name_delete" th:value="*{firstName}"
          name="firstName">
      </div>
    `
// <div className="mb-3">
//     <label htmlFor="last_name_delete" className="label">Last
//         name</label>
//     <input readOnly type="text" className="form-control"
//            id="last_name_delete" th:value="*{lastName}"
//            name="lastName">
// </div>
// <div className="mb-3">
//     <label htmlFor="age_delete" className="label">Age</label>
//     <input readOnly type="number" className="form-control" id="age_delete"
//            th:value="*{age}" name="age">
// </div>
// <div className="mb-3">
//     <label htmlFor="email_delete" className="label ">Email
//         address</label>
//     <input readOnly type="email" className="form-control" id="email_delete"
//            th:value="*{email}" name="email"
//            aria-describedby="emailHelp">
// </div>
// <div className="mb-3">
//     <label htmlFor="roles_delete" className="label">Roles</label>
//     <select disabled id="roles_delete" name="roles" multiple className="form-select" size="2"
//             aria-label="size 2 select">
//         <option th:each="role:${roles}"
//                 th:value="${role.id}"
//                 th:text="${role.getRoleName()}"
//                 th:selected="${userDelete.getRolesName().contains(role.getRoleName())}">
//         </option>
//     </select>
// </div>
document.getElementById('delete_user_form').innerHTML = deleteForm



// const link = heading3.querySelector('a')
//
// link.addEventListener('click', (event)=>{
//     event.preventDefault()
//     console.log('Click on link', event.target.getAttribute('href'))
//     const url = event.target.getAttribute('href')
//
//     window.location=url
// })
//
// document.getElementById("id-checkbox").addEventListener("click", (event) => {
//     document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
//     event.preventDefault();
// }, false);