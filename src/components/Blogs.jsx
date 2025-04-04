import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion'; // Changed to fadeIn

const BlogCard = ({ index, title, date, excerpt, comments, link }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
    className="w-full bg-jet p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="mt-2">
      <h3 className="text-timberWolf font-bold text-[22px] font-mova uppercase">
        {title}
      </h3>
      <div className="flex items-center justify-between mt-2">
        <span className="text-taupe text-sm font-poppins">{date}</span>
        <span className="text-battleGray text-sm font-poppins">
          {comments} comments
        </span>
      </div>
    </div>

    <p className="mt-4 text-taupe text-[16px] font-poppins leading-[24px] line-clamp-3">
      {excerpt}
    </p>

    <div className="mt-6 flex items-center gap-2 border-t border-taupe/20 pt-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-french font-poppins font-medium flex items-center
        hover:text-battleGray transition-colors duration-200 group">
        Read Full Article
        <svg
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </motion.div>
);

const Blogs = () => {
  const blogs = [
    {
      title: "Bitcoin - An Epic Currency Tale",
      date: "February 03, 2024",
      excerpt: "Understanding Bitcoin mining and its complex ecosystem. Explore the decentralized financial system without traditional banking infrastructure...",
      comments: 0,
      link: "https://prashantjoshi2k.blogspot.com/2024/02/bitcoin-epic-currency-tale.html"
    },
    {
      title: "Tech Pursuit (Evading Hardware)",
      date: "March 04, 2023",
      excerpt: "Unlocking hidden potential of mobile devices and ARM architecture. Exploring mobile computing power versus traditional PC limitations...",
      comments: 0,
      link: "https://prashantjoshi2k.blogspot.com/2023/03/tech-pursuit-evading-hardware.html"
    },
    {
      title: "Optimize Your PC Like a Pro",
      date: "October 19, 2021",
      excerpt: "Manual optimization techniques for peak system performance. Reduce CPU/RAM usage without third-party tools...",
      comments: 4,
      link: "https://prashantjoshi2k.blogspot.com/2021/10/a-better-and-simplest-way-to-optimise.html"
    },
    {
      title: "Processor Fundamentals",
      date: "November 03, 2020",
      excerpt: "Complete guide to understanding processor architectures and choosing between Intel/AMD chips...",
      comments: 8,
      link: "https://prashantjoshi2k.blogspot.com/2020/11/all-important-things-you-need-to-know.html"
    },
    {
      title: "Understanding Computer Viruses",
      date: "October 31, 2020",
      excerpt: "Demystifying malware, worms, and trojans. Practical examples of virus behavior and protection strategies...",
      comments: 6,
      link: "https://prashantjoshi2k.blogspot.com/2020/10/virus-in-simplest-terms.html"
    },
    {
      title: "Android Security Deep Dive",
      date: "July 19, 2020",
      excerpt: "Mobile security comparison with desktop systems. Essential protection measures for Android devices...",
      comments: 6,
      link: "https://prashantjoshi2k.blogspot.com/2020/07/a-word-about-android-security-and-its.html"
    },
    {
      title: "Hacking: A Personal Experience",
      date: "July 17, 2020",
      excerpt: "Real-world account of system intrusion and security recovery. Learn from actual hacking incident...",
      comments: 12,
      link: "https://prashantjoshi2k.blogspot.com/2020/07/recently-i-was-hacked-and-my-laptop.html"
    }
  ];

  return (
    <div className="-mt-20" id="blogs">
      <div className={`${styles.paddingX} max-w-7xl mx-auto py-16`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16">
          <p className={styles.sectionSubText}>Technical Insights</p>
          <h2 className={styles.sectionHeadTextLight}>Blog Archive.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard 
              key={index} 
              index={index} 
              {...blog} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Blogs, 'blogs');