# Info Quest

## Contents
- [About](#about)
- [Project Board](#Project-Board)
- [Live Repo](#Live-Repo)
- [Wireframes](#Wireframes)
- [Features](#Features)
- [Future Features](#Future-Features)
- [Testing](#Testing)
- [Validator Testing](#Validator-Testing)
- [Credits](#Credits)
- [Content Credit](#Content-Credit)
- [Further Thoughts](#Further-Thoughts)

## About

**Aeryx, Tanika, Samuel, Hackathon 2: JavaScript Quiz. July 2024**

**Team Name: Code Titans**

Designing a fully interactive quiz website using HTML, CSS and JavaScript.

## Project Board
Github Project Board: https://github.com/users/SubjugatorofCSS/projects/1/views/1

## Live Repo
Deployed early so we can check it as we work: https://subjugatorofcss.github.io/InfoQuest/

## Wireframes 

Reponsive Wireframes - Website design skeleton to be responsive on all sites.

![image](https://github.com/SubjugatorofCSS/InfoQuest/blob/main/Media/Basic%20layout%20(responsive).png)

## Features

![image](https://github.com/SubjugatorofCSS/InfoQuest/assets/169777591/04f6ee93-d039-4a03-aed2-722ec6097cc4)

Main site page is the key page, there should not be any other pages as all navigation should be done through the game. The page changes slightly with each question. \
Design elements:
Answer cards are created via Bootstrap cards (in future design we would have these flip over once selected with the result of the answers/correct/incorrect. Instead currently we have a pop up created. A score is added if the correct answer is provided and you receive a bad luck message if you are wrong. (Note - this is not currently working).

Things that do currently work - 
Question next - moves the questions alongf
Restart - resets the score and question back to first question successfully. 
Submit - Currently tells you to select a question
Select Question - button works in that it logs to the console a button as been selected. 
![image](https://github.com/SubjugatorofCSS/InfoQuest/assets/169777591/d6262f56-c699-4730-819d-06888d9e88c3)
This needs to be further developed to actually select the answer and be able to submit. Also It should highlight what has been selected but this is not currenty working either. 

Colour Schemes:
#3F88C5\
#0AFFCE\
#FFFFE8\
#DDA448\
#F25083

Footer - Simple signature

## Future Features
Get everything working as it should... \
Interactive/animations for the results answers - cards transition/flip around. \
API Instead of manually created questions. We started with an API but we could not quite get it to work in the timeframe, so we made a decision to simplify to get a MVP out in the timeframe. \
Modal pop ups instead of alerts would be a function we would like to add. 

## Testing
JavaScript testing - Correct Answer =/= correct/incorrect - does this work? Questions cycle through, however it currently does not submit or check answers. This is something we need to complete in the next steps. \
Is the score calculated correctly? Correct answers are not currently recorded so the score does not work either. \
Are there any page errors? No page errors \
Is it responsive on all pages? Very responsive on all pages. 
![image](https://github.com/SubjugatorofCSS/InfoQuest/assets/169777591/0b867783-456d-4195-b533-168b705e123f)


## Validator Testing
HTML - Passed No Errors\
CSS - No errors were found when passing through the official (Jigsaw) validator \

## Credits
Authors of the Project\
Aeryzx Rose - Project Lead\
Tanika Irwin\
Samuel Parker

## Content Credit
Balsamiq for Wireframes\
Canva for the Answer Images (A,B,C,D)\
GitHub for code management\
Gitpod for coding\
FontAwesome\
BootStrap Framework\
API - JSON https://opentdb.com/ (not actually currently using) \ 
[Am I Responsive?](https://ui.dev/amiresponsive?url=https%3A%2F%2Fbytes.dev) \
ChatGPT for question creation.


## Further Thoughts
Anything else to add.
Really struggled with the JavaScript side of things. \

### 
