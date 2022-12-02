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
    "Name": "Tom",
    "City": "Delhi"
    },
    {
    "AccountNo": 1005,
    "Name": "Kate",
    "City": "Mumbai"
    }
    ];

    const name_array = [];
    for (let i = 0; i < customers.length; i++) {
        if (name_array.includes(customers[i].Name)) {
            console.log(customers[i].Name, customers[i].AccountNo);
            break;
        } else {
            name_array.push(customers[i].Name);
        }
    }




