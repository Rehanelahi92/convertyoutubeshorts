function convertToNormal() {
    var shortLink = document.getElementById('shortLink').value;
    var normalLink = generateNormalLink(shortLink);
    document.getElementById('normalLink').innerText = 'Normal Video Link: ' + normalLink;
}

function generateNormalLink(shortLink) {
    // Replace "shorts" with "watch" in the URL
    return shortLink.replace('/shorts/', '/watch/');
}
