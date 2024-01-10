function detectLanguage(string) {
    // Regular expression to match Arabic characters
    var arabicPattern = /[\u0600-\u06FF\u0750-\u077F]/;

    if (arabicPattern.test(string)) {
        languageDiv.innerHTML = 'Language: Arabic';
    } else if (inputText !== '') {
        languageDiv.innerHTML = 'Language: English';
    } else {
        languageDiv.innerHTML = '';
    }
}
