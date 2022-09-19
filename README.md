This is an app is a songbook collection with guitar chords, where the singers are able to follow the guitar player.

TODOs: 
- [x] Song
- [x] Songslist
- [x] transformTitle 
  - [x] english edge cases
- [x] Navbar
- [x] Footer
- [ ] Styling
  - [ ] icon
  - [ ] **Chords**
  - [ ] dark mode toggle
  - [ ] language toggle
  - [ ] **responsive** --> Test by unit
  - [ ] Autoanimate??? --> for adding/removing songs to reportaire
- [x] TranslateLatex 
  - [x] customToLatex
  - [x] intro/outro
  - [x] meadly
- [ ] **database for user profiles**
- [ ] **nextAuth-Login**
  - [ ] general stuff 
  - [ ] **login player**
    - [ ] **profile**
    - [ ] **repertoire dispaly**
    - [ ] **buttons for adding and removing songs to repertoire**
    - [ ] set password for singers ???
    - [ ] generate qr code
    - [ ] import from ultimateguitar?
  - [ ] **"login" singer**
    - [ ] **display followed players repertoire**
    - [ ] suggestions to guitarplayer?
- [ ] **follow me page**
  - [ ] **follow me update**
- [ ] search bar
  - [ ] by title
  - [ ] by text simalarity?
- [ ] actually deploying it
- [ ] far future: stress test user
- [ ] **logging**

DB -> 
  id
  mail
  login pw (hash)
  pw for singer

  songId-userId
  