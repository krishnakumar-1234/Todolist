const ListInLeftBar = document.querySelectorAll("#ListInLeftBar");
const ListAddedOfName = document.querySelectorAll("#ListAddedOfName");
const Whereareyou = document.getElementById("Whereareyou");


ListInLeftBar.forEach(ListInLeftBar => {
    ListInLeftBar.addEventListener('click', (e) => {

        console.log(e);
    })

});


function NameChangeForTheLists() {
    ListAddedOfName.forEach(ListAddedOfName => {
        ListAddedOfName.addEventListener('dblclick', () => {
            let x = prompt("Now change Your Name Of List");
            ListAddedOfName.innerHTML = x;
            Whereareyou.innerHTML = x;
        })

    });
} NameChangeForTheLists()

function Today() {
    const Whereareyou = document.getElementById("Whereareyou");
    const todayContainer = document.querySelector("#todayContainer");
    const scheduledContainer = document.getElementById("scheduledContainer");
    const allThings = document.getElementById("allThings");
    const howmuchlistsaddedsmall = document.getElementById('howmuchlistsaddedsmall');


    todayContainer.addEventListener("click", () => {
        todayContainer.style.backgroundColor = "#0b84ff"
        howmuchlistsaddedsmall.style.color = "#0b84ff"
        scheduledContainer.style.backgroundColor = "";
        allThings.style.backgroundColor = ""


        Whereareyou.style.color = "#0b84ff";
        Whereareyou.innerHTML = "Today"

    })
} Today()
function scheduledContainer() {
    const scheduledContainer = document.getElementById("scheduledContainer");
    const todayContainer = document.querySelector("#todayContainer");
    const allThings = document.getElementById("allThings");
    const howmuchlistsaddedsmall = document.getElementById('howmuchlistsaddedsmall');


    scheduledContainer.addEventListener("click", () => {
        scheduledContainer.style.backgroundColor = "#fb9f0a";
        Whereareyou.style.color = "#fb9f0a";
        howmuchlistsaddedsmall.style.color = "#fb9f0a"

        Whereareyou.innerHTML = "Schedule";
        todayContainer.style.backgroundColor = ""
        allThings.style.backgroundColor = ""
    })
} scheduledContainer()


function allThings() {
    const allThings = document.getElementById("allThings");
    const todayContainer = document.querySelector("#todayContainer");
    const scheduledContainer = document.getElementById("scheduledContainer");
    const howmuchlistsaddedsmall = document.getElementById('howmuchlistsaddedsmall');


    allThings.addEventListener("click", () => {
        Whereareyou.style.color = "#5b626a";
        howmuchlistsaddedsmall.style.color = "#5b626a"

        Whereareyou.innerHTML = "All";
        allThings.style.backgroundColor = "#5b626a"
        todayContainer.style.backgroundColor = ""
        scheduledContainer.style.backgroundColor = ""
    })
} allThings()


function addingListsFromAddingButtonInLeftBar() {
    const olOfListContainer = document.getElementById('olOfListContainer');
    const inneraddlistsContainer = document.getElementById("inneraddlistsContainer");

    inneraddlistsContainer.addEventListener('click', () => {
        let createElementLi = document.createElement('li');
        createElementLi.style.animationName = "animationThree";
        createElementLi.style.animationDuration = "0.10s"
        let setIdFor = createElementLi.setAttribute('id', 'ListInLeftBar')
        createElementLi.style.animationIterationCount = "calc('1')"

        olOfListContainer.appendChild(createElementLi).innerHTML = `<abbr>📚</abbr><p id="ListAddedOfName" onclick="innerHTML =prompt() ">New List</p><p id="ForEachListAddedOneHowMuchAdd"><Button id="DeleteRope" onclick="alert()">Delete</button></p>`;
        console.log(createElementLi)


    });

} addingListsFromAddingButtonInLeftBar()


// function MainBrachForAddingListsAndSome() {
//     const AddListButtonTwo = document.querySelector('#AddListButtonTwo');
//     const storeinnerbranch = document.getElementById('storeinnerbranch');
//     const MainOl = document.getElementById("MainOl");
//     AddListButtonTwo.addEventListener('click', () => {
//         let createElementLi = document.createElement('li');
//         createElementLi.style.fontSize = "1em"
//         createElementLi.style.width = "900px";
//         createElementLi.style.color = "#b8b8b8"
//         createElementLi.style.lineHeight = "40px"
//         createElementLi.style.marginLeft = "40px"
//         createElementLi.style.borderBottom = "1px solid rgb(52, 52, 52)"
//         createElementLi.style.animationName = "animationOne";
//         createElementLi.style.animationDuration = "0.50s"
//         createElementLi.style.animationIterationCount = "calc('1')"
//         createElementLi.style.fontFamily = " system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

//         let NameForToDoLists = prompt("What is Your Plan?");
//            MainOl.appendChild(createElementLi).innerHTML = NameForToDoLists;
//         const ChekBox = document.getElementById("ChekBox")
//         MainOl.appendChild(createElementLi).innerHTML = `<input type="checkbox" name="" id="ChekBox">` + NameForToDoLists;


//     })
// } MainBrachForAddingListsAndSome()



function renderTasks() {
    const MainOl = document.getElementById("MainOl");
    MainOl.innerHTML = "";
    const AddListButtonTwo = document.getElementById("AddListButtonTwo");
    const completed = document.getElementById("completed");

    AddListButtonTwo.addEventListener('click', () => {
        const deleteButton = document.createElement('button');
        const checkbox = document.createElement('input');
        checkbox.setAttribute("type", "radio");
        const listItem = document.createElement('li');
        listItem.style.fontSize = "1em"
        listItem.style.width = "900px";
        listItem.style.color = "#b8b8b8"
        listItem.style.lineHeight = "40px"
        listItem.style.marginLeft = "40px"
        listItem.style.borderBottom = "1px solid rgb(52, 52, 52)"
        listItem.style.animationName = "animationOne";
        listItem.style.animationDuration = "0.50s"
        listItem.style.animationIterationCount = "calc('1')"
        listItem.style.fontFamily = " system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
        listItem.style.display = "flex"
        listItem.style.alignItems = "center"
        listItem.style.justifyContent = "space-between"

        let AddTakaFromPrompt = prompt("Add Your Task");



        deleteButton.addEventListener('click', () => listItem.remove());


        deleteButton.style.width = "100px";
        deleteButton.style.height = "30px";
        deleteButton.style.backgroundColor = "#72a24d";
        deleteButton.style.border = "none";
        deleteButton.style.color = "white";
        deleteButton.style.borderRadius = "5px";
        deleteButton.style.float = "right";
        deleteButton.style.cursor = "pointer";

        checkbox.style.width = "20px";
        checkbox.style.height = "20px";
        checkbox.style.cursor = "pointer";
        let no = "no"
        checkbox.addEventListener("click", () => {
            if (no == "no") {
                listItem.style.textDecoration = "line-through"
                checkbox.innerHTML = "✅"
                checkbox.style.backgroundColor = ""
          
                no = "Yes"
            } else {
                listItem.style.textDecoration = ""
                checkbox.innerHTML = "Tick"
                checkbox.style.backgroundColor = "black"

                no = "no"

            }
        })


        MainOl.appendChild(listItem).innerHTML = AddTakaFromPrompt;
        listItem.appendChild(checkbox).innerHTML = "Tick";
        listItem.appendChild(deleteButton).innerHTML = "Delelte"

    })

} renderTasks()