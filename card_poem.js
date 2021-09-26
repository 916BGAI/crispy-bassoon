jinrishici.load(function(result) {
        var sentence = document.querySelector("#poem_sentence")
        var author = document.querySelector("#poem_author")
        var dynasty = document.querySelector("#poem_dynasty")

        var sentenceText = result.data.content
        sentenceText = sentenceText.substr(0, sentenceText.length - 1);
        sentence.innerHTML = sentenceText
        dynasty.innerHTML = result.data.origin.dynasty
        author.innerHTML = result.data.origin.author + '《' + result.data.origin.title + '》'
    });