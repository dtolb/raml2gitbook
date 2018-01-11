{% method %}
## /accounts/{accountId}/discnumbers

Retrieves a list of disconnected numbers associated with the account. There are optional search parameters to limit the discNumbers payload


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `page` | string | true | The first disconnected number on the desired page.   "1" is used as a convention for the first disconnected number in the collection |
| `size` | integer | true | The number of records that should be returned by the query |
| `startdate` | date | true | The starting date of a search. startdate and enddate <strong>must</strong> be used as a pair. |
| `enddate` | date | true | The ending date of a search. startdate and enddate <strong>must</strong> be used as a pair. |




{% common %}


## Example : The disconnected numbers have been retrieved successfully.

* Response: 200

{% sample lang="xml" %}

```xml
<TNs>
    <TotalCount>
        4
    </TotalCount>
    <Links>
        <first>
            Link=
            <http: size="500" page="1" rel="first">
            </http:>
            rst";
        </first>
    </Links>
    <TelephoneNumbers>
        <Count>
            2
        </Count>
        <TelephoneNumber>
            4158714245
        </TelephoneNumber>
        <TelephoneNumber>
            4352154439
        </TelephoneNumber>
    </TelephoneNumbers>
</TNs>
```


{% endmethod %}