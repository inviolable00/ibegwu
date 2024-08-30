import { Link } from "react-router-dom";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

export default function LearnIgala() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="py-8 sm:py-12 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Learn the Igala Language
          </h1>
          <p className="max-w-[700px] mx-auto text-sm sm:text-base md:text-xl opacity-80">
            Immerse yourself in the rich culture and language of the Igala
            people. Our interactive learning platform makes it easy to master
            vocabulary, grammar, and conversational skills.
          </p>
        </div>
      </header>
      <div className="flex justify-center w-full ">
        <div className="card w-[300px] sm:w-[350px] h-[200px] relative overflow-hidden group">
          <div className="absolute inset-0  transition-all duration-700 group-hover:-translate-y-full">
            <div className="flex items-center justify-center h-full">
              <button className="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
                ADAGE
              </button>
            </div>
            <div className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
            <div className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
            <div className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
            <div className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
          </div>
          <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:translate-y-0 translate-y-full">
            <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif mb-2">
              M'egba chaka!
            </p>
            <p className="text-center text-[10px] sm:text-[12px] text-gray-700 mb-2">
              Akamagbo chukwumoto Alimaka chukwuobijo
            </p>
            <p className="font-serif text-[10px] sm:text-[12px] text-gray-700 mb-4">
              Meaning: a child that fails to take correction severally will
              perish. An elder that refuses to correct will perish.
            </p>
          </div>
        </div>
      </div>
      <main className="flex-1 py-8 sm:py-12 ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Vocabulary",
                description:
                  "Build a strong foundation by mastering essential Igala vocabulary.",
              },
              {
                title: "Grammar",
                description:
                  "Understand the structure and rules of the Igala language.",
              },
              {
                title: "Cultural Lessons",
                description:
                  "Explore the rich cultural traditions and history of the Igala people.",
              },
            ].map((item, index) => (
              <Card key={index} className="h-full">
                <CardBody className="h-full flex flex-col justify-between">
                  <div>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {item.title}
                    </Typography>
                    <Typography color="gray" className="font-normal mb-4">
                      {item.description}
                    </Typography>
                  </div>
                  <Button
                    as={Link}
                    to="#"
                    color="cyan"
                    size="sm"
                    ripple="light"
                  >
                    Start Learning
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <footer className=" py-6 w-full shrink-0">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Typography
            variant="small"
            color="blue-gray"
            className="text-center sm:text-left"
          >
            &copy; 2024 Igala Language Learning. All rights reserved.
          </Typography>
          <nav className="flex gap-4 sm:gap-6">
            {["About", "Contact", "Privacy Policy"].map((item, index) => (
              <Link
                key={index}
                to="#"
                className="text-xs hover:underline underline-offset-4 text-gray-600"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
