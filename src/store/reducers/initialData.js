export const InitialLists= [
    {
        name: 'School Work',
        boardID: 'user1board1',
        bgColor: '#ffb11a',
        listID: 'list0',
        description: '',
    },
    {
        name: 'Home',
        boardID: 'user1board1',
        listID: 'list1',
        bgColor: '#007acc',
        description: '',
    }
]

export const InitialTodoItems=[
    {
        listID:'list0',
        items:[
            {
                id: 'l0sw0',
                todo: 'Complete Maths Homework',
                description: '',
                status: `complete`,
                listID: 'list0',
            },
            {
                id: 'l0sw1',
                todo: 'English Essay',
                description: '',
                status: `-`,
                listID: 'list0',
            },
            {
                id: 'l0sw2',
                todo: 'Community Project',
                description: '',
                status: `-`,
                listID: 'list0',
            },
            {
                id: 'l0sw3',
                todo: 'Basketball Practice',
                description: '',
                status: `-`,
                listID: 'list0',
            },
        ]
    },
    {
       listID:'list1',
       items:[
           {
            id: 'l0h0',
            todo: 'Clean Room',
            description: '',
            status: `working`,
            listID: 'list1',
           }
       ]
    },
]

export const InitialCurrentBoard={
    boardID:'user1board1',
    name:'My Board 1',
    bgColor:'#8e5572',
    description:'Testing Board',
    userID:'',
}