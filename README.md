# Dunder Mifflin Employee Directory (Word Guess Game)

After much trial, tribulation, and tears, I present my **Dunder Mifflin Employee Directory**, a word guess game akin to the classic hangman. Test your memory of NBC's _The Office_ characters with this neverending game featuring over 65 unique characters! :woman_office_worker::man_office_worker:

## What this project does ##

This project makes uses of `objects` to contain game variables, `for loops` to ensure all user guesses are captured and applied, `if-else statements` to validate wins, losses, and user guesses, as well as an `onkeyup function` to collect dynamic user input. 

## How users can get started with this project ## 

The mechanics of this game are fairly simple, though the content may pose some challenge for users who have lives and haven't rewatched _The Office_ over eleven times.

### How to Play: ###

1. **[Start the game](https://fkakatie.github.io/word-guess-game/).**
	- Beneath the page title and subhead, a screenshot of a beloved character from _The Office_ will appear. 
	- Below that image, a series of underscores will appear, indicating the length of the displayed character's name. 
	- Some helper text and a box to contain any wrong guesses appear below the underscores.
	- A score card is displayed on the right-hand side of the page (for larger screens) or immediately under the header (for smaller screens).
	- The footer contains links to [my portfolio](https://fkakatie.github.io/responsive-portfolio/index.html), if you are so inclined.
	
2. **Enter any key to guess the character's name.**
	- Only unique letters will be registered as valid guesses. Entering anything not in the English alphabet or a letter previously entered will change the "helper text" beneath the character's image and underscores, letting you know what you've done wrong.
	- As indicated on the score card, users are allowed three incorrect guesses. 
		- Correct guesses will replace underscores with the entered letter.
		- Wrong guesses will reduce the number of "guesses left" each user is allowed and display incorrect letters entered below the character image and underscores.
	
3. **Win or lose.**
	- If the user correctly spells the character's name, they will earn a win and the "helper text" will update with information about the win.
	- In the event of three incorrect guesses in a single round, the user will incur a loss and the "helper text" will update with information about the loss.
	
4. **Repeat and replay!**
	- After either a win or a loss, a new character will display on the page, allowing users to continue to play as long as they'd like!

## Where users can get help with this project ## 

If you have any questions about this obviously very intricate and sophisticated project, initiate a new pull request and leave a comment!

## Who maintains this project ##

This project is lovingly (and casually) maintained by me, @[fkakatie](https://github.com/fkakatie). Thanks for checking it out. 
