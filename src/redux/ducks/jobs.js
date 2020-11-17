const initState = {
    jobs: [
        {
            img: 'photosnap',
            featured: true,
            new: true,
            company: 'Photosnap',
            position: 8,
            relesed: '1d ago',
            agreement: 1,
            location: 1,
            requirement: [ 
                {name: 'Roles', options:[1]},
                {name: 'Levels', options:[3]},
                {name: 'Languages', options:[4, 5, 3]},
            ],
        },
        {
            img: 'manage',
            featured: true,
            new: true,
            company: 'Manage',
            position: 5,
            relesed: '1d ago',
            agreement: 2,
            location: 2,
            requirement: [
                {name: 'Roles', options:[3]},
                {name: 'Levels', options:[2]},
                {name: 'Languages', options:[1]},
                {name: 'Tools', options:[1]},
            ],
        },
        {
            img: 'account',
            featured: false,
            new: true,
            company: 'Account',
            position: 2,
            relesed: '2d ago',
            agreement: 2,
            location: 1,
            requirement: [
                {name: 'Roles', options:[1]},
                {name: 'Levels', options:[1]},
                {name: 'Tools', options:[1, 2]},
                {name: 'Languages', options:[3]},
            ],
        },
        {
            img: 'myhome',
            featured: false,
            new: false,
            company: 'MyHome',
            position: 2,
            relesed: '5d ago',
            agreement: 3,
            location: 1,
            requirement: [
                {name: 'Roles', options:[1]},
                {name: 'Levels', options:[1]},
                {name: 'Languages', options:[5, 3]},
            ],
        },
        {
            img: 'loop-studios',
            featured: false,
            new: false,
            company: 'Loop Studios',
            position: 6,
            relesed: '1w ago',
            agreement: 1,
            location: 3,
            requirement: [
                {name: 'Roles', options:[3]},
                {name: 'Levels', options:[2]},
                {name: 'Languages', options:[3, 2]},
                {name: 'Tools', options:[2]},
            ],
        },
        {
            img: 'faceit',
            featured: false,
            new: false,
            company: 'FaceIt',
            position: 3,
            relesed: '2w ago',
            agreement: 1,
            location: 4,
            requirement: [
                {name: 'Roles', options:[2]},
                {name: 'Levels', options:[1]},
                {name: 'Languages', options:[2]},
                {name: 'Tools', options:[5]},
            ],
        },
        {
            img: 'shortly',
            featured: false,
            new: false,
            company: 'Shortly',
            position: 1,
            relesed: '2w ago',
            agreement: 1,
            location: 3,
            requirement: [
                {name: 'Roles', options:[1]},
                {name: 'Levels', options:[1]},
                {name: 'Languages', options:[4, 3]},
                {name: 'Tools', options:[2]},
            ],
        },
        {
            img: 'insure',
            featured: false,
            new: false,
            company: 'Insure',
            position: 2,
            relesed: '2w ago',
            agreement: 1,
            location: 1,
            requirement: [
                {name: 'Roles', options:[1]},
                {name: 'Levels', options:[1]},
                {name: 'Languages', options:[3]},
                {name: 'Tools', options:[3, 2]},
            ],
        },
        {
            img: 'eyecam-co',
            featured: false,
            new: false,
            company: 'Eyecam Co.',
            position: 7,
            relesed: '3w ago',
            agreement: 1,
            location: 3,
            requirement: [
                {name: 'Roles', options:[3]},
                {name: 'Levels', options:[2]},
                {name: 'Languages', options:[3, 1]},
                {name: 'Tools', options:[4]},
            ],
        },
        {
            img: 'the-air-filter-company',
            featured: false,
            new: false,
            company: 'The Air Filter Company',
            position: 4,
            relesed: '1mo ago',
            agreement: 2,
            location: 3,
            requirement: [
                {name: 'Roles', options:[1]},
                {name: 'Levels', options:[1]},
                {name: 'Tools', options:[1, 2]},
                {name: 'Languages', options:[3]},
            ],
        },
    ],
    positions:{ 
        1: 'Junior Developer',
        2: 'Junior Frontend Developer',
        3: 'Junior Backend Developer',
        4: 'Front-end Dev',
        5: 'Fullstack Developer',
        6: 'Software Engineer',
        7: 'Full Stack Engineer',
        8: 'Senior Frontend Developer'
    },
    agreements:{
        1: 'Full Time',
        2: 'Part Time',
        3: 'Contract',
    },
    locations:{
        1: 'USA only',
        2: 'Remote',
        3: 'Worldwide',
        4: 'UK only',
    },
    requirements:{
        Roles: {
            1: 'Frontend',
            2: 'Backend',
            3: 'Fullstack',
        },
        Levels: {
            1: 'Junior',
            2: 'Midweight',
            3: 'Senior',
        },
        Languages: {
            1: 'Python',
            2: 'Ruby',
            3: 'JavaScript',
            4: 'HTML',
            5: 'CSS',
        },
        Tools: {
            1: 'React',
            2: 'Sass',
            3: 'Vue',
            4: 'Django',
            5: 'RoR',
        },
    },


}
const reducer=( state=initState, {type, payload} )=>{
    switch(type){
        default: return state
    }
}


export default reducer