{% method %}
## /accounts/{accountId}/inserviceNumbers

Retrieves a list of in-service phone numbers associated with the account ID. There are multiple search parameters for searching for in-service numbers:
<ul>
    <li>size and page for pagination</li>
    <li>area code</li>
    <li>Npa-Nxx</li>
    <li>LATA</li>
    <li>state</li>
    <li>rate center</li>
</ul>



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `page` | integer | true | the page to fetch in a paginated collection |
| `size` | integer | true | the number of TNs to retrieve |
| `areacode` | integer | true | An Area Code search filter - all returned TNs will be in the entered Area Code |
| `npanxx` | integer | true | An NPA NXX search filter - all returned TNs will be in the entered NPA NXX dial plan |
| `lata` | integer | true | A Rate Center search filter - all returned TNs will be in the entered Rate Center.  Typically this is a 3 or 5 digit value |
| `state` | string | true | A State search filter - all returned TNs will be in the entered State.  This is a 2-character State or Province abbreviation |
| `ratecenter` | string | true | A Rate Center search filter - all returned TNs will be in the entered Rate Center.  This Rate Center must be combined with a State in the query.  If State is not included in the query then the queryu will fail. |
| `startdate` | date | true | The starting date of a date range that will filter numbers based on activation or other change date |
| `enddate` | date | true | The ending date of a date range |




{% common %}


## Example : A successful result that contains the response data

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0"?>
<TNs>
    <TotalCount>
        59
    </TotalCount>
    <Links>
        <first>
             ( a link goes here ) 
        </first>
    </Links>
    <TelephoneNumbers>
        <Count>
            59
        </Count>
        <TelephoneNumber>
            8043024183
        </TelephoneNumber>
        <TelephoneNumber>
            8042121778
        </TelephoneNumber>
        <TelephoneNumber>
            8042146066
        </TelephoneNumber>
        <TelephoneNumber>
            8043814903
        </TelephoneNumber>
        <TelephoneNumber>
            8043814905
        </TelephoneNumber>
        <TelephoneNumber>
            8043814864
        </TelephoneNumber>
        <TelephoneNumber>
            8043326094
        </TelephoneNumber>
        <TelephoneNumber>
            8042121771
        </TelephoneNumber>
        <TelephoneNumber>
            8043024182
        </TelephoneNumber>
        <!-- SNIP -->
        <TelephoneNumber>
            8043814900
        </TelephoneNumber>
        <TelephoneNumber>
            8047672642
        </TelephoneNumber>
        <TelephoneNumber>
            8043024368
        </TelephoneNumber>
        <TelephoneNumber>
            8042147950
        </TelephoneNumber>
        <TelephoneNumber>
            8043169931
        </TelephoneNumber>
        <TelephoneNumber>
            8043325302
        </TelephoneNumber>
    </TelephoneNumbers>
</TNs>
```


{% endmethod %}