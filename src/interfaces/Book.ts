import { ImageLinks } from "./ImagesLinks";
import { IndustryIdentifier } from "./IndustryIdentifier";
import { PanelizationSummary } from "./PanelizationSummary";
import { ReadingModes } from "./ReadingModes";

export interface Book {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  id: string;
  shelf: string;
}