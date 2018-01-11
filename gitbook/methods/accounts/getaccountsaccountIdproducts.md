{% method %}
## /accounts/{accountId}/products

discover what is currently enabled on the account


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |






{% common %}


## Example : 

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0"?>
<AccountProductsResponse>
    <Products>
        <Product>
            <Name>
                Termination
            </Name>
        </Product>
        <Product>
            <Name>
                VirtualInventory
            </Name>
        </Product>
        <Product>
            <Name>
                TollFree
            </Name>
        </Product>
        <Product>
            <Name>
                Origination
            </Name>
            <Features>
                <Feature>
                    CallForwarding
                </Feature>
                <Feature>
                    DlDa
                </Feature>
                <Feature>
                    CNAM
                </Feature>
            </Features>
        </Product>
        <Product>
            <Name>
                SMS
            </Name>
        </Product>
    </Products>
</AccountProductsResponse>
```


{% endmethod %}