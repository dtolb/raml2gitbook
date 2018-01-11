{% method %}
## /tns/{tn}/sites

Retrieves the sites associated with that telephone number.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `tn` | string | true |






{% common %}


## Example : The sites have been successfully retrieved and displayed.

* Response: 200

{% sample lang="xml" %}

```xml
<Site>
    <Id>
        2409
    </Id>
    <Name>
        siteName
    </Name>
</Site>
```


{% endmethod %}