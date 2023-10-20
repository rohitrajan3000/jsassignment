function reverseWords(Sentence) {
    
    const words = Sentence.split(' ');
  
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
  
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  const Sentence = 'Hello I am learning JavaScript';
  const reversedSentence = reverseWords(Sentence);
  console.log(reversedSentence);