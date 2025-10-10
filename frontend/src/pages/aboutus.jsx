import React, { use } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import AboutImage from "../assets/about-banner.jpg";
export default function About() {
  const navigate = useNavigate();
  return (
    <main className="px-6 md:px-20 py-10">
      {/* Mission Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            At <span className="font-semibold text-primary">BookReviewHub</span>, our mission is to connect book lovers
            from around the world through a shared passion for literature. We provide a platform for readers to share
            reviews, engage in discussions, and explore the literary world together.
          </p>
        </div>
        <div className="md:w-1/3">
          {/* Using placeholder image per project guidelines */}
          <img
            src={assets.about_banner_books}
            alt="Books stacked on a table"
            className="rounded-2xl shadow-lg border border-border h-40"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-primary">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Dilkhush Napit",
              role: "Passionate ECE student exploring the intersection of technology and storytelling. I believe every idea — like every book — has the power to inspire change.",
            },

          ].map((member, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
            >
              <img
                src={assets[`team${i + 1}`]}
                alt={`${member.name} portrait`}
                className="w-24 h-24 rounded-full mb-4 object-cover border border-border"
              />
              <h3 className="text-lg font-semibold text-foreground mb-2">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Purpose Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">Our Purpose</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          BookReviewHub is designed to be a haven for book lovers, offering a platform where they can share insights,
          discover new reads, and engage in meaningful discussions. Our goal is to foster a community that thrives on
          literary exploration and shared experiences.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-foreground mt-2">Community</h3>
            <p className="text-muted-foreground mt-2">Engage in vibrant discussions with fellow book enthusiasts.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-foreground mt-2">Personalized Recommendations</h3>
            <p className="text-muted-foreground mt-2">Receive book suggestions tailored to your interests.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-foreground mt-2">Extensive Library</h3>
            <p className="text-muted-foreground mt-2">Explore a vast collection of book reviews and ratings.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            `"BookReviewHub has transformed the way I discover new books. The community is so welcoming and insightful." – Jessica R.`,
            `"A must-visit for any book lover. The personalized recommendations are spot on!" – Michael T.`,
            `"I love being part of a community that shares my passion for reading. Highly recommend!" – Emily R.`,
          ].map((quote, i) => (
            <div key={i} className="bg-accent text-accent-foreground p-6 rounded-2xl shadow-sm border border-border">
              <p className="text-pretty">{quote}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">Join Us</h2>
        <p className="text-muted-foreground mb-6">
          Become a part of our vibrant community and start sharing your love for books today!
        </p>
        <button onClick={()=>navigate('/login')} className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
          Sign Up Now
        </button>
      </section>
    </main>
  )
}
