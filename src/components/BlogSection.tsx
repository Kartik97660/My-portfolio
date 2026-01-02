import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '@/data/blogs';

const BlogSection = () => {
    // Get the latest 3 blogs
    const latestBlogs = blogs.slice(0, 3);

    return (
        <section id="blogs" className="py-12 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div>
                        <h2 className="section-title mb-4 !text-left">
                            <span className="text-gradient">Latest Thoughts</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl">
                            Insights, tutorials, and trends from the world of data science and analytics.
                        </p>
                    </div>

                    <Link
                        to="/blogs"
                        className="group flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                        Read the blogs
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {latestBlogs.map((blog) => (
                        <Link
                            key={blog.id}
                            to={`/blog/${blog.id}`}
                            className="glass-card group overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {blog.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-display font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                    {blog.title}
                                </h3>

                                <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                                    {blog.excerpt}
                                </p>

                                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto pt-4 border-t border-white/10">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{blog.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>{blog.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
