const names = ["Edinburgh Castle", "Aberdeen", "Fingal's Cave", "Loch Ness", "New Lanark", "Luskentyre Beach", "Dunrobin Castle"];

const descriptions = [ [
    "Edinburgh Castle is a fortress located on Castle Rock in the city of Edinburgh, the capital of Scotland. This fortress was built in the XII century and served as the residence of the Scottish kings. Nowadays, it has become the main tourist attraction of the city.",
    "Edinburgh Castle is surrounded by a pentagon-shaped wall. The castle has many buildings, including the royal apartments, the Chapel of St. Margaret, the Arsenal building etc.",
    "One of the most famous sights of the castle is the Chapel of St. Margaret built in the XIII century. It is one of the oldest buildings in Scotland. The grave of King Robert the Bruce is located here.",
    "Another famous landmark is the Great Hall built in the XV century. It was used for banquets and other special events.",
    "It is also worth noting that the Stone of Destiny, which was used at the coronation of the Scottish monarchs, is kept in Edinburgh Castle. This stone was stolen by the British in 1296, but in 1996 it was returned back to Scotland."
    ], [
    "Aberdeen is a city located in the north-east of Scotland. It is the third largest city in Scotland after Glasgow and Edinburgh. The city is known for its rich historical heritage, cultural attractions and educational institutions.",
    "The city is known for its universities, including the University of Aberdeen, which is one of the leading research universities in the UK.",
    "Aberdeen's architectural landmarks include St. Magnus Cathedral, which is one of the largest Gothic cathedrals in Scotland, and the Aberdeen Tower, which is the symbol of the city.",
    "Aberdeen has many parks and gardens, the largest of which are the Royal Park and the Botanical Garden, where you can see many rare northern plants.",
    "The city is also known for its festivals and events, including the Aberdeen International Film Festival and the Aberdeen Arts Festival."
    ], [
    "Located off the coast of Scotland, Fingal's Cave is a natural wonder that has captivated the imagination of visitors for centuries. The cave, nestled on the uninhabited island of Staffa, is steeped in history, mythology, and breathtaking beauty.",
    "The cave's association with mythology, folklore, and local legend only adds to its allure. According to local legend, the cave was named after the legendary Scottish hero, Fingal.",
    "Fingal's Cave is also significant for its geological features. The cave is formed from hexagonal basalt columns, which were created when molten lava cooled and solidified rapidly underwater.",
    "Visitors can explore Fingal's Cave through guided tours or self-guided visits by boat. Inside the cave, visitors can marvel at the towering ceiling, admire the intricately formed basalt formations, and listen to the echoes of their footsteps. Swimming and snorkeling in the crystal-clear waters surrounding the cave are also popular activities."
    ], [
    "Loch Ness is one of the most intriguing bodies of water in the world due to its rich history and legends. Evidence of human presence dates back to the Mesolithic period, and it was during the Middle Ages that it became famous for its mythical creature, known as 'Nessie.'",
    "There are several theories about Nessie, including that it is a prehistoric plesiosaur, a giant eel, or a misidentification of a known animal. One theory proposes that it is a manifestation of the collective unconsciousness of the people who live near the loch. Another theory suggests that it is a guardian of the loch, protecting its secrets and treasures.",
    "Loch Ness is said to hold many secrets and treasures, including lost artifacts and the power to heal and transform humanity."
    ], [
    "New Lanark is a picturesque village in South Lanarkshire, Scotland, with a rich history and a fascinating story spanning over two centuries. It has transformed from a small cotton mill village to a thriving tourist destination. Founded in 1785 by David Dale, it quickly grew and became one of the largest cotton mill centers in Scotland. However, in the mid-20th century, the industry declined, leaving many of the village's iconic buildings abandoned and derelict.",
    "In the late 1960s, a group of visionaries restored the village, including the famous social reformer Robert Owen. Today, visitors can explore the restored mills and several museums, including the New Lanark Museum. New Lanark's charm lies in its blend of industrial heritage and natural beauty, with stunning architecture and opportunities for outdoor enthusiasts. Its vibrant community spirit and cultural events make it a unique destination, and its commitment to sustainability is an inspiration to others."
    ], [
    "Luskentyre Beach, located on the west coast of Lewis and Harris in Scotland, is a secluded and natural gem waiting to be discovered. Surrounded by rugged hills and dunes, the beach offers a sense of seclusion and peace that is hard to find. Its crystal-clear waters are home to a variety of marine life, including fish, dolphins, and porpoises. The beach is also known for its 'singing sands' — a unique phenomenon that is caused by the shape of the sand particles and can only be found in a few places around the world.",
    "Luskentyre Beach also has a rich history and culture, with ancient Viking settlements once being present. The remnants of these settlements can still be seen in the form of ruined buildings and artifacts scattered throughout the beach.",
    "With its pristine environment, unique geological features, and abundant wildlife, Luskentyre offers an unforgettable experience for those who seek adventure, relaxation, and connection with nature."
    ], [
    "Dunrobin Castle is a medieval fortress located in the heart of Scotland with an illustrious history and stunning architecture. It is a must-visit destination for anyone interested in exploring Scotland's rich heritage. The castle dates back to the 14th century and has undergone numerous renovations and expansions over the centuries. The most significant transformation took place in the 19th century when the castle was redesigned in the Gothic Revival style. The castle's architecture blends medieval and Renaissance styles and features intricate stone carvings, battlements, and imposing towers. The castle's interior showcases opulent decorative arts from the 17th to 19th centuries, with grand entrance halls, ornate ceilings, chandeliers, and state rooms filled with antique furniture and fine art. The castle's gardens and grounds cover over 180 acres and feature beautifully manicured lawns, tranquil ponds, and a variety of flora and fauna. The castle is open daily from 10 am to 5 pm from April to October and from 10 am to 4 pm from November to March."
]];

