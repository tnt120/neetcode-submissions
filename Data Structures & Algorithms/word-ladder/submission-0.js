class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const wordSet = new Set(wordList);
        if (!wordSet.has(endWord)) return 0;

        const queue = [beginWord];
        let steps = 1;

        while (queue.length > 0) {
            const size = queue.length;

            for (let i = 0; i < size; i++) {
                const currWord = queue.shift();

                if (currWord === endWord) return steps;

                for (let j = 0; j < currWord.length; j++) {
                    const originalChar = currWord[j];

                    for (let c = 97; c <= 122; c++) {
                        const newChar = String.fromCharCode(c);
                        if (newChar === originalChar) continue;

                        const newWord = currWord.slice(0, j) + newChar + currWord.slice(j + 1);

                        if (wordSet.has(newWord)) {
                            queue.push(newWord);
                            wordSet.delete(newWord);
                        }
                    }
                }
            }

            steps++;
        }

        return 0;
    }
}
