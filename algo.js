function order(words) {
    let splitWords = words.split(" ");

    splitWords.sort((a, b) => {
        let numA = parseInt(a.match(/\d+/)[0]);
        let numB = parseInt(b.match(/\d+/)[0]);
        return numA - numB;
    });

    return (splitWords.join(" "));
}

order("is2 Thi1s T4est 3a")