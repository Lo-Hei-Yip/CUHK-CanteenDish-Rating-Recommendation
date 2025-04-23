const canteens = [
    { name: "New Asia College Student Canteen", chineseName: "新亞書院學生餐廳", image: "images/new-asia-canteen.jpg" },
    { name: "United College Student Canteen", chineseName: "聯合書院學生膳堂", image: "images/united-canteen.jpg" },
    { name: "Chung Chi College Student Canteen", chineseName: "眾志堂學生膳堂", image: "images/chung-chi-canteen.jpg" },
    { name: "Pommerenke Student Centre Coffee Shop", chineseName: "范克廉樓咖啡閣", image: "images/pommerenke-coffee.jpg" },
    { name: "CUHK Noodle House", chineseName: "中大麵膳坊", image: "images/cuhk-noodle-house.jpg" },
    { name: "CUHK Central Canteen", chineseName: "中大大膳堂", image: "images/cuhk-central-canteen.jpg" },
    { name: "CUHK Paper & Coffee", chineseName: "CUHK Paper & Coffee", image: "images/paper-coffee.jpg" },
    { name: "Orchid Lodge Restaurant", chineseName: "蘭苑餐廳", image: "images/orchid-lodge.jpg" }
];

// Static data from data.json
const data = {
  "users": [
    {
      "username": "Kelly",
      "ratings": [
        { "dish": "自選米線", "canteen": "New Asia College Student Canteen", "rating": 4.5, "review": "Love the customization!", "price": 28 },
        { "dish": "三餸雲南米線", "canteen": "Chung Chi College Student Canteen", "rating": 4.4, "review": "Great noodle variety!", "price": 46 },
        { "dish": "一餸兩餸雲南米線", "canteen": "Chung Chi College Student Canteen", "rating": 4.2, "review": "Tasty and affordable", "price": 34 }
      ]
    },
    {
      "username": "Alice",
      "ratings": [
        { "dish": "三餸飯", "canteen": "New Asia College Student Canteen", "rating": 4.5, "review": "Tasty!", "price": 35 },
        { "dish": "自選米線", "canteen": "New Asia College Student Canteen", "rating": 4.0, "review": "Good customization", "price": 28 }
      ]
    },
    {
      "username": "Charlie",
      "ratings": [
        { "dish": "越式扎肉米線", "canteen": "New Asia College Student Canteen", "rating": 4.2, "review": "Tasty and fresh", "price": 42 },
        { "dish": "自選米線", "canteen": "New Asia College Student Canteen", "rating": 4.5, "review": "Really customizable", "price": 28 }
      ]
    },
    {
      "username": "Diana",
      "ratings": [
        { "dish": "三餸雲南米線", "canteen": "Chung Chi College Student Canteen", "rating": 4.1, "review": "Great variety", "price": 46 },
        { "dish": "越式扎肉米線", "canteen": "New Asia College Student Canteen", "rating": 4.0, "review": "Flavorful and fresh!", "price": 42 },
        { "dish": "自選米線", "canteen": "New Asia College Student Canteen", "rating": 3.9, "review": "Customizable and fresh", "price": 28 }
      ]
    }
  ],
  "dishes": [
    {
      "name": "三餸飯",
      "canteen": "New Asia College Student Canteen",
      "price": 35
    },
    {
      "name": "兩餸飯",
      "canteen": "New Asia College Student Canteen",
      "price": 30
    },
    {
      "name": "招牌黑椒汁豬扒/雞扒飯",
      "canteen": "New Asia College Student Canteen",
      "price": 54
    },
    {
      "name": "招牌黑椒汁野菜飯",
      "canteen": "New Asia College Student Canteen",
      "price": 40
    },
    {
      "name": "燒汁海鮮炒飯",
      "canteen": "New Asia College Student Canteen",
      "price": 48
    },
    {
      "name": "自選米線",
      "canteen": "New Asia College Student Canteen",
      "price": 28
    },
    {
      "name": "越式扎肉米線",
      "canteen": "New Asia College Student Canteen",
      "price": 42
    },
    {
      "name": "招牌豬軟骨米線",
      "canteen": "New Asia College Student Canteen",
      "price": 45
    },
    {
      "name": "慢煮雞胸肉讚岐烏冬配麻藥蛋(凍食)",
      "canteen": "New Asia College Student Canteen",
      "price": 58
    },
    {
      "name": "慢煮雞胸肉飯(凍食)",
      "canteen": "New Asia College Student Canteen",
      "price": 48
    },
    {
      "name": "柚子醬油讚岐烏冬配流心蛋(凍食)",
      "canteen": "New Asia College Student Canteen",
      "price": 28
    },
    {
      "name": "花椒川味炸雞飯",
      "canteen": "New Asia College Student Canteen",
      "price": 48
    },
    {
      "name": "蜂蜜牛油炸雞飯",
      "canteen": "New Asia College Student Canteen",
      "price": 52
    },
    {
      "name": "柚子蜂蜜炸雞飯",
      "canteen": "New Asia College Student Canteen",
      "price": 50
    },
    {
      "name": "招牌醬炸雞飯",
      "canteen": "New Asia College Student Canteen",
      "price": 60
    },
    {
      "name": "韓國甜辣炸雞飯",
      "canteen": "New Asia College Student Canteen",
      "price": 52
    },
    {
      "name": "Omakase關東煮烏冬",
      "canteen": "New Asia College Student Canteen",
      "price": 56
    },
    {
      "name": "招牌漢堡",
      "canteen": "New Asia College Student Canteen",
      "price": 38
    },
    {
      "name": "他他炸魚柳漢堡",
      "canteen": "New Asia College Student Canteen",
      "price": 38
    },
    {
      "name": "炸雞漢堡",
      "canteen": "New Asia College Student Canteen",
      "price": 42
    },
    {
      "name": "黑武士漢堡(黑松露)",
      "canteen": "New Asia College Student Canteen",
      "price": 48
    },
    {
      "name": "邪惡芝士漢堡",
      "canteen": "New Asia College Student Canteen",
      "price": 46
    },
    {
      "name": "招牌雙層漢堡",
      "canteen": "New Asia College Student Canteen",
      "price": 58
    },
    {
      "name": "招牌熱狗",
      "canteen": "New Asia College Student Canteen",
      "price": 26
    },
    {
      "name": "夏威夷熱狗",
      "canteen": "New Asia College Student Canteen",
      "price": 36
    },
    {
      "name": "芝士肉醬熱狗",
      "canteen": "New Asia College Student Canteen",
      "price": 39
    },
    {
      "name": "BBQ滋味煙肉漢堡",
      "canteen": "New Asia College Student Canteen",
      "price": 44
    },
    {
      "name": "Bc'Griddles 熱香餅漢堡",
      "canteen": "New Asia College Student Canteen",
      "price": 36
    },
    {
      "name": "黑松露大啡菇漢堡",
      "canteen": "New Asia College Student Canteen",
      "price": 45
    },
    {
      "name": "大薯條",
      "canteen": "New Asia College Student Canteen",
      "price": 18
    },
    {
      "name": "花椒川味薯條",
      "canteen": "New Asia College Student Canteen",
      "price": 24
    },
    {
      "name": "招牌薯條",
      "canteen": "New Asia College Student Canteen",
      "price": 28
    },
    {
      "name": "芝士肉醬薯條",
      "canteen": "New Asia College Student Canteen",
      "price": 32
    },
    {
      "name": "邪惡芝士薯條",
      "canteen": "New Asia College Student Canteen",
      "price": 30
    },
    {
      "name": "一餸飯",
      "canteen": "United College Student Canteen",
      "price": 26
    },
    {
      "name": "兩餸飯",
      "canteen": "United College Student Canteen",
      "price": 29
    },
    {
      "name": "三餸飯",
      "canteen": "United College Student Canteen",
      "price": 33
    },
    {
      "name": "單拼米線",
      "canteen": "United College Student Canteen",
      "price": 32
    },
    {
      "name": "雙拼米線",
      "canteen": "United College Student Canteen",
      "price": 36
    },
    {
      "name": "三拼米線",
      "canteen": "United College Student Canteen",
      "price": 40
    },
    {
      "name": "雞扒田園沙律",
      "canteen": "United College Student Canteen",
      "price": 36
    },
    {
      "name": "煙三文魚田園沙律",
      "canteen": "United College Student Canteen",
      "price": 40
    },
    {
      "name": "黑胡椒煙燻火腿田園沙律",
      "canteen": "United College Student Canteen",
      "price": 36
    },
    {
      "name": "日式咖哩素魚塊飯",
      "canteen": "United College Student Canteen",
      "price": 36
    },
    {
      "name": "香酥雞辣汁磨菇飯",
      "canteen": "United College Student Canteen",
      "price": 40
    },
    {
      "name": "雞扒辣汁磨菇飯",
      "canteen": "United College Student Canteen",
      "price": 37
    },
    {
      "name": "煙三文魚辣汁磨菇飯",
      "canteen": "United College Student Canteen",
      "price": 43
    },
    {
      "name": "特製辣汁蘑菇飯",
      "canteen": "United College Student Canteen",
      "price": 30
    },
    {
      "name": "雞扒配餐肉飯",
      "canteen": "United College Student Canteen",
      "price": 32
    },
    {
      "name": "豬扒配腸仔飯",
      "canteen": "United College Student Canteen",
      "price": 36
    },
    {
      "name": "日式咖喱吉列雞扒拼春卷扒飯",
      "canteen": "United College Student Canteen",
      "price": 39
    },
    {
      "name": "日式咖喱流心芝士雞肉漢堡拼春卷飯",
      "canteen": "United College Student Canteen",
      "price": 39
    },
    {
      "name": "日式咖喱吉列豬扒拼春卷扒飯",
      "canteen": "United College Student Canteen",
      "price": 39
    },
    {
      "name": "日式咖喱唐揚雞拼春卷飯",
      "canteen": "United College Student Canteen",
      "price": 39
    },
    {
      "name": "蔥油豬扒煎蛋飯",
      "canteen": "United College Student Canteen",
      "price": 43
    },
    {
      "name": "蔥油雞扒腸仔飯",
      "canteen": "United College Student Canteen",
      "price": 43
    },
    {
      "name": "鮮茄滑蛋飯",
      "canteen": "CUHK Central Canteen",
      "price": 36
    },
    {
      "name": "日式三絲炒烏冬",
      "canteen": "CUHK Central Canteen",
      "price": 40.7
    },
    {
      "name": "大干鷄丁飯",
      "canteen": "CUHK Central Canteen",
      "price": 45.7
    },
    {
      "name": "蜜汁叉燒飯",
      "canteen": "CUHK Central Canteen",
      "price": 25.9
    },
    {
      "name": "譽香雞飯",
      "canteen": "CUHK Central Canteen",
      "price": 25.9
    },
    {
      "name": "豉油皇飯",
      "canteen": "CUHK Central Canteen",
      "price": 25.9
    },
    {
      "name": "叉燒紅腸飯",
      "canteen": "CUHK Central Canteen",
      "price": 30.6
    },
    {
      "name": "叉燒切雞飯",
      "canteen": "CUHK Central Canteen",
      "price": 30.6
    },
    {
      "name": "叉燒油雞飯",
      "canteen": "CUHK Central Canteen",
      "price": 30.6
    },
    {
      "name": "切雞紅腸飯",
      "canteen": "CUHK Central Canteen",
      "price": 30.6
    },
    {
      "name": "油雞紅腸飯",
      "canteen": "CUHK Central Canteen",
      "price": 30.6
    },
    {
      "name": "油雞切雞飯",
      "canteen": "CUHK Central Canteen",
      "price": 30.6
    },
    {
      "name": "香濃咖喱牛腩飯",
      "canteen": "CUHK Central Canteen",
      "price": 46.9
    },
    {
      "name": "香濃咖喱雞飯",
      "canteen": "CUHK Central Canteen",
      "price": 39.7
    },
    {
      "name": "兩餸飯",
      "canteen": "CUHK Central Canteen",
      "price": 28
    },
    {
      "name": "三餸飯",
      "canteen": "CUHK Central Canteen",
      "price": 35.2
    },
    {
      "name": "焗薯拼吉列豬扒餐",
      "canteen": "CUHK Noodle House",
      "price": 58
    },
    {
      "name": "焗薯拼油雞脾餐",
      "canteen": "CUHK Noodle House",
      "price": 58
    },
    {
      "name": "白汁碎蛋焗薯餐",
      "canteen": "CUHK Noodle House",
      "price": 48
    },
    {
      "name": "兩餸雲南米線",
      "canteen": "CUHK Noodle House",
      "price": 42.5
    },
    {
      "name": "三餸雲南米線",
      "canteen": "CUHK Noodle House",
      "price": 47.1
    },
    {
      "name": "吉野牛肉大碗飯",
      "canteen": "CUHK Noodle House",
      "price": 48.7
    },
    {
      "name": "豬軟骨鹵水肉燥飯",
      "canteen": "CUHK Noodle House",
      "price": 48.7
    },
    {
      "name": "韓式泡菜炸雞扒飯",
      "canteen": "CUHK Noodle House",
      "price": 48
    },
    {
      "name": "紅燒魚塊豆腐煲餐",
      "canteen": "CUHK Noodle House",
      "price": 51.8
    },
    {
      "name": "黑椒豬手煲餐",
      "canteen": "CUHK Noodle House",
      "price": 51.8
    },
    {
      "name": "香辣雞球煲配飯餐",
      "canteen": "CUHK Noodle House",
      "price": 51.8
    },
    {
      "name": "金蒜香芋肉排煲餐",
      "canteen": "CUHK Noodle House",
      "price": 51.8
    },
    {
      "name": "宮保雞丁",
      "canteen": "CUHK Noodle House",
      "price": 51.8
    },
    {
      "name": "芝士豬柳漢堡+沙律+薯條",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 32.7
    },
    {
      "name": "古到魚柳長包+沙律+薯條",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 35.5
    },
    {
      "name": "烤雞肉三文治",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 25.1
    },
    {
      "name": "鮮菜三文治",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 14.4
    },
    {
      "name": "珍寶腸大熱約+沙律+薯條",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 35.5
    },
    {
      "name": "沙爹牛肉香腸長包+沙律+薯條",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 38
    },
    {
      "name": "時菜什錦湯米線",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 38.8
    },
    {
      "name": "素菜扁意粉",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 25
    },
    {
      "name": "越南烤肉包+沙律+薯條",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 37.7
    },
    {
      "name": "豬扒珍寶腸扁意粉",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 35.5
    },
    {
      "name": "越式火車頭什錦湯河粉",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 36.6
    },
    {
      "name": "仿鮑片豆腐卜雜菜湯河粉",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 26.6
    },
    {
      "name": "越南胡椒扎肉包+沙律+薯條",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 38.8
    },
    {
      "name": "薄牛扒煎蛋扁意粉",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 34.7
    },
    {
      "name": "魚三寶湯米線",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 29.4
    },
    {
      "name": "時菜墨魚丸墨魚卷湯米線",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 30.8
    },
    {
      "name": "麻辣四川牛柳粒",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 46.5
    },
    {
      "name": "豬扒扁意粉",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 37.7
    },
    {
      "name": "麻辣牛肉米線",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 29.4
    },
    {
      "name": "雞扒古列魚柳煎蛋扁意粉",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 36.2
    },
    {
      "name": "焗鮮茄肉醬意粉",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 30.4
    },
    {
      "name": "日式茄子肉絲扁意粉",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 31
    },
    {
      "name": "炸雞髀扁意粉",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 31.6
    },
    {
      "name": "炸雞翼扁意粉",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 31.6
    },
    {
      "name": "雞扒香腸扁意粉",
      "canteen": "Pommerenke Student Centre Coffee Shop",
      "price": 27.7
    },
    {
      "name": "日式炸雞肉定食",
      "canteen": "CUHK Paper & Coffee",
      "price": 46
    },
    {
      "name": "吉列豬扒定食",
      "canteen": "CUHK Paper & Coffee",
      "price": 49
    },
    {
      "name": "炸蝦野菜天婦羅定食",
      "canteen": "CUHK Paper & Coffee",
      "price": 60
    },
    {
      "name": "汁煮日本油甘魚定食",
      "canteen": "CUHK Paper & Coffee",
      "price": 79
    },
    {
      "name": "手打牛肉漢堡扒溫泉蛋定食",
      "canteen": "CUHK Paper & Coffee",
      "price": 85
    },
    {
      "name": "芝麻醬牛肉稲庭烏冬",
      "canteen": "CUHK Paper & Coffee",
      "price": 59
    },
    {
      "name": "關東煮牛肉湯烏冬",
      "canteen": "CUHK Paper & Coffee",
      "price": 59
    },
    {
      "name": "味噌野菜湯烏冬",
      "canteen": "CUHK Paper & Coffee",
      "price": 43
    },
    {
      "name": "味噌豚肉湯烏冬",
      "canteen": "CUHK Paper & Coffee",
      "price": 49
    },
    {
      "name": "手工肉醬芝士撈丁",
      "canteen": "CUHK Paper & Coffee",
      "price": 48
    },
    {
      "name": "滑蛋雞肉丼",
      "canteen": "CUHK Paper & Coffee",
      "price": 43
    },
    {
      "name": "滑蛋醬油菇丼",
      "canteen": "CUHK Paper & Coffee",
      "price": 43
    },
    {
      "name": "薑蔥燒豬五花丼",
      "canteen": "CUHK Paper & Coffee",
      "price": 44
    },
    {
      "name": "壽喜燒牛肉丼",
      "canteen": "CUHK Paper & Coffee",
      "price": 59
    },
    {
      "name": "蒲燒鰻魚丼",
      "canteen": "CUHK Paper & Coffee",
      "price": 69
    },
    {
      "name": "蒜香牛油燒牛小扒丼",
      "canteen": "CUHK Paper & Coffee",
      "price": 89
    },
    {
      "name": "蘭苑三文治",
      "canteen": "Orchid Lodge Restaurant",
      "price": 38
    },
    {
      "name": "博士三文治",
      "canteen": "Orchid Lodge Restaurant",
      "price": 37
    },
    {
      "name": "黑松露炒蛋配牛油厚多士",
      "canteen": "Orchid Lodge Restaurant",
      "price": 40
    },
    {
      "name": "超級五層厚西多士",
      "canteen": "Orchid Lodge Restaurant",
      "price": 39
    },
    {
      "name": "雪糕香蕉船",
      "canteen": "Orchid Lodge Restaurant",
      "price": 44
    },
    {
      "name": "蘭苑自家製各式蛋糕",
      "canteen": "Orchid Lodge Restaurant",
      "price": 39
    },
    {
      "name": "自家製鮮牛肉漢堡包",
      "canteen": "Orchid Lodge Restaurant",
      "price": 40
    },
    {
      "name": "日式炸魚柳漢堡包薯條",
      "canteen": "Orchid Lodge Restaurant",
      "price": 40
    },
    {
      "name": "有機大蘑菇芝士漢堡包",
      "canteen": "Orchid Lodge Restaurant",
      "price": 42
    },
    {
      "name": "蜂蜜香草雞髀拌芝士薯蓉",
      "canteen": "Orchid Lodge Restaurant",
      "price": 39
    },
    {
      "name": "香港小食:咖哩魚蛋炸燒賣花生醬夾餅",
      "canteen": "Orchid Lodge Restaurant",
      "price": 39
    },
    {
      "name": "迷你芝士肉醬燴意粉或薯蓉",
      "canteen": "Orchid Lodge Restaurant",
      "price": 36
    },
    {
      "name": "精選雜菜雞蛋湯烏冬",
      "canteen": "Orchid Lodge Restaurant",
      "price": 36
    },
    {
      "name": "廚師精選雜菜湯烏冬或意粉",
      "canteen": "Orchid Lodge Restaurant",
      "price": 39
    },
    {
      "name": "香滑炒蛋豬仔包配鮮奶麥皮",
      "canteen": "Orchid Lodge Restaurant",
      "price": 32
    },
    {
      "name": "香茅豬扒或香煎雞蛋火腿豬骨濃湯通粉",
      "canteen": "Orchid Lodge Restaurant",
      "price": 35
    },
    {
      "name": "香煎漢堡扒火腿拼香滑炒蛋配牛油鬆餅",
      "canteen": "Orchid Lodge Restaurant",
      "price": 33
    },
    {
      "name": "煙三文魚炒蛋配牛油鬆餅",
      "canteen": "Orchid Lodge Restaurant",
      "price": 38
    },
    {
      "name": "煙肉熱香餅香滑炒蛋配薯餅",
      "canteen": "Orchid Lodge Restaurant",
      "price": 36
    },
    {
      "name": "香煎雞扒拼香滑炒蛋配鬆餅",
      "canteen": "Orchid Lodge Restaurant",
      "price": 34
    },
    {
      "name": "香脆吉列魚柳配炒蛋鬆餅",
      "canteen": "Orchid Lodge Restaurant",
      "price": 34
    },
    {
      "name": "意式蕃茄茸燴雜菜",
      "canteen": "Chung Chi College Student Canteen",
      "price": 39
    },
    {
      "name": "咖喱素肉千層拉餅",
      "canteen": "Chung Chi College Student Canteen",
      "price": 39
    },
    {
      "name": "燒烤汁燒春雞半隻",
      "canteen": "Chung Chi College Student Canteen",
      "price": 39
    },
    {
      "name": "芝士鲜茄焗吉列豬扒飯",
      "canteen": "Chung Chi College Student Canteen",
      "price": 40
    },
    {
      "name": "煎蛋滷牛肉配白飯時蔬",
      "canteen": "Chung Chi College Student Canteen",
      "price": 42
    },
    {
      "name": "蒜蓉洋葱鴛鴦烩扒飯",
      "canteen": "Chung Chi College Student Canteen",
      "price": 49
    },
    {
      "name": "元貝蟲草花蒸排骨飯",
      "canteen": "Chung Chi College Student Canteen",
      "price": 39
    },
    {
      "name": "XO醬雜錦海鮮炒飯",
      "canteen": "Chung Chi College Student Canteen",
      "price": 40
    },
    {
      "name": "鹹酸菜豬肚燉雞湯配絲苗白飯及油菜",
      "canteen": "Chung Chi College Student Canteen",
      "price": 52
    },
    {
      "name": "一餸兩餸雲南米線",
      "canteen": "Chung Chi College Student Canteen",
      "price": 34
    },
    {
      "name": "兩餸雲南米線",
      "canteen": "Chung Chi College Student Canteen",
      "price": 40
    },
    {
      "name": "三餸雲南米線",
      "canteen": "Chung Chi College Student Canteen",
      "price": 46
    },
    {
      "name": "照燒汁牛肉牛角飽伴薯條",
      "canteen": "Chung Chi College Student Canteen",
      "price": 39
    },
    {
      "name": "芝士火腿牛角飽伴薯條",
      "canteen": "Chung Chi College Student Canteen",
      "price": 39
    },
    {
      "name": "炸魚柳牛角飽伴黑松露沙律醬",
      "canteen": "Chung Chi College Student Canteen",
      "price": 38
    },
    {
      "name": "午餐肉煎蛋飯",
      "canteen": "Chung Chi College Student Canteen",
      "price": 28
    },
    {
      "name": "火腿片煎蛋飯",
      "canteen": "Chung Chi College Student Canteen",
      "price": 28
    },
    {
      "name": "粟米肉片飯",
      "canteen": "Chung Chi College Student Canteen",
      "price": 28
    },
    {
      "name": "兩餸飯",
      "canteen": "Chung Chi College Student Canteen",
      "price": 31
    },
    {
      "name": "三餸飯",
      "canteen": "Chung Chi College Student Canteen",
      "price": 35
    },
    {
      "name": "四餸飯",
      "canteen": "Chung Chi College Student Canteen",
      "price": 39
    },
    {
      "name": "泡菜豚肉溫泉蛋石鍋丼定食",
      "canteen": "Chung Chi College Student Canteen",
      "price": 56
    },
    {
      "name": "照燒雞扒丼定食",
      "canteen": "Chung Chi College Student Canteen",
      "price": 50
    },
    {
      "name": "生薑汁燒牛肉丼定食",
      "canteen": "Chung Chi College Student Canteen",
      "price": 52
    },
    {
      "name": "玉子燒鰻魚丼定食",
      "canteen": "Chung Chi College Student Canteen",
      "price": 53
    },
    {
      "name": "照燒汁牛漢堡丼定食",
      "canteen": "Chung Chi College Student Canteen",
      "price": 56
    },
    {
      "name": "咖喱唐揚雞丼定食",
      "canteen": "Chung Chi College Student Canteen",
      "price": 52
    },
    {
      "name": "咖喱吉列豬扒丼定食",
      "canteen": "Chung Chi College Student Canteen",
      "price": 54
    },
    {
      "name": "壽喜燒牛肉鍋定食",
      "canteen": "Chung Chi College Student Canteen",
      "price": 59
    },
    {
      "name": "泡菜豚肉鍋定食",
      "canteen": "Chung Chi College Student Canteen",
      "price": 55
    },
    {
      "name": "雜菌野菜鍋定食",
      "canteen": "Chung Chi College Student Canteen",
      "price": 50
    },
    {
      "name": "日式叉燒湯拉麵/烏冬",
      "canteen": "Chung Chi College Student Canteen",
      "price": 53
    },
    {
      "name": "日式豚軟骨湯拉麵/烏冬",
      "canteen": "Chung Chi College Student Canteen",
      "price": 52
    },
    {
      "name": "照燒雞唐揚雞湯拉麵/烏冬",
      "canteen": "Chung Chi College Student Canteen",
      "price": 50
    },
    {
      "name": "芝士吉列豬扒湯拉麵/烏冬",
      "canteen": "Chung Chi College Student Canteen",
      "price": 55
    },
    {
      "name": "中華胡麻醬涼烏龍麵",
      "canteen": "Chung Chi College Student Canteen",
      "price": 52
    }
  ]
};

