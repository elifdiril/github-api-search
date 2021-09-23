# Requirements
* The application should use React and a state management library. We use
Redux in Intenseye and love it!
* On the page, the user will be greeted by a table.
* The table should have 3 radio buttons where user can select between three
programming languages: Javascript, Scala, Python
* Javascript radio button will be pre-selected.
* There will be a search input where user can search repositories based on
keywords.
* The search will use the query in the input combined with the selected
language.
* Search input will not have a submit button instead it will automatically fetch
the results based on user input changes.
* Table headers must be consisted of: Repository Id, Username, Repo
Description, Stars, Forks, and Last Update Date.
* Sorting functionality must be implemented for stars, forks and last update
date. And you can only sort by only one column at a time.
* The table must have pagination implemented.
* When sorting changes new data must be fetched from the server. It should
not do it on the client-side.
* The application should remember the state when the user closes the page. So
next time the user opens the page he or she must be greeted by the last
changes he or she has made.
* And lastly, the page should be fully responsive and accessible on mobile.