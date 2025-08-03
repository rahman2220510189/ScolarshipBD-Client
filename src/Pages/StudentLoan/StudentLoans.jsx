import img from '../../Image/merit2.jpg';

const StudentLoans = () => {
  const loanCart = [
    {
      title: "Considering School",
      description: "Leading private commercial bank in Bangladesh.",
      url: "https://www.bracbank.com/",
    },
    {
      title: "In School",
      description: "Innovative bank known for easy transactions.",
      url: "https://www.dutchbanglabank.com/",
    },
    {
      title: "Parent",
      description: "One of the fastest growing banks in Bangladesh.",
      url: "https://www.ebl.com.bd/",
    },
  ];

  return (
    <div className="h-screen bg-cover bg-center relative text-white"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Center text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4">
        <p className="text-xl md:text-2xl max-w-2xl">
          Scholarship BD is committed to supporting students with financial aid and educational opportunities. Discover the best resources for student loans and scholarships.
        </p>
      </div>

      {/* Cards at the bottom */}
      <div className="absolute bottom-6 w-full z-10 px-6">
        <div className="flex flex-wrap justify-center gap-6">
          {loanCart.map((bank, index) => (
            <a
              key={index}
              href={bank.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-5 rounded-lg shadow-lg max-w-xs w-full hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-bold text-blue-700 mb-2">{bank.title}</h2>
              <p className="text-gray-700">{bank.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentLoans;
