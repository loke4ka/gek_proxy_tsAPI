# gek_proxy_tsAPI

| Endpoint                 | Method | Description                                  | Request Parameters | Request Body        | Response Body         |
|--------------------------|--------|----------------------------------------------|--------------------|---------------------|-----------------------|
| /api/proxy               | GET    | Get a list of proxies                        | -                  | -                   | List of Proxy objects |
| /api/proxy               | POST   | Create a new proxy                           | -                  | Proxy object        | Created Proxy object  |
| /api/proxy/:proxyId      | PATCH  | Update details of a specific proxy           | proxyId (string)   | Updated Proxy data  | Updated Proxy object  |
| /api/proxy/:proxyId      | DELETE | Delete a specific proxy                      | proxyId (string)   | -                   | Message (string)      |
