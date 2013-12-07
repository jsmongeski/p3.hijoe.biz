p3.hijoe.biz
============
Joe Smongeski
Dec. 6, 2013

This is the start of a portfolio tracking tool I plan to use for my own investing.  It demonstrates 
use of both javascript and jquery.  

Current features are:

1. Purchase tracking.  Records user's stock purchases; symbol, purchase price, number of shares bought,
   original value of the shares, and the broker url at which the shares were purchased.  

2. Real-time updates from the web, including:

   last price for the stock
   current trading volume 
   average volume for the stock
   current total value of the user's shares
   current gain or loss in dollars of the position.

   Notes: a) At this point, updates are simulated by clicking a button in the display. For p4, the
             goal is to get live information from the web either through YQL (Yahoo Query Language),
             or by using cURL. At that stage the simulate button will be removed.

          b) At first entry of a stock, the Gain/Loss field is deliberately forced to show a negative
             number so as to demonstrate the color tracking of the field, red = loss, green = gain.
             Simulating this makes some of the math appear incorrect, but the goal is to show the color 
             feature. The final version will be controlled by the actual stock prices retrieved from the net.

3. A clickable link to the online brokerage where the stock was purchased.  If the user does not enter
   a link, the field will have a link to the last url given, or will read "undefined", if no
   brokers have ever been entered.

4. The ability to delete any row for a given stock. Rows below move up, next row is appended to the 
   table.

Additional notes:

I know there are a lot of table plugins out there, but I wanted to get experience with js and jquery
by managing a table myself, at least for now!

Future plans are to add database support to record all stocks (including deleted rows), realtime updates 
from the web, user registration & login, additional stock information, e.g Next earnings date, link to 
news for the stock, etc.

