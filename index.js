<html>
<head>
<meta charset = "utf-8">
<title>Calculating Compound Interest</title>
<style type = "text/css">
p{font-family: courier;
font-size: 20px;
color:red;
background-color:magenta;}
h1{font-family: courier;
font-size: 20px;
color:red;
background-color:blue;}

table { width: 200px;
border-collapse: collapse;
}
th,td { border: 3px solid black;
padding: 6px;color:magenta; }
th { text-align: left;
color: white;
background-color: darkblue; }
tr { background-color: yellow; }
</style>
<script>
var amount; // current amount of money
var principal = 1000.00; // principal amount
var rate = 0.05;
//document.writeln("<p>hello</p>");
//document.writeln("<h1>hello</h1>");
document.writeln("<table>"); // begin the table
document.writeln("<caption>Calculating Compound Interest</caption>" );
document.writeln("<thead><tr><th>Year</th>" ); // year column heading
document.writeln("<th>Amount on deposit</th>" ); // amount column heading
document.writeln( "</tr></thead><tbody>" );
for ( var year = 1; year <= 10; ++year )
{
amount = principal * Math.pow( 1.0 + rate, year );
if ( year % 2==0 )
document.writeln( "<tr ><td>" + year +"</td><td>" + amount.toFixed(2) + "</td></tr>" );
else
document.writeln( "<tr><td>" + year +"</td><td>" + amount.toFixed(3) + "</td></tr>" );
}
document.writeln( "</tbody></table>" );
</script>
</head><body></body>
</html>
