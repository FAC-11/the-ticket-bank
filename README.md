# the-ticket-bank
[![Build Status](https://travis-ci.org/FAC-11/the-ticket-bank.svg?branch=master)](https://travis-ci.org/FAC-11/the-ticket-bank)

[![codecov](https://codecov.io/gh/FAC-11/the-ticket-bank/branch/master/graph/badge.svg)](https://codecov.io/gh/FAC-11/the-ticket-bank)

This is a prototype for a platform to be used for the distribution of donated event tickets via charities to those who may benefit form them most.

## Tech Stack
* Express
* Handlebars
* PostgreSQL

## Instructions for Running Locally
* Setup a local postgreSQL database.
* Clone the repo.
* Obtain a copy of the config.env from any of @AbdullahChaudhry, @y-zaky, @BartBucknill or @rinoma. Save the config.env in the root. Replace the database url with your own. 
* Navigate to the root directory of the project in your terminal, and run ```npm i```.
* In your terminal run ```npm run testbuild```. This builds the database schema and inserts test data. Alternatively you can run ```npm run build``` to merely build the schema without inserting test data.
* In your terminal run ```npm run devStart``` to start the development server.
* Navigate to localhost:4000 in your browser to see the site.

## Tests
* To run the tests when in the root directory of the project run ```npm test``` in your terminal.
* For manual testing you will want to set up dummy email accounts.

## Features
This prototype includes three main flows/user journeys:
* A charity can apply for an account. The process includes automated verification of their email address and manual verification by the Ticket Bank organisation that the account application is legitimate.
* The Ticket Bank organisation can create new events, and a new event notification email will be sent out to all registered charities.
* A registered charity that has been approved by the Ticket Bank organisation can request event tickets, and submit details of attendees. An email notifying success/failure will be sent out upon the application and the Ticket Bank organisation receives email notification that they need to send out the tickets. Note: this flow is not complete (see below).

A rough diagram of these flows can be seen [here](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=sprint-1-b%20(4).xml#R7VxZb9s4EP41BtqHBjqsw4%2BJk7QL7AJFg91tH2mJttnKokvJcbK%2FfnnqIuW4tQ47SFAUEk1JFGfmm%2FmGQ03c%2BebpIwHb9V84hsnEseKniXs7cRzbc5wJ%2B2fFz6LFDz3RsCIolp3Khgf0H5SNlmzdoRhmtY45xkmOtvXGCKcpjPJaGyAE7%2BvdljipP3ULVlBreIhAorf%2Bi%2BJ8LVqnflj54RNEq7V8tOtacuQLEP1YEbxL5QMnjrvkf%2BLnDVA3k%2F2zNYjxvtLk3k3cOcE4F0ebpzlM2OSqeRPX3bf8WoyPwDQ%2F5gIpqCx%2FVu8OYzoV8hSTfI1XOAXJXdl6w18PshtY9GydbxJ6aNND%2BITyr6z5yvHk6Tf1U5qTZ%2FFb4Knzb%2FIW32GeP0stALsc06byyX9ivJU30V9Ovm%2BGdySS4%2FedcObaYRhZSxC4vvNBKRAgK5i39JHTwN69cmM5ZR8h3kA6XNqBwATk6LGuJkBq26roJy%2B9JgQ8VzpsMUrzrHLnz6yBdpCG4wdSK6TZ2GFDeI3%2BnnewPz0QI1BnlVcpm7hCtGiT3Y92HFCOM9SNWde6UZHPwelvG%2B0jSHbyKfM1IChnT%2F8CVyjLCR0BTunpPSYbTXj7Ncrhwxbw6dhT6K4LqJQcOyuQiZ0kYAGTmwLb5jjBhP6U4pSJnD4X%2F4CqkUJeHMwWllX8ojCU3WmJkqTSc7mEfhSxdpzm92CDEqbL%2F0ASgxTIZil925Hnlcst%2FkfbQYJWKW2LqPghOaQPj5Dk8OmgJJU5Wg3zUqC9L31C0bauuAPfOl3409cPzM4RxheOZXy214cA7MrsV8Duq7yinHz%2BW7%2FTH%2BrTb0%2FPwg9OZ3XDc73DfvCF%2Fif7wTbNrQDx3QaghIepLCwtUHmPKFA4VoLSHzwOJSJoXSKykUj9BtGnQPTUr0u%2BYBBDQHQvCHFO0ZEBIfSYpPPQ%2BbfDo1CzyonjJznT8S2gpuav2LGy1LkwQyoLZ85GsgcoR%2BmKHUYRlRLDF7DdJihSMRU9I5jeXd2VDrB64zdbPs2W3QabcYcMt2x3GGPu12BnBpd%2BHtQ2sMzCbXPpL%2FTv3qXPNPAouVWCV%2BjNVZ%2FKpqYNV%2B0OaN5%2BP9Z9iE0Nnck4hk0plDsDZ63Ge6S35nH1Qw7pkLi7rgTWWRFZlw7aAmnMX%2BM7jIT3fnPZA7jsqesNZ9Pha%2FDYyiKrZhucj5G6RxnpNbc7%2BGZkvRiZ0%2BC4nj9kXGxp4rtskhvo9jZagj%2FQrKsljZTiHC2fDexUuruGhOoW9IK5tVlCuzX1oNN%2BOKROzy7Qc5io3WjJ8UNk6U8jWTp%2FlWzGMsGgKqlHw58TCDI4KfLFbGRUH5i8BUiwMDhKUPRD4QWBGeRhbz3DrPpfnET8ZkJoSMZoB6%2FM8am1nRqC%2BGMhiBrNL%2BRbzl9hPXvMDKavzeg3gRdlxIAYV65mui83gmjO9aDU0xkoWzwcOBiWelS%2F4cGhn5W1%2Btp74I0%2Bv85o4KuvlN09Qp6%2FF6WRncJBGEEzHCxCb%2Br1FL2FswGh9yJTUUVhbVUlR0s9FRIvVfIL%2FLmDGXNbXDlfgVLOhqQUCl4qM0qpGd51PJHDMAFrxIn0XxsTMOXAfG80y9ezYLx41b2esI0AAgFimFMOmwnSm%2B0WG5SLxzrW109f%2BLA4WFzRw7%2B3W8jC3gSJXpwDp7vNgrfiJXtzypohd3eMZ1gxwdsY79nhuwUl3bG6CjyKdJxYTdqAJ3acJLgsCZHLTPzhMH5%2FdYko5daNy7YCg3UFBusKO7AuV4cpIdHdNgY5FGrwgAkfcb6GNenR12ayxZwzpisuYC4zsEjgJcrCV3ZYlBwPmex3%2B6loq8Xdg4bdriHn0VZVPzzyeb2EjXqJce9T6o0WNnqdpvJ7maiOC6%2F0SqnGUso0rN9BCEpe1JjZX6uZcvWc3Sd6fUEaqcfNZGIJSjrJc9RFXo%2FU96gs%2BR4V7tHZqql0xp0T0BjAcGlEbj8K4WLZDXIXywXFXiwdt8OecDvoabPIaBGqZ4hQg9Fqlzw9QpWVSDXFfdfIs1K1jyNMp%2Fh9p%2BoM7diDgUmdZ37gAr8bdbatxp6KQTc%2FqXsY6k5i9KgKSwiMEWHbf%2BX6V7aLIpgVSSw2D0VBSuUyw51U04I0W%2BqXxjAicMOTEXVG4YMNk1q6yLb8omqMquJRpSe3N6cNwnCpjJXrWCs5SW0wYj1QpFOowopJL3iQQm1qd3S879sHdNSoK50YILDlyKgcWE1e0FT20IP8XhgaNBQb0plhfkq4tTXaTBSF5FSkfBnBBPM1yLk9MAWBMM7U3ZaY0sY9pzXdvNgJb39K68UxKtduMCpvagCymQHInKALJOup1iQ45JvrGzk%2FWFeW66qWz5Ag%2BhasOK2HqmRP99uK4I%2B9p9BrMusXNhV6KqpqueDkLQiBnvL%2BgyELr2as%2BY2GAlHNz%2Bt6QWCG%2FuN9hVDlZNDe3s3Eu50YChOZBaEIJNfyhw2KY658LTWW5YcsTLqg1Fyzy%2BIbHXJ0k%2BpnLkz2al3ZtvrugJx5xdB%2FlyipLni5zOCpJCg8nCORpai%2FmBRxalkR%2B8qyprX4%2BsqdTk814EbJ6v39fH5%2Ff4phh6MlTkK91IFbTiXm0QKyokk6Mha%2FqeDN4FBrlxuDuaP84%2Bim2laorEtdKXYXJmzZswbanpEFzw5%2F1eRoC%2B6FHh8vr2OtdLzPlyiFqpZ4QV6uWCUnbSszIref5YjftMqi3t3evD81Er68ONZtxi8mQu73tEoT6Ij7IFfhXlXiKTBtxxltaTTQt9%2FMCRRMX9ZEyCTq5eeXBv1yQ6BD03XMwEilRjhnv%2B0WJ0aa2EGLUAM9VaoQmHk2Hkuo1%2FZ%2F7rAAY%2BXmKk0Cp9tXgnGacPY3Ucvy3HukNQ8SsT1o1qKSp%2BEOR1QHlJkysXc0X%2FM8mFSAwmmIUXfiNVri7%2FNYZ3aPraiZdaAl6lmX4DZOok0q%2BKqtP1tduxNz%2FqII6JWIp9OG6MRItZXBX82suM2VAtXQVaIk1EGF0z1VnVPQNfF%2FS3zZZIR6Jrj1dobCnxSzGYBPEYQx55uvjQ2qFZgu2GA9kSbzgWfBBUM9B9ePvzqG8QidqjCdeeno6p5NcKNqpdNrd1hTLXtr2O4xNfgr2%2B7AYc2cPhzWoY8BjpRBMDmsYLTqnpnOf9CyicQCnCktitbMui4XcpWSnQ65bMXHtsKaxZxXEl3fQNyeuql%2BSyKSCaQyepe6cGidW%2BBqoSFy6ZbqDdrwHDC7xZ4ZajVbdPALFqfgaKEB46SRmkBqpIcmIP2NNBI9Lb9kLtSk%2FF68e%2Fc%2F).
Note that improvements were made to this original plan, so it is not accurate in every detail, but it is a good guide.

## To Do
Due to time constraints there is still some work to do on this prototype.
* Many of the open issues may actually be ready for closing but await discussion with the product owner.
* The final flow of those listed above is not complete. When a charity requests tickets various actions should occur (see linked flowchart), but currently only emails are sent.
* There are several code quality issues to resolve including: test coverage is currently low, the file structure needs refactoring, and some errors are not handled properly.
