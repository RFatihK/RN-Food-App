import { Images } from "../../constants";

export const restaurantsData = [
    {
        id: 0,
        restaurantName: "Mc Donalds",
        farAway: "15.2",
        businessAddress: {
            businessCity: "Antalya",
            businessDistrict: "Konyaaltı",
            businessNeighborhood: "Gülveren"
        },
        businessimages: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/450px-McDonald%27s_logo.svg.png",
        coordinates: {
            lat: 36.89726984269004,
            lng: 30.660753445977388,
        },
        deliveryTime: 15,
        businessDescription: "Hem cebinize, hem damak tadınıza hitap eden lezzetler!",
        productData: [
            { id: 1, ProductName: "ramazan", Price: "12", productDetail: "All in a Night's Work", productImage: Images.AVATAR },
            { id: 2, ProductName: "Ricard", Price: "48", productDetail: "Ana and the Others (Ana y los otros)", productImage: Images.Hamburger },
            { id: 3, ProductName: "Klara", Price: "42", productDetail: "Bolero (Uns et les autres, Les)", productImage: Images.Kebap },
            { id: 5, ProductName: "Elvira", Price: "54", productDetail: "Haxan: Witchcraft Through the Ages (a.k.a. The Witches)", productImage: Images.Kofte },
            { id: 6, ProductName: "Dyane", Price: "30", productDetail: "Extracted", productImage: Images.Makarna },
            { id: 7, ProductName: "Imogen", Price: "40", productDetail: "Adventures of Captain Marvel", productImage: Images.banner1 },
            { id: 8, ProductName: "Em", Price: "35", productDetail: "Pooh's Heffalump Movie", productImage: Images.banner2 },
            { id: 9, ProductName: "Corette", Price: "92", productDetail: "Kill Me Again", productImage: Images.banner3 },
            { id: 10, ProductName: "Corette", Price: "135", productDetail: "neo", productImage: Images.banner4 },
            { id: 11, ProductName: "Corette", Price: "132", productDetail: "spiderman", productImage: Images.banner5 },
        ],
    },
    {
        id: 1,
        restaurantName: "KFC",
        farAway: "12.7",
        businessAddress: {
            businessCity: "Antalya",
            businessDistrict: "Konyaaltı",
            businessNeighborhood: "Pınarbaşı"
        },
        businessimages: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAmVBMVEX////7+/vkBCwAAAD8///jABH0xcj1yszkACd4eHhmZmbiAADmPUvjABbzu710dHRtbW2kpKRZWVnw8PCvr6/Nzc3FxcXjAB+JiYnX19e+vr5GRkaXl5fp6emRkZFeXl4qKiqAgIA3Nzfvn6PlLD1QUFAMDAzg4OAhISH97u8WFhbnUFvqanXshIvxqK763N7pXGfse4Pukpf4EELJAAAEYUlEQVRIiZ2Xi3LiOgyG5Yq2JJQmju2QO0laCNALu/v+D7eynZuTPWdmV50OLfiLZPvXbwPg/12EJnwGfgn/EMIHH95exnh/3jAb9FksZSwA+jc2z+/TuDcI6efjsB1i92RBYLw9VZw35zqDAdyNww4fEBD4uX0Y4tGCAGfMbE1pnjOw4OM47PAJHoFfhyXY+ZdUU+YZEtkK/KKMNMcFCClic0H0O5MK4hyW4BthzeZ774CQBjUmcYuIdn7g6dc5uP/eNFCUrwuQn1IoMWNCKguW9RJ8LQvg6ewdWyoCIDEwbAXcSnDAx+eUQ6buLghBA/5p2D7CKgizBXhXElR23bkZkaUoZ2CgksQFd9dMASV1QWgFx24Gll6F7hx3NEEoqyXYxB4fd1FHGOWLjFDRrD14cEHlnQoKSTrteFUl8ojcBR/Ao2dG8LJ1QA9vIc8lbWaDt8LnJx+PDrh9gSMVcoQfLliLc31u6jPypr1cklpm6cWZ4/ZHD34eHNDvsM6oTkzLjrrr1KmydTKSxjUYzVRuQCnzPIE4QLMyMgCatQt+EaQzvjkgE1FAg0vaPGAJ0PJB5QqANK7Bhk0qt5IjfZfUh5iVBVZaeq3bHaRxj8Cie1qACeqosrbtYiJFGLkiJ41XBPJ0EqttZNFgestAZGQ5EqE4li5oNA6QxfedCwK7wQnxwoscsQYvXTTy4z2WBCp5XYA0S1ZRsY2XqCgm7S6sY3elTiU7KmAF8qKjiep6JBPt0qx2UGhLEgnsl2BH7dHeBGiZN3wNVsbFQ3jfuiCDI0o/N1yMsHC57QMEpm8i+FiBjFyOulfQTnYr8MXsv6PyAWQkUWx1Om03S9BqXIM/D0uQcnpYwDkqp7NjAA8/ezCCXyuQclEc6TddZTz8gpN1hs3bfgVm2Idag9rHdSTidQUykWWqRpXGYlXq/ls0BiwmS55AWu9OpxvdbgY+dYVt1cmSZyC5HdLysDX4eDcapzWfLHkOMvTq5k/g7p7Zw3NmyfNSOaYX/48g48qAHVny3sZulpEa6jw7QjZP4yDqfQOSJb8OcZ1AGQNGE8iu4yBoBPQK2IwxDaQndmwe45heOFpz02BTwuJSM34wnJfREoQsDIJQgqQXv/QDG9omM+/U5mGvohGMJhCNOjlZDS8vveh8cix646Qt4T8y0qGtPy1rDLUUEXNKhlIaydJT0wXYDHoEoROm9tFAFqftU3XD/aMYnh/0YDWcv6aZ+NAR9HehVAoF4s1eP/pRXdWDfOg5qKZW0tckHXSFQmc/mfZFG1k2rjM5jb4Zkb/pFbrxgoww0nOdg8aOdSg+gHo2Cs1ACNEsEehSUc23Uaoe7PruAc10ujRyOLgMXaVXDBOVymE3jB3rELZ77C5SMl1sXup/zHJD2drp9k0GyXiptt1DJUup7290nEgpJOdyEGJKtw8eD3MM6aBSc+k4ymTTpGaf9PufprEFBfxFiGj8k+lvBSRn739Cy918cfCPpoDfdzhbODfPCFAAAAAASUVORK5CYII=",
        coordinates: {
            lat: 36.89804659263925,
            lng: 30.64721365697909,
        },
        deliveryTime: 15,
        businessDescription: "Hem cebinize, hem damak tadınıza hitap eden lezzetler!",
        productData: [
            { id: 1, ProductName: "ramazan", Price: "12", productDetail: "All in a Night's Work", productImage: Images.AVATAR },
            { id: 2, ProductName: "Ricard", Price: "48", productDetail: "Ana and the Others (Ana y los otros)", productImage: Images.Hamburger },
            { id: 3, ProductName: "Klara", Price: "42", productDetail: "Bolero (Uns et les autres, Les)", productImage: Images.Kebap },
            { id: 5, ProductName: "Elvira", Price: "54", productDetail: "Haxan: Witchcraft Through the Ages (a.k.a. The Witches)", productImage: Images.Kofte },
            { id: 6, ProductName: "Dyane", Price: "30", productDetail: "Extracted", productImage: Images.Makarna },
            { id: 7, ProductName: "Imogen", Price: "40", productDetail: "Adventures of Captain Marvel", productImage: Images.banner1 },
            { id: 8, ProductName: "Em", Price: "35", productDetail: "Pooh's Heffalump Movie", productImage: Images.banner2 },
            { id: 9, ProductName: "Corette", Price: "92", productDetail: "Kill Me Again", productImage: Images.banner3 },
            { id: 10, ProductName: "Corette", Price: "135", productDetail: "neo", productImage: Images.banner4 },
            { id: 11, ProductName: "Corette", Price: "132", productDetail: "spiderman", productImage: Images.banner5 },
        ],
    }, {
        id: 2,
        restaurantName: "Mc Donalds",
        farAway: "32.2",
        businessAddress: {
            businessCity: "Antalya",
            businessDistrict: "Kepez",
            businessNeighborhood: "Yeşilyurt"
        },
        businessimages: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA4CAMAAABnuDDbAAAAnFBMVEX/hzL////WIwDUAAD06dn169z//v7/gSL/gyf7toz5zK327t/VGQD4+erVDgD28eLtwrTmnZDz39Dea1/psaT69e748OXhf3L8+fX40rby2svaSzrw0cLcV0nkkoX/fhj24Mv+kkn9oWboqJrWIwvdYVTXMyLfc2XjiHvuybv31776vZf9nF78q3n5xKH+l1X/eQDXKxjYPSv7sYKc9rmEAAAEL0lEQVRIiY2WjXqiPBCFLUPUNpMEEEEQUYuItNvt2u/+7+07CSK4bbfO8wgm5nV+MpAzefjGpt/98PAw+bR2tUyk8DsTSbJc/cCslhILYbIz+9X35XL6LQPArjbG3708Wct2vjEGpC9XXzJL4Qusf3l9nsy2s862s8mvx0wC88XqE7NyxMvbfDafT25sPts+Z5aS01tmiahMtt/+tf6KTX5bajlmEl+Y3fv2S6Cz2SQzPTTpkdd/Eda2/wFKegaBJW8/IXD1LjpPYFbw8jb7EUFa78hp6hgpkh8Du0DPRkjLwM3uPgQ5PUl/BSYRyfPXJf7KjEjAILF73aAOmRRgfJndU4DO5o/Sf5hMwfyZ3WtbMFMwQmZPdxsycYxAwxtlHwLTf4wyGCv73Q1xU272ymy8w7nxTUqxqahUDYZ1LmVeMx1D054PB16YDWNRJDtGBuQRU2OIN2rNWpDHmlnkxLhTkGqMCYu01kdzZaho2FPaMewTNyXWLpg/TkeKUuY0jVviU8pUyCsTLHQ9MLoqMMXeWeWtVCnrKpYt6SDWlMshNq0rc2U8Td4xIk4rIspTxvjU2th4PcSmyw1TNDBIJBbEixgL0xPzelNYxkNoQz4CbgPE7x9dPumaj+qDdVAglxNTWwjkU555M/jh9cGjaMMeXNSWKbUuYxuyh7phmg7IJ2yYKtMxOVkLTc6k6RxJolIQNapElriF9leNRTE+pbn0Th4EQWSEUUEVYLPzWMooxrZHVZVj+4M4jiNVBMoU8SU2IYtFUwAJ6hTvzaBeIFNxqitMmXITooukystF3YSR6nsHCTCBJNYfxu4++WaBzoCrkmwKAm2FzkA3VEMNPI9alBk3v9K4xgpTnmfQZB5aTdVuCCN5w4S4osIhGN0xOlSOUbEbkY1g7Icbbf+mNSPG4wtjI+DYL5pNO/bjsUUqc8Poqnax2TgClQeF6Z+fjuliETeM5x3wZ4sIA41yuE38i7GdMWZ0N+sYVmdXg1aOGLtAp2rE6PCjY4SNLULZMXfpA8foyoIUqjHj6oUaHHGtVXTiW4ba1BWuGDNobce4bTg0R7tzo9goEC66cNhTHRrrCHUzR+4qy4e+3yIXr+nQ1l5zuyUUSLPGw1AaGX3YZFjr/pmztWLbVPEZf21KPlRGFked4uCI1lRbuWCqzRlvlEjevBOvpvqbGt3ctFJmeCe+Pt5tu8ueZn/m9xoOYjAPqMH954896HD+SGEe7z2A5vvunHPH9n2eZnuUwJ6nTlE8zX92NceB5VTFpJMh0vz+tf0kj4blEEr7Vz/phMikV0jS+Nnr234+uwqxXo7N5vvnx6ed03HLQSNNE/8i9xJ/t3vJ+sMyy152Tvc5wE+mt5pvBcdOVl6F5SAv7XqRXEXfWFtCvi6TQcBeZKyQyXK5GivST7q35x++l8v/A9t0ZSMMc3WiAAAAAElFTkSuQmCC",
        coordinates: {
            lat: 36.88617400427879,
            lng: 30.65043166814313,
        },
        deliveryTime: 15,
        businessDescription: "Ateş seni çağırıyor",
        productData: [
            { id: 1, ProductName: "ramazan", Price: "12", productDetail: "All in a Night's Work", productImage: Images.AVATAR },
            { id: 2, ProductName: "Ricard", Price: "48", productDetail: "Ana and the Others (Ana y los otros)", productImage: Images.Hamburger },
            { id: 3, ProductName: "Klara", Price: "42", productDetail: "Bolero (Uns et les autres, Les)", productImage: Images.Kebap },
            { id: 5, ProductName: "Elvira", Price: "54", productDetail: "Haxan: Witchcraft Through the Ages (a.k.a. The Witches)", productImage: Images.Kofte },
            { id: 6, ProductName: "Dyane", Price: "30", productDetail: "Extracted", productImage: Images.Makarna },
            { id: 7, ProductName: "Imogen", Price: "40", productDetail: "Adventures of Captain Marvel", productImage: Images.banner1 },
            { id: 8, ProductName: "Em", Price: "35", productDetail: "Pooh's Heffalump Movie", productImage: Images.banner2 },
            { id: 9, ProductName: "Corette", Price: "92", productDetail: "Kill Me Again", productImage: Images.banner3 },
            { id: 10, ProductName: "Corette", Price: "135", productDetail: "neo", productImage: Images.banner4 },
            { id: 11, ProductName: "Corette", Price: "132", productDetail: "spiderman", productImage: Images.banner5 },
        ],
    }, {
        id: 3,
        restaurantName: "Popeyes",
        farAway: "11.2",
        businessAddress: {
            businessCity: "Antalya",
            businessDistrict: "Konyaaltı",
            businessNeighborhood: "Gülveren"
        },
        businessimages: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAMAAAChHKjRAAAAxlBMVEX////1hCe+AAD0ewD0eQD0dgD+/Pz36OnBABr+9fDAAA30dAD/+/n+8erkrLH79PTQXGjRYWzel53SaHLZhY3CACL96+H1fg7hoabtyMv83Mv95tr1gRz70brqv8PTbXfIL0L03+HJOkvYfobx1Nbot7v5vpv1iTX3nmLEDS3yfij2j0P0bQD2k0z5uJH4sobLRFPNUF3FIDj7x6f6rXfUfY7ml4vGN1HhhHbMVmrXSS31zcHvoYDcVCnoqKHWQyDjYyrPNCgD7EAJAAADDElEQVQ4jX2UiZabOgyGhTGQhCVgTNi3sAyehLAk3aY3t+37v1QNJG0nM60OJ/ZRPiz9kgXAo223b1yvTDZStk8zlpnG38ht0Vd9Dx7NoNggS3mP8QY6gsmS3N8DWlm5Q94yNulLZOSZX/FYIym32WovPzD9ALZJCrsviEcHVhX8NPJA2bQwoWTklq/s7X2WgpH9yVTEA+L0C6Lpa/5rUr8sfPqHdJQbfWXy3e7cRBhjt9OAOpCnm98ayapX8j3o9RN2I2GyyF2D5a02G/sXxBzLQwqc8QJMXNQAoDyp+ntVfc9wqhTKUpyhSzdR0hq81JAL4wZRowRaQmlfJurwgQSuIIghbE1e+ns8c7UxJ7FOEPMzoo+fPvMFc8e+WLHxBmWMOcOUf//lFAlRF/PcxJg7OMNW97zZC7P4qpT9V3dSxp//pmJT54VtblUfr8LVnHcGOUypi83/1Zzst+fvd2j48fyyhJbZmR91+Govmqwfz1fnFq5wrmyz1MOe49m3OjvsOic7d47nh5Z3/Q9NJLjxrX6IK7rfqi3izK3hLHYF93BLo0RsU97bYqYJkKXhtBLdS7AEGGk53MsEUBZ5mXOQWz6E1ZfZyTsOMql+QbzhgFJzdoyM5vOLmUUqO/vNgDwmaLq/XOIiTC5Sn6JieDUyOaJAWWlZibKVlSTld9f3KPLhleWjj4YCSlQUme1VCqJyNSTwYMq42Ssk9ZSU8gngs+Kz/JHh5u2rAiVJNiAwgSL6DgLzICFWGYwZ5kj+8d3Y+h4hRjKJevdb8C/Td9MoQtAFsFu2kzPUIAzn7a6uQ2iw5HYQq6IaPGEpqjkfa91Rh+MB4hh0Nbq0cHabBtft4eK2J7dppbhWRfEkhZrUNZLUalIDGqylOsAXPrAt3klxjDvxBJeTEAm4lkIQ9fWh1UDHovqkHwIQ2lDEahu44lHttCdxV7vqUT3tTvjCg3Y83fCoqmEo1fxk9czPh0aCs6qDHBwx7kAX61lPrEMwD1uDG552I4ImCq3A1fF/3lp9WcTDujtp06r9BO3fTFPpTixfAAAAAElFTkSuQmCC",
        coordinates: {
            lat: 36.89212259732062,
            lng: 30.631851454097397,
        },
        deliveryTime: 15,
        businessDescription: "Hem cebinize, hem damak tadınıza hitap eden lezzetler!",
        productData: [
            { id: 1, ProductName: "ramazan", Price: "12", productDetail: "All in a Night's Work", productImage: Images.AVATAR },
            { id: 2, ProductName: "Ricard", Price: "48", productDetail: "Ana and the Others (Ana y los otros)", productImage: Images.Hamburger },
            { id: 3, ProductName: "Klara", Price: "42", productDetail: "Bolero (Uns et les autres, Les)", productImage: Images.Kebap },
            { id: 5, ProductName: "Elvira", Price: "54", productDetail: "Haxan: Witchcraft Through the Ages (a.k.a. The Witches)", productImage: Images.Kofte },
            { id: 6, ProductName: "Dyane", Price: "30", productDetail: "Extracted", productImage: Images.Makarna },
            { id: 7, ProductName: "Imogen", Price: "40", productDetail: "Adventures of Captain Marvel", productImage: Images.banner1 },
            { id: 8, ProductName: "Em", Price: "35", productDetail: "Pooh's Heffalump Movie", productImage: Images.banner2 },
            { id: 9, ProductName: "Corette", Price: "92", productDetail: "Kill Me Again", productImage: Images.banner3 },
            { id: 10, ProductName: "Corette", Price: "135", productDetail: "neo", productImage: Images.banner4 },
            { id: 11, ProductName: "Corette", Price: "132", productDetail: "spiderman", productImage: Images.banner5 },
        ],
    }, {
        id: 4,
        restaurantName: "Maydonoz Döner",
        farAway: "41.2",
        businessAddress: {
            businessCity: "Antalya",
            businessDistrict: "Konyaaltı",
            businessNeighborhood: "Gülveren"
        },
        businessimages: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAMAAACxiD++AAAAYFBMVEVHcEz0uAD9wgD/zwD6vwD+wwD/1gDytwD/4gD/1AC1iQbkrQP8wAD/zQDZpQT/xwAEBA36vQD/wgDLmgW4jAbWogTpsAKJaQihegd6XQnfqQNPPQs8LwsjHAxlTQpZRAu4hmVSAAAAEHRSTlMAxFdj2oww/hZB8a+fb8943GQtrAAAAelJREFUKJFtU4ly6yAMJIkTcrUFJHRgjv//ywqn7Uvat57BgwTSopWc+4fz8exu+eIOJ/cfnA/u1vhWw/V9Rdv+OZD1OqoqM2sL71e4vLovZw0KRCnFSAQawtuLv3QdOUGWBB3ZF4LB1/KURgIDrSKdMovCwFg4jB+u910XVOyIHhCBEJWwSD188ThY+kgqdjts4AzafeHGx+3AiRtF4ybhB0JmKTV8TP9+WXFy5/AE9WbBvrEotdvOQ12fUHHGHLxYAMoZADLkV8A0Ztq7e4yWgcCybPAUn3F3S8whpSrJEO0TfvzjNCTcOZ+kEbaiurakqA10QMVKukqtxbuYVhQegmh1HDUFRuwBRkujsCV20a8lpDYgCK+idou6WiSziZHzbjGFShoiFkeok/lACFi4VC20uF2c/CfDIRvP9L3GVEbZueOjDvPR5VcZIBc6upNnng+G2Uw/0DJLwoOs2OflUVd91kJoq/77fopxbNX/UhM3eVd59NSxh5kkeXgEaVwm8SKhfzXmZWkYE3ZTZHaU96VCIlzz7rvnDjVIbArQiMibGsF6LuDT0IB0LWiSIQfE4LPXsZaXuVomc+CEgpQtvV5+Tc7eah26LVO0VVb4M3qX85s04NCuPdzc5Y9/4uN+fsObOx2fjZ/7jDudiNE9AAAAAABJRU5ErkJggg==",
        coordinates: {
            lat: 36.911575612076184,
            lng: 30.645844707581333,
        },
        deliveryTime: 15,
        businessDescription: "Milyonlar Tadına Müptela”",
        productData: [
            { id: 1, ProductName: "ramazan", Price: "12", productDetail: "All in a Night's Work", productImage: Images.AVATAR },
            { id: 2, ProductName: "Ricard", Price: "48", productDetail: "Ana and the Others (Ana y los otros)", productImage: Images.Hamburger },
            { id: 3, ProductName: "Klara", Price: "42", productDetail: "Bolero (Uns et les autres, Les)", productImage: Images.Kebap },
            { id: 5, ProductName: "Elvira", Price: "54", productDetail: "Haxan: Witchcraft Through the Ages (a.k.a. The Witches)", productImage: Images.Kofte },
            { id: 6, ProductName: "Dyane", Price: "30", productDetail: "Extracted", productImage: Images.Makarna },
            { id: 7, ProductName: "Imogen", Price: "40", productDetail: "Adventures of Captain Marvel", productImage: Images.banner1 },
            { id: 8, ProductName: "Em", Price: "35", productDetail: "Pooh's Heffalump Movie", productImage: Images.banner2 },
            { id: 9, ProductName: "Corette", Price: "92", productDetail: "Kill Me Again", productImage: Images.banner3 },
            { id: 10, ProductName: "Corette", Price: "135", productDetail: "neo", productImage: Images.banner4 },
            { id: 11, ProductName: "Corette", Price: "132", productDetail: "spiderman", productImage: Images.banner5 },
        ],
    },
]