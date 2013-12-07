

        // Retrieve this from config page when it is ready:
        //var brokerLink = '<a href="https://invest.ameritrade.com/grid/p/login" target = "_blank">Trade</a>';
        
        var currentBroker;

        function addRow(table,ticker, cost, nshares, brokerLink) {

            // Create a new row:
            var table = document.getElementById(table);

            var rowCount = table.rows.length;
            
            while ( $('#row'+ rowCount).length != 0 ) {
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
            Last.innerHTML = "1"; 
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
            var tmpval = cost * nshares;
            OrigVal.innerHTML = tmpval.toFixed(2);
            tmpval = 0;
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
            curval=0;
            tmpval =  curval - origval;

            $('#gainloss' + ticker).css('backgroundColor', "lightgreen");
            if (tmpval < 0 ) {
                $('#gainloss' + ticker).css('backgroundColor', "red");
            } 
            GainLoss.innerHTML = tmpval.toFixed(2);
            tmpval =  0;


            // Broker link
            var Trade = row.insertCell(9);
            Trade.type = "text";
            Trade.value = "Trade";
            Trade.id =  "trade" + ticker;

            if(brokerLink != "Broker eg: www.trade.com") {
                var linkPrefix = '<a href="https://'
                var linkSuffix =  '" target = "_blank">Trade</a>';
                var res =  linkPrefix.concat(brokerLink);
                currentBroker =  res.concat(linkSuffix);
            }
            Trade.innerHTML =  currentBroker;


            // Simulate a stock update from an internet data service:
            var Update = row.insertCell(10);
            var updatebtn = document.createElement("input");
            updatebtn.type = "button";
            updatebtn.value = "Update";
            updatebtn.id =  "updatebtn" + ticker;
            Update.appendChild(updatebtn);

            $('#updatebtn' + ticker).click(function() {

                // last stk price:
                $('#last' + ticker).html("2");

                // get new last:
                var last = $('#last' + ticker).html();

                // volume:
                $('#vol' + ticker).html("233000");

                // get nshares:
                var nshares = $('#nshares' + ticker).html();

                // set/get current stock value:
                $('#curval' + ticker).html(last * nshares);
                var curval = $('#curval' + ticker).html();

                // get original value:
                var origval = $('#origval' + ticker).html();

                //set gainloss:
                $('#gainloss' + ticker).html(curval - origval);

                //set gainloss color:
                $('#gainloss' + ticker).css('backgroundColor', "lightgreen");
                if (  $('#gainloss' + ticker).html() < 0 ) {
                    $('#gainloss' + ticker).css('backgroundColor', "red");
                } 
            });

            // Setup Delete row handler:
            var deleterow = row.insertCell(11);
            var deleteMe = document.createElement("input");
            deleteMe.type = "button";
            deleteMe.value="Delete";
            deleteMe.id =  "deleteme" + ticker;
            deleterow.appendChild(deleteMe);

            $('#deleteme' + ticker).click(function() {
                var delId =  '#deleteme' + ticker;
                var delRow = $(delId).parent().parent().index(); 
                table.deleteRow(delRow);
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

        var brokerEl  = document.getElementById("brokerurl");
        var brokertxt = "Broker eg: www.trade.com";
        brokerEl.value = brokertxt;
        brokerEl.style.color = "#0C9";

        brokerEl.onmouseover = function() {
          if (this.value == brokertxt) {
            this.value = "";
            this.style.color = "#000";
          }
        }
        brokerEl.onmouseout = function() {
          if (this.value == "") {
            this.value = brokertxt;
            this.style.color = "#0C9";
          }
        }

        //  Form submit action:
        $("form").submit(function(){

           var ticker = $("#newticker").val();
           // Note, we don't check data type on the stock ticker,
           // as there are numeric stock symbols, e.g. "3".

           var cost    = $("#cost").val();
           var nshares = $("#nshares").val();
           var brokerLink = $("#brokerurl").val();

           if (ticker == "Stock Symbol" ) {
               alert( "Please enter a Stock Symbol");
           } else if (cost < 0 || isNaN(cost)) {
               alert( "Please enter a positive numeric cost value");
           } else if (nshares < 0 || isNaN(nshares)) {
               alert( "Please enter a positive number for number of shares");
           } else if(brokerLink.search("www") < 0 ) {
               alert("Enter url in www.domain.domain format");
           } else {
               addRow('dataTable', ticker, cost, nshares, brokerLink);
           }

           // Reset stock input boxes:
           tickerEl.value = stocktxt;
           tickerEl.style.color = "#CCC";
           costEl.value = costtxt ;
           costEl.style.color = "#CCC";
           nsharesEl.value = nsharestxt;
           nsharesEl.style.color = "#CCC";
           brokerEl.value = brokertxt;
           brokerEl.style.color = "#CCC";
        });


