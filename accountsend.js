const customers = [
    {
    "AccountNo": 1001,
    "Name": "John",
    "City": "Bangalore"
    },
    {
    "AccountNo": 1002,
    "Name": "Tom",
    "City": "Mysore"
    },
    {
    "AccountNo": 1003,
    "Name": "Kate",
    "City": "Pune"
    },
    {
    "AccountNo": 1004,
    "Name": "Paul",
    "City": "Delhi"
    },
    {
    "AccountNo": 1005,
    "Name": "Riya",
    "City": "Mumbai"
    }
    ];
    
    const transactions = [
        {
        "Date": "12-01-2022",
        "From": 1001,
        "To": 1003,
        "Amount": 15000
        },
        {
        "Date": "12-01-2022",
        "From": 1003,
        "To": 1002,
        "Amount": 12000
        },
        {
        "Date": "12-01-2022",
        "From": 1002,
        "To": 1005,
        "Amount": 2000
        },
        {
        "Date": "13-01-2022",
        "From": 1003,
        "To": 1001,
        "Amount": 1000
        },
        {
        "Date": "13-01-2022",
        "From": 1002,
        "To": 1001,
        "Amount": 1200
        },
        {
        "Date": "14-01-2022",
        "From": 1001,
        "To": 1002,
        "Amount": 3000
        },
        {
        "Date": "14-01-2022",
        "From": 1005,
        "To": 1003,
        "Amount": 1500
        },
        {
        "Date": "15-01-2022",
        "From": 1005,
        "To": 1003,
        "Amount": 4000
        }
        ];


function customerSent (){
  var result=[];
  for(const cust of customers) {
    // Filter From account
    var fromAmountArr = transactions.filter(item => item.From === cust.AccountNo);

    var fromAmount      =   0;
    // Find the Sent amount
    fromAmountArr.forEach(function(input) {
      fromAmount += parseInt(input.Amount);
    });

    // Get the Customerwise Sent amount
    var result_obj  =   {Name:cust.Name, AccountNo:cust.AccountNo, fromamount:fromAmount};
    result.push(result_obj);
  }
//   return result;

    // Get the max sent amount from array
    const maxSent =  Math.max(...result.map(x => x.fromamount));
    // Get the relevant row from the array of max amount
    const item = result.find(y => y.fromamount === maxSent);
    return item;
}
console.log(customerSent());