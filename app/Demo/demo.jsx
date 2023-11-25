import "./miniSeries.css";

const miniSeries = () => {
  const series = [
    {
      image: "/input.svg",
      href: "https://input-message.vercel.app/",
      task: "Message",
    },
    {
      image: "/thought.svg",
      href: "https://quote-theta-eight.vercel.app/",
      task: "Quote",
    },

    {
      image: "/form.svg",
      href: "https://form-iota-sooty.vercel.app/",
      task: "Form",
    },
    {
      image: "/cart.svg",
      href: "https://shopping-cart-three-henna.vercel.app/",
      task: "Shopping App",
    },
    {
      image: "/todo.svg",
      href: "https://to-do-iota-nine.vercel.app/",
      task: "To do App",
    },
    {
      image: "/note_.svg",
      href: "https://luminous-travesseiro-93a1d7.netlify.app/",
      task: "Note App",
    },

    {
      image: "/blog.svg",
      href: "https://ego.hashnode.dev/?source=top_nav_blog_home",
      task: "Blog Post",
    },
    {
      image: "/cart.svg",
      href: "https://shopping-cart-three-henna.vercel.app/",
      task: "Shopping App",
    },
  ];
  return (
    <>
      <div className="p-16 ">
        <div className="flex items-center justify-center">
          <div className="w-40 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-bold py-2 px-4 rounded-lg mb-14">
            Mini Series
          </div>
        </div>
        <div className="flex flex-wrap ">
          {series.map((serie, index) => {
            return (
              <div key={index} className="w-1/4 p-8 mini-container ">
                <img
                  src={serie.image}
                  alt={`project ${index}`}
                  className="img-miniSeries"
                />
                <a href={serie.href} target="_blank">
                  Visit Site
                </a>
                <p className="text-blue-600 mt-2 font-semibold">{serie.task}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default miniSeries;
