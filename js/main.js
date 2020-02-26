import { TableCreation } from "./TableCreate.js";
import { FetchLogic } from "./BusinessLogic.js";
import { NewEntry } from "./newEntry.js";
//Implementation class is the main class which executes both Business and Presentation Logic
class Implementation {
    constructor() {
        this.fetchObject = new FetchLogic();
        this.createObject = new TableCreation();
        this.newEntryObject = new NewEntry();
        let loadButton = document.getElementById("LoadButton");
        loadButton.addEventListener("click", () => { this.loadData(); });
    }
    loadData() {
        this.fetchObject.fetchFunction()
            .then((data) => {
            this.createObject.create(data);
        })
            .catch(() => console.log("data not found"));
    }
}
let obj = new Implementation();
