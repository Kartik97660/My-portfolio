import { Calendar, Tag } from 'lucide-react';

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    image: string;
    tags: string[];
    author: string;
    mediumLink?: string;
}

export const blogs: BlogPost[] = [
    {
        id: 'data-science-trends-2025',
        title: 'Top Data Science Trends to Watch in 2025',
        excerpt: 'Explore the emerging technologies and methodologies that are reshaping the data science landscape this year.',
        content: `
      The field of data science is evolving at a breakneck pace. As we move further into 2025, several key trends are emerging that promise to redefine how we collect, analyze, and interpret data.

      ## 1. Automated Machine Learning (AutoML)
      AutoML is democratizing data science by enabling non-experts to build and deploy machine learning models. Tools that automate feature engineering, model selection, and hyperparameter tuning are becoming more sophisticated.

      ## 2. Edge AI
      Processing data at the edge—on devices like smartphones and IoT sensors—is reducing latency and improving privacy. This shift is crucial for real-time applications in healthcare and manufacturing.

      ## 3. Ethical AI and Governance
      With great power comes great responsibility. Organizations are focusing more on reliable, explainable, and bias-free AI models. Frameworks for AI governance are becoming standard practice.

      ## Conclusion
      Staying ahead of these trends is essential for any data professional. The future belongs to those who adapt and innovate.
    `,
        date: 'Jan 15, 2025',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
        tags: ['Data Science', 'AI', 'Trends'],
        author: 'Kartik',
    },
    {
        id: 'power-bi-tips',
        title: 'Mastering Power BI: 5 Advanced Tips',
        excerpt: 'Level up your dashboarding skills with these advanced Power BI techniques for better storytelling and performance.',
        content: `
      Power BI is a powerful tool, but many users only scratch the surface of its capabilities. Here are five advanced tips to help you create more impactful reports.

      ## 1. Use Bookmarks for Storytelling
      Bookmarks allow you to capture the current state of a report page. Use them to create navigation menus or walk users through a data story step-by-step.

      ## 2. Optimize DAX Queries
      Performance matters. Avoid complex calculated columns where possible and rely on measures. Use variables in your DAX formulas to improve readability and calculation speed.

      ## 3. Custom Tooltips
      Don't settle for default tooltips. Design a small report page and use it as a custom tooltip to provide context-rich details on hover.

      ## 4. Row-Level Security (RLS)
      Ensure the right people see the right data. valid RLS is essential for sharing reports across different departments safely.

      ## 5. Incremental Refresh
      For large datasets, set up incremental refresh to load only the newest data, saving time and resources.
    `,
        date: 'Feb 02, 2025',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        tags: ['Power BI', 'Visualization', 'Tips'],
        author: 'Kartik',
    },
    {
        id: 'sql-optimization',
        title: 'SQL Query Optimization for Big Data',
        excerpt: 'Learn how to write efficient SQL queries that can handle massive datasets without slowing down your database.',
        content: `
      Writing SQL is easy; writing *efficient* SQL is an art. When dealing with big data, a poorly written query can bring a system to its knees.

      ## Indexing Strategies
      Understanding when and how to index your columns is the first line of defense against slow queries. Clustered vs. non-clustered indexes can make a huge difference.

      ## Avoid SELECT *
      Always specify the columns you need. Retrieving unnecessary data consumes bandwidth and memory.

      ## CTEs vs. Subqueries
      Common Table Expressions (CTEs) can make your code more readable, but be aware of how your specific database engine optimizes them compared to temporary tables or subqueries.

      ## Window Functions
      Mastering window functions (details like RANK, LEAD, LAG) allows you to perform complex calculations in the database layer, which is often faster than doing it in your application code.
    `,
        date: 'Mar 10, 2025',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800',
        tags: ['SQL', 'Database', 'Performance'],
        author: 'Kartik',
    },
    {
        id: 'python-for-data-analysis',
        title: 'Why Python is King in Data Analysis',
        excerpt: 'A deep dive into why Python continues to dominate the data analysis ecosystem over R and other languages.',
        content: `
      Python has established itself as the lingua franca of data science. But why?

      ## Versatility
      Python isn't just for statistics. It's a full-fledged programming language used for web development, automation, and software engineering. This makes it easier to integrate data pipelines into production systems.

      ## The Ecosystem
      Libraries like Pandas, NumPy, Scikit-learn, and Matplotlib provide an unmatched toolkit for manipulating and visualizing data.

      ## Community Support
      The Python community is vast. If you encounter a problem, chances are someone has already solved it and shared the answer on Stack Overflow.

      ## Learning Curve
      Python's syntax is readable and intuitive, making it an excellent starting point for beginners entering the data field.
    `,
        date: 'Mar 25, 2025',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800',
        tags: ['Python', 'Data Analysis', 'Programming'],
        author: 'Kartik',
    },
];
