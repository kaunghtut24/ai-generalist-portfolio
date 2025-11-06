// ========================================
// 🎨 CUSTOMIZATION GUIDE
// ========================================
// Replace all placeholder values below with your actual information
// - Change "yourusername" to your GitHub username
// - Replace "[Your Name]" with your name (in index.html)
// - Update "yourprofile" to your LinkedIn slug
// - Replace "you@example.com" with your email
// - Add your real project links, blog posts, and social profiles
// - Delete any sections you don't want to display
//
// 📖 For detailed instructions, see README.md
//

window.SITE_DATA = {
  "projects": [
    {
      // TODO: Replace with your real project name
      "title": "Your Project Name Here",
      // TODO: Describe what your project does (2-3 sentences)
      "description": "Explain what your project does, what problem it solves, and what technologies you used. Keep it concise and engaging.",
      // TODO: Replace with your GitHub repository URL
      "github": "https://github.com/yourusername/your-repo-name",
      // TODO: Add a live demo link (optional, can be empty string "")
      "demo": "https://your-demo-link.com",
      // TODO: List the technologies/frameworks used
      "tech": ["Python", "TensorFlow", "React", "AWS"],
      // TODO: Add GitHub star count (optional, can be 0)
      "stars": 150
    },
    {
      "title": "Another Awesome Project",
      "description": "Describe your second project. What makes it special? What impact did it have?",
      "github": "https://github.com/yourusername/another-repo",
      "demo": "https://live-demo-link.com",
      "tech": ["PyTorch", "FastAPI", "PostgreSQL"],
      "stars": 89
    },
    {
      "title": "Third Project Example",
      "description": "You can add more projects or delete this one. Each project should showcase different skills.",
      "github": "https://github.com/yourusername/third-project",
      "demo": "https://third-demo.com",
      "tech": ["JavaScript", "Node.js", "MongoDB"],
      "stars": 45
    }
    // Add more projects by copying the structure above
  ],

  "blog": [
    {
      // TODO: Add your blog post title
      "title": "Your Blog Post Title",
      // TODO: Write a brief excerpt (1-2 sentences)
      "excerpt": "Write a short summary of what readers will learn from this article.",
      // TODO: Use format YYYY-MM-DD
      "date": "2025-01-15",
      // TODO: Estimate reading time (e.g., "5 min read")
      "readTime": "8 min read",
      // TODO: Link to your full blog post
      "link": "https://yourblog.com/post-url"
    },
    {
      "title": "Another Insightful Article",
      "excerpt": "Summarize the key takeaways from this post.",
      "date": "2024-12-20",
      "readTime": "6 min read",
      "link": "https://medium.com/@yourusername/article-2"
    },
    {
      "title": "AI Trends and Predictions",
      "excerpt": "Share your thoughts on where AI is heading.",
      "date": "2024-11-30",
      "readTime": "10 min read",
      "link": "https://dev.to/@yourusername/ai-trends"
    }
    // Add more blog posts as needed
  ],

  "opensource": [
    {
      // TODO: Your repository name
      "name": "your-repository-name",
      // TODO: What does this repo do?
      "description": "Briefly describe what this open source project does and why it's useful.",
      // TODO: Full GitHub URL
      "github": "https://github.com/yourusername/your-repository-name",
      // TODO: Current star count
      "stars": 256,
      // TODO: Programming language (e.g., Python, JavaScript, TypeScript)
      "language": "Python",
      // TODO: Number of forks
      "forks": 42
    },
    {
      "name": "another-oss-project",
      "description": "This project helps with X, Y, and Z. Great for developers building AI applications.",
      "github": "https://github.com/yourusername/another-oss-project",
      "stars": 178,
      "language": "TypeScript",
      "forks": 23
    },
    {
      "name": "community-resource",
      "description": "A collection of resources, tutorials, or tools for the AI community.",
      "github": "https://github.com/yourusername/community-resource",
      "stars": 534,
      "language": "Documentation",
      "forks": 89
    }
    // Showcase your best open source contributions
  ],

  "speaking": [
    {
      // TODO: Your talk title
      "title": "Your Talk Title Here",
      // TODO: Conference or event name
      "event": "AI Conference 2025",
      // TODO: Location (City, Country)
      "location": "San Francisco, CA",
      // TODO: Event date (YYYY-MM-DD)
      "date": "2025-03-15",
      // TODO: Link to video recording (optional, can be "")
      "video": "https://youtube.com/watch?v=...",
      // TODO: Link to slides (optional, can be "")
      "slides": "https://slideshare.net/..."
    },
    {
      "title": "Machine Learning Best Practices",
      "event": "Tech Meetup",
      "location": "New York, NY",
      "date": "2024-11-20",
      "video": "https://vimeo.com/...",
      "slides": "https://speakerdeck.com/..."
    },
    {
      "title": "The Future of AI Ethics",
      "event": "University Guest Lecture",
      "location": "Boston, MA",
      "date": "2024-09-10",
      "video": "",
      "slides": "https://docs.google.com/..."
    }
    // Add more speaking engagements
  ],

  "tools": [
    {
      // TODO: Tool or demo name
      "name": "Your AI Tool Name",
      // TODO: What does it do?
      "description": "Describe what this tool does and how visitors can use it.",
      // TODO: Icon type: "chart", "edit", or "tag"
      "icon": "chart",
      // TODO: Link to live demo
      "demo": "https://your-tool-demo.com"
    },
    {
      "name": "Model Performance Tracker",
      "description": "Track and visualize your ML model performance over time.",
      "icon": "chart",
      "demo": "https://demo-model-tracker.com"
    },
    {
      "name": "Data Preprocessing Tool",
      "description": "Clean and prepare your dataset with this interactive tool.",
      "icon": "edit",
      "demo": "https://data-prep-tool.com"
    }
    // Add your interactive tools and demos
  ],

  "testimonials": [
    {
      // TODO: What did they say about you?
      "quote": "Replace this with a testimonial from a colleague, client, or student. Keep it authentic and specific.",
      // TODO: Person's full name
      "author": "Dr. Jane Smith",
      // TODO: Their job title and company
      "title": "AI Research Director, Tech Company",
      // TODO: Photo URL (optional, can be "")
      "image": "https://i.imgur.com/placeholder-photo.jpg"
    },
    {
      "quote": "Another great testimonial highlighting your skills and impact.",
      "author": "John Doe",
      "title": "CTO, StartupXYZ",
      "image": "https://i.imgur.com/placeholder-2.jpg"
    },
    {
      "quote": "A third testimonial from someone who has worked with you.",
      "author": "Sarah Johnson",
      "title": "Senior ML Engineer, AI Corp",
      "image": ""
    }
    // Add more testimonials (3-5 is good)
  ],

  "certifications": [
    {
      // TODO: Full certification name
      "name": "Certification Name - Issuing Organization",
      // TODO: Badge image URL (from the organization's verification page)
      "badgeImg": "https://i.imgur.com/your-badge-image.png",
      // TODO: Verification link (from the org's verify page)
      "link": "https://www.organization.com/verify/your-certificate-id"
    },
    {
      "name": "Another Professional Certification",
      "badgeImg": "https://i.imgur.com/certification-badge.png",
      "link": "https://verify.cert-provider.com/ID123"
    },
    {
      "name": "Course Completion Certificate",
      "badgeImg": "https://i.imgur.com/course-cert.png",
      "link": "https://coursera.org/verify/ABC123"
    }
    // Add all your relevant certifications
  ],

  "social": {
    // TODO: Your GitHub profile URL
    "github": "https://github.com/yourusername",
    // TODO: Your LinkedIn profile (use full URL)
    "linkedin": "https://linkedin.com/in/yourprofile",
    // TODO: Your Twitter/X handle (optional)
    "twitter": "https://twitter.com/yourusername",
    // TODO: Your email address
    "email": "you@example.com"
  }
};