// Display canteen showcase
function populateCanteenList() {
    const canteenList = document.getElementById("canteen-list");
    canteenList.innerHTML = "";
    canteens.forEach(canteen => {
        const div = document.createElement("div");
        div.className = "canteen";
        div.innerHTML = `
            <img src="${canteen.image}" alt="${canteen.name}" class="canteen-image">
            <p><strong>${canteen.name}</strong> (${canteen.chineseName})</p>
        `;
        canteenList.appendChild(div);
    });
}

// Display dish list
function populateDishList() {
    const dishList = document.getElementById("dish-list");
    dishList.innerHTML = "<h2>All Dishes</h2>";
    const dishesByCanteen = {};
    data.dishes.forEach(dish => {
        if (!dishesByCanteen[dish.canteen]) {
            dishesByCanteen[dish.canteen] = [];
        }
        dishesByCanteen[dish.canteen].push(dish);
    });

    Object.keys(dishesByCanteen).forEach(canteen => {
        const canteenDiv = document.createElement("div");
        canteenDiv.className = "canteen-dishes";
        const header = document.createElement("div");
        header.className = "canteen-header";
        header.innerHTML = `<h3>${canteen}</h3>`;
        const ul = document.createElement("ul");
        ul.className = "dish-list";
        ul.style.display = "none";
        dishesByCanteen[canteen].forEach(dish => {
            const li = document.createElement("li");
            li.textContent = `${dish.name} - HK$${dish.price}`;
            ul.appendChild(li);
        });
        header.addEventListener("click", () => {
            ul.style.display = ul.style.display === "none" ? "block" : "none";
        });
        canteenDiv.appendChild(header);
        canteenDiv.appendChild(ul);
        dishList.appendChild(canteenDiv);
    });
}

