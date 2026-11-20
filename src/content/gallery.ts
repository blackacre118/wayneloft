import type { StaticImageData } from "next/image";
import exteriorDusk from "../../public/images/exterior-dusk.jpg";
import exteriorNight from "../../public/images/exterior-night.jpg";
import hotelBath from "../../public/images/hotel-bath.jpg";
import hotelBed from "../../public/images/hotel-bed.jpg";
import hotelLiving from "../../public/images/hotel-living.jpg";
import hotelSuiteBath from "../../public/images/hotel-suite-bath.jpg";
import kitchen from "../../public/images/kitchen.jpg";
import lazarusPool from "../../public/images/lazarus-pool.jpg";
import lobbyLounge from "../../public/images/lobby-lounge.jpg";
import lobby from "../../public/images/lobby.jpg";
import mailRoom from "../../public/images/mail-room.jpg";
import manorBar from "../../public/images/manor-bar.jpg";
import manorVenue from "../../public/images/manor-venue.jpg";
import pennyworthLounge from "../../public/images/pennyworth-lounge.jpg";
import penthouseGreatRoom from "../../public/images/penthouse-great-room.jpg";
import penthouseView from "../../public/images/penthouse-view.jpg";
import reception from "../../public/images/reception.jpg";
import residenceBalcony from "../../public/images/residence-balcony.jpg";
import residenceKitchen from "../../public/images/residence-kitchen.jpg";
import residenceLiving from "../../public/images/residence-living.jpg";
import rooftopAerial from "../../public/images/rooftop-aerial.jpg";
import signalRooftop from "../../public/images/signal-rooftop.jpg";
import towerNight from "../../public/images/tower-night.jpg";
import wholeDay from "../../public/images/whole-day.jpg";
import wholeNight from "../../public/images/whole-night.jpg";

export type GalleryIcon = "building" | "key" | "sofa" | "crown" | "waves";

export type GalleryPhoto = { src: StaticImageData; caption: string };

export type GalleryCategory = {
  id: string;
  label: string;
  icon: GalleryIcon;
  photos: GalleryPhoto[];
};

export const galleryMeta = {
  title: "Gallery",
  description: "Renderings of WAYNE at 1200 Sixth Street, Corktown, Detroit: the towers, hotel, residences, penthouses and amenities.",
};

/** Every rendering on the site, one tab per category. Captions stay to a single short line. */
export const gallery: GalleryCategory[] = [
  {
    id: "exterior",
    label: "Exterior",
    icon: "building",
    photos: [
      { src: wholeNight, caption: "WAYNE at night — both towers and the glass pavilion on Sixth Street." },
      { src: wholeDay, caption: "The property in daylight, the river and downtown beyond." },
      { src: exteriorNight, caption: "The limestone South Tower, lit from below." },
      { src: exteriorDusk, caption: "Sixth Street at dusk." },
      { src: towerNight, caption: "The North Tower against the night sky." },
    ],
  },
  {
    id: "hotel",
    label: "Hotel",
    icon: "key",
    photos: [
      { src: lobbyLounge, caption: "The lobby lounge — black marble, brass, glass-globe light." },
      { src: reception, caption: "Reception: a single block of black marble with a lit edge." },
      { src: lobby, caption: "Evening arrivals in the lobby." },
      { src: hotelLiving, caption: "A suite living room, the city framed floor to ceiling." },
      { src: hotelBed, caption: "Guest room detail." },
      { src: hotelBath, caption: "Black marble bath." },
      { src: hotelSuiteBath, caption: "Suite bath with a city view." },
    ],
  },
  {
    id: "residences",
    label: "Residences",
    icon: "sofa",
    photos: [
      { src: residenceLiving, caption: "A residence living room in the evening." },
      { src: residenceKitchen, caption: "Kitchen and dining, stone and warm light." },
      { src: residenceBalcony, caption: "A covered terrace looking down the river." },
      { src: mailRoom, caption: "The residents’ mail room." },
    ],
  },
  {
    id: "penthouses",
    label: "Penthouses",
    icon: "crown",
    photos: [
      { src: penthouseGreatRoom, caption: "A penthouse great room, panoramic glass." },
      { src: penthouseView, caption: "The view down the Detroit River." },
    ],
  },
  {
    id: "amenities",
    label: "Amenities",
    icon: "waves",
    photos: [
      { src: lazarusPool, caption: "Lazarus — the pool beneath the glass pavilion." },
      { src: signalRooftop, caption: "The Signal, the South Tower rooftop at sunset." },
      { src: rooftopAerial, caption: "The Signal from above." },
      { src: manorVenue, caption: "The Manor, Level 23, set for an evening reception." },
      { src: manorBar, caption: "The bar at The Manor." },
      { src: pennyworthLounge, caption: "Pennyworth, the lobby bar." },
      { src: kitchen, caption: "One kitchen, serving the whole building." },
    ],
  },
];
