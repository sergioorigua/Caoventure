'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "36e006f4ffa60bb02f2fa57af5dfc899",
".git/config": "d3c8de380075e7caec08b959959ca73d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "13b087d4ce90700938f995c9c5c52786",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b9ebedd895593e27c237ff5d36b727ff",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e89996b0d2078cba90421f2c5efc570",
".git/logs/refs/heads/main": "763b3dd80e89f80119c2f52e9b3b7638",
".git/logs/refs/heads/master": "3eda2fae35aecad42019379e756ea374",
".git/logs/refs/remotes/origin/main": "37a60370d255098f8328a409900477fe",
".git/objects/00/baca5426a46ee586824238f0df2005325f9cde": "167e3b2c512037809b37519a7cb8ba76",
".git/objects/04/d929b8eba9b7edb068b2da5284e9ed66a49494": "a87d2878eac1cd4a53d6af71126eff3c",
".git/objects/0a/1bb8f707afd7af232e0688240a7ae5fc40f44a": "373e4f6378690caf2d0239b935306591",
".git/objects/0d/30012e5bdaf7a0af05ad6176636fb1490b4a2f": "6396f28fa1ba6b7b20435095b840c7b7",
".git/objects/0d/662b3e0742076b44820744b09c6c69556f5d9f": "202bc61021cbce2c21adede6b9c6aae4",
".git/objects/12/2ccdc1ed519642275aeab3dc4fe3f673850b5b": "e241bb8599ed99df9c0fdeef7c0c35c7",
".git/objects/13/ba2df135315808581698dfb679a3e2c6502e4c": "9ac14e99831eabba45cbd34106bdf9df",
".git/objects/14/b437c6de91ea1598bd0667c8f462afdd900cf3": "9badada05108c175e90548b6d74322a3",
".git/objects/15/0d915a453b98a6839ed4593e9cbd141d79de81": "6009a9f1c6ade7055f4df02fa661049e",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/18/1251f8d1234da556decb3383755a1482f6727c": "5dcc43130770bd3a94c31c9e974b5d33",
".git/objects/18/2e9528bfec09f7d932413305ab716c6a2d5665": "ab5d1703fcacbe9a3bf5a5cc138b9a51",
".git/objects/1c/0cc0accdc5b1e9ad16173fc31d91c99d1e65b9": "ac54e239ea610569ef958480b33df7f9",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/aee970e21617c979f8e5ab7f2868508ade1a1f": "18b108e70e8fa21a240d8339e7f25fdb",
".git/objects/2b/f2fcceaf56c10c232ef6f92ffa43ea42856d7e": "03f37970d54e9ab4a572900ce736546d",
".git/objects/2f/04809bd4c48b702e1585709e22c4dd925c3636": "26157e7995a4c453cd26443aced65204",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/56a7aab6b26a0f9f58e3a79b9729b4d0449557": "cc352135569cf2a303a5c1c8bf39d9b9",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/e677299e22b64e8d6ae989ce2219e5aa09a42d": "c38b78bcffea67106e19af6384521fd7",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/51/a283f3ca2faafe0b4b9109417a39e8f86f7943": "aab7c0903a1fed95ba45f79950e08f61",
".git/objects/51/b93e3e0bab0a69be57dfe5ae64aed53cda2cbe": "338c70a816e8025b0c460fc8d404bdcf",
".git/objects/53/022ecc8024eedcb7d5773f04c56ad93340b3f4": "6beef0f8c535e29bdf6eeaf04d220401",
".git/objects/5a/7c32db8016c7c0a7ac84df38181c50e3a42969": "8de234ba4829389aacdba8d94f913594",
".git/objects/5c/12a50c522f7b20491ed6a7a35d6d5720c1ff33": "7622475b508b01db24f97acb3bcacaeb",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5e/8ee217b065bfd002cc97f928e0d2f2ffebdd73": "36807e83cea1edb474a19df31f626ab5",
".git/objects/61/756aa720513fb9ba27e07d692e9a9b85deb571": "6135a438101645cce5041af5eb554c1a",
".git/objects/62/9ca4cd8ee35c5641bb3ce1fb75bc94895a8a6f": "aa92f40f76dbd01e226f1df6d623cf68",
".git/objects/66/87b92c2d1351cc5d600e1f8ae71887ccebce9f": "dd0a2de5392cb04ed2871b2ba33261df",
".git/objects/6a/b23158eac5d9781c3cf2b1a921c340f740be21": "17ba0ff07572e68ffd8ddd011b0795bd",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/683d554f929d52c42ce141e6a2504bd24f8489": "a9b3251b7fcd0fb9ccf3cfaedcecc0c8",
".git/objects/76/86edd6afbfdb3236b0047b146341352501191a": "ab5cfcfe9ab7b035ac16f2c135420bd7",
".git/objects/79/77d4896077e9b9b561d730d6b578aeacc748dc": "75eeea5ef92bc380812d5e5ad9454ebe",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/79/c3600b36539bb3426dcba242744a0a88d862d8": "c005415e2fad66999b2ada53c1ccf811",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/e926740ae5f916ae74e443accdca0484d93a65": "a0bb4d8d0f48364a4252e47f06b57f22",
".git/objects/83/ad42f75bc3074342fc6d2d9108a386d285c23f": "05c0298ed5b263ef083f54c793993b85",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/ade567e93603063fe91c1d157cc60188fdf495": "6410342c67933c12d9478d1c71705876",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/5fdc3d7922145b7a27ce0a89250b56fd25609c": "e13c82c9b2806310ebb22f6db0ca9c2c",
".git/objects/8a/8b907aa18e78cd1f7f41f1731259597c9474bc": "b8f948c5f510d56d77c013c4fd72aa24",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/9a1ffca07f37b790836a0152cf80176d09703e": "08f125766fef9b0526c5509a0c9efe7d",
".git/objects/8c/bf75f72695dae8755aec7319e4b1a98bc90ade": "69720cf22203ac16d88d8716aad2eedd",
".git/objects/8d/1398ded985160d387424dbf28ed19c29816460": "470d0997a3ad536646ade681b3b4dc73",
".git/objects/90/6a08e844fe2c718ba58d2a0a7407aca295bdca": "68986da2f45fc2717f3f06769e7317ff",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/8560d8ae34d463f5339c87e11b6e5c77201cb3": "79de1cb9437409fb47393ba96126bf73",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/97343a4bcdc3e255f3ad4f4bed315c9db3253c": "333755ae76cef58ad5969b06ec4b817c",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a3/ab1c55802f01e2e2537830a5afacb534752336": "167c4bbf18e222352afe2491614acf78",
".git/objects/a4/a583aa41d94f6e0f168d89f08161ccbe12551b": "f2e5f6100220f4cf24ba6cc7f3b61f8a",
".git/objects/a5/159757f80606c884a0f0b26190b700c616f21f": "fab16db5469c6838aa193b2acdb361ab",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a9/daf1a8bf06d38f2d56c0d112ebdf6f4080794d": "f18110d8b52898a41d4b8dcb96c6fb74",
".git/objects/ac/bafebf6931d0e087e6d11de5272586679060e4": "9f221afd21626d561615fbf65f576226",
".git/objects/ac/c0a00d2db68e80a1bb1ba068347858fe88032f": "289253b610a2ce324eb5f174afcac2f9",
".git/objects/ad/d0b211810f5125779efd41d13f1b74e618421b": "dbc6be378c54bfd9f62162f681728614",
".git/objects/b3/f8385b265222ce8d172041aea330b219bcbb6c": "d3d4e94564d2aa27ebef7f1e5cab43a7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/87db854d65b005b9aa7eb1e47023e57c31b830": "d22ad1660929eccb1331cdb1c89e2220",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/7e356a49f704ae0f60b65285212b4ef5163c53": "756eeb63a84a04fdd82125a280b12dcc",
".git/objects/bb/84dd7cfa64391e6a33faa783eb5ca162f5430d": "b652d21105b48d9842be7d8c16439f71",
".git/objects/bd/0592e3227d91b2a9b9201709c5fe993a493e6a": "8e4276a1a510fd9025f02e4750d6ed78",
".git/objects/bf/6f2b8bc283416d2fb5d46a6464f1b7206d0261": "ffbcbffd0ed32c835f7848cfe628a292",
".git/objects/c0/a6a23b6c1f4f476a616e0f73adf7ee41139312": "f2300ce5499c40567d2fffceaf558f51",
".git/objects/c4/faf431f068580e5163b08446daf4010d9929aa": "182ea6f573b0433d971bf3bb0f25786e",
".git/objects/c5/1cfae52227f499af7c69c194e74afbaa009eb5": "e4146043e9a0d1e73bbd7222f73cc41d",
".git/objects/c7/9ae01b4f52a9d9946eae1bf96384f0951fa152": "bc12608db04facd1d76d6f315b56db5f",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/8e8906e9a3b59572e79b6d23c27f84826e0525": "b26872fc5ab51429252498d110adafa7",
".git/objects/cb/cf223c2fb8948ba00f0eef0dfdccaf334d0646": "93beec14fe373bcf25a7b7d522f0df90",
".git/objects/ce/b38bee9c7f2c3cb5567cc8fea93a3d1f144457": "3eb46f405466cde6700c7bbc0f9ed664",
".git/objects/d1/d70b6f397e00370a36229169f1556bdf6998f4": "7b1a78be1d5728ad469cd7e429fb30cc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/aab97710080b45377020620c8af9ee27560601": "5abb75e6c89065ea9da43184f601b53d",
".git/objects/d8/5c2b435f733b59d62b98c1358b89e65b452512": "2f169dd3b08831a3a7db21ac97d0a804",
".git/objects/d8/c56491e845849777a08c66c5c51c2fa2023999": "e9a007670b0e4e792be71120ed9c6881",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/de/4f750e9c42f1c05267769cbadf9116286acd18": "5e071091ed0a95fd0974ee7a97771fd2",
".git/objects/e0/93b528a6afd850a31d9ef064d4007c0867ecff": "4ca97ebcd4f016b6dc7f4609a49e86a4",
".git/objects/e8/0c48ab17b15214114798ba926771cf9e25d6ec": "9eb98bc00282386568285f6d4a0aef4a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/1fef6cf6e91eafe1c1de0e599dac593884cc5c": "c3b36d8ce81bc1e0abd1194613ebd787",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/fb/441f3f7e44a1869b00d18f2efbadc0c3cd3936": "de3c2f132573e8574520c16f4d4d80bc",
".git/ORIG_HEAD": "dad8043b24b60469cdb503221a8afd11",
".git/refs/heads/main": "dad8043b24b60469cdb503221a8afd11",
".git/refs/heads/master": "a93da5597bf75e1e1b9c99b9b8850655",
".git/refs/remotes/origin/main": "dad8043b24b60469cdb503221a8afd11",
"assets/AssetManifest.bin": "c5d9a33762deb3d03c6968212bd2e4e7",
"assets/AssetManifest.bin.json": "7c0a90d1765dcd6a2c982b81ad594a57",
"assets/AssetManifest.json": "3c56190e68c8455a5a5e5bb6bba6041e",
"assets/assets/Baloo-Regular.ttf": "7ea5a2778c1043f5a28f86b10eaa588d",
"assets/assets/button1.png": "8292f8b063750a8cc0ab00402d6ac654",
"assets/assets/button2.png": "583a53a1c70ca1b601f6945fadc2c4a4",
"assets/assets/button3.png": "0c55e8ff22b8ec177c20298b1f26b7a5",
"assets/assets/button4.png": "878f799b8a4c75975e5414862714a488",
"assets/assets/charactersBg.png": "b5b58f56e3932e1b2d928bdb3d16d2a2",
"assets/assets/cirius.png": "15402d5bbe80af1c1bac2059165d9088",
"assets/assets/iconNavBar.png": "72663379edd85d58f84f824b5d395201",
"assets/assets/orion.png": "0e0b27deccc545068ba24b3d6acef6a4",
"assets/assets/panelJuego.png": "677be84f0fcf3d3d4580da3130f38469",
"assets/assets/prota.png": "d9103a371e196ef3906d026e3895fd98",
"assets/assets/prota2.png": "61bc352a4233944c484320b41b00932f",
"assets/assets/scroll1.png": "320c47a7130800157d14babef61e2913",
"assets/assets/scroll10.png": "38c794aeeded0b5dc3cf1a1b392104fd",
"assets/assets/scroll11.png": "63229665806bf9d7f025c3e9af897206",
"assets/assets/scroll12.png": "f9847d242f28021f07b2cfadcc58a409",
"assets/assets/scroll13.png": "9836d086a9a242ec2ff833988ca441c8",
"assets/assets/scroll14.png": "0c5d661c84e68aa9f6845f95c7a20a3e",
"assets/assets/scroll2.png": "d2480066fdde678009d295bc04b4318a",
"assets/assets/scroll3.png": "39441ae4b6466d628fb3c9c330d9450d",
"assets/assets/scroll4.png": "84e2097598b8813abbcd1b0f52cfec30",
"assets/assets/scroll5.png": "6c47acab4db7f48ccfd4e96cd2ed863c",
"assets/assets/scroll6.png": "bbacd38970de17bd4a1213769f7b06b2",
"assets/assets/scroll7.png": "ed4f47b70733c21848994aa72128e97b",
"assets/assets/scroll8.png": "2f04a01efeb9734df86d783a033436e1",
"assets/assets/scroll9.png": "80888f4ea2fdcf262fc0dd6d14da5e14",
"assets/assets/theomir.png": "0e47892ea8a1699c72b55322c209a9de",
"assets/assets/title.png": "96fe5f0a7fc9b034357626966ea519a0",
"assets/FontManifest.json": "7743a8a9b46a57548a9e1b1279d962b1",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "5a3f7c89595f4b04f1c144170088ac5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "561320675909c439da594efcb59c50fc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a0f0301cf8fdc1e848a54597f507a73f",
"/": "a0f0301cf8fdc1e848a54597f507a73f",
"main.dart.js": "c1bcd9a0828c9a17c21b900248af74cb",
"manifest.json": "a4cc5aa7ddfaf2f3d0d3c3a3dee26036",
"version.json": "a10e72223eb1720a114510dca46eeb67"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