// Compute ratings with Bayesian averaging
function computeRatings() {
    const C = 5; // Bayesian constant
    let totalWeightedSum = 0;
    let totalWeight = 0;
    data.users.forEach(user => {
        user.ratings.forEach(rating => {
            const weight = getReviewWeight(rating.review, rating.rating);
            totalWeightedSum += rating.rating * weight;
            totalWeight += weight;
        });
    });
    const globalAverage = totalWeight > 0 ? totalWeightedSum / totalWeight : 0;

    const ratingsByDish = {};
    data.users.forEach(user => {
        user.ratings.forEach(rating => {
            const key = `${rating.dish}-${rating.canteen}`;
            if (!ratingsByDish[key]) {
                ratingsByDish[key] = { dish: rating.dish, canteen: rating.canteen, price: rating.price, ratings: [] };
            }
            const weight = getReviewWeight(rating.review, rating.rating);
            ratingsByDish[key].ratings.push({
                username: user.username,
                rating: rating.rating,
                review: rating.review,
                weight: weight
            });
        });
    });

    return Object.keys(ratingsByDish).map(key => {
        const { dish, canteen, price, ratings } = ratingsByDish[key];
        const totalWeightForDish = ratings.reduce((sum, r) => sum + r.weight, 0);
        const weightedSumForDish = ratings.reduce((sum, r) => sum + r.rating * r.weight, 0);
        const bayesianAverage = totalWeightForDish > 0 
            ? (C * globalAverage + weightedSumForDish) / (C + totalWeightForDish) 
            : globalAverage;
        return { dish, canteen, price, averageRating: bayesianAverage.toFixed(2), ratings };
    });
}

