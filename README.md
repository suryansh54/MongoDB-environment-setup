# MongoDB Environment Setup

## Setting MongoDB CLOUD Environment

#### Step 1: Signup to Mongo DB cloud or Login
##### Signup: https://cloud.mongodb.com/user#/atlas/register/accountProfile
##### Login: https://cloud.mongodb.com/user#/atlas/login

#### Step 2: Go to Cluster and create a new Cluster
- Click on Build a Cluster
- Select Cloud Provider and Region (Set to default section for learning perspective)
- Click on create Cluster (It will take some time)
- Go to Cluster **security -> MongoDB User** (Who can access your database)
  - Click on **Add new user**
  - Add user name and password
  - Set user privileges to "Read and write to any database" 
  - Finally, click Add user to create a User.
- Go to Cluster **security -> IP Whitelist**
  - Either you can click "Allow access from anywhere" or you can add your own IP address.
  - For custom IP set go to "Add IP Address" and Fill your IP address there or Simply click on "Add current IP address" for you local machine IP

#### Step 3: Connect to your application
Mongo DB setup is completed. Now let use the connection
- Go to the Cluster 
- Click on connect
  - Click on connect your application
  - Copy Connection string
  - Copied connection is looks like "mongodb+srv://<USERNAME>:<PASSWORD>@cluster0-xyz.mongodb.net/test?retryWrites=true&w=majority"
  - You can also copy Full Driver Example

```javascript
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<USERNAME>:<PASSWORD>@cluster0-xyz.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
```
## Setting MongoDB Local Environment
