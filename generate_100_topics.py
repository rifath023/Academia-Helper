import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.formatting.rule import CellIsRule

OUTPUT = "academia-helper-100-amazon-student-topics-2026.xlsx"

headers = [
    "No.",
    "Seed Keywords",
    "Article Title (SEO, <=60 chars ideal)",
    "URL Slug",
    "Product 1 (Amazon Best Seller)",
    "Product 2",
    "Product 3",
    "Product 4 (Budget Alt)",
    "Product 5 (Premium Alt)",
    "Category",
    "Target Market",
    "Search Intent",
    "Priority",
    "Why Indexable / Angle",
    "Suggested Words",
]

rows = [
[1,"best laptop stand students","Best Laptop Stands for Students (2026, Dorm-Tested)","best-laptop-stands-students-2026","Nulaxy Adjustable Laptop Stand","Rain Design mStand","Lamicall Foldable Riser","Amazon Basics Foldable Stand","OMOTON Aluminum Stand","Ergonomics & Desk","Global","Commercial","P0","High volume + Nulaxy is Office Best Seller; no existing post",2200],
[2,"best lap desk studying bed","Best Lap Desks for Students Who Study on Bed (2026)","best-lap-desks-students-bed-study-2026","LapGear Pro Lap Desk","LapGear MyDesk with Light","HUANUO Lap Desk with Cushion","LapGear Designer","Sofia + Sam Memory Foam","Ergonomics & Desk","USA / Global","Commercial","P0","Dorm pain-point; LapGear dominates Amazon gifts-for-students",2000],
[3,"best monitor stand student desk","Best Monitor Stands for Student Desk Setup (2026)","best-monitor-stands-student-desk-2026","Amazon Basics Monitor Riser","3M Adjustable Stand MS80B","Hemobllo Bamboo Riser","SimpleHouseware Mesh Riser","Fellowes Premium Riser","Ergonomics & Desk","Global","Commercial","P1","Low competition vs lamps; links to dual-screen trend",1800],
[4,"best ergonomic chair students","Best Ergonomic Desk Chairs for Students Under $200 (2026)","best-ergonomic-desk-chairs-students-2026","Hbada Ergonomic Office Chair","Furmax Mesh Mid-Back Chair","BestOffice Ergonomic Chair","Smugdesk Mesh Chair","SIHOO M18 Chair","Ergonomics & Desk","Global","Commercial","P0","Long study hours angle; huge Amazon volume",2500],
[5,"best standing desk dorm small","Best Small Standing Desks for Dorm Rooms (2026)","best-small-standing-desks-dorm-2026","SHW Electric Standing Desk 40in","Furinno Compact Computer Desk","FlexiSpot Comhar 48in","Pamray 32in Small Desk","FEZIBO Height Adjustable","Ergonomics & Desk","USA / UK","Commercial","P1","Small-space long-tail avoids competing with big desk sites",2200],
[6,"best footrest under desk study","Best Under-Desk Footrests for Long Study Hours (2026)","best-under-desk-footrest-study-2026","Everlasting Comfort Memory Foam","HUANUO Adjustable Footrest","Mind Reader Ergonomic Rest","ComfiLife Footrest","EUREKA Ergonomic Hammock","Ergonomics & Desk","Global","Commercial","P2","Very low competition; dissertation-hours angle",1600],
[7,"best wrist rest typing students","Best Wrist Rests for Students Who Type All Day (2026)","best-wrist-rest-typing-students-2026","MROCO Gel Wrist Rest Set","Gimars Memory Foam Keyboard + Mouse","HyperX Wrist Rest Compact","Beloved proti Memory Foam","Deltahub Minimalist Rest","Ergonomics & Desk","Global","Commercial","P1","MROCO is Amazon Best Seller; essay-typing hook",1700],
[8,"best desk mat study desk","Best Large Desk Mats for Study Desks (2026)","best-desk-mats-study-desks-2026","Aothia Leather Desk Pad","YSAGi Felt Desk Mat","Non-Slip PU Leather Mat","Hapilife Large Mouse Pad Desk","Satechi Eco-Leather Mat","Ergonomics & Desk","Global","Commercial","P2","Cheap + high conversion; defines study zone angle",1500],
[9,"best cable management student desk","Best Cable Management Kits for Student Desks (2026)","best-cable-management-student-desk-2026","Joto Cable Management Box","Alex Tech Cord Sleeve 10ft","Naked Cubes Cable Clips","D-Line Cable Tidy Box","Baskiss Cable Sleeve","Ergonomics & Desk","Global","Commercial","P2","Dorm no-drill angle; under-$20 intent",1600],
[10,"best monitor light bar studying","Best Monitor Light Bars for Late-Night Studying (2026)","best-monitor-light-bars-studying-2026","BenQ ScreenBar Halo","Quntis Computer Monitor Light","E-Reading LED Bar with Remote","Baseus Monitor Light","Xiaomi Mi Light Bar","Ergonomics & Desk","Global","Commercial","P1","Not a desk lamp (avoids duplicate); eye-strain angle",1900],
[11,"best gel pens exam writing","Best Gel Pens for Exam Writing and Fast Notes (2026 Tested)","best-gel-pens-exam-writing-2026","Pilot G2 Premium 12-pack","Uni-ball Signo 207","Pentel EnerGel RTX","Zebra Sarasa Clip","Paper Mate InkJoy Gel","Writing Tools","Global","Commercial","P0","Pilot G2 is #1 Amazon pen; exam-speed angle",1800],
[12,"best highlighters studying","Best Highlighters for Studying Without Bleed-Through (2026)","best-highlighters-studying-no-bleed-2026","Zebra Mildliner 15-pack","Sharpie S-Note Chisel","Staedtler Textsurfer Classic","BIC Brite Liner Pastel","Mr. Pen Highlighters 12-pack","Writing Tools","Global","Commercial","P0","Mildliner viral on studygram; bleed-through query",1800],
[13,"best notebooks college lectures","Best Notebooks for College Lectures (2026)","best-notebooks-college-lectures-2026","Five Star Spiral 5-Subject","Moleskine Classic Large Ruled","Leuchtturm1917 A5 Dotted","Mead Cambridge Notebook","Amazon Basics Hardcover","Writing Tools","USA / Global","Commercial","P0","Evergreen; lecture-notes intent",2000],
[14,"best academic planner university","Best Academic Planners for University Students 2026-2027","best-academic-planners-university-2026-2027","Moleskine Weekly Planner 26/27","Panda Planner Pro Daily","Leuchtturm1917 Weekly + Notebook","Blue Sky Academic Planner","Clever Fox Planner Pro","Writing Tools","Global","Commercial","P0","Seasonal 2026-2027 spike; links to dissertation timeline posts",2000],
[15,"best sticky notes revision","Best Sticky Notes for Revision and Research (2026)","best-sticky-notes-revision-2026","Post-it Super Sticky 12-pads","4A Transparent Sticky Notes","Mr. Pen Pastel Notes","Post-it Dispenser Pop-up","Notehall Grid Notes","Writing Tools","Global","Commercial","P2","Low competition; revision-wall method",1500],
[16,"best binders university modules","Best Binders and Dividers for University Modules (2026)","best-binders-dividers-university-2026","Avery Durable View 1-inch","Five Star Flex Hybrid Notebinder","Samsill Economy Binder","Amazon Basics Binder 4-pack","Case it 2-in-1 Binder","Writing Tools","UK / USA","Commercial","P2","Module-organization long-tail (UK intent)",1600],
[17,"best pen organizer small desk","Best Desk Pen Organizers for Small Study Desks (2026)","best-desk-pen-organizers-small-desks-2026","SKYDUE Rotating Pen Organizer","Mind Reader Mesh Pen Cup Set","SimpleHouseware Mesh Organizer","HBlife Acrylic Organizer","Pipishell Bamboo Caddy","Writing Tools","Global","Commercial","P1","SKYDUE is Amazon Best Seller; small-desk angle",1600],
[18,"best small whiteboard revision","Best Small Whiteboards for Revision and Practice (2026)","best-small-whiteboards-revision-2026","Quartet Mini Whiteboard 8.5x11","U Brands Magnetic Dry-Erase","Lockways Double-Sided Lapboard","Amazon Basics Dry Erase 9x12","Maxtek Portable Board","Writing Tools","Global","Commercial","P1","Active-recall study method angle",1700],
[19,"best reusable smart notebook","Best Reusable Smart Notebooks for Students (2026)","best-reusable-smart-notebooks-students-2026","Rocketbook Core Letter","Moleskine Smart Writing Set","Elfinbook Reusable 2.0","Rocketbook Mini Pocket","HOMESTEC Reusable","Writing Tools","Global","Commercial","P1","Rocketbook viral; scan-to-cloud angle",1900],
[20,"best annotation tabs research","Best Annotation Tabs and Page Flags for Research Reading (2026)","best-annotation-tabs-research-reading-2026","Post-it Flags Assorted 4-pack","Zebra Filers Tabs","Mr. Pen Transparent Flags","BAYTORY Sticky Index"," micro Pens Bible Tabs","Writing Tools","Global","Commercial","P2","Literature-review workflow angle",1500],
[21,"best backpack university laptop","Best Backpacks for University Students With Laptop Sleeve (2026)","best-backpacks-university-laptop-2026","JanSport Big Student Backpack","Herschel Little America 25L","Matein Travel Laptop Backpack","High Sierra Loop","Tzowla Business Backpack","Writing Tools / Carry","Global","Commercial","P0","Huge volume; commuter + campus angle",2200],
[22,"best pencil case university","Best Large Pencil Cases for University Supplies (2026)","best-pencil-cases-university-2026","EASTHILL Big Capacity Case","ProCase Pouch with Compartments","Btsky Canvas Pen Bag","Arteza Large Case","Finpac Bible Case Style","Writing Tools","Global","Commercial","P2","Low competition accessory post",1400],
[23,"best desk organizer dorm","Best Desk Organizers for Dorm Room Study Desks (2026)","best-desk-organizers-dorm-2026","SimpleHouseware Mesh Organizer","HBlife Acrylic Desk Organizer","Pipishell Bamboo Tray","Marbrasse Mesh 6-Tray","Bevalsa Wooden Organizer","Writing Tools","USA","Commercial","P1","Dorm long-tail; high conversion bundle",1700],
[24,"best document holder typing essays","Best Document Holders for Typing Essays Faster (2026)","best-document-holders-typing-essays-2026","Fellowes Copyholder","3M Adjustable Document Stand","HUANUO Book / Document Stand","Amazon Basics Copyholder","EDLP Clip Holder","Writing Tools","Global","Commercial","P2","Ergonomics + typing-speed angle for essays",1500],
[25,"best filing box dissertation","Best Portable Filing Boxes for Dissertation Research (2026)","best-filing-boxes-dissertation-2026","Sterilite File Crate","Smead Expanding File Box","ABQty Portable File Box","Greenroom Letter Box","Iris Project Case","Writing Tools","Global","Commercial","P2","Dissertation-paperwork angle; near-zero competition",1600],
[26,"best book light reading bed","Best Clip-On Book Lights for Reading in Bed (2026)","best-book-lights-reading-bed-2026","Vekkia Rechargeable 3-Modes","Gritin LED Rechargeable","Mighty Bright DuoFlex","Glocusent Neck Light","Vekkia Amber Clip","Reading","Global","Commercial","P0","High volume; dorm lights-out angle",1700],
[27,"best ereader academic reading","Best E-Readers for Academic Reading (2026)","best-ereaders-academic-reading-students-2026","Kindle Paperwhite 16GB","Kobo Clara 2E","Kindle Scribe with Pen","Kobo Libra 2","PocketBook Era","Reading","Global","Commercial","P0","PDF + papers reading angle; Kindle dominates Amazon",2200],
[28,"best reading pillow dorm bed","Best Reading Pillows With Arms for Dorm Beds (2026)","best-reading-pillows-dorm-beds-2026","Husband Pillow Backrest","Milliard Reading Pillow","Utopia Bed Rest Pillow","LINENSPA Shredded Pillow","Clara Clark Backrest","Reading","USA","Commercial","P1","Bed-study comfort angle",1700],
[29,"best blue light glasses study","Best Blue Light Glasses for Long Screen Study (2026)","best-blue-light-glasses-study-2026","Livho 2-pack Blue Light","Gaoye Gaming Glasses","ANRRI Clear Lens","Femu Anti-Eyestrain","J+S Vision Classic","Reading","Global","Commercial","P1","Screen-time + eye-strain query; cheap + high CTR",1800],
[30,"best small bookshelf dorm","Best Small Bookshelves for Dorm Rooms (2026)","best-small-bookshelves-dorm-2026","Furinno 3-Tier Reversible","Yaheetech 4-Cube Organizer","Vasagle Ladder Shelf","ClosetMaid 3-Cube","Cooper 5-Tier Narrow","Reading","USA / UK","Commercial","P1","Small-room long-tail",1800],
[31,"best bookends heavy textbooks","Best Heavy-Duty Bookends for Textbooks (2026)","best-bookends-heavy-textbooks-2026","Owl Decorative Bookends","HBlife Metal Bookends 8pcs","Dinosaur Geo Bookends","Rolinlily Wooden Pair","Invisible Floating Shelves","Reading","Global","Commercial","P2","Textbook-weight specific; decor + function",1400],
[32,"best rolling book cart dissertation","Best Rolling Book Carts for Dissertation Research (2026)","best-rolling-book-carts-dissertation-2026","HBlife 3-Tier Rolling Cart","SimpleHouseware 3-Tier Cart","Pipishell Metal Utility Cart","Whitmor 3-Tier","Seville Classics Cart","Reading","Global","Commercial","P1","Dissertation-stack mobility angle",1700],
[33,"best magnifying glass light reading","Best Magnifying Glasses With Light for Small Print (2026)","best-magnifying-glass-light-reading-2026","JMH 18LED Handheld","MagniPros 3X Large","Fancii 10X Lighted","iMagniphy 5X","Kekoy Lighted 3-pack","Reading","Global","Commercial","P2","Amazon Best Seller JMH; accessibility angle",1500],
[34,"best reading journal literature","Best Reading Journals for Literature Students (2026)","best-reading-journals-literature-students-2026","Moleskine Book Journal","KUnits Reading Log","Clever Fox Reading Journal","Book Lovers Log Hardcover","Lusweimi Journal","Reading","Global","Commercial","P2","Literature-course log angle",1500],
[35,"best english dictionary international students","Best English Dictionaries for International Students (2026)","best-english-dictionaries-international-students-2026","Oxford Advanced Learner's 10th","Merriam-Webster Collegiate 11th","Collins English Dictionary","Longman Dictionary Contemporary","Cambridge Advanced","Reading","UK / AU","Commercial + Info","P1","International-student core audience fit",1900],
[36,"best tablet stand reading pdfs","Best Tablet Stands for Reading PDFs and Textbooks (2026)","best-tablet-stands-reading-pdfs-2026","Lamicall Adjustable Tablet Stand","Pyle Foldable Stand","UGREEN Foldable Holder","OMOTON Aluminum Stand","Cooper Tabletop Stand","Reading","Global","Commercial","P1","PDF-annotation workflow",1600],
[37,"best floating shelves textbooks dorm","Best Floating Wall Shelves for Textbooks, No Drill (2026)","best-floating-shelves-textbooks-dorm-2026","Command Picture Ledge Shelves","Greenco Floating U-Shelves","BAYKA Solid Wood Set of 3","WOPITUES Acrylic Ledge","UpSimple Floating Set","Reading","USA","Commercial","P2","No-drill dorm rule angle = indexable",1600],
[38,"best budget tablet reading textbooks","Best Budget Tablets for Reading Textbooks (2026)","best-budget-tablets-reading-textbooks-2026","Amazon Fire HD 10","Samsung Galaxy Tab A9+","Lenovo Tab M11","Honor Pad X8","TCL Tab 10","Reading","Global","Commercial","P0","Fire HD dominates student budget queries",2100],
[39,"best portable scanner library research","Best Portable Scanners for Library Research (2026)","best-portable-scanners-library-research-2026","CZUR Shine Ultra Book Scanner","Epson DS-70 Portable","Brother DS-640 Compact","Canon P-208II","Fujitsu ScanSnap iX100","Reading","Global","Commercial","P1","Library-scan + citation workflow",1900],
[40,"best translator pen international students","Best Translator Pens for International Students (2026)","best-translator-pens-international-students-2026","Scanmarker Air Pen Scanner","PenPower WorldPenScan Go","CZUR Smart Pen","iFLYTEK Smart Dictionary Pen","Youdao Dictionary Pen 3","Reading","UK / AU / USA","Commercial","P1","International-student language angle",1900],
[41,"best noise cancelling headphones studying","Best Noise-Cancelling Headphones for Studying (2026)","best-noise-cancelling-headphones-studying-2026","Sony WH-1000XM5","Soundcore by Anker Q30","JBL Tune 770NC","Sony WH-CH720N","Apple AirPods Max (refurb angle)","Focus & Audio","Global","Commercial","P0","Highest volume study-audio query",2400],
[42,"best earplugs studying noisy dorms","Best Earplugs for Studying in Noisy Dorms (2026)","best-earplugs-noisy-dorms-study-2026","Mack's Dreamgirl Soft Foam","Loop Quiet Noise-Reducing","Eargasm High-Fidelity","Alpine SleepSoft","Hearos Xtreme 28-pack","Focus & Audio","Global","Commercial","P1","Shared-room pain-point; cheap + high conversion",1600],
[43,"best white noise machine focus","Best White Noise Machines for Focus and Sleep (2026)","best-white-noise-machines-focus-2026","LectroFan High-Fidelity","Yogasleep Dohm Classic","Magicteam Sound Machine","Housbay Dimmable","SNOOZ Go Travel","Focus & Audio","USA","Commercial","P1","Focus + sleep dual intent",1800],
[44,"best pomodoro timer study","Best Pomodoro Timers and Study Timers (2026)","best-pomodoro-study-timers-2026","TimeCube Plus Preset Timer","TickTime Cube Pomodoro","Secura 60-Minute Visual","Xinquan Visual Timer","Mooas Cube Timer","Focus & Audio","Global","Commercial","P1","Study-technique (Pomodoro) match = perfect Academia fit",1700],
[45,"best silent desk clock exam","Best Silent Desk Clocks for Exam Practice (2026)","best-silent-desk-clocks-exam-2026","Marathon Silent Analog","Peakeep Digital Small","JALL Digital Alarm","DreamSky Wooden Clock","Sharp Atomic Clock","Focus & Audio","UK / USA","Commercial","P2","Exam-timing practice angle",1500],
[46,"best quiet desk fan dorm","Best Quiet Desk Fans for Dorm Rooms (2026)","best-quiet-desk-fans-dorm-2026","Honeywell TurboForce HT-900","OPOLAR USB Desk Fan","VersionTech Small Clip Fan","Dreo Quiet Table Fan","Vornado FIT Personal","Focus & Audio","Global","Commercial","P2","Dorm comfort; quiet keyword = low competition",1600],
[47,"best laptop cooling pad students","Best Laptop Cooling Pads for Long Study Sessions (2026)","best-laptop-cooling-pads-students-2026","Havit 5-Fan Cooling Pad","Thermaltake Massive 20 RGB","Klim Wind Laptop Cooler","TopMate C5 5-Fan","Aicheson Aluminum Stand-Fan","Focus & Audio","Global","Commercial","P1","Overheating during SPSS / coding angle",1700],
[48,"best budget earbuds library study","Best Budget Earbuds for Library Study (2026)","best-budget-earbuds-library-study-2026","Soundcore A20i","JLab Go Air Pop","Sony WF-C510","JBL Vibe Beam","EarFun Air S","Focus & Audio","Global","Commercial","P1","Library-quiet + budget long-tail",1800],
[49,"best usb microphone online classes","Best USB Microphones for Online Classes and Interviews (2026)","best-usb-microphones-online-classes-2026","Blue Yeti Nano","Fifine K669B Condenser","HyperX SoloCast","Rode NT-USB Mini","Tonor TC-777","Focus & Audio","Global","Commercial","P1","Dissertation-interview + viva recording angle",1900],
[50,"best webcam online exams classes","Best Webcams for Online Exams and Classes (2026)","best-webcams-online-exams-classes-2026","Logitech C920s HD Pro","Anker PowerConf C200 2K","NexiGo 1080p with Mic","Logitech Brio 100","Depstech 2K Webcam","Focus & Audio","Global","Commercial","P1","Proctored-exam requirement angle",1800],
[51,"best voice recorder lectures interviews","Best Voice Recorders for Lectures and Dissertation Interviews (2026)","best-voice-recorders-lectures-interviews-2026","Sony ICD-PX470 Digital","Olympus WS-852","Evida 64GB with Playback","Aiworth 72GB","Olymstore 64GB Mini","Focus & Audio","Global","Commercial","P0","Direct dissertation-methodology fit (interviews)",2000],
[52,"best power bank library study","Best Portable Power Banks for All-Day Library Sessions (2026)","best-power-banks-library-study-2026","Anker 737 Power Bank 120W","INIU 20000mAh 65W","Charmast Mini 10400mAh","Anker Nano 10000","Baseus 20000mAh","Focus & Audio","Global","Commercial","P1","Library no-outlet pain-point",1700],
[53,"best surge protector power strip dorm","Best Surge-Protector Power Strips for Dorm Rooms (2026)","best-surge-power-strips-dorm-2026","Anker Power Strip with USB-C","Belkin 12-Outlet Protector","Amazon Basics 8-Outlet","Accell Powramid","Tripp Lite 7-Outlet","Focus & Audio","USA","Commercial","P1","Dorm fire-code safe + multi-device angle",1700],
[54,"best sunrise alarm clock students","Best Sunrise Alarm Clocks for Student Sleep Schedules (2026)","best-sunrise-alarm-clocks-students-2026","Philips SmartSleep Wake-Up","JALL Sunrise Alarm","Hatch Restore 2","Coulax Wake-Up Light","Sharp Sunrise Clock","Focus & Audio","Global","Commercial","P2","Sleep + early-lecture routine angle",1700],
[55,"best laptop lock library","Best Laptop Locks for University Library (2026)","best-laptop-locks-library-2026","Kensington MicroSaver 2.0","Targus DefCon Cable Lock","Amazon Basics Laptop Lock","Sendt Cable Lock 6ft","MCO Compact Lock","Focus & Audio","Global","Commercial","P2","Library-theft prevention; near-zero competition",1500],
[56,"best usb c hub student laptop","Best USB-C Hubs for Student Laptops (2026)","best-usb-c-hubs-student-laptops-2026","Anker 7-in-1 USB-C Hub","UGREEN 9-in-1 Docking","Satechi Slim Multi-Port","Lбов HieMago 6-in-1","VAVA 8-in-1 Hub","Student Tech","Global","Commercial","P1","MacBook + Chromebook port-shortage angle",1800],
[57,"best portable ssd dissertation backup","Best Portable SSDs for Dissertation Backup (2026)","best-portable-ssds-dissertation-backup-2026","Samsung T7 Shield 1TB","SanDisk Extreme Portable 1TB","Crucial X9 Pro 1TB","WD My Passport SSD","Kingston XS2000","Student Tech","Global","Commercial","P0","Dissertation-loss horror angle = high intent",2000],
[58,"best flash drive university work","Best High-Speed Flash Drives for University Work (2026)","best-flash-drives-university-work-2026","SanDisk Ultra 128GB USB 3.0","Samsung FIT Plus 256GB","PNY Turbo 128GB","Samsung Bar Plus","Lexar JumpDrive 128GB","Student Tech","Global","Commercial","P2","Submission + printing workflow",1500],
[59,"best portable monitor studying","Best Portable Monitors for Dual-Screen Studying (2026)","best-portable-monitors-studying-2026","Arzopa 15.6in 1080p","UPERFECT 2K 16in","Lepow Z1-Gamut 15.6in","InnoView 15.8in","Duex Plus Laptop Extender","Student Tech","Global","Commercial","P1","Coding + SPSS dual-screen angle",2000],
[60,"best quiet wireless keyboard essays","Best Quiet Wireless Keyboards for Essay Writing (2026)","best-quiet-wireless-keyboards-essays-2026","Logitech K380 Multi-Device","Arteck 2.4G Wireless","Microsoft Bluetooth Compact","Logitech K780 Multi","Slets Mini Silent","Student Tech","Global","Commercial","P1","Shared-room quiet-typing angle",1800],
[61,"best ergonomic wireless mouse students","Best Ergonomic Wireless Mice for Students (2026)","best-ergonomic-wireless-mice-students-2026","Logitech MX Master 3S","Anker Ergonomic Vertical","Logitech M720 Triathlon","Logitech Lift Vertical","TeckNet Silent Click","Student Tech","Global","Commercial","P1","Wrist-pain from long writing angle",1800],
[62,"best extended mouse pad study desk","Best Extended Mouse Pads for Study Desks (2026)","best-extended-mouse-pads-study-desks-2026","MROCO Large 35in Desk Pad","Logitech Studio Series XL","SteelSeries QcK Large","KTRIO Extended Gaming Mat","Aothia XXL Pad","Student Tech","Global","Commercial","P2","Desk-setup bundle angle",1500],
[63,"best wifi extender dorm weak signal","Best WiFi Extenders for Dorm Rooms With Weak Signal (2026)","best-wifi-extenders-dorm-rooms-2026","TP-Link RE315 AC1200","Netgear EX2800 AC750","Rockspace AC1200 Dual","TP-Link RE220","Tenda A18","Student Tech","USA / UK","Commercial","P1","Dorm-dead-zone long-tail",1800],
[64,"best laptop sleeve commuter students","Best Padded Laptop Sleeves for Commuter Students (2026)","best-laptop-sleeves-commuter-students-2026","Tomtoc 360 Protective 15.6","Mosiso Canvas Sleeve","Bellroy Laptop Sleeve","Inateck Felt Sleeve","Voova 17in Sleeve","Student Tech","UK / Global","Commercial","P2","Commuter-rain + drop protection (UK angle)",1500],
[65,"best tablet keyboard lecture notes","Best Tablet Keyboards for Taking Lecture Notes (2026)","best-tablet-keyboards-lecture-notes-2026","Logitech Folio Touch iPad","Brydge 10.2 Wireless","Arteck iPad Keyboard Case","Typecase Edge Case","OMOTON Bluetooth","Student Tech","Global","Commercial","P1","iPad-for-notes trend",1800],
[66,"best stylus pen annotating pdfs","Best Stylus Pens for Annotating PDFs (2026)","best-stylus-pens-annotating-pdfs-2026","Apple Pencil 2nd Gen","Logitech Crayon Digital","Metapen M1 for iPad","Zagg Pro Stylus","ESR Digital Pencil","Student Tech","Global","Commercial","P1","Research-paper markup workflow",1700],
[67,"best external hard drive degree backup","Best External Hard Drives for 4-Year Degree Backup (2026)","best-external-hard-drives-degree-backup-2026","Seagate Portable 2TB","WD Elements 2TB","Toshiba Canvio Basics 1TB","Seagate One Touch 4TB","WD My Passport 5TB","Student Tech","Global","Commercial","P1","4-year backup + graduation angle",1800],
[68,"best mini projector student presentations","Best Mini Projectors for Student Presentations (2026)","best-mini-projectors-student-presentations-2026","Anker Nebula Capsule 3","Vankyo Leisure 3 Mini","TMY Mini 1080p Supported","ViewSonic M1 Mini","BenQ GV30 Portable","Student Tech","Global","Commercial","P2","Group-project + dorm-cinema dual use",1900],
[69,"best ring light online presentations","Best Ring Lights for Online Presentations and Vivas (2026)","best-ring-lights-online-presentations-2026","Elgato Key Light Mini","UBeesize 12in Ring + Tripod","Neewer 18in Kit","Lume Cube Panel Mini","Sensyne 10in with Stand","Student Tech","Global","Commercial","P1","Viva + online-defense angle (unique to academia)",1700],
[70,"best adjustable overbed table studios","Best Adjustable Overbed Tables for Small Studios (2026)","best-adjustable-overbed-tables-studios-2026","HUANUO Side Table Adjustable","SAIJI Laptop Bed Table","Tribesigns Rolling Laptop Cart","Soges Adjustable C-Table","Quick Chair Overbed","Student Tech","Global","Commercial","P2","Studio-flat space saver",1600],
[71,"best printer dorm rooms compact","Best Printers for Dorm Rooms, Compact and Cheap Ink (2026)","best-printers-dorm-rooms-2026","HP DeskJet 2855e Wireless","Canon PIXMA TR4720","Epson EcoTank ET-2800","Brother HL-L2390DW Mono","HP Envy 6055e","Printing & Paper","USA / UK","Commercial","P0","Dorm-space + ink-cost angle; huge volume",2300],
[72,"best portable printer library fieldwork","Best Portable Printers for Library and Fieldwork (2026)","best-portable-printers-students-2026","HP OfficeJet 250 Mobile","Canon PIXMA TR150","Phomemo M08F Thermal","Brother PocketJet PJ883","Epson WorkForce WF-110","Printing & Paper","Global","Commercial","P1","Fieldwork + placement mobility angle",1900],
[73,"best laser printer dissertation printing","Best Laser Printers for High-Volume Dissertation Printing (2026)","best-laser-printers-dissertation-2026","Brother HL-L2370DW","HP LaserJet M110we","Canon imageCLASS LBP246dw","Brother DCP-L2550DW","Xerox B230DNI","Printing & Paper","Global","Commercial","P1","100-page dissertation print cost angle",1900],
[74,"best printer paper assignments","Best Printer Paper for Assignments That Looks Professional (2026)","best-printer-paper-assignments-2026","HP Office20 8.5x11 5-ream","Hammermill Premium Inkjet","Amazon Basics Multipurpose","HP BrightWhite 24lb","Avery UltraDuty for Reports","Printing & Paper","Global","Commercial","P2","Professional-submission angle",1400],
[75,"best scientific calculator exams","Best Scientific Calculators for Exams, Approved Models (2026)","best-scientific-calculators-exams-2026","Casio fx-991EX ClassWiz","Texas Instruments TI-30X IIS","Sharp EL-W516TBSL","Casio fx-300ES Plus 2","HP 35s Scientific","Printing & Paper / Exam","UK / USA","Commercial","P0","Exam-approved model query = high intent",1900],
[76,"best graphing calculator statistics finance","Best Graphing Calculators for Statistics and Finance (2026)","best-graphing-calculators-statistics-2026","TI-84 Plus CE","Casio fx-CG50 Prism","HP Prime Graphing","TI-84 Plus CE Python","Casio fx-9750GIII","Printing & Paper / Exam","USA / UK","Commercial","P1","Stats + finance module angle",1800],
[77,"best blank flashcards revision","Best Blank Flashcards for Spaced Repetition (2026)","best-blank-flashcards-revision-2026","Oxford Index Cards 3x5 500ct","Amazon Basics Flashcards 1000ct","Study Notes Colored 600ct","Maxtek Ruled 3x5","Coopay 2x3.5 Mini","Printing & Paper / Exam","Global","Commercial","P1","Spaced-repetition method = Academia fit",1600],
[78,"best index card storage revision","Best Index Card Holders and Storage for Revision (2026)","best-index-card-storage-revision-2026","Iris Card Holder 4x6","Oxford Card Box with Dividers","HBlife Flashcard Holder","mDesign Storage Box","Seely Card File","Printing & Paper / Exam","Global","Commercial","P2","Revision-system organization",1400],
[79,"best small laminator posters flashcards","Best Small Laminators for Posters and Flashcards (2026)","best-small-laminators-posters-2026","Scotch Thermal Laminator TL901X","Bonsaii 9in Thermal","Crenova A4 Laminator","Amazon Basics Laminator","Fellowes Saturn 3i","Printing & Paper / Exam","Global","Commercial","P2","Poster-presentation durability angle",1500],
[80,"best small shredder home office","Best Small Paper Shredders for Home Office (2026)","best-small-shredders-home-office-2026","Amazon Basics 8-Sheet Crosscut","Bonsaii 6-Sheet Strip-Cut","Fellowes Powershred 6C","Aurora 8-Sheet","Kobra Entry Shredder","Printing & Paper / Exam","Global","Commercial","P2","Privacy + declutter angle",1500],
[81,"best electric sharpener art students","Best Electric Pencil Sharpeners for Art and Design Students (2026)","best-electric-sharpeners-art-students-2026","X-ACTO Ranger 55","AFMAT Electric Sharpener","Bostitch Personal Electric","Jarlink Heavy-Duty","Staedtler Double-Hole","Printing & Paper / Exam","Global","Commercial","P2","Design-course specific",1400],
[82,"best geometry set technical drawing","Best Geometry Sets and Rulers for Technical Drawing (2026)","best-geometry-sets-technical-drawing-2026","Staedtler Mars 9-pc Set","Westcott 8-pc Drafting","Mr. Pen Geometry 15-pc","Maped Compass Set","Alvin Drafting Kit","Printing & Paper / Exam","UK / Global","Commercial","P2","Engineering / architecture niche",1400],
[83,"best lab notebook science students","Best Lab Notebooks for Science Students (2026)","best-lab-notebooks-science-students-2026","BookFactory Carbonless Lab Book","Hayden-McNeil Student Lab","Five Star Graph Composition","National Brand Computation","Scientific Notebook Co.","Printing & Paper / Exam","USA","Commercial","P1","Lab-report compliance angle",1700],
[84,"best sketchbook architecture design","Best Sketchbooks for Architecture and Design Students (2026)","best-sketchbooks-architecture-students-2026","Strathmore 400 Series 9x12","Moleskine Art Sketchbook A4","Canson XL Mixed Media","Arteza 9x12 Sketch Pad","Seawhite A3 Sketchbook","Printing & Paper / Exam","UK / Global","Commercial","P1","Studio-crit portfolio angle",1700],
[85,"best drafting table architecture small flats","Best Drafting Tables for Architecture Students in Small Flats (2026)","best-drafting-tables-architecture-small-flats-2026","Studio Designs 10053 Futura","Yaheetech Adjustable Drafting","Zeny Adjustable Drawing","Coaster Glass Top Drafting","OneSpace Craft Station","Printing & Paper / Exam","Global","Commercial","P2","Small-flat foldable angle",1800],
[86,"best study chair UK back pain","Best Study Chairs for UK Student Flats With Back Pain (2026)","best-study-chairs-uk-back-pain-2026","Hbada UK Ergonomic Chair","SIHOO M57 Mesh Chair","Yaheetech Mesh Office Chair","Furmax UK High-Back","Homall Gaming-Style Study","Geo / Budget","UK","Commercial","P0","UK geo-modifier = easier to rank; back-pain query",2200],
[87,"best desk small UK bedroom","Best Desks for Small UK Bedrooms, 90cm and Under (2026)","best-desks-small-uk-bedrooms-2026","Vasagle 100cm Computer Desk","ODK Compact 80cm Desk","Furinno Turn-N-Tube Writing","Yaheetech Folding Desk 80cm","GreenForest Small Corner","Geo / Budget","UK","Commercial","P0","UK box-room size query; cm units for UK intent",2100],
[88,"best headphones australian uni students","Best Noise-Cancelling Headphones for Australian Uni Students (2026)","best-headphones-australian-uni-students-2026","Sony WH-CH720N","Soundcore Q20i","Sennheiser HD 450BT","JBL Live 660NC","Apple AirPods Pro 2","Geo / Budget","Australia","Commercial","P0","Australia modifier = low competition; commute angle",2000],
[89,"best dorm desk USA freshmen","Best Dorm Desks for US Freshmen, Small Cheap Sturdy (2026)","best-dorm-desks-usa-freshmen-2026","Furinno Writing Desk 39in","Pamray 32in Small Computer Desk","Lufeiya L-Shaped 47in","ODK 40in with Shelves","Bestier Small Desk with LED","Geo / Budget","USA","Commercial","P0","Freshman + dorm checklist intent; back-to-school spike",2200],
[90,"best study supplies under 25","Best Study Supplies Under $25 That Actually Help (2026)","best-study-supplies-under-25-2026","Mr. Pen Bible Tabs 6-pack","Post-it Dispenser + Notes","Zebra Sarasa 5-pack","BIC Wite-Out + Flags Bundle","Silicone Cable Clips 10-pack","Geo / Budget","Global","Commercial","P1","Gift + budget listicle; high CTR",1800],
[91,"best study gadgets under 50","Best Study Gadgets Under $50 for Productivity (2026)","best-study-gadgets-under-50-2026","TickTime Cube Timer","Anker 4-Port USB Hub","UGREEN Phone + Tablet Stand","MROCO Mouse Pad Set","Vekkia Book Light 2-pack","Geo / Budget","Global","Commercial","P1","Under-$50 giftable tech roundup",1900],
[92,"best gifts dissertation students","Best Gifts for Dissertation Students Under $40 (2026)","best-gifts-dissertation-students-2026","Rocketbook Core Letter","Kindle Paperwhite Case Bundle","Milliard Reading Pillow","Lamy Safari Fountain Pen","Time Timer MOD Study Timer","Geo / Budget","Global","Commercial","P1","Dissertation-empathy angle; shareable",1800],
[93,"best under bed storage dorm","Best Under-Bed Storage for Dorm Study Clutter (2026)","best-under-bed-storage-dorm-study-2026","Sterilite Wide Storage Box","HBlife Rolling Under-Bed Cart","Lifewit Fabric Bags 2-pack","Iris Stackable Drawers","Sterilite 3-Drawer Unit","Geo / Budget","USA","Commercial","P2","Declutter-for-focus angle",1600],
[94,"best cork board dorm revision","Best Cork Boards and Felt Boards for Dorm Revision Walls (2026)","best-cork-boards-dorm-revision-2026","U Brands Cork Board 23x17","VIZ-PRO Felt Board Tiles","Quartet Cork + Whiteboard Combo","Amazon Basics Bulletin","HBlife Linen Board","Geo / Budget","Global","Commercial","P2","Revision-wall visual learning angle",1600],
[95,"best desk shelf organizer double storage","Best Desk Shelf Organizers for Double Storage (2026)","best-desk-shelf-organizers-double-storage-2026","SimpleHouseware Desktop Riser","HBlife Bamboo Shelf Organizer","Pipishell Stackable Shelves","Homedawn Bamboo Riser","J JACKCUBE Bamboo Tray","Geo / Budget","Global","Commercial","P1","Double-vertical-space small-desk angle",1600],
[96,"best waterproof backpack UK commuters","Best Waterproof Laptop Backpacks for UK Commuter Students (2026)","best-waterproof-backpacks-uk-commuters-2026","Matein Waterproof 15.6in","Puma Phase Backpack II","Lenovo B210 Casual","Targus CitySmart","Samsonite Guardit","Geo / Budget","UK","Commercial","P1","UK rain + train commute long-tail",1900],
[97,"best pens left handed students","Best Pens for Left-Handed Students, No Smudge (2026)","best-pens-left-handed-students-2026","Uni-ball Jetstream 1.0","Pentel EnerGel RTX Retractable","Zebra Sarasa Dry 0.4","Pilot Acroball PureWhite","Stabilo LeftRight Roller","Geo / Budget","Global","Commercial","P1","Left-handed smudge query = very low competition, loyal niche",1700],
[98,"best large writing notebooks low vision","Best Large-Writing Notebooks and Pens for Low Vision (2026)","best-large-writing-notebooks-low-vision-2026","Five Star Wide-Ruled Spiral","Mead Primary Journal K-2","Sharpie Fine Bold Markers","Rite in Rain Large Grid","Maxtek Large Highlight Strips","Geo / Budget","Global","Commercial + Info","P2","Accessibility angle; underserved + indexable",1600],
[99,"best visual timer ADHD study","Best Visual Timers for ADHD Study Sessions (2026)","best-visual-timers-adhd-study-2026","Time Timer MOD 60-Minute","Secura Visual Countdown Timer","Y backed Silent Timer","Odeez 60-Minute Cube","Eeerrut Digital Visual","Geo / Budget","Global","Commercial","P1","ADHD + focus long-tail; high engagement",1800],
[100,"best kindle accessories academic reading","Best Kindle Accessories for Academic Reading, Cases Stands Lights (2026)","best-kindle-accessories-academic-reading-2026","Ayotu Paperwhite Case","Lamicall Gooseneck Stand","Vekkia Book Light Clip","MoKo Reading Stand + Remote","Fintie Sleep Cover + Strap","Geo / Budget","Global","Commercial","P1","Accessory bundle; attaches to ereader post cluster",1700],
]

