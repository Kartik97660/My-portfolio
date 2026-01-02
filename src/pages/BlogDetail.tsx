import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogs } from '@/data/blogs';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
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
                        <Link to="/blogs">
                            <Button>
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Blogs
                            </Button>
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

            <main className="pt-24 pb-20">
                {/* Hero / Header Image */}
                <div className="w-full h-[40vh] md:h-[50vh] relative mb-12">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 container mx-auto">
                        <Link to="/blogs" className="inline-block mb-4">
                            <Button variant="outline" size="sm" className="bg-background/20 backdrop-blur-md border-white/20 hover:bg-background/40">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Blogs
                            </Button>
                        </Link>

                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm text-white/80 mb-6 font-mono">
                            <span>Home</span>
                            <span className="opacity-40">/</span>
                            <span>Blogs</span>
                            <span className="opacity-40">/</span>
                            <span className="text-white font-medium truncate max-w-[200px] md:max-w-md">
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

                        <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 max-w-4xl leading-tight">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
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
            </main>

            <Footer />
        </div>
    );
};

export default BlogDetail;
