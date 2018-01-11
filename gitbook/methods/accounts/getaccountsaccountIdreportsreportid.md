{% method %}
## /accounts/{accountId}/reports/{reportid}

A GET issued on a specific report (as identified by it's ID) will return all of the details of that report, allowing the API user to create an instance of that report.  Those details include:
    <ul>
        <li>The report name</li>
        <li>a description of the report in general terms</li>
        <li>a set of parameters that are used to provide boundaries on the information that is provided. &nbsp;These parameters contain</li>
        <ul>
            <li>The parameter name,</li>
            <li>a&nbsp;description of the parameter,</li>
            <li>a declaration of whether it is required or not, </li>
            <li>is multiple vales allowed or not, </li>
            <li>the type of the parameter, which can be one of</li>
                <ul>
                    <li>Account ID (autofilled)</li>
                    <li>Site ID</li>
                    <li>SipPeer ID</li>
                    <li>String</li>
                    <li>Integer</li>
                    <li>Boolean</li>
                    <li>Enum, with a list of possible values.</li>
                </ul>
            <li>the help info for describing parameter</li>
            </ul>
        </ul>
    </ul>



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `reportid` | string | true |






{% common %}


## Example : Successful retrieval of report template details.

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ReportResponse>
    <Report>
        <Id>
            123
        </Id>
        <Name>
            Sample Report 1
        </Name>
        <Parameters>
            <Parameter>
                <Name>
                    Report Parameter 1
                </Name>
                <Type>
                    String
                </Type>
                <Required>
                    true
                </Required>
                <Description>
                    Report Parameter 1 Description
                </Description>
                <MultiSelectAllowed>
                    false
                </MultiSelectAllowed>
                <HelpInformation>
                    Report Parameter 1 Help Text
                </HelpInformation>
            </Parameter>
            <Parameter>
                <Name>
                    Report Parameter 2
                </Name>
                <Type>
                    Enum
                </Type>
                <Required>
                    false
                </Required>
                <!--Contains a semicolon separated list of InternalNames-->
                <ValueFilter>
                    Value1;Value2;Value3
                </ValueFilter>
                <Values>
                    <Value>
                        <!--A InternalName tag value should be used in report instance creation-->
                        <InternalName>
                            Value1
                        </InternalName>
                        <!--A DisplayName tag value is used only for UI purposes-->
                        <DisplayName>
                            Display Value2
                        </DisplayName>
                    </Value>
                    <Value>
                        <InternalName>
                            Value2
                        </InternalName>
                        <DisplayName>
                            Value2
                        </DisplayName>
                    </Value>
                    <Value>
                        <InternalName>
                            Value3
                        </InternalName>
                        <DisplayName>
                            Display Value3
                        </DisplayName>
                    </Value>
                </Values>
                <Description>
                    Report Parameter 2 Description
                </Description>
                <MultiSelectAllowed>
                    true
                </MultiSelectAllowed>
                <HelpInformation>
                    Report Parameter 2 Help Text
                </HelpInformation>
            </Parameter>
        </Parameters>
    </Report>
</ReportResponse>
```

## Example : A report template matching the provided ID could not be found.

* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ReportResponse>
    <ResponseStatus>
        <ErrorCode>
            19000
        </ErrorCode>
        <Description>
            No report found with report ID of '123'
        </Description>
    </ResponseStatus>
</ReportResponse>
```


{% endmethod %}