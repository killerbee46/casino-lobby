export type GameDataType = {
    "id": string,
        "title"?: string,
        "description"?: string,
        "image"?: string,
        "isFavorite"?: boolean,
        "popularity"?: number,
        "region"?: string,
        "playerCount"?: number
}

export const gameData = [
    {
        "id": "1",
        "title": "Chess",
        "description": "A strategy board game played on a checkered board.",
        "image": "https://imgs.search.brave.com/Auqt-M5TtMn985cuJndhbj5ZUI6dk3ZUyGqQPF52mVw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/MjIyMzAxNy92ZWN0/b3Ivd293LWNvbWlj/LWJvb2suanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVVTRHFt/WEQ1aldiRktfXzYy/ZjRtRHBSTm93bUxf/OVdfWGR5VHBmUUpU/Zjg9",
        "isFavorite": false,
        "popularity": 99,
        "region": "Dubai",
        "playerCount": 122200000
    },
    {
        "id": "2",
        "title": "Ludo",
        "description": "A strategy board game played on a checkered board.",
        "image": "https://imgs.search.brave.com/GxtQpFcSj8M7JmUreD8qW_Oz_Kgv02ZSefbqO9ZEyGA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8x/MC8xNy8wOS8xOC9j/YXJ0b29uLTQ1NTY0/MjlfNjQwLnBuZw",
        "isFavorite": false,
        "popularity": 98,
        "region": "Dubai",
        "playerCount": 120000000
    },
    {
        "id": "3",
        "title": "Roulette",
        "description": "A strategy board game played on a checkered board.",
        "image": "https://imgs.search.brave.com/iNcdZ5DahrZX2tlsRYz8HTi_5STw2ckmQ-SdoHK-RHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMi8w/NC8xMS8xNy8zMS92/ZWdldGFibGVzLTI5/MDYzXzY0MC5wbmc",
        "isFavorite": false,
        "popularity": 60,
        "region": "Dubai",
        "playerCount": 19800000
    },
    {
        "id": "4",
        "title": "Fruit Jack",
        "description": "A strategy board game played on a checkered board.",
        "image": "https://imgs.search.brave.com/GbdcLTBCOoSJkpRAwGJGDVgCue--r5LKE8eCfjdHkuQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI2/NTExMDY4NS92ZWN0/b3Ivc3VuZ2xhc3Nl/cy1zdW4taWNvbi1m/bGF0LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz04UV96dmZ6/UG9DLXBqUm1aR0dE/OFlhUTZtUnZ1ek4y/Sko5ZVZ1ckxxd0RF/PQ",
        "isFavorite": false,
        "popularity": 20,
        "region": "Dubai",
        "playerCount": 1000
    },
    {
        "id": "5",
        "title": "Poker",
        "description": "A strategy board game played on a checkered board.",
        "image": "https://imgs.search.brave.com/yPDUu6CSIlE2bnBP1UxCStcvoQOm5VbjMEZW9XNI08E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC81MC85OC9j/YXJ0b29uLWNyb2Nv/ZGlsZS1rYXdhaWkt/c3F1YXJlLWFuaW1h/bC1hbGxpZ2F0b3It/dmVjdG9yLTQ1MzI1/MDk4LmpwZw",
        "isFavorite": false,
        "popularity": 30,
        "region": "Dubai",
        "playerCount": 10000
    },
    {
        "id": "6",
        "title": "Black Jack",
        "description": "A strategy board game played on a checkered board.",
        "image": "https://imgs.search.brave.com/YQBdG-XYg0B1hMH1cpqq3K50YsSsX-rO1ggFAnSGTRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Y2hlZXJmdWwtY2Fy/dG9vbi1zcXVhcmUt/Y2hhcmFjdGVyXzEz/MDgtMTYyNzE0Lmpw/Zz9zZW10PWFpc19o/eWJyaWQ",
        "isFavorite": false,
        "popularity": 46,
        "region": "Dubai",
        "playerCount": 5600000
    },
    {
        "id": "7",
        "title": "Sudoku",
        "description": "A strategy board game played on a checkered board.",
        "image": "https://imgs.search.brave.com/r5mHf7bfYiefJisxWOqE8bFvRTQ-EeBM6LCVRX7Pq-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/aGFwcHktZ3JlZW4t/c3F1YXJlLWNoYXJh/Y3Rlci1pbGx1c3Ry/YXRpb25fMTMwOC0x/NjU5MjQuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA",
        "isFavorite": false,
        "popularity": 75,
        "region": "Katmandu",
        "playerCount": 2300000
    },
    {
        "id": "8",
        "title": "Checkers",
        "description": "A strategy board game played on a checkered board.",
        "image": "https://imgs.search.brave.com/uIhmVd6kVaBQUS5MAPkxzQuiOMKdVAeX8Ot8omkSEeE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC82Ni85Ny9j/YXJ0b29uLW9jdG9w/dXMta2F3YWlpLXNx/dWFyZS1hbmltYWwt/ZmFjZS1rcmFrZW4t/dmVjdG9yLTQ3MDA2/Njk3LmpwZw",
        "isFavorite": false,
        "popularity": 80,
        "region": "Katmandu",
        "playerCount": 1400000
    },
    {
        "id": "9",
        "title": "Football",
        "description": "A strategy board game played on a checkered board.",
        "image": "https://imgs.search.brave.com/KEf5DixiKP9J6OZwv6lSj5ajgYN5L-lY38lAOQ6sBqc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTMw/NjY2NTYyL3ZlY3Rv/ci9zdW5nbGFzc2Vz/LWljb24tZmxhdC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/eHc3Ni01NXpEeW1J/WXhrQzNORWJvVHl1/cy03OTJ2b1Vuc3VO/ZFBjanEzMD0",
        "isFavorite": false,
        "popularity": 97,
        "region": "Katmandu",
        "playerCount": 1230000
    },
    {
        "id": "10",
        "title": "Badminton",
        "description": "A strategy board game played on a checkered board.",
        "image": "https://imgs.search.brave.com/G9nyo7fyLumaTlh-k6QdW19NvjLLcfwoby09g8NIvNQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC80Ni84My9j/YXJ0b29uLW1vdXNl/LWthd2FpaS1zcXVh/cmUtcm9kZW50LWFu/aW1hbC1mYWNlLXZl/Y3Rvci00NjcyNDY4/My5qcGc",
        "isFavorite": false,
        "popularity": 64,
        "region": "Dubai",
        "playerCount": 120000
    },
    {
        "id": "11",
        "title": "Checkers",
        "description": "A strategy board game played on a checkered board.",
        "image": "https://imgs.search.brave.com/uIhmVd6kVaBQUS5MAPkxzQuiOMKdVAeX8Ot8omkSEeE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC82Ni85Ny9j/YXJ0b29uLW9jdG9w/dXMta2F3YWlpLXNx/dWFyZS1hbmltYWwt/ZmFjZS1rcmFrZW4t/dmVjdG9yLTQ3MDA2/Njk3LmpwZw",
        "isFavorite": false,
        "popularity": 80,
        "region": "Dubai",
        "playerCount": 1400000
    },
    {
        "id": "12",
        "title": "Football",
        "description": "A strategy board game played on a checkered board.",
        "image": "https://imgs.search.brave.com/KEf5DixiKP9J6OZwv6lSj5ajgYN5L-lY38lAOQ6sBqc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTMw/NjY2NTYyL3ZlY3Rv/ci9zdW5nbGFzc2Vz/LWljb24tZmxhdC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/eHc3Ni01NXpEeW1J/WXhrQzNORWJvVHl1/cy03OTJ2b1Vuc3VO/ZFBjanEzMD0",
        "isFavorite": false,
        "popularity": 97,
        "region": "Katmandu",
        "playerCount": 1230000
    },
]   