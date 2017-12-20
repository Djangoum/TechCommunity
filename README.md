# TechCommunity

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/48be4918540646048a5a3d8e7c19e652)](https://www.codacy.com/app/arielamorgarcia/TechCommunity?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Djangoum/TechCommunity&amp;utm_campaign=Badge_Grade)

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