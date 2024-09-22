import { CarCard, CustomFilter, Hero } from "@components";
import SearchManufacturer from "@components/SearchManufacturer";
import { allData, fuels, yearsOfProduction } from "@constants";

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-3">
          <div className="w-full py-3">
            <SearchManufacturer />
          </div>
          <div className="flex w-full gap-3 items-center">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {allData ? (
          <section>
            <div className="home__cars-wrapper">
              {allData?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