//
// 💡 TIPS FOR CUSTOMIZATION:
//
// 1. PROJECTS: Showcase 3-6 of your best projects
//    - Include a good mix of different technologies
//    - Add both personal and professional work
//    - Include live demos when possible
//
// 2. BLOG: Share your latest 3-6 articles
//    - Mix technical tutorials with thought leadership
//    - Link to Medium, Dev.to, personal blog, etc.
//
// 3. OPEN SOURCE: Highlight contributions you care about
//    - Include your own repos and significant contributions
//    - Update star counts periodically
//
// 4. SPEAKING: List recent talks and presentations
//    - Include both past and upcoming events
//    - Add video links when available
//
// 5. TOOLS: Showcase interactive demos or useful utilities
//    - These should be things visitors can actually use
//    - Great conversation starters
//
// 6. TESTIMONIALS: Get real quotes from real people
//    - Ask colleagues, clients, students for reviews
//    - Specific examples are better than generic praise
//
// 7. SOCIAL LINKS: Only include profiles you actively use
//    - Keep them updated
//    - Consider adding more: YouTube, Medium, personal blog
//
// 8. DELETING SECTIONS: If you don't want a section, either:
//    - Delete the array items (leave empty [] to hide section)
//    - Or remove the entire array key
//
// 9. TESTING: After updating, open index.html in your browser
//    - Check that all links work
//    - Test on mobile and desktop
//    - Verify dark/light mode toggle
//
// 10. DEPLOYMENT: See DEPLOYMENT.md for hosting options
//