const namesRu = ["Эдинбургский Замок", "Абердин", "Фингалова Пещера", "Лох-Несс", "Нью-Ланарк", "Пляж Ласкентайр", "Замок Данробин"];

const descriptionsRu = [ [
    "Эдинбургский замок — это крепость, расположенная на Замковой скале в городе Эдинбурге, столице Шотландии. Эта крепость была построена в XII веке и служила резиденцией шотландских королей. В настоящее время она является главной туристической достопримечательностью города.",
    "Эдинбургский замок окружен пятиугольной стеной. Внутри замка находятся различные здания, включая королевские апартаменты, часовню Святой Маргариты, здание Арсенала и многое другое.",
    "Одной из самых известных достопримечательностей замка является Часовня Святой Маргариты, которая была построена в XIII веке. Это одно из старейших зданий в Шотландии. Здесь находится могила короля Роберта Брюса.",
    "Еще одна известная достопримечательность — это Большой зал, который был построен в XV веке. Он использовался для проведения банкетов и других торжественных мероприятий.",
    "Также стоит отметить, что в Эдинбургском замке хранится Камень Судьбы, который использовался при коронации шотландских монархов. Этот камень был украден англичанами в 1296 году, но в 1996 году он был возвращен обратно в Шотландию."
    ], [
    "Абердин — это город, расположенный на северо-востоке Шотландии. Он является третьим по величине городом в Шотландии после Глазго и Эдинбурга. Город известен своим богатым историческим наследием, культурными достопримечательностями и образовательными учреждениями.",
    "Город известен своими университетами, включая Университет Абердина, который является одним из ведущих исследовательских университетов в Великобритании.",
    "Архитектурные достопримечательности Абердина включают собор Святого Махара, который является одним из крупнейших готических соборов в Шотландии, и Абердинскую башню, которая является символом города.",
    "В Абердине много парков и садов, крупнейшие из которых — Королевский парк и Ботанический сад, где можно увидеть множество редких северных видов растений.",
    "Город также известен своими фестивалями и событиями, включая Международный кинофестиваль Абердина и Фестиваль искусств Абердина."
    ], [
    "Фингалова Пещера, расположенная у побережья Шотландии, является чудом природы, которое на протяжении веков завораживало воображение посетителей. Пещера, расположенная на необитаемом острове Стаффа, богата историей, мифологией и захватывающей дух красотой.",
    "Связь пещеры с мифологией, фольклором и местными легендами только усиливает ее очарование. Согласно местной легенде, пещера была названа в честь легендарного шотландского героя Фингала.",
    "Фингалова Пещера также примечательна своими геологическими особенностями. Пещера образована шестиугольными базальтовыми колоннами, которые образовались, когда расплавленная лава быстро охлаждалась и затвердевала под водой.",
    "Посетители могут исследовать пещеру с помощью экскурсий или самостоятельно на лодке. Внутри пещеры посетители могут полюбоваться высоким потолком, причудливыми базальтовыми образованиями и послушать эхо своих шагов. Плавание и сноркелинг в кристально чистых водах, окружающих пещеру, также являются популярными видами активного отдыха."
    ], [
    "Озеро Лох-Несс является одним из самых интригующих водоемов в мире благодаря своей богатой истории и легендам. Свидетельства присутствия человека относятся к периоду мезолита, и именно в средние века оно прославилось своим мифическим существом, известным как 'Несси'.",
    "Существует несколько теорий о Несси, в том числе, что это доисторический плезиозавр, гигантский угорь или неправильная идентификация известного животного. Одна из теорий предполагает, что это проявление коллективного бессознательного людей, живущих вблизи озера. Другая теория предполагает, что это страж озера, оберегающий его секреты и сокровища.",
    "Говорят, что озеро Лох-Несс хранит множество тайн и сокровищ, в том числе утраченные артефакты и силу исцелять и преображать человечество."
    ], [
    "Нью-Ланарк — живописная деревня в Южном Ланаркшире, Шотландия, с богатой и увлекательной историей, насчитывающей более двух столетий. Из небольшой деревушки на хлопчатобумажной фабрике она превратилась в процветающее туристическое направление. Основанный в 1785 году Дэвидом Дейлом, он быстро вырос и стал одним из крупнейших центров по производству хлопка в Шотландии. Однако в середине 20-го века промышленность пришла в упадок, в результате чего многие культовые здания деревни были заброшены.",
    "В конце 1960-х годов группа провидцев восстановила деревню, в том числе знаменитый социальный реформатор Роберт Оуэн. Сегодня посетители могут осмотреть восстановленные мельницы и несколько музеев, в том числе музей Нью-Ланарка. Очарование Нью-Ланарка заключается в сочетании промышленного наследия и природной красоты с потрясающей архитектурой и возможностями для любителей активного отдыха. Яркий общественный дух и культурные мероприятия делают его уникальным местом, а его приверженность экологичности вдохновляет других."
    ], [
    "Пляж Ласкентайр, расположенный на западном побережье Льюиса и Харриса в Шотландии, является уединенной природной жемчужиной, которая ждет своего открытия. Окруженный скалистыми холмами и дюнами, пляж дарит ощущение уединения и покоя, которое трудно найти. В его кристально чистых водах обитают разнообразные морские обитатели, включая рыб, дельфинов и морских свинок. Пляж также известен своими 'поющими песками' — уникальным явлением, которое обусловлено формой частиц песка и которое можно встретить лишь в нескольких местах по всему миру.",
    "Пляж Ласкентайр также имеет богатую историю и культуру, здесь когда-то были поселения древних викингов. Остатки этих поселений все еще можно увидеть в виде разрушенных зданий и артефактов, разбросанных по всему пляжу.",
    "Благодаря своей нетронутой окружающей среде, уникальным геологическим особенностям и обилию дикой природы, Ласкентайр предлагает незабываемые впечатления для тех, кто ищет приключений, отдыха и единения с природой."
    ], [
    "Замок Данробин - это средневековая крепость, расположенная в самом сердце Шотландии, с богатой историей и потрясающей архитектурой. Это обязательное место для посещения всем, кто интересуется богатым наследием Шотландии. Замок был построен в 14 веке и на протяжении веков претерпевал многочисленные реконструкции и расширения. Наиболее значительные преобразования произошли в 19 веке, когда замок был перестроен в стиле возрождения готики. Архитектура замка сочетает в себе средневековый и ренессансный стили и отличается замысловатой резьбой по камню, зубчатыми стенами и внушительными башнями. Интерьер замка демонстрирует богатое декоративно-прикладное искусство 17-19 веков: величественные вестибюли, богато украшенные потолки, люстры и парадные залы, наполненные антикварной мебелью и произведениями изобразительного искусства. Сады и территория замка занимают более 180 акров и включают в себя красиво подстриженные газоны, тихие пруды и разнообразную флору и фауну. Замок открыт ежедневно с 10:00 до 17:00 с апреля по октябрь и с 10:00 до 16:00 с ноября по март."
]];

