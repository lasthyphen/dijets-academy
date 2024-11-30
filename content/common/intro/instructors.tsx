type Instructor = {
    name: string;
    title: string;
    
    twitter: string;
    linkedin: string;
    github: string;
};

const instructors: Instructor[] = [
    {
        name: "Saleem Fareed",
        title: "Founder",

        twitter: "",
        linkedin: "",
        github: "",
    },
    {
        name: "Andreea",
        title: "Sr. Community Relations",

        twitter: "",
        linkedin: "",
        github: "",
    },
    {
        name: "Daniel",
        title: "Developer Relations",

        twitter: "",
        linkedin: "",
        github: "",
    },
    {
        name: "Mimi",
        title: "Developer Relations",

        twitter: "",
        linkedin: "",
        github: "",
    }
];

export function getInstructorsByNames(names:string[]) : Instructor[] {
    return instructors.filter((instructor) => names.includes(instructor.name));
}

export default instructors;