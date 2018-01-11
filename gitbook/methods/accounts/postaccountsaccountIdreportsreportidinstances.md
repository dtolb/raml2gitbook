{% method %}
## /accounts/{accountId}/reports/{reportid}/instances

POSTing to the instances resource of a specific report will create an instance of that report that pulls from data that is filtered by the supplied parameters.  Those parameter values must match the parameters that are required as defined by the report, as provided by issuing a GET on the report. <br><br>
The sequence of events is essentially to...
<ol>
    <li>issue a GET on the desired report/report-id to retrieve the parameter and other details of the report</li>
    <li>issue a POST on the /report/report-id/instances resource, using the parameter information retrieved in the initial call to define the data that is needed</li>
</ol>
The Location header will provide a link to the created report instance.  Note that the report instance itself contains only the metadata describing the instance.  A subsequent call to /report/report-id/instances/instance-id/file must be made to actually download the file.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `reportid` | string | true |





## Example Request
```xml
<Instance>
    <OutputFormat>
        pdf
    </OutputFormat>
    <Parameters>
        <Parameter>
            <Name>
                Account
            </Name>
            <Value>
                1
            </Value>
        </Parameter>
        <Parameter>
            <Name>
                Sub-account
            </Name>
            <Value>
                1
            </Value>
        </Parameter>
        <Parameter>
            <Name>
                MultiValueEnum
            </Name>
            <Value>
                value1
            </Value>
            <Value>
                value2
            </Value>
        </Parameter>
    </Parameters>
    <ExpiresAt>
        2016-11-25
    </ExpiresAt>
    <!-- the date (not longer than 30 days in the future) at the end of which the instance will expire, should be specified in YYYY-MM-DD format-->
</Instance>
```


{% common %}


## Example : Successful creation of report instance.

* Response: 201

{% sample lang="xml" %}

```xml

```

## Example : 

* Response: 400

{% sample lang="xml" %}

```xml
<ReportInstanceResponse>
    <ResponseStatus>
        <ErrorCode>
            19032
        </ErrorCode>
        <Description>
            Missing one or more required report parameters: AccountId
        </Description>
    </ResponseStatus>
</ReportInstanceResponse>
```

## Example : 

* Response: 503

{% sample lang="xml" %}

```xml
<ReportInstanceResponse>
    <ResponseStatus>
        <ErrorCode>
            19031
        </ErrorCode>
        <Description>
            Error encountered processing request via external reporting service.  Please contact Bandwidth support for further assistance.
        </Description>
    </ResponseStatus>
</ReportInstanceResponse>
```


{% endmethod %}