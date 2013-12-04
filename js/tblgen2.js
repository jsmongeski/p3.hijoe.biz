


        // Retrieve this from config page when it is ready:
        var brokerLink = '<a href="https://invest.ameritrade.com/grid/p/login" target = "_blank">Trade</a>';

        //$(document).ready(function() {
        //});

        function addRow(table,ticker, cost, nshares) {

            // Create a new row:
            var table = document.getElementById(table);

            var rowCount = table.rows.length;
            console.log("length of table in rows: " +rowCount);
            
            console.log  ("length of this rowid is: " + $('#row'+ rowCount).length );

            while ( $('#row'+ rowCount).length != 0 ) {
                console.log("found existing row" +rowCount );
                rowCount++;
            } 
            

            // Insert new row:
            var row = table.insertRow(rowCount);

            // Inesrt Cells:
            
            // Symbol
            ticker = ticker.toUpperCase();
            var symbol = row.insertCell(0);
            symbol.type =  "text";
            symbol.name =  "symbol";
            var tickerorig = ticker;
            if( $('#symbol' + ticker).length )  {
                    var ranNumber = 1 + Math.floor(Math.random() * 10);
                    var ticker = ticker + ranNumber;
            }
            symbol.id =  "symbol" + ticker;
            symbol.innerHTML = tickerorig ; 
            

            // Last share price:
            var Last = row.insertCell(1);
            Last.type =  "text"; Last.name =  "last";
            Last.id =  "last" + ticker;
            Last.innerHTML = "11"; 
            var last = Last.innerHTML;


            // Volume :
            var Volum = row.insertCell(2);
            Volum.type =  "text";
            Volum.name =  "vol";
            Volum.id =  "vol" + ticker;
            Volum.innerHTML = '200000'; 

            // AvVolume :
            var AvVolum = row.insertCell(3);
            AvVolum.type =  "text";
            AvVolum.name =  "avvol";
            AvVolum.id =  "avvol" + ticker;
            AvVolum.innerHTML = '300000'; 
            
            // Cost per share :
            var Cost = row.insertCell(4);
            Cost.type =  "text";
            Cost.name =  "cost";
            Cost.id =  "cost" + ticker;
            Cost.innerHTML = cost; 

            // Number of shares :
            var NumShrs = row.insertCell(5);
            NumShrs.type =  "text";
            NumShrs.name =  "nshares";
            NumShrs.id =  "nshares" + ticker;
            NumShrs.innerHTML = nshares; 

            // Original Value
            var OrigVal = row.insertCell(6);
            OrigVal.type =  "text";
            OrigVal.name =  "origval";
            OrigVal.id =  "origval" + ticker;
            OrigVal.innerHTML = cost * nshares;
            var origval =  OrigVal.innerHTML;
            
            // Current Value
            var CurVal = row.insertCell(7);
            CurVal.type =  "text";
            CurVal.name =  "curval";
            CurVal.id =  "curval" + ticker;
            CurVal.innerHTML = last * nshares;
            var curval =  CurVal.innerHTML;

            // Gain/Loss
            var GainLoss = row.insertCell(8);
            GainLoss.type = "text";
            GainLoss.name = "gainloss";
            GainLoss.id =  "gainloss" + ticker;
            GainLoss.innerHTML = curval - origval;

            //GainLoss.css('backgroundColor', '#FF00');
            

            // Broker link
            var Trade = row.insertCell(9);
            Trade.type = "text";
            Trade.value = "Trade";
            Trade.id =  "trade" + ticker;
            Trade.innerHTML = brokerLink;

            // Setup Delete row handler:
            var deleterow = row.insertCell(10);
            var deleteMe = document.createElement("input");
            deleteMe.type = "button";
            deleteMe.value="Delete";
            deleteMe.id =  "deleteme" + ticker;
            deleterow.appendChild(deleteMe);

            $('#deleteme' + ticker).click(function() {
                var delId =  '#deleteme' + ticker;
                var delRow = $(delId).parent().parent().index(); 
                table.deleteRow(delRow);

                //console.log("You clicked on row  "  + $(delId).parent().parent().index()); 
            });


            // Simulate a stock update from the wire:
            var Update = row.insertCell(11);
            var updatebtn = document.createElement("input");
            updatebtn.type = "button";
            updatebtn.value = "Sim Update";
            updatebtn.id =  "updatebtn" + ticker;
            Update.appendChild(updatebtn);

            $('#updatebtn' + ticker).click(function() {

                // update last stk price:
                $('#last' + ticker).html("22");

                //get new last:
                var last = $('#last' + ticker).html();
                //console.log("last is now: " +  last);

                //get nshares:
                var nshares = $('#nshares' + ticker).html();

                // set/get curval:
                $('#curval' + ticker).html(last * nshares);
                var curval = $('#curval' + ticker).html();

                // get origval:
                var origval = $('#origval' + ticker).html();

                //set gainloss:
                $('#gainloss' + ticker).html(curval - origval);

            });

        } //addRow


        // Setup Stock Symbol input box:
        var tickerEl  = document.getElementById("newticker");
        var stocktxt = "Stock Symbol";
        tickerEl.value =  stocktxt;
        tickerEl.style.color = "#0C9";
        // onmouse logic:
        tickerEl.onmouseover = function() {
          if (this.value == stocktxt) {
            this.value = "";
            this.style.color = "#000";
          }
        }
        tickerEl.onmouseout = function() {
          if (this.value == "") {
           this.value = stocktxt;
           this.style.color = "#0C9";
          }
        }


        // Cost input box:
        var costEl    = document.getElementById("cost");
        var costtxt = "Cost";
        costEl.value = costtxt ;
        costEl.style.color = "#0C9";

        // onmouse logic:
        costEl.onmouseover = function() {
          if (this.value == costtxt) {
            this.value = "";
            this.style.color = "#000";
          }
        }
        costEl.onmouseout = function() {
          if (this.value == "") {
            this.value = costtxt;
            this.style.color = "#0C9";
          }
        }

        // Num Shares input box:
        var nsharesEl  = document.getElementById("nshares");
        var nsharestxt = "Number of Shares:";
        nsharesEl.value = nsharestxt;
        nsharesEl.style.color = "#0C9";

        nsharesEl.onmouseover = function() {
          if (this.value == nsharestxt) {
            this.value = "";
            this.style.color = "#000";
          }
        }
        nsharesEl.onmouseout = function() {
          if (this.value == "") {
            this.value = nsharestxt;
            this.style.color = "#0C9";
          }
        }


        //  Form submit action:
        $("form").submit(function(){
           var ticker = $("#newticker").val();
           var cost = $("#cost").val();
           var nshares = $("#nshares").val();
           addRow('dataTable', ticker, cost, nshares);

           // Reset stock input boxes:
           tickerEl.value = stocktxt;
           tickerEl.style.color = "#CCC";
           costEl.value = costtxt ;
           costEl.style.color = "#CCC";
           nsharesEl.value = nsharestxt;
           nsharesEl.style.color = "#CCC";
        });

            /*
            // For now, simulate with click event:
            $(avvolId).click(function() {
                 $(avvolId).html('300000');
            });
            */

