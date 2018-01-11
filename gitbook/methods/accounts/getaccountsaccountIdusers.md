{% method %}
## /accounts/{accountId}/users

Retrieves a list of users as specified by the account ID.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |





## Example Request
```xml
<?xml version="1.0"?>
<UsersResponse>
    <Users>
        <User>
            <Username>
                testcustomer
            </Username>
            <FirstName>
                Jane
            </FirstName>
            <LastName>
                Doe
            </LastName>
            <EmailAddress>
                janedoe@bandwidth.com
            </EmailAddress>
            <TelephoneNumber>
                9199999999
            </TelephoneNumber>
            <Roles>
                <Role>
                    <RoleName>
                        ROLE_API_ORDERING
                    </RoleName>
                    <Permissions>
                        <Permission>
                            <PermissionName>
                                VIEW
                            </PermissionName>
                        </Permission>
                        <Permission>
                            <PermissionName>
                                UPDATE
                            </PermissionName>
                        </Permission>
                    </Permissions>
                </Role>
            </Roles>
        </User>
    </Users>
</UsersResponse>
```


{% common %}



{% endmethod %}