## Deployed page
https://flexlang.herokuapp.com/examples.html

## Documentation
https://flexlang.herokuapp.com/documentation.html

## About FlexLang
FlexLang is a library to facilitate production of educational content for language or academic learning by supporting in-demand translations/definitions and customized quizzes. It allows end-users to double click on a word to see the original text to be replaced by its translated/definition (inline, in-place translation), therefore minimizing reading-flow disruptions.  Synonyms/thesaurus of clicked words in English and their translation to the target language are saved and transformed into content-specific quizzes. When the user reads a page, they may click on a button that will launch a pop-up multiple-choice quiz involving those words scrambled (plus other distracting words) to facilitate learning by reinforcement. The library was designed to create minimal hassle or extra work for developers.  You will only have to worry about the page's textual content (article, text, etc.). In addition to that, the library will allow developers to provide their own custom dictionary of terms  (in addition to the default French-English dictionary) which can also be used to facilitate retention of academic knowledge such as medical jargon. 

## Getting Started

To use FlexLang library, first go to its repository, and download js/FlexLang.js and FlexLang.css files. Then link the library to your code by adding the following script tag to your html file:
 ```
<script defer type="text/javascript" src='/js/FlexLang.js'> </script>
```
After that, you should create the handler object (we will call it "i" for simplicity) for the desired point, where you want to insert the translatable content. To do that, call the FlexLang constructor called $$$ and provide at least one argument containing the DOM node where to insert the content:
```
const i = $$$(document.querySelector(".insertPoint"))
```
In the example above, insertPoint is the class uniquely attributed to the desired insert point.

The constructor is polymorphic and can also be called with a second argument corresponding to any custom dictionary for translation or academic definitions to be used on the subsequently inserted text. The dictionary should be provided as a JSON formatted object in which keys are the terms to be translated/defined and the values are their translations/definitions. If the second argument is not provided, FlexLang will use a default French-To-English dictionary.
```
const i = $$$(document.querySelector(".insertPoint"), customDictionary)
```
Finally, you can add your custom content by invoking the handler object method .addText and providing two arguments: a custom alignment to be applied to the text and a string with the text itself. You may call it once for all your content, provided that paragraphs are separated by line breaks (\n). Punctuation will be preserved and processed accordingly (e.g. removal of commas) to allow for proper definition search. The text will be presented initially without the Learning Section, which will be displayed after the user double-clicks their first word. The user can then show or hide the list of learned terms, start a quiz multiple times and check their score. The multiple-choice quiz will preferentially use distracting words that the user has clicked before but will complete the 4-option list of alternatives with random words from the provided dictionary, if not enough words were previously clicked.