let language = "ENG";
const chapters = document.querySelectorAll(".text");

function languageToggle(index) {
    if (language == "ENG") {
        if (index === 3) {
            chapters[1].querySelector(".name").textContent = namesRu[3];
            document.querySelectorAll(".translate")[1].textContent = "Original Version"
            for (let i = 0; i < descriptions[3].length; i++) {
                Array(chapters[1].querySelectorAll("p"))[0][i].textContent = descriptionsRu[index][i];
            }
        }
        else if (index == 1) {
            chapters[2].querySelector(".name").textContent = namesRu[1];
            document.querySelectorAll(".translate")[2].textContent = "Original Version"
            for (let i = 0; i < descriptions[1].length; i++) {
                Array(chapters[2].querySelectorAll("p"))[0][i].textContent = descriptionsRu[1][i];
            }
        }
        else if (index == 2) {
            chapters[3].querySelector(".name").textContent = namesRu[2];
            document.querySelectorAll(".translate")[3].textContent = "Original Version"
            for (let i = 0; i < descriptions[2].length; i++) {
                Array(chapters[3].querySelectorAll("p"))[0][i].textContent = descriptionsRu[2][i];
            }
        }
        else {
            chapters[index].querySelector(".name").textContent = namesRu[index];
            document.querySelectorAll(".translate")[index].textContent = "Original Version"
            for (let i = 0; i < descriptions[index].length; i++) {
                Array(chapters[index].querySelectorAll("p"))[0][i].textContent = descriptionsRu[index][i];
            }
        }
        language = "RUS";
    }
    else {
        if (index === 3) {
            chapters[1].querySelector(".name").textContent = names[3];
            document.querySelectorAll(".translate")[1].textContent = "Russian Version"
            for (let i = 0; i < descriptions[3].length; i++) {
                Array(chapters[1].querySelectorAll("p"))[0][i].textContent = descriptions[index][i];
            }
        }
        else if (index == 1) {
            chapters[2].querySelector(".name").textContent = names[1];
            document.querySelectorAll(".translate")[2].textContent = "Russian Version"
            for (let i = 0; i < descriptions[1].length; i++) {
                Array(chapters[2].querySelectorAll("p"))[0][i].textContent = descriptions[1][i];
            }
        }
        else if (index == 2) {
            chapters[3].querySelector(".name").textContent = names[2];
            document.querySelectorAll(".translate")[3].textContent = "Russian Version"
            for (let i = 0; i < descriptions[2].length; i++) {
                Array(chapters[3].querySelectorAll("p"))[0][i].textContent = descriptions[2][i];
            }
        }
        else {
            chapters[index].querySelector(".name").textContent = names[index];
            document.querySelectorAll(".translate")[index].textContent = "Russian Version"
            for (let i = 0; i < descriptions[index].length; i++) {
                Array(chapters[index].querySelectorAll("p"))[0][i].textContent = descriptions[index][i];
            }
        }
        language = "ENG";
    }
}