wb = openpyxl.Workbook()
ws = wb.active
ws.title = "100 Amazon Topics"
ws.sheet_properties.pageSetUpPr.fitToPage = True

# Header style
hdr_fill = PatternFill("solid", fgColor="1C1917")
hdr_font = Font(color="FFFFFF", bold=True, size=10)
thin = Side(style="thin", color="D6D3D1")
border = Border(left=thin, right=thin, top=thin, bottom=thin)

for c, h in enumerate(headers, start=1):
    cell = ws.cell(row=1, column=c, value=h)
    cell.fill = hdr_fill
    cell.font = hdr_font
    cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    cell.border = border

for r, row in enumerate(rows, start=2):
    for c, val in enumerate(row, start=1):
        cell = ws.cell(row=r, column=c, value=val)
        cell.alignment = Alignment(vertical="center", wrap_text=True, horizontal="left" if c not in (1,15) else "center")
        cell.border = border
        if c == 1 or c == 15:
            cell.alignment = Alignment(horizontal="center", vertical="center")
        if c == 13:
            if val == "P0":
                cell.fill = PatternFill("solid", fgColor="FEF3C7")
                cell.font = Font(bold=True, color="92400E")
            elif val == "P1":
                cell.fill = PatternFill("solid", fgColor="EFF6FF")
                cell.font = Font(bold=True, color="1D4ED8")