// Simple sentiment weight function (approximated without sentiment library)
function getReviewWeight(review, rating) {
    const emotionalWords = ["hate", "love", "terrible", "amazing", "awful", "fantastic"];
    const lowerReview = review.toLowerCase();
    const hasEmotionalWord = emotionalWords.some(word => lowerReview.includes(word));
    const extremeRating = rating <= 1.5 || rating >= 4.5;
    if (hasEmotionalWord || extremeRating) {
        return 0.5; // Discount emotional reviews
    }
    return 1.0; // Neutral reviews
}

// Display ratings
function populateRatingsList() {
    const ratingsList = document.getElementById("ratings-list");
    ratingsList.innerHTML = "<h2>All Dish Ratings</h2>";
    const ratings = computeRatings();

    if (ratings.length === 0) {
        ratingsList.innerHTML += "<p>No ratings yet.</p>";
        return;
    }

    ratings.forEach(dishData => {
        const div = document.createElement("div");
        div.className = "dish";
        div.innerHTML = `
            <strong>${dishData.dish}</strong> (${dishData.canteen}) - HK$${dishData.price} - Average Rating: ${dishData.averageRating}<br>
            <ul>
                ${dishData.ratings.map(r => `<li>${r.username}: ${r.rating} stars - "${r.review}"</li>`).join("")}
            </ul>
        `;
        ratingsList.appendChild(div);
    });
}

// Initialize page
populateCanteenList();
populateDishList();
populateRatingsList();
