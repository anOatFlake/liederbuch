This is an app which is a songbook collection with guitar chords.

TODO: 
- [x] Song
- [x] Songslist
- [x] transformTitle 
  - [x] english edge cases
- [x] Navbar
- [x] Footer
- [ ] Styling
  - [ ] icon
  - [ ] Chords
  - [ ] dark mode toggle
  - [ ] language toggle
  - [ ] responsive --> Test by unit
  - [ ] Autoanimate???
- [ ] TranslateLatex 
  - [x] customToLatex
  - [ ] intro/outro
  - [ ] meadly
- [ ] database for user profiles
- [ ] nextAuth-Login 
  - [ ] general stuff 
  - [ ] login player
    - [ ] profile
    - [ ] repertoire dispaly
    - [ ] buttons for adding and removing songs to repertoire
    - [ ] set password for singers ???
    - [ ] generate qr code
    - [ ] import from ultimateguitar?
  - [ ] "login" singer 
    - [ ] display followed players repertoire
    - [ ] suggestions to guitarplayer?
- [ ] follow me page
  - [ ] follow me update
- [ ] search bar
  - [ ] by title
  - [ ] by text simalarity?
- [ ] actually deploying it
- [ ] far future: stress test user


DB -> 
  id
  mail
  login pw (hash)
  pw for singer

  songId-userId
  