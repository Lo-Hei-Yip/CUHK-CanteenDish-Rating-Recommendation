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

// Map canteen names to image paths and Chinese names
const canteenInfo = {
    "New Asia College Student Canteen": { image: "images/new-asia-canteen.jpg", chineseName: "新亞書院學生餐廳" },
    "United College Student Canteen": { image: "images/united-canteen.jpg", chineseName: "聯合書院學生膳堂" },
    "Chung Chi College Student Canteen": { image: "images/chung-chi-canteen.jpg", chineseName: "眾志堂學生膳堂" },
    "Pommerenke Student Centre Coffee Shop": { image: "images/pommerenke-coffee.jpg", chineseName: "范克廉樓咖啡閣" },
    "CUHK Noodle House": { image: "images/cuhk-noodle-house.jpg", chineseName: "中大麵膳坊" },
    "CUHK Central Canteen": { image: "images/cuhk-central-canteen.jpg", chineseName: "中大大膳堂" },
    "CUHK Paper & Coffee": { image: "images/paper-coffee.jpg", chineseName: "CUHK Paper & Coffee" },
    "Orchid Lodge Restaurant": { image: "images/orchid-lodge.jpg", chineseName: "蘭苑餐廳" }
};

// Simple sentiment weight function
function getReviewWeight(review, rating) {
    try {
        const emotionalWords = ["hate", "love", "terrible", "amazing", "awful", "fantastic"];
        const lowerReview = review.toLowerCase();
        const hasEmotionalWord = emotionalWords.some(word => lowerReview.includes(word));
        const extremeRating = rating <= 1.5 || rating >= 4.5;
        return hasEmotionalWord || extremeRating ? 0.5 : 1.0;
    } catch (error) {
        console.error("Error in getReviewWeight:", error);
        return 1.0; // Default weight on error
    }
}

// Compute baseline predictor
function computeBaselinePredictor() {
    try {
        console.log("Computing baseline predictor...");
        const users = data.users.map(u => u.username);
        const items = data.dishes.map(d => `${d.name}-${d.canteen}`);
        let ratings = [];
        data.users.forEach(user => {
            user.ratings.forEach(r => {
                ratings.push({ username: user.username, item: `${r.dish}-${r.canteen}`, rating: r.rating });
            });
        });

        const globalAverage = ratings.length > 0 ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length : 3;

        const userBiases = {};
        const itemBiases = {};
        users.forEach(u => userBiases[u] = 0);
        items.forEach(i => itemBiases[i] = 0);

        const lambda = 0.1;
        const iterations = 50;
        for (let iter = 0; iter < iterations; iter++) {
            users.forEach(user => {
                let sumError = 0;
                let count = 0;
                ratings.forEach(r => {
                    if (r.username === user) {
                        const predicted = globalAverage + userBiases[user] + itemBiases[r.item];
                        sumError += r.rating - predicted;
                        count++;
                    }
                });
                if (count > 0) {
                    userBiases[user] = sumError / (count + lambda);
                }
            });

            items.forEach(item => {
                let sumError = 0;
                let count = 0;
                ratings.forEach(r => {
                    if (r.item === item) {
                        const predicted = globalAverage + userBiases[r.username] + itemBiases[item];
                        sumError += r.rating - predicted;
                        count++;
                    }
                });
                if (count > 0) {
                    itemBiases[item] = sumError / (count + lambda);
                }
            });
        }

        return { globalAverage, userBiases, itemBiases };
    } catch (error) {
        console.error("Error in computeBaselinePredictor:", error);
        return { globalAverage: 3, userBiases: {}, itemBiases: {} };
    }
}

// Compute error matrix
function computeErrorMatrix(baseline) {
    try {
        console.log("Computing error matrix...");
        const errorMatrix = {};
        data.users.forEach(user => {
            errorMatrix[user.username] = {};
            user.ratings.forEach(r => {
                const item = `${r.dish}-${r.canteen}`;
                const baselineRating = baseline.globalAverage + 
                                     (baseline.userBiases[user.username] || 0) + 
                                     (baseline.itemBiases[item] || 0);
                errorMatrix[user.username][item] = r.rating - baselineRating;
            });
        });
        return errorMatrix;
    } catch (error) {
        console.error("Error in computeErrorMatrix:", error);
        return {};
    }
}

