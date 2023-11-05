# WheresWaldo

## Usage

Hosted with fly.io : WIP

## Running locally

Change mongo url in client/App.jsx to mongodb+srv://dmah:hAtspcTWMGxbCOWv@cluster0.s65ys8c.mongodb.net/?retryWrites=true&w=majority

npm run dev on WheresWaldo/client
npm run serverStart on WheresWaldo/server

You're up and going!

## Description

A mobile and desktop compatible web app built with Express and React meant to be one of my capstone projects.
Users will select an image and find characters in that image. Character valdation is done by comparing with
character details stored in mongoDB. Upon finding all characters and achieving a record time, they will be prompted
to either submit their name and score or skip to view the current leaderboard.

## Reflections

The biggest hurdle I've overcome on this project is making the image draggable on both x and y axes.
The css to make width overflow and draggable doesn't work when applied to height.

Reviewing the code from this project, I can see I've improved substantially in making my code more modular, though it's still not perfect.

If I were to redo this project, I'd plan out DuringGame better since the component is tightly coupled
with the various functions that make the image draggable and clutters the component as a result. Additionally, pulling
fetch requests into their own functions would increase reusability.

## Credits

Kon image taken from https://all-worlds-alliance.fandom.com/wiki/Kon_(Bleach)
Luffy img taken from https://www.amazon.com/KyokoVinyl-One-Piece-Sticker-Laptop/dp/B07RD6CTQV
Zim from https://zim.fandom.com/wiki/Zim
Convention img from https://old.reddit.com/r/funny/comments/36mkox/best_wheres_waldo_ever/

Stage 2: https://www.reddit.com/r/wimmelbilder/comments/d63d6z/city_port/
