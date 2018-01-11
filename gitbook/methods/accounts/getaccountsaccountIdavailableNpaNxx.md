{% method %}
## /accounts/{accountId}/availableNpaNxx

Retrieves a list of available Npa-Nxx telephone numbers.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `areaCode` | integer | true | The allowed number ranges are [2-9] for the first digit and [0-9] for both the second and third digits. |
| `state` | string | true | Returns only the NPA NXX information within the specified state |
| `quantity` | integer | true | Filters out any Npa-Nxx grouped phone numbers whose quantity falls short of the given quantity. |




{% common %}


## Example : The quantity of available phone numbers, grouped by NPA-NXX.

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<SearchResultForAvailableNpaNxx>
    <AvailableNpaNxxList>
        <AvailableNpaNxx>
            <City>
                NASHVILLE
            </City>
            <Npa>
                252
            </Npa>
            <Nxx>
                220
            </Nxx>
            <Quantity>
                1
            </Quantity>
            <State>
                NC
            </State>
        </AvailableNpaNxx>
        <AvailableNpaNxx>
            <City>
                FARMVILLE
            </City>
            <Npa>
                252
            </Npa>
            <Nxx>
                228
            </Nxx>
            <Quantity>
                1
            </Quantity>
            <State>
                NC
            </State>
        </AvailableNpaNxx>
    </AvailableNpaNxxList>
</SearchResultForAvailableNpaNxx>
```

## Example : There are no phone numbers within the specified scope.

* Response: 400

{% sample lang="xml" %}

```xml
<SearchResultForAvailableNpaNxx>
    <Error>
        <Code>
            4000
        </Code>
        <Description>
            The area code specified 433 is not present as a valid entry in our system
        </Description>
    </Error>
</SearchResultForAvailableNpaNxx>
```


{% endmethod %}