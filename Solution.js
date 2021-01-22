function anagrams(word, words) {
    let main = charMap(word);
    let op = []
    for (let i = 0; i < words.length; i++) {
        let data = charMap(words[i]);
        let cond = true;
        if (Object.keys(main).length != Object.keys(data).length) {
            cond = false;
        }
        if (cond == true) {
            for (let char in main) {
                if (main[char] != data[char]) {
                    cond = false;
                    break;
                }
            }
        }
        if (cond == true) {
            op.push(words[i]);
        }
    }
    return op;
}

function charMap(str) {
    str = str.replace(/[^\w]/g, "").toLowerCase().split("").sort();
    let map = {};
    for (let i = 0; i < str.length; i++) {
        if (!map[str[i]]) {
            map[str[i]] = 1;
        } else {
            map[str[i]]++;
        }
    }
    return map;
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);