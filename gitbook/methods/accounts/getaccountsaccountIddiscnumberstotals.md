{% method %}
## /accounts/{accountId}/discnumbers/totals

Retrieves a total number of disconnects.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `startdate` | date | true | The starting date of a search. startdate and enddate <strong>must</strong> be used as a pair. |
| `enddate` | date | true | The end date of a search. startdate and enddate <strong>must</strong> be used as a pair. |




{% common %}


## Example : 

* Response: 200

{% sample lang="xml" %}

```xml
<Quantity>
    <Count>
        4
    </Count>
</Quantity>
```


{% endmethod %}