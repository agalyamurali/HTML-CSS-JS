// Custom updation of file name
function updateFileName() {
    const fileInput = document.getElementById("file-input");
    const fileName = document.getElementById("file-name");
    fileName.textContent = fileInput.files.length > 0 ? fileInput.files[0].name : "No file chosen";
}

var addbtn = document.querySelector(".addbtn");
var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".popup");

addbtn.addEventListener("click", function () {
    overlay.style.display = "block";
    popup.style.display = "block";
});

var cancel = document.querySelector(".cancel");
cancel.addEventListener("click", function () {
    overlay.style.display = "none";
    popup.style.display = "none";
});

function add() {
    var books_container = document.querySelector(".bookscontainer");
    var entered_title = document.querySelector("#title").value;
    var entered_name = document.querySelector("#author").value;
    var entered_detail = document.querySelector("#description").value;
    var uploaded_file = document.getElementById("file-input");
    var file = uploaded_file.files[0];

    if (!entered_title || !entered_name) {
        alert("Enter book name and title");
        return;
    }

    if (!file) {
        alert("Please upload a file.");
        return;
    }

    const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
        "application/epub+zip"
    ];

    if (!allowedTypes.includes(file.type)) {
        alert("Please upload a valid file (PDF, DOCX, TXT, EPUB).");
        return;
    }

    const reader = new FileReader();

    // Debugging: Log file details
    console.log("Uploading file:", file.name, file.type);

    reader.readAsDataURL(file);

    reader.onload = function (e) {
        console.log("File Loaded:", e.target.result); // Debugging output

        var body = document.createElement("div");
        body.setAttribute("class", "container");

        var title = document.createElement("h2");
        var author = document.createElement("h3");
        var para = document.createElement("p");
        var book = document.createElement("div");
        var del = document.createElement("button");

        del.textContent = "Delete";
        del.onclick = function () {
            body.remove();
        };

        title.textContent = entered_title;
        author.textContent = entered_name;
        para.textContent = entered_detail;

        // Fix: Ensure correct link behavior
        book.innerHTML = `<a href="${e.target.result}" class= "url" target="_blank" download="${file.name}">View File</a>`;

        body.append(title, author, para, book, del);
        books_container.append(body);

        // Reset input fields
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#description").value = "";
        uploaded_file.value = "";

        overlay.style.display = "none";
        popup.style.display = "none";
    };

    reader.onerror = function () {
        alert("Error reading file. Please try again.");
    };
}
