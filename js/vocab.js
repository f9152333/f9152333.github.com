(function(){
  var words = [
    {word: 'abandon', meaning: '\u653e\u5f03'},
    {word: 'benefit', meaning: '\u76ca\u5904'},
    {word: 'capable', meaning: '\u6709\u80fd\u529b\u7684'},
    {word: 'declare', meaning: '\u5ba3\u5e03'},
    {word: 'efficient', meaning: '\u9ad8\u6548\u7684'},
    {word: 'feature', meaning: '\u7279\u70b9'},
    {word: 'generate', meaning: '\u751f\u6210'},
    {word: 'honest', meaning: '\u8bda\u5b9e\u7684'},
    {word: 'issue', meaning: '\u95ee\u9898'},
    {word: 'justice', meaning: '\u516c\u5e73'}
  ];

  var index = 0;

  function showWord(){
    $('#meaning').hide();
    $('#flashcard').text(words[index].word);
    $('#meaning').text(words[index].meaning);
  }

  $('#show-meaning').on('click', function(){
    $('#meaning').toggle();
  });

  $('#next-word').on('click', function(){
    index = (index + 1) % words.length;
    showWord();
  });

  $(document).ready(function(){
    showWord();
  });
})();
