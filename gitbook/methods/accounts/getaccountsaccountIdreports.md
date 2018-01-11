{% method %}
## /accounts/{accountId}/reports

GET Retrieves a list of the report templates available for use within the Iris application. This list contains the basic description of the reports, including a report ID that can be used to access further details about the report, and thus facilitating the subsequent choice and creation of an instance of the report. Items of this list are sorted by display priority in ascending order and alphabetically by name within priority groups (display priority is displayed only for admin endpoint).



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |






{% common %}


## Example : 

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ReportsResponse>
    <Reports>
        <Report>
            <Name>
                Sample Report 1
            </Name>
            <Id>
                100020
            </Id>
            <Description>
                Sample Report 1 Description
            </Description>
        </Report>
        <Report>
            <Name>
                Sample Report 2
            </Name>
            <Id>
                100021
            </Id>
            <Description>
                Sample Report 2 Description
            </Description>
        </Report>
        <Report>
            <Name>
                Sample Report 3
            </Name>
            <Id>
                100022
            </Id>
            <Description>
                Sample Report 3 Description
            </Description>
        </Report>
    </Reports>
</ReportsResponse>
```


{% endmethod %}