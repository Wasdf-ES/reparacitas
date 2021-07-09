let links = document.getElementsByTagName("a");
let submissionId = getSubmissionId();

for (let i = 0; i < links.length; i++) {
    let linkElement = links[i];
    let linkText = linkElement.innerText;    

    if (linkText.startsWith("#_")) {
        let commentReference = linkText.substring(2, linkText.length);
        let tooltipClass = "c:" + submissionId + "-" + commentReference;

        linkElement.classList.add("tooltip");
        linkElement.classList.add(tooltipClass);
    }
}

function getSubmissionId() {
    let newsBody = document.getElementsByClassName("news-body")[0];
    let submissionId = "";

    if (newsBody !== undefined) {
        submissionId = newsBody.attributes[1].nodeValue;
    } else {
        let classWithId = document.getElementsByClassName("main-content")[0].getElementsByTagName("a")[0].classList[0];
        submissionId = classWithId.split(":")[1];
    }

    return submissionId;
}