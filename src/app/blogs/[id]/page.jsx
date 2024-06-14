

const BlogDetails = ({params}) => {
    const id = params.id
    const blogs = [
        {
          id: 1,
          title: "Understanding JavaScript Closures",
          author: "Jane Doe",
          date: "2024-06-01",
          content: "A deep dive into the mechanics of closures in JavaScript, including use cases and examples.",
          tags: ["JavaScript", "Closures", "Programming"]
        },
        {
          id: 2,
          title: "Getting Started with React",
          author: "John Smith",
          date: "2024-05-15",
          content: "An introductory guide to building applications with React, covering the basics and key concepts.",
          tags: ["React", "JavaScript", "Web Development"]
        },
        {
          id: 3,
          title: "A Guide to CSS Grid Layout",
          author: "Emily Johnson",
          date: "2024-04-20",
          content: "Learn how to create complex web layouts easily with CSS Grid Layout.",
          tags: ["CSS", "Web Design", "Frontend"]
        },
        {
          id: 4,
          title: "Exploring the New Features in ES2024",
          author: "Michael Brown",
          date: "2024-03-30",
          content: "A comprehensive overview of the new features and improvements introduced in ES2024.",
          tags: ["JavaScript", "ES2024", "Programming"]
        },
        {
          id: 5,
          title: "How to Optimize Your Website for SEO",
          author: "Laura Wilson",
          date: "2024-02-25",
          content: "Tips and techniques to improve your website's search engine ranking and visibility.",
          tags: ["SEO", "Web Development", "Marketing"]
        },
        {
          id: 6,
          title: "Building a REST API with Node.js",
          author: "David Miller",
          date: "2024-01-10",
          content: "A step-by-step tutorial on creating a RESTful API using Node.js and Express.",
          tags: ["Node.js", "API", "Backend Development"]
        },
        {
          id: 7,
          title: "Understanding Asynchronous JavaScript",
          author: "Sophia Martinez",
          date: "2023-12-05",
          content: "An explanation of asynchronous programming in JavaScript, including callbacks, promises, and async/await.",
          tags: ["JavaScript", "Async", "Programming"]
        },
        {
          id: 8,
          title: "Introduction to TypeScript",
          author: "James Lee",
          date: "2023-11-15",
          content: "A beginner's guide to TypeScript, its features, and how to use it in your projects.",
          tags: ["TypeScript", "JavaScript", "Programming"]
        },
        {
          id: 9,
          title: "Mastering Flexbox for Responsive Design",
          author: "Olivia Harris",
          date: "2023-10-20",
          content: "A complete guide to using Flexbox for creating responsive web designs.",
          tags: ["CSS", "Flexbox", "Web Design"]
        },
        {
          id: 10,
          title: "Creating Dynamic Web Applications with Vue.js",
          author: "Ethan Walker",
          date: "2023-09-25",
          content: "An overview of building interactive web applications using Vue.js, including examples and best practices.",
          tags: ["Vue.js", "JavaScript", "Web Development"]
        }
      ];

      const details = blogs.find((blog)=> blog.id==id)

      console.log(details);

      
    return (
        <div className=" p-5">
            <h1 className=" text-xl mb-2"> {details.title}</h1>
            <p>{details.content}</p>
            
        </div>
    );
};

export default BlogDetails;