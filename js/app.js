var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => __awaiter(this, void 0, void 0, function* () {
    try {
        let res = yield fetch("https://jsonplaceholder.typicode.com/todos/");
        let data = yield res.json();
        handle(data);
    }
    catch (err) { }
}))();
function handle(data) {
    let RepUsers = [];
    for (let i in data) {
        RepUsers.push(data[i].userId);
    }
    let setUsers = new Set(RepUsers);
    let arrSet = [...setUsers];
    let filterOfusers = [];
    for (let x of arrSet) {
        let push = data.filter((e) => e.userId === x);
        filterOfusers.push(push);
    }
    let dd = 0;
    filterOfusers.forEach((el, index) => {
        makeNames("User ID " + (index + 1), con);
        for (let y = 0; y < el.length; y++) {
            makeTasks((y + 1).toString(), el[y].title, dd, con, data);
            dd++;
        }
    });
    let userInput = document.getElementById("userName");
    let userButton = document.getElementById("addUser");
    let taskInput = document.getElementById("taskName");
    let taskButton = document.getElementById("addTask");
    let newDiv = document.getElementById("new");
    let h = 1;
    let tas = arrSet.length + h;
    userButton.addEventListener("click", () => {
        let newObj = {
            userId: arrSet.length + h,
            id: data.length + 1,
            title: userInput.value,
            completed: false,
        };
        data.push(newObj);
        h++;
        makeNames(userInput.value, newDiv);
        userInput.value = "";
        console.log("You Just add this");
        console.log(newObj);
        console.log("Data Length" + data.length);
        console.log(">>>>>>>>>>>>>>>>>>>>");
    });
    let n = 1;
    taskButton.addEventListener("click", () => {
        let newObj = {
            userId: tas,
            id: data.length + 1,
            title: taskInput.value.toString(),
            completed: false,
        };
        data.push(newObj);
        makeTasks(n.toString(), taskInput.value, data.length, newDiv, data);
        n++;
        taskInput.value = "";
        console.log("You Just add this");
        console.log(newObj);
        console.log("Data Length" + data.length);
        console.log(">>>>>>>>>>>>>>>>>>>>");
    });
}
let con = document.getElementById("container");
function makeNames(userName, cont) {
    let un = document.createElement("div");
    un.className = "DH";
    let userN = document.createTextNode(userName);
    un.append(userN);
    cont.append(un);
}
function makeTasks(num, tit, dataId, conta, data) {
    let div = document.createElement("div");
    div.className = "D";
    let check = document.createElement("input");
    check.type = "checkbox";
    check.className = "ch";
    let s1 = document.createElement("div");
    s1.append(check);
    s1.className = "s1";
    let s2 = document.createElement("div");
    let numb = document.createTextNode(num);
    s2.append(numb);
    s2.className = "s2";
    let s3 = document.createElement("div");
    let titlee = document.createTextNode(tit);
    s3.append(titlee);
    s3.className = "s3";
    let s4 = document.createElement("div");
    s4.setAttribute("id", dataId.toString());
    s4.className = "fa";
    s4.innerHTML = "&#xf2ed";
    s4.addEventListener("click", () => {
        div.parentElement.removeChild(div);
        let ss = data.splice(dataId, 1);
        console.log("You just deleted this");
        console.log(...ss);
        console.log("Data Length = " + data.length);
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    });
    s4.addEventListener("mouseover", (bin) => {
        bin.target.style.color = "red";
    });
    s4.addEventListener("mouseout", (bin) => {
        bin.target.style.color = "black";
    });
    div.appendChild(s1);
    div.appendChild(s2);
    div.appendChild(s3);
    div.appendChild(s4);
    conta.appendChild(div);
}
