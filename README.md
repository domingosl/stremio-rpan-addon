# Stremio RPAN Addon

#### First a message for the Stremio judge panel
I won the Stremio SDK contest of 2019 in the category Innovation. This year I was
working in something also very fun and innovative as my entry to the contest, and then
Corona Virus happened. To be honest with you I scrapped what I was working on
since it did not feel right to release "fun stuff" (maybe I'll use it in the 
next year competition), so I start thinking about something that could be helpful
for people that like me are stuck at home during the quarantine. As a 
Redditor myself, I decided to create this addon that allows people to glance 
into other redditor's life and feel at least somehow in company 😁. There is no
official API for reading this streams as you probably know but I manage to 
simulate a regular browser activity from the backend using also cache (so
there is less stress on Reddit than a regular user using a browser) and then
the content is transform into something Stremio can handle. I hope you and everyone
in your family are fine and safe during this difficult time and I hope this
addon can be helpful now and in the future!



<img src="https://i.paste.pics/366154d3900121bb7dd48c63f136ba2a.png" >


## What is it?
The worlds first (unofficial) implementation of the [Reddit Public Access
 Network](https://reddit.com/rpan) outside of the Reddit App/WebApp, and it's 
 on Stremio! 😎


## What can you do with it?
After installing the addon you'll find new TV channels on Stremio that are 
redditors public streams from RPAN. Update the catalog every few minutes to get new streams.

[![VIDEO](https://img.youtube.com/vi/KjLe0hpyfF8/0.jpg)](https://youtu.be/KjLe0hpyfF8)


## Disclaimer
The RPAN is in beta right now (03/2020), so there are not many streams available 
at all times, but Reddit is slowly but surely releasing the functionality to more users, and its 
going to be very exiting in the future, already using RPAN from Stremio has
a better user experience than using it directly from the official webapp.

## Ok ok, how do I use it?

**The easy way**

just add `https://stremio-rpan.xyz:43000/manifest.json` in Stremio

**The local way**

Clone this repo and:

```
npm i
node index
```

## Todo

- Add chat overlay in streams