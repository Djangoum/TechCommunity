# TechCommunity

In order to get the project to work we have to follow the next steps. 

## Build Setup 

``` bash
//On solution folder 

dotnet build

//On Sso folder

dotnet ef database update

//On solution folder

donet run -p TechCommunity.Sso

dotnet run -p TechCommunity.Server

//On client app folder

npm run dev

```