// Compute similarity between dishes
function computeDishSimilarity(itemA, itemB, errorMatrix) {
    try {
        const users = Object.keys(errorMatrix);
        const commonUsers = users.filter(user => errorMatrix[user][itemA] && errorMatrix[user][itemB]);

        if (commonUsers.length === 0) return 0;

        let dotProduct = 0;
        let normA = 0;
        let normB = 0;
        commonUsers.forEach(user => {
            const valA = errorMatrix[user][itemA];
            const valB = errorMatrix[user][itemB];
            dotProduct += valA * valB;
            normA += valA * valA;
            normB += valB * valB;
        });

        normA = Math.sqrt(normA);
        normB = Math.sqrt(normB);
        const epsilon = 0.1;
        return normA * normB === 0 ? 0 : dotProduct / (normA * normB + epsilon);
    } catch (error) {
        console.error("Error in computeDishSimilarity:", error);
        return 0;
    }
}

// Dish-based collaborative filtering
function getRecommendations(username) {
    try {
        console.log("Generating recommendations for:", username);
        const targetUser = data.users.find(u => u.username.toLowerCase() === username.toLowerCase());
        if (!targetUser || targetUser.ratings.length === 0) {
            console.log("No user found or no ratings available.");
            return [];
        }

        const baseline = computeBaselinePredictor();
        const errorMatrix = computeErrorMatrix(baseline);
        const allItems = data.dishes.map(d => `${d.name}-${d.canteen}`);
        const targetRatings = targetUser.ratings.map(r => `${r.dish}-${r.canteen}`);

        const similarities = {};
        allItems.forEach(itemA => {
            similarities[itemA] = [];
            allItems.forEach(itemB => {
                if (itemA !== itemB) {
                    const similarity = computeDishSimilarity(itemA, itemB, errorMatrix);
                    similarities[itemA].push({ item: itemB, similarity });
                }
            });
        });

        const predictions = [];
        allItems.forEach(item => {
            if (targetRatings.includes(item)) return;

            let predictedRating = baseline.globalAverage + 
                                 (baseline.userBiases[targetUser.username] || 0) + 
                                 (baseline.itemBiases[item] || 0);

            let totalWeight = 0;
            let weightedError = 0;
            targetRatings.forEach(ratedItem => {
                const similarDishes = similarities[ratedItem]
                    .filter(s => Math.abs(s.similarity) > 0)
                    .sort((a, b) => Math.abs(b.similarity) - Math.abs(a.similarity))
                    .slice(0, 5);
                similarDishes.forEach(similar => {
                    if (similar.item === item) {
                        const weight = similar.similarity;
                        const error = errorMatrix[targetUser.username][ratedItem] || 0;
                        weightedError += weight * error;
                        totalWeight += Math.abs(weight);
                    }
                });
            });

            if (totalWeight > 0) {
                predictedRating += weightedError / totalWeight;
            }

            predictedRating = Math.max(1, Math.min(5, predictedRating));

            const [name, canteen] = item.split("-");
            const dishData = data.dishes.find(d => d.name.toLowerCase() === name.toLowerCase() && d.canteen === canteen);
            predictions.push({ name, canteen, price: dishData?.price || 0, score: predictedRating });
        });

        return predictions
            .sort((a, b) => b.score - a.score)
            .slice(0, 3)
            .map(p => ({
                name: p.name,
                canteen: p.canteen,
                price: p.price,
                score: parseFloat(p.score.toFixed(2))
            }));
    } catch (error) {
        console.error("Error in getRecommendations:", error);
        return [];
    }
}

// Compute ratings with Bayesian averaging
function computeRatings() {
    try {
        console.log("Computing ratings...");
        const C = 5;
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
    } catch (error) {
        console.error("Error in computeRatings:", error);
        return [];
    }
}

