Create Company
url : http://localhost:3000/company
method : POST
body : {
    "uuid":"uuid1",
    "name":"digital",
    "ceo":"mukeash",
    "inceptionDate":"23/06/2023"
}

Get Company
url : http://localhost:3000/company
method : GET

Get Company By Id
url : http://localhost:3000/company/649835bb6dad7924d175e90f
method : GET

Create Team
url : http://localhost:3000/teams
method : POST
body : {
    "uuid":"uuid1",
    "teamLeadName":"digital",
    "address":"india",
    "inceptionDate":"23/06/2023",
    "companyId":"649835bb6dad7924d175e90f"
}


Get Teams group by company id
url:http://localhost:3000/teams/group-by-company
method : GET

nest g resource users
nest g module users
nest g service users
nest g controller users

