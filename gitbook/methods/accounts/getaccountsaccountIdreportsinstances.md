{% method %}
## /accounts/{accountId}/reports/instances

Retrieve report instances within the account scope, regardless of the report of which the instance is an instance of, including the up-to-date report generation status.  This is a convenience API call to make it easier to examine all Instances in scope.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |






{% common %}


## Example : A valid list of instances is available.

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ReportInstancesResponse>
    <Instances>
        <Instance>
            <Id>
                100090
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
                2015-05-18 14:03:04
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
                Expired
            </Status>
        </Instance>
        <Instance>
            <Id>
                100098
            </Id>
            <ReportId>
                100020
            </ReportId>
            <ReportName>
                Sample Report
            </ReportName>
            <OutputFormat>
                html
            </OutputFormat>
            <RequestedByUserName>
                jbm
            </RequestedByUserName>
            <RequestedAt>
                2015-05-19 09:18:40
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
                <Parameter>
                    <Name>
                        SiteId
                    </Name>
                    <Value>
                        1
                    </Value>
                </Parameter>
            </Parameters>
            <Status>
                Expired
            </Status>
        </Instance>
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
    </Instances>
</ReportInstancesResponse>
```


{% endmethod %}