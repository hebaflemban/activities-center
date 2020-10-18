const gyms = [{
    id : 1,
    name : "gym name"
},
{
    id : 2,
    name : "gym name 2"
},]

const classes = [
    {
        id:1,
        title: "class name",
        type:"cardio",
        datetime: "today",
        isFree: true,
        capacity: 20,
        gym: gyms[0]
    },
    {
        id:2,
        title: "class name 2",
        type:"walking",
        datetime: "tomorrow",
        isFree: false,
        capacity: 10,
        gym: gyms[1]
    }
]

const bookings = [
    {
        id:1,
        user: "user 1",
        class: classes[0]
    },
    {
        id:2,
        user: "user 2",
        class: classes[1]
    },
]