// Update recommendations
function updateRecommendations(username) {
    try {
        console.log("Updating recommendations...");
        const recommendations = getRecommendations(username);
        const ratings = computeRatings();

        const recDiv = document.getElementById("recommendations");
        if (!recDiv) {
            console.error("Recommendations div not found.");
            return;
        }
        recDiv.innerHTML = "<h2>Your Recommended Dishes</h2>";

        if (recommendations.length === 0) {
            recDiv.innerHTML += "<p>No recommendations yet. Rate more dishes!</p>";
        } else {
            const ratingsMap = {};
            ratings.forEach(rating => {
                const key = `${rating.dish}-${rating.canteen}`;
                ratingsMap[key] = rating.averageRating;
            });

            const recommendationsByCanteen = {};
            recommendations.forEach(dish => {
                if (!recommendationsByCanteen[dish.canteen]) {
                    recommendationsByCanteen[dish.canteen] = [];
                }
                recommendationsByCanteen[dish.canteen].push(dish);
            });

            Object.keys(recommendationsByCanteen).forEach(canteen => {
                const canteenDiv = document.createElement("div");
                canteenDiv.className = "canteen-section";
                const canteenData = canteenInfo[canteen] || { image: "images/default-canteen.jpg", chineseName: "Unknown" };
                canteenDiv.innerHTML = `
                    <h3>${canteen} (${canteenData.chineseName})</h3>
                    <img src="${canteenData.image}" alt="${canteen}" class="canteen-image">
                `;
                const dishList = document.createElement("ul");
                recommendationsByCanteen[canteen].forEach(dish => {
                    const li = document.createElement("li");
                    li.className = "dish";
                    const key = `${dish.name}-${dish.canteen}`;
                    const avgRating = ratingsMap[key] ? ratingsMap[key] : "N/A";
                    li.innerHTML = `<strong>${dish.name}</strong> - HK$${dish.price} - Predicted: <span>${dish.score}</span> - Avg Rating: <span>${avgRating}</span>`;
                    dishList.appendChild(li);
                });
                canteenDiv.appendChild(dishList);
                recDiv.appendChild(canteenDiv);
            });
        }

        populateRankingTable(ratings);
    } catch (error) {
        console.error("Error in updateRecommendations:", error);
        const recDiv = document.getElementById("recommendations");
        if (recDiv) {
            recDiv.innerHTML = "<h2>Your Recommended Dishes</h2><p>Error generating recommendations. Please try again.</p>";
        }
    }
}

// Populate ranking table
function populateRankingTable(ratings) {
    try {
        console.log("Populating ranking table...");
        const tableBody = document.getElementById("ranking-table-body");
        if (!tableBody) {
            console.error("Ranking table body not found.");
            return;
        }
        tableBody.innerHTML = "";

        if (ratings.length === 0) {
            tableBody.innerHTML = "<tr><td colspan='5'>No ratings available yet.</td></tr>";
            return;
        }

        ratings.sort((a, b) => parseFloat(b.averageRating) - parseFloat(a.averageRating));

        ratings.forEach((dishData, index) => {
            const rank = index + 1;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${rank}</td>
                <td>${dishData.dish}</td>
                <td>${dishData.canteen}</td>
                <td>${dishData.price}</td>
                <td>${dishData.averageRating}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error in populateRankingTable:", error);
        const tableBody = document.getElementById("ranking-table-body");
        if (tableBody) {
            tableBody.innerHTML = "<tr><td colspan='5'>Error loading rankings.</td></tr>";
        }
    }
}

// Initialize form event listener
function initFormListener() {
    try {
        console.log("Initializing form listener...");
        const form = document.getElementById("recommend-form");
        if (!form) {
            console.error("Recommend form not found.");
            return;
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log("Form submitted.");
            const usernameInput = document.getElementById("username");
            if (!usernameInput) {
                console.error("Username input not found.");
                return;
            }
            const username = usernameInput.value.trim();
            if (!username) {
                console.log("No username provided.");
                const recDiv = document.getElementById("recommendations");
                if (recDiv) {
                    recDiv.innerHTML = "<h2>Your Recommended Dishes</h2><p>Please enter a username.</p>";
                }
                return;
            }
            updateRecommendations(username);
        });
    } catch (error) {
        console.error("Error initializing form listener:", error);
    }
}

// Run initialization when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded, initializing...");
    initFormListener();
});
