import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogs } from '@/data/blogs';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';


const BlogDetail = () => {
    const { blogId } = useParams<{ blogId: string }>();
    const blog = blogs.find(b => b.id === blogId);

    if (!blog) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar />
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
                        <Link
                            to="/blogs"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm w-fit"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blogs
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    // Simple markdown-like parser for the content (headers and paragraphs)
    const renderContent = (content: string) => {
        return content.split('\n').map((line, index) => {
            const trimmed = line.trim();
            if (!trimmed) return <br key={index} className="my-4" />;

            if (trimmed.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">{trimmed.replace('## ', '')}</h2>;
            }
            if (trimmed.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{trimmed.replace('# ', '')}</h1>;
            }
            return <p key={index} className="text-muted-foreground leading-relaxed mb-4">{trimmed}</p>;
        });
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-20 pb-12 md:pt-24 md:pb-20">
                {/* Hero / Header Image */}
                <div className="w-full h-[40vh] md:h-[50vh] relative mb-12">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 container mx-auto">
                        <Link
                            to="/blogs"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm w-fit mb-4 md:mb-6"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blogs
                        </Link>

                        {/* Breadcrumb */}
                        <div className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-sm text-white/80 mb-4 md:mb-6 font-mono overflow-hidden">
                            <span>Home</span>
                            <span className="opacity-40">/</span>
                            <span>Blogs</span>
                            <span className="opacity-40">/</span>
                            <span className="text-white font-medium truncate flex-1 md:flex-none md:max-w-md">
                                {blog.title}
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {blog.tags.map(tag => (
                                <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-primary text-primary-foreground font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold mb-4 md:mb-6 max-w-4xl leading-tight">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-base text-muted-foreground">
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <User className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                <span>{blog.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <article className="container mx-auto px-4 max-w-3xl">
                    <div className="prose prose-invert max-w-none">
                        {renderContent(blog.content)}
                    </div>
                </article>

                {/* Recommended Blogs */}
                <section className="container mx-auto px-4 max-w-5xl mt-20 md:mt-32">
                    <div className="flex items-center gap-2 mb-8">
                        <h2 className="text-2xl font-display font-bold">RELATED ARTICLES</h2>
                        <ArrowRight className="w-5 h-5 text-primary" />
                    </div>

                    <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x">
                        {blogs
                            .filter(b => b.id !== blog.id)
                            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                            .slice(0, 3)
                            .map((relatedBlog) => (
                                <Link
                                    key={relatedBlog.id}
                                    to={`/blog/${relatedBlog.id}`}
                                    className="group flex flex-col bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 min-w-[85vw] md:min-w-0 snap-center"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={relatedBlog.image}
                                            alt={relatedBlog.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col flex-grow">
                                        <h3 className="font-display font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                            {relatedBlog.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>{relatedBlog.date}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogDetail;
