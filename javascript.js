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
        const containerForSureToDelete = document.getElementById('containerForSureToDelete');
        const cancel = document.getElementById('cancel')
        const Delete = document.getElementById('Delete')
        let abbr = document.createElement('abbr');
        let ListAddedOfName = document.createElement('div');
        let ForEachListAddedOneHowMuchAdd = document.createElement('div');
        let DeleteRope = document.createElement('button');
        DeleteRope.setAttribute('id', 'DeleteRope');
        ForEachListAddedOneHowMuchAdd.setAttribute('id', 'ForEachListAddedOneHowMuchAdd');
        ListAddedOfName.setAttribute('id', 'ListAddedOfName');

        let createElementList = document.createElement('li');
        createElementList.style.animationDuration = "0.10s"
        createElementList.style.animationName = "animationThree";
        createElementList.style.animationIterationCount = "calc('1')"
        let setIdFor = createElementList.setAttribute('id', 'ListInLeftBar')

        olOfListContainer.appendChild(createElementList)

        ForEachListAddedOneHowMuchAdd.appendChild(DeleteRope).innerHTML = "Delete"

        createElementList.appendChild(abbr).innerHTML = "📚"

        createElementList.appendChild(ListAddedOfName).innerHTML = "New List";

        createElementList.appendChild(ForEachListAddedOneHowMuchAdd);


        Delete.addEventListener('click', () => {
            createElementList.splice(index, 1);
        })

        DeleteRope.addEventListener('click', () => createElementList.remove())
        ListAddedOfName.addEventListener('click', () => {
            let x = prompt('Change Your List Name');
            ListAddedOfName.innerHTML = x;

        })

    });

} addingListsFromAddingButtonInLeftBar()





function renderTasks() {

    const MainOl = document.getElementById("MainOl");
    MainOl.innerHTML = "";
    MainOl.style.marginTop = "25px"
    const AddListButtonTwo = document.getElementById("AddListButtonTwo");
    const completed = document.getElementById("completed");
    
    AddListButtonTwo.addEventListener('click', () => {
        const ContentForList = document.createElement("p");
        const deleteButton = document.createElement('button');
        const checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        const listItem = document.createElement('li');
        listItem.style.width = "900px";
        listItem.style.minWidthwidth = "100%";
        listItem.style.fontSize = "1em"
        listItem.style.display = "flex"
        listItem.style.color = "#b8b8b8"
        listItem.style.lineHeight = "40px"
        listItem.style.marginLeft = "40px"
        ContentForList.style.width = "80%"
        listItem.style.alignItems = "center"
        listItem.style.animationDuration = "0.50s"
        listItem.style.animationName = "animationOne";
        listItem.style.justifyContent = "space-between"
        listItem.style.animationIterationCount = "calc('1')"
        listItem.style.borderBottom = "1px solid rgb(52, 52, 52)"
        listItem.style.fontFamily = " system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

        let AddTakaFromPrompt = prompt("Add Your Task");
        deleteButton.addEventListener('click', () => listItem.remove());


        deleteButton.style.width = "100px";
        deleteButton.style.height = "30px";
        deleteButton.style.border = "none";
        deleteButton.style.color = "white";
        deleteButton.style.float = "right";
        deleteButton.style.cursor = "pointer";
        deleteButton.style.borderRadius = "5px";
        deleteButton.style.backgroundColor = "#72a24d";
        checkbox.style.width = "20px";
        checkbox.style.height = "20px";
        checkbox.style.cursor = "pointer";
        
        let no = "no"

        checkbox.addEventListener("click", () => {
            if (no == "no") {
         
                checkbox.style.backgroundColor = ""
                listItem.style.textDecoration = "line-through"
                no = "Yes"
            } else {
                checkbox.innerHTML = "Tick"
                listItem.style.textDecoration = ""
                checkbox.style.backgroundColor = "black"
                no = "no"
            }
        })
        MainOl.appendChild(listItem);
        listItem.appendChild(ContentForList).innerHTML = AddTakaFromPrompt;
        listItem.appendChild(checkbox).innerHTML = "Tick";
        listItem.appendChild(deleteButton).innerHTML = "Delelte"
        ContentForList.addEventListener('click', () => {
            let rename = prompt("Change Your Task");

            ContentForList.innerHTML = rename;
        })
    })
    console.log(completed)
    // const storedName = localStorage.getItem("ListItems");
    // myHeading.textContent = `Mozilla is cool, ${storedName}`;
    // console.log(storedName)
} renderTasks()






