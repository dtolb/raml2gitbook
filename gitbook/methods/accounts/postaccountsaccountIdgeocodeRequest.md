{% method %}
## /accounts/{accountId}/geocodeRequest

POST is used to validate address as geocode-able one. Request payload is the address to geocode. If decomposed elements are provided for AddressLine 1 then AddressLine1 is ignored. At least HouseNumber and StreetName are required to use them as replacement of AddressLine1. If at least HouseNumber or StreetName is absent then AddressLine1 is used. AddressLine1 information is required in either way. City and StateCode fields are required.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |






{% common %}



{% endmethod %}