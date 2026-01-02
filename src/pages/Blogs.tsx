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
                        <Link to="/?section=blogs">
                            <Button variant="ghost" className="mb-6 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back
                            </Button>
                        </Link>

                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            All <span className="text-gradient">Blogs</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Explore our complete collection of articles, tutorials, and insights on data science, analytics, and visualization.
                        </p>
                    </div>

                    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[...blogs]
                            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                            .map((blog) => (
                                <Link
                                    key={blog.id}
                                    to={`/blog/${blog.id}`}
                                    className="group flex flex-row md:flex-col gap-4 md:gap-0 bg-transparent md:glass-card md:overflow-hidden hover:border-primary/50 transition-all duration-300 items-start md:items-stretch h-full"
                                >
                                    {/* Image Container */}
                                    <div className="relative w-32 h-20 shrink-0 md:w-full md:h-56 rounded-lg md:rounded-none overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Content Container */}
                                    <div className="flex flex-col flex-grow md:p-6 py-0.5 min-w-0">
                                        {/* Mobile: Tags hidden. Desktop: Tags visible */}
                                        <div className="hidden md:flex flex-wrap gap-2 mb-3">
                                            {blog.tags.map(tag => (
                                                <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-sm md:text-2xl font-display font-bold mb-1.5 md:mb-3 group-hover:text-primary transition-colors line-clamp-2 md:line-clamp-none leading-tight">
                                            {blog.title}
                                        </h3>

                                        {/* Excerpt - Hidden on Mobile */}
                                        <p className="hidden md:block text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                                            {blog.excerpt}
                                        </p>

                                        {/* Meta (Date/Time) */}
                                        <div className="flex items-center gap-3 text-[10px] md:text-xs text-muted-foreground md:mt-auto md:pt-4 md:border-t border-white/10">
                                            <span className="flex items-center gap-1">
                                                {blog.date}
                                            </span>
                                            {/* Mobile: Hide Read Time? Ref image only has date. Let's keep date only for minimal look or small dot separator if needed. */}
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
