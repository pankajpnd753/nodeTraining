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


function customerBalance (){
  var result=[];
  for(const cust of customers) {
    // Filter From account
    var recievedAmountArr = transactions.filter(item => item.To === cust.AccountNo);
    // Filter To account
    var fromAmountArr = transactions.filter(item => item.From === cust.AccountNo);

    var fromAmount      =   0;
    var recievedAmount  =   0;

    // Find the Recieved amount
    recievedAmountArr.forEach(function(input) {
      recievedAmount += parseInt(input.Amount);
    });

    // Find the Recieved amount
    fromAmountArr.forEach(function(input) {
      fromAmount += parseInt(input.Amount);
    });

// Get the Balance amount
    var balanceAmount  =   recievedAmount-fromAmount;
    var result_obj  =   {Name:cust.Name, AccountNo:cust.AccountNo, Balance:balanceAmount};
    result.push(result_obj);
  }
  return result;

}
console.log(customerBalance());