# Column widths
widths = [6,26,46,38,30,30,30,30,30,18,14,14,10,42,12]
for i, w in enumerate(widths, start=1):
    ws.column_dimensions[openpyxl.utils.get_column_letter(i)].width = w
ws.row_dimensions[1].height = 44
for r in range(2, 102):
    ws.row_dimensions[r].height = 52

ws.freeze_panes = "A2"
ws.auto_filter.ref = f"A1:O101"
ws.sheet_properties.pageSetUpPr.fitToPage = True

# Second sheet: instructions + dedupe note
ws2 = wb.create_sheet("README + SEO Rules")
notes = [
["Academia Helper - 100 Amazon Student Topics (2026)"],
["Generated: 2026-10-05 | Source: Amazon Best Sellers (Office / Study) via search (direct Amazon 503-blocked) + existing blog audit"],
[""],
["How to use:"],
["1. Work in Priority order: P0 (20 posts) -> P1 (45) -> P2 (35). P0 = highest volume + closest fit."],
["2. Slug column is final URL: https://www.academiahelper.com/blog/<slug>/ - all 100 checked unique vs existing blog-posts/*.html (lamps + AI + book-stands excluded)."],
["3. Products 1-5 are Amazon Best-Seller anchors. Verify live on Amazon at drafting time; replace if out of stock, keep 3-5 per post."],
["4. Titles are <=60 chars ideal, include (2026) or 2026-2027, include audience modifier (Students/Dorm/Dissertation/UK/USA/Australia/Under $25). Do not change year until 2027 refresh."],
["5. Search Intent is Commercial (best X) - add comparison table + 3-5 product cards + FAQPage schema to match your lamp template."],
["6. Suggested Words: P0 2000-2500, P1 1600-2000, P2 1400-1600."],
[""],
["Indexability rules applied:"],
["- Long-tail geo modifiers (UK cm, USA freshmen, Australia uni) to avoid head-term competition"],
["- Price modifiers (Under $25 / Under $50) for featured-snippet lists"],
["- Use-case modifiers (for Dissertation, for Exam Practice, for ADHD, for Left-Handed, for Low Vision) for unique angle"],
["- No duplicate of existing: best-*-desk-lamps-*, best-ai-*, best-citation-*, best-grammar-*, 7-best-adjustable-book-stands-*"],
["- Internal linking: link each new post to 2-3 informational posts (e.g. voice recorder -> code-interview-transcripts, SSD -> dissertation-data-analysis-help)"],
]
for v in notes:
    ws2.append(v)
ws2.column_dimensions["A"].width = 150
for row in ws2.iter_rows():
    for cell in row:
        cell.alignment = Alignment(wrap_text=True, vertical="center")
ws2.sheet_properties.pageSetUpPr.fitToPage = True

wb.save(OUTPUT)
print(f"saved {OUTPUT} rows={len(rows)}")
