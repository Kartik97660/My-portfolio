import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogs } from '@/data/blogs';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blogs = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4">
                    <div className="mb-10">
                        <Link to="/">
                            <Button variant="ghost" className="mb-6 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Home
                            </Button>
                        </Link>

                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            All <span className="text-gradient">Blogs</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Explore our complete collection of articles, tutorials, and insights on data science, analytics, and visualization.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <Link
                                key={blog.id}
                                to={`/blog/${blog.id}`}
                                className="glass-card group overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {blog.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                                        {blog.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
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
            </main>

            <Footer />
        </div>
    );
};

export default Blogs;
