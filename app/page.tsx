"use client";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import CharacterCarousel from "../components/character-carousel";
import BannerSlider from "../components/banner-slider";
import FeaturedShows from "../components/featured-shows";
import NewEpisodes from "../components/new-episodes";
import DownloadApps from "../components/download-apps";
import NewsGallery from "../components/news-gallery";

export default function Page() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-6 space-y-12 flex-grow">
        <CharacterCarousel />
        <BannerSlider />
        <NewsGallery />
        <FeaturedShows />
        <NewEpisodes />
        <DownloadApps />
      </main>
      <Footer />
    </div>
  );
}
