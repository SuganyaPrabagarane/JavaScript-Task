/* 
Write a function named createWordPyramid:
- Take a word (e.g., "code") as input.
- Use a loop to build a pyramid pattern:
    Example for "code":
    c
    co
    cod
    code
 */


    const createWordPyramid = () => {
        let word = 'code';
        let pyramid = '';
        lengthOfWord = word.length
        let i = 0;
        while (i<lengthOfWord){
            pyramid = pyramid + word[i];
            i++;
            console.log(pyramid);

        }
    }
    createWordPyramid();