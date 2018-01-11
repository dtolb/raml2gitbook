{% method %}
## /accounts/{accountId}/reports/{reportid}/instances/{instanceId}

A GET on the specific instance will retrieve report instance details, including the current report instance status.  All of the information required to understand the nature and limits of the reported data are contained in the payload, including the general description information as well as the list of parameters and the values assigned to those parameters.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `reportid` | string | true |
| `instanceId` | string | true |






{% common %}


## Example : 

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ReportInstanceResponse>
    <Instance>
        <Id>
            100102
        </Id>
        <ReportId>
            100020
        </ReportId>
        <ReportName>
            Sample Report
        </ReportName>
        <OutputFormat>
            pdf
        </OutputFormat>
        <RequestedByUserName>
            jbm
        </RequestedByUserName>
        <RequestedAt>
            2015-05-19 11:05:12
        </RequestedAt>
        <Parameters>
            <Parameter>
                <Name>
                    AccountId
                </Name>
                <Value>
                    1
                </Value>
            </Parameter>
        </Parameters>
        <Status>
            Ready
        </Status>
        <ExpiresAt>
            2016-06-15
        </ExpiresAt>
    </Instance>
</ReportInstanceResponse>
```

## Example : A report template matching the provided ID could not be found.

* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ReportInstanceResponse>
    <ResponseStatus>
        <ErrorCode>
            19019
        </ErrorCode>
        <Description>
            No report instance found for report 100020 with Id of '100103'
        </Description>
    </ResponseStatus>
</ReportInstanceResponse>
```


{% endmethod %}