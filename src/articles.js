let articles = [
  {
    source: {
      id: "the-times-of-india",
      name: "The Times of India",
    },
    author: "ET Spotlight Special",
    title: "Amazon Games to publish next Tomb Raider game - Economic Times",
    description:
      "Amazon Games will be publishing Crystal Dynamicss next Tomb Raider game. This information was revealed in the State of Unreal 2022 presentation, where it was also said that the sequel would be based on Unreal Engine.",
    url: "https://economictimes.indiatimes.com/news/international/us/amazon-games-to-publish-next-tomb-raider-game/articleshow/96261743.cms",
    urlToImage:
      "https://img.etimg.com/thumb/msid-96261745,width-1070,height-580,imgsize-11830,overlay-economictimes/photo.jpg",
    publishedAt: "2022-12-15T20:05:00Z",
    content:
      "Crystal Dynamics and Amazon Games have come up with an arrangement. In it, Crystal Dynamics will develop a new multiplatform for Tomb Raider with full support from Amazon Games for publishing the gam… [+1292 chars]",
  },
  {
    source: {
      id: "ars-technica",
      name: "Ars Technica",
    },
    author: "Dan Goodin",
    title:
      "Microsoft discovers Windows/Linux botnet used in DDoS attacks - Ars Technica",
    description:
      "MCCrash is specially designed to take down Minecraft servers and performs other DDoSes.",
    url: "https://arstechnica.com/information-technology/2022/12/microsoft-discovers-windows-linux-botnet-used-in-ddos-attacks/",
    urlToImage:
      "https://cdn.arstechnica.net/wp-content/uploads/2019/09/botnet5-760x380.jpg",
    publishedAt: "2022-12-15T20:02:50Z",
    content:
      "6 with 0 posters participating\r\nMicrosoft researchers have discovered a hybrid Windows-Linux botnet that uses a highly efficient technique to take down Minecraft servers and performs distributed deni… [+2707 chars]",
  },
  {
    source: {
      id: null,
      name: "Rock Paper Shotgun",
    },
    author: "Graham Smith",
    title:
      "After 8 years, Hack 'n' Slash players have finally solved a secret room puzzle - Rock Paper Shotgun",
    description:
      "Hack 'n' Slash is a programming puzzle game from Double Fine in which you can hack every element of the game, but it still took 8 years to solve one puzzle.",
    url: "https://www.rockpapershotgun.com/after-8-years-hack-n-slash-players-have-finally-solved-a-secret-room-puzzle",
    urlToImage:
      "https://assets2.rockpapershotgun.com/hack-n-slash-review-141076995529.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/hack-n-slash-review-141076995529.jpg",
    publishedAt: "2022-12-15T19:50:04Z",
    content:
      "Hack 'n' Slash took the puzzle-programming subgenre further than most of its peers by letting you edit actual LUA scripts in-game. By doing so you could increase your Link-like character's movement s… [+1772 chars]",
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post",
    },
    author: "Shannon Liao",
    title:
      "'Marvel Snap' developer was inspired by friend's mishap while gaming on the toilet - The Washington Post",
    description:
      "« Marvel Snap's » Ben Brode and Hamilton Chu talk healthy workplace culture, playing games on the toilet and actual second dinners.",
    url: "https://www.washingtonpost.com/video-games/2022/12/15/marvel-snap-ben-brode-game-awards/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/L47ZY76ALZH63KYY4EQYXTXCJU.jpg&w=1440",
    publishedAt: "2022-12-15T19:43:19Z",
    content:
      "Comment on this story\r\nBen Brode, a co-founder of game development studio Second Dinner, recalls a moment that drove him to make a snappy Marvel card game: At least six years ago, his friend was play… [+5429 chars]",
  },
  {
    source: {
      id: null,
      name: "GameSpot",
    },
    author: "S.E. Doster",
    title: "CoD: Modern Warfare 2 - How To Beat The Atomgrad Raid - GameSpot",
    description:
      "Call of Duty's first Raid arrived to Modern Warfare 2 on December 14, and here's our full guide to completing it.",
    url: "https://www.gamespot.com/articles/cod-modern-warfare-2-how-to-beat-the-atomgrad-raid/1100-6510091/",
    urlToImage:
      "https://www.gamespot.com/a/uploads/screen_kubrick/1639/16394540/4077683-mwii-s01-reloaded-tout.jpeg",
    publishedAt: "2022-12-15T19:38:19Z",
    content:
      "The Season 1 Reloaded update for Modern Warfare 2 is now live, and the big update added Call of Duty's first-ever Destiny-style Raid. This is a cooperative mission that includes puzzle-solving, close… [+10717 chars]",
  },
  {
    source: {
      id: "ign",
      name: "IGN",
    },
    author: null,
    title: "Destiny 2 Dawning Event Guide 2022 - Destiny 2 Wiki Guide - IGN",
    description:
      "Get in the spirit of giving with Destiny 2&apos;s The Dawning 2022 event this winter. Collect tasty Materials from defeated enemies and use Eva Levante&apos;s",
    url: "https://www.ign.com/wikis/destiny-2/Destiny_2_Dawning_Event_Guide_2022",
    urlToImage:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/destiny-2/9/9b/Dawning_Skins.jpg",
    publishedAt: "2022-12-15T19:27:42Z",
    content:
      "Get in the spirit of giving with Destiny 2'sThe Dawning 2022 event this winter. Collect tasty Materials from defeated enemies and use Eva Levante's Holiday Oven to whip up some cozy treats. Gift thos… [+6702 chars]",
  },
  {
    source: {
      id: null,
      name: "MacRumors",
    },
    author: "Juli Clover",
    title: "Belkin Debuts Continuity Camera Mount for Mac Desktops - MacRumors",
    description:
      "Belkin is expanding its line of MagSafe-compatible Continuity Camera mounts with the launch of the Belkin iPhone Mount for Mac Desktops, which is...",
    url: "https://www.macrumors.com/2022/12/15/belkin-continuity-camera-mount-mac-desktops/",
    urlToImage:
      "https://images.macrumors.com/t/Ebt6oPyhWbzkKuJLC3IXZDf3trs=/1830x/article-new/2022/12/belkin-camera-mount-desktops.jpg",
    publishedAt: "2022-12-15T19:25:36Z",
    content:
      "Belkin is expanding its line of MagSafe-compatible Continuity Camera mounts with the launch of the Belkin iPhone Mount for Mac Desktops, which is able to attach to iMac models and different displays.… [+928 chars]",
  },
  {
    source: {
      id: null,
      name: "Pokemon.com",
    },
    author: null,
    title:
      "Winter Wonders Galore in 2022 Pokémon GO Winter Holiday Part 1 - Pokemon.com",
    description:
      "Celebrate the season December 15–23 with the Pokémon GO Winter Holiday Part 1 event.",
    url: "https://www.pokemon.com/uk/pokemon-news/winter-wonders-galore-in-2022-pokemon-go-winter-holiday-part-1",
    urlToImage:
      "https://www.pokemon.com/static-assets/content-assets/cms2-en-uk/img/video-games/_tiles/pokemon-go/12152022/01/pokemon-go-169.jpg",
    publishedAt: "2022-12-15T19:17:40Z",
    content:
      "The weather outside might be frightful, but there’s snow much fun to be had with Pokémon GO Winter Holiday Part 1! The event runs from December 15, 2022, at 10:00 a.m. to December 23, 2022, at 10:00 … [+1632 chars]",
  },
  {
    source: {
      id: null,
      name: "9to5Mac",
    },
    author: "Filipe Espósito",
    title:
      "Apple continues to test new ‘Rapid Security Response’ updates, this time for macOS users - 9to5Mac",
    description:
      "With the release of iOS 16.2, Apple introduced a new feature called “Rapid Security Response” that will provide quick security patches to iOS without the need to install an entire new version of the operating system. Now the company is bringing this technolog…",
    url: "https://9to5mac.com/2022/12/15/apple-continues-to-test-new-rapid-security-response-updates-this-time-for-macos-users/",
    urlToImage:
      "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/12/macOS-Security-Response-update.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2022-12-15T19:16:00Z",
    content:
      "With the release of iOS 16.2, Apple introduced a new feature called Rapid Security Response that will provide quick security patches to iOS without the need to install an entire new version of the op… [+1400 chars]",
  },
  {
    source: {
      id: null,
      name: "Rock Paper Shotgun",
    },
    author: "Graham Smith",
    title:
      "Epic Games Store kicks off 15 days of free games with one of the best rated games (on Steam) - Rock Paper Shotgun",
    description:
      "Bloons TD 6 has over 200,000 positive reviews on Steam, and today it's free to keep from Epic.",
    url: "https://www.rockpapershotgun.com/epic-games-store-kicks-off-15-days-of-free-games-with-one-of-the-best-rated-games-on-steam",
    urlToImage:
      "https://assets2.rockpapershotgun.com/bloons-td-6.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/bloons-td-6.jpg",
    publishedAt: "2022-12-15T19:13:24Z",
    content:
      "The Epic Games Store's Christmas sale is now underway, with discounts including 40% off FIFA 23, 25% off Spider-Man Remastered, and 100% off one new game each day for the next fifteen days. Each new … [+1434 chars]",
  },
  {
    source: {
      id: null,
      name: "Social Media Today",
    },
    author: "Andrew Hutchinson",
    title:
      "Instagram Adds New Measures to Help Users Regain Access to Locked Accounts, - Social Media Today",
    description:
      "The new measures will make it easier to get back into your IG account, while also protecting against impersonation.",
    url: "https://www.socialmediatoday.com/news/instagram-adds-new-measures-to-help-users-regain-access-to-locked-accounts/638898/",
    urlToImage:
      "https://www.socialmediatoday.com/imgproxy/dmc4JukAcfKaJz6Yl1oh_NTV5zCS3GjoTtQcfXLIXvQ/g:ce/rs:fill:770:364:0/bG9jYWw6Ly8vZGl2ZWltYWdlL2lnX3NhZmV0eV91cGRhdGUzLnBuZw.png",
    publishedAt: "2022-12-15T19:07:39Z",
    content:
      "Instagram has added some new tools to help users regain access to their accounts if they find themselves locked out, while its also added some new measures to combat impersonation - which feel like a… [+3158 chars]",
  },
  {
    source: {
      id: null,
      name: "CNET",
    },
    author: "David Lumb",
    title:
      "Nothing Phone 1 Is Headed to US, but Only for Android 13 Testing Program - CNET",
    description:
      "The phone won't reach American store shelves just yet, but consumers will still be able to try it out.",
    url: "https://www.cnet.com/tech/mobile/nothing-phone-1-is-headed-to-us-but-only-for-android-13-testing-program/",
    urlToImage:
      "https://www.cnet.com/a/img/resize/ba9cc122eb209bded478da3e92c7b3183a7de352/hub/2022/07/12/36e31bef-75fd-4d1f-a19e-0b375262d850/nothing-phone-1-cnet-review-20.jpg?auto=webp&fit=crop&height=630&width=1200",
    publishedAt: "2022-12-15T19:07:00Z",
    content:
      "The Nothing Phone 1 launched earlier this year as an affordable iPhone SE-rivaling 5G device with an eye-catching LED design, but it was available only in Europe and the UK. Now the phone is coming t… [+1057 chars]",
  },
  {
    source: {
      id: null,
      name: "Nikkei.com",
    },
    author: "Staff Writer",
    title:
      "Oppo brings health tracker, new AR glasses to the table - Nikkei Asia",
    description:
      "Chinese smartphone maker diversifying product portfolio to fight soft demand",
    url: "https://asia.nikkei.com/Business/China-tech/Oppo-brings-health-tracker-new-AR-glasses-to-the-table",
    urlToImage:
      "https://www.ft.com/__origami/service/image/v2/images/raw/https%253A%252F%252Fs3-ap-northeast-1.amazonaws.com%252Fpsh-ex-ftnikkei-3937bb4%252Fimages%252F4%252F7%252F1%252F2%252F43542174-5-eng-GB%252FCropped-1671130033news02.jpg?width=1260&height=630&fit=cover&gravity=faces&source=nar-cms",
    publishedAt: "2022-12-15T18:55:00Z",
    content:
      "GUANGZHOU -- Chinese technology company Oppo launched a new health-monitoring brand and revealed upgraded augmented reality glasses at an online event on Wednesday and Thursday, as it seeks to reduce… [+416 chars]",
  },
  {
    source: {
      id: null,
      name: "MacRumors",
    },
    author: "Juli Clover",
    title:
      "Apple Releases Rapid Security Response Update for macOS Ventura 13.2 Beta - MacRumors",
    description:
      "Apple today released a Rapid Security Response update for the macOS Ventura 13.2 beta, marking the first time we've seen the feature used for the...",
    url: "https://www.macrumors.com/2022/12/15/apple-releases-macos-ventura-13-2-security-update/",
    urlToImage:
      "https://images.macrumors.com/t/FOTB1h4KGVwlmS_zUNaVp1cVfys=/1600x/article-new/2022/12/macos-13-2-security-response.jpg",
    publishedAt: "2022-12-15T18:52:27Z",
    content:
      "Apple today released a Rapid Security Response update for the macOS Ventura 13.2 beta, marking the first time we've seen the feature used for the Mac. Rapid Security Response is an iOS 16 and ‌macOS … [+513 chars]",
  },
  {
    source: {
      id: null,
      name: "Rock Paper Shotgun",
    },
    author: "Graham Smith",
    title:
      "Melatonin offers lofi beats to tap in rhythm to - Rock Paper Shotgun",
    description:
      "A dreamy rhythm game about exploring dreams, with practice mode, assist options, and a Level Editor. Gimme.",
    url: "https://www.rockpapershotgun.com/melatonin-offers-lofi-beats-to-tap-in-rhythm-to",
    urlToImage:
      "https://assets2.rockpapershotgun.com/melatonin-header.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/melatonin-header.jpg",
    publishedAt: "2022-12-15T18:44:56Z",
    content:
      "More than half the rhythm games I see on PC seem to feature courses that look like bullet hell levels, designed for players with the perseverance, patience and 12-fingered hands I lack. Melatonin loo… [+1427 chars]",
  },
];

export default articles;
