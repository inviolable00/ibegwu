import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="relative w-full h-[80vh] md:h-[80vh] overflow-hidden">
        <video
          src="/igala.mov"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white space-y-4 max-w-3xl px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              The Captivating History of the Igala People
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">
              Explore the rich cultural heritage and remarkable journey of the
              Igala, a resilient and vibrant community with a profound legacy.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-20 m-auto">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Origins and Ancestry
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The Igala people trace their origins to the ancient Nok
                civilization, which flourished in present-day Nigeria thousands
                of years ago. Their rich cultural heritage is deeply rooted in
                the traditions and beliefs of their ancestors, who were renowned
                for their skilled craftsmanship, agricultural prowess, and
                sophisticated social structures.
              </p>
            </div>
            <div>
              <img
                src="/origin.webp"
                width={600}
                height={400}
                alt="Igala Origins"
                className="rounded-xl object-cover "
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-muted m-auto mb-6">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 ">
            <div>
              <img
                src="/leaders.png"
                width={600}
                height={400}
                alt="Igala Leaders"
                className="rounded-xl object-cover hidden lg:block"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Legendary Igala Leaders
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The Igala people have been blessed with a long line of visionary
                and influential leaders who have shaped their history. From the
                revered Attah (king) dynasty to the courageous warriors and
                statesmen, these individuals have left an indelible mark on the
                Igala's political, social, and cultural landscape. Their stories
                of bravery, wisdom, and dedication continue to inspire the Igala
                people today.
              </p>
            </div>
            <img
              src="/leaders.png"
              width={600}
              height={400}
              alt="Igala Leaders"
              className="rounded-xl object-cover block lg:hidden"
            />
          </div>
        </div>
      </section>
      <section className="py-20 md:py-20 m-auto">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Preserving Igala Traditions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The Igala people have a deep reverence for their cultural
                traditions, which have been passed down through generations.
                From the vibrant Aje festival to the intricate Egu masquerade
                performances, the Igala have steadfastly maintained their rich
                heritage, ensuring that their unique customs and practices
                continue to thrive. This unwavering commitment to preserving
                their identity is a testament to the resilience and pride of the
                Igala people.
              </p>
            </div>
            <div>
              <img
                src="/tradition.jpg"
                width={600}
                height={400}
                alt="Igala Traditions"
                className="rounded-xl object-cover "
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-muted m-auto">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Igala Historical Timeline
          </h2>
          <div className="grid gap-8">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly m-auto gap-8">
              <Card className="mt-6 w-full sm:w-80">
                <CardBody>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    className="mb-4 h-12 w-12 text-gray-900"
                  >
                    <path d="M240,152H199.55a73.54,73.54,0,0,0,.45-8,72,72,0,0,0-144,0,73.54,73.54,0,0,0,.45,8H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,144a56,56,0,1,1,111.41,8H72.59A56.13,56.13,0,0,1,72,144Zm144,56a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H208A8,8,0,0,1,216,200ZM72.84,43.58a8,8,0,0,1,14.32-7.16l8,16a8,8,0,0,1-14.32,7.16Zm-56,48.84a8,8,0,0,1,10.74-3.57l16,8a8,8,0,0,1-7.16,14.31l-16-8A8,8,0,0,1,16.84,92.42Zm192,15.16a8,8,0,0,1,3.58-10.73l16-8a8,8,0,1,1,7.16,14.31l-16,8a8,8,0,0,1-10.74-3.58Zm-48-55.16,8-16a8,8,0,0,1,14.32,7.16l-8,16a8,8,0,1,1-14.32-7.16Z"></path>
                  </svg>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Emergence of the Nok Civilization
                  </Typography>
                  <Typography>
                    The Igala people trace their origins to the ancient Nok
                    civilization, which flourished in present-day Nigeria
                    between the 5th century BC and the 2nd century AD.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <a href="#" className="inline-block">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center gap-2"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card className="mt-6 w-full sm:w-80">
                <CardBody>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="mb-4 h-12 w-12 text-gray-900"
                    viewBox="0 0 256 256"
                  >
                    <path d="M240,192h-8V130.57l1.49,2.08a8,8,0,1,0,13-9.3l-40-56a8,8,0,0,0-2-1.94L137,18.77l-.1-.07a16,16,0,0,0-17.76,0l-.1.07L51.45,65.42a8,8,0,0,0-2,1.94l-40,56a8,8,0,1,0,13,9.3L24,130.57V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,108.17,61.7,77.79,128,32l66.3,45.78L216,108.17V192H192V120a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v72H40Zm88,42L97,128H159Zm48-14.62v48.91L141.76,160ZM114.24,160,80,184.46V135.55ZM128,169.83,159,192H97ZM104,88a8,8,0,0,1,8-8h32a8,8,0,1,1,0,16H112A8,8,0,0,1,104,88Z"></path>
                  </svg>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Establishment of the Igala Kingdom
                  </Typography>
                  <Typography>
                    The Igala Kingdom was formally established in the 15th
                    century, with the Attah (king) as the supreme ruler and
                    spiritual leader of the Igala people.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <a href="#" className="inline-block">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center gap-2"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card className="mt-6 w-full sm:w-80">
                <CardBody>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="mb-4 h-12 w-12 text-gray-900"
                    viewBox="0 0 256 256"
                  >
                    <path d="M168,16H120A56.06,56.06,0,0,0,64,72H56a32,32,0,0,0-32,32v29.19a16.09,16.09,0,0,0,3.51,10,8,8,0,0,0,.62.69L64,179.34V216a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V177.12l15.38-53.85a15.89,15.89,0,0,0,.62-4.39V72A56.06,56.06,0,0,0,168,16Zm40,102.88L192.31,173.8A7.85,7.85,0,0,0,192,176v40H80V176a8,8,0,0,0-2.38-5.69L40,133.12V104A16,16,0,0,1,56,88h8v16a8,8,0,0,0,16,0V72a40,40,0,0,1,40-40h48a40,40,0,0,1,40,40Zm-36.42,48.28L153.89,176l17.69,8.84a8,8,0,0,1-7.16,14.32L136,184.94l-28.42,14.22a8,8,0,1,1-7.16-14.32L118.11,176l-17.69-8.84a8,8,0,1,1,7.16-14.32L136,167.06l28.42-14.22a8,8,0,1,1,7.16,14.32Z"></path>
                  </svg>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Resistance Against Colonial Rule
                  </Typography>
                  <Typography>
                    The Igala people fiercely resisted the encroachment of
                    colonial powers, led by the courageous Attah Ameh Oboni, who
                    fought to preserve the independence and autonomy of the
                    Igala Kingdom.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <a href="#" className="inline-block">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center gap-2"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
            <div className="grid w-full sm:w-[90%] m-auto gap-6">
              <div className="bg-background rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">
                  Cultural Revitalization and Preservation
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  In the modern era, the Igala people have made concerted
                  efforts to revitalize and preserve their rich cultural
                  heritage, ensuring that their traditions, arts, and practices
                  continue to thrive for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-16 md:py-32 m-auto">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Explore the Igala Homeland
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Discover the captivating landscapes and cultural landmarks that
                define the Igala homeland. From the majestic Kogi River to the
                vibrant Idah, the traditional capital, this interactive map will
                guide you through the Igala's ancestral lands and immerse you in
                their rich history and traditions.
              </p>
            </div>
            <div>
              <img
                src="/map.jpeg"
                width={600}
                height={400}
                alt="Igala Map"
                className="rounded-xl object-cover m-auto"
              />{" "}
              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-green-800 text-white px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Explore the Map
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20 bg-muted m-auto">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <img
                src="/gallery.jpg"
                width={600}
                height={400}
                alt="Igala Gallery"
                className="rounded-xl object-cover hidden lg:block"
              />
            </div>
            <div className="">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Igala Cultural Gallery
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Immerse yourself in the vibrant visual tapestry of the Igala
                people. Explore our curated gallery showcasing the captivating
                art, traditional costumes, and cultural celebrations that have
                defined the Igala's rich heritage throughout the centuries.
              </p>
            </div>
            <img
              src="/gallery.jpg"
              width={600}
              height={400}
              alt="Igala Gallery"
              className="rounded-xl object-cover block lg:hidden"
            />{" "}
            <div className="">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


