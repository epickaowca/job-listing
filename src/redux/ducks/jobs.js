const initState = {
    jobs: [
        {
            img: 'photosnap',
            featured: true,
            new: true,
            company: 'Photosnap',
            position: 'Senior Frontend Developer',
        },
        {
            img: 'manage',
            featured: true,
            new: true,
            company: 'Manage',
            position: 'Fullstack Developer',
        },
        {
            img: 'account',
            featured: false,
            new: true,
            company: 'Account',
            position: 'Junior Frontend Developer',
        },
        {
            img: 'myhome',
            featured: false,
            new: false,
            company: 'MyHome',
            position: 'Junior Frontend Developer',
        },
        {
            img: 'loop-studios',
            featured: false,
            new: false,
            company: 'Loop Studios',
            position: 'Software Engineer',
        },
        {
            img: 'faceit',
            featured: false,
            new: false,
            company: 'FaceIt',
            position: 'Junior Backend Developer',
        },
        {
            img: 'shortly',
            featured: false,
            new: false,
            company: 'Shortly',
            position: 'Junior Developer',
        },
        {
            img: 'insure',
            featured: false,
            new: false,
            company: 'Insure',
            position: 'Junior Frontend Developer',
        },
        {
            img: 'eyecam-co',
            featured: false,
            new: false,
            company: 'Eyecam Co.',
            position: 'Full Stack Engineer',
        },
        {
            img: 'the-air-filter-company',
            featured: false,
            new: false,
            company: 'The Air Filter Company',
            position: 'Front-end Dev',
        },
    ]
}

const reducer=( state=initState, {type, payload} )=>{
    switch(type){
        default: return state
    }
}


export default reducer