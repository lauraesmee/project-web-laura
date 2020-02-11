var saveStory = document.getElementsByClassName("saveStory")[0];
saveStory.onclick = function () {
    var saveBadge = document.getElementsByClassName("saveBadge")[0];
    saveBadge.classList.add('jump');
    setTimeout(function () {
        saveBadge.classList.remove('jump');
    }, 1000);
    saveStory.innerHTML = "<img src='img/opslaan2.svg' alt='save'>";